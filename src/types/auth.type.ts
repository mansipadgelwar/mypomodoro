export type AuthState = {
    isAuthorized: boolean;
    authUser: string;
  };
  
export type AuthAction =
| {
    type: "INIT_AUTH";
    payload: AuthState;
  }
| {
    type: "RESET_AUTH";
    payload: AuthState;
  };

export type AuthDispatch = (authAction: AuthAction) => void;

export type AuthContextType = {
    authState: AuthState, 
    authDispatch: AuthDispatch, 
    loginUser: (email: string, password: string) => Promise<void>,
    signUpUser: (email: string, password: string, confirmPassword: string) => Promise<void>,   
}

export type LoginFormDetails = {
  email: string;
  password: string;
};

export type SignupForm = {
  email: string ;
  password: string ;
  confirmPassword: string ;
};
