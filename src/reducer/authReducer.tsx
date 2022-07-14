import { AuthState, AuthAction } from "../types/auth.type";

const initialAuthState: AuthState = {
  authUser: "",
  isAuthorized: false,
};

const authReducer = (authState: AuthState, authAction: AuthAction) => {
  switch (authAction.type) {
    case "INIT_AUTH":
      return {
        ...authState,
        authUser: authAction.payload.authUser,
        isAuthorized: true,
      };
    case "RESET_AUTH":
      return initialAuthState;
    default:
      return authState;
  }
};

export { authReducer, initialAuthState };
