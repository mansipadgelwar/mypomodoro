import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { authReducer, initialAuthState } from "../reducer/authReducer";
import { useToast } from "../custom-hooks/useToast";
import { AuthContextType, AuthState } from "../types/auth.type";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export type AuthProp = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthProvider = ({ children }: AuthProp) => {
  const setAuthState = (): AuthState => {
    const getTokenFromLocalStorage = localStorage.getItem("token");
    const getUserFromLocalStorage = localStorage.getItem("user");
    if (getTokenFromLocalStorage) {
      return {
        ...initialAuthState,
        isAuthorized: true,
        authUser: JSON.parse(getUserFromLocalStorage || "{}"),
      };
    }
    return initialAuthState;
  };
  const { showToast } = useToast();
  const [authState, authDispatch] = useReducer(authReducer, setAuthState());

  const loginUser = async (email: any, password: any): Promise<void> => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      authDispatch({
        type: "INIT_AUTH",
        payload: {
          authUser: user.uid,
          isAuthorized: true,
        },
      });
      localStorage.setItem("token", user.uid);
      localStorage.setItem("user", JSON.stringify(user.displayName));
      showToast("Login Successful", "success");
    } catch (error) {
      showToast(`Error while login`, "error");
      console.error("Error in login functionality", error);
    }
  };

  const signUpUser = async (
    email: string,
    password: string,
    confirmPassword: string
  ): Promise<void> => {
    if (confirmPassword !== password) {
      showToast(`Passwords do not match`, "error");
    }
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      authDispatch({
        type: "INIT_AUTH",
        payload: {
          authUser: user.uid,
          isAuthorized: true,
        },
      });
      showToast("Signup Successful", "success");
      localStorage.setItem("token", user.uid);
      localStorage.setItem("user", JSON.stringify(user.displayName));
    } catch (error) {
      showToast(`Error while signing up user`, "error");
      console.error("Error in signup functionality", error);
    }
  };

  useEffect(() => {
    const getTokenFromLocalStorage = localStorage.getItem("token");
    if (authState.isAuthorized && getTokenFromLocalStorage) {
      localStorage.setItem("listOfTasks", JSON.stringify([]));
    }
  }, [authState.isAuthorized]);

  return (
    <AuthContext.Provider
      value={{ authState, authDispatch, signUpUser, loginUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
