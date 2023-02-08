import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useState } from "react";
import { AuthService } from "@/service/AuthService";

type authContextType = {
  user: any;
  error: any;
  // login: () => void;
  loginWithGoogle: () => void;
  logout: () => void;
  setUser: any;
  createUserWithEmailAndPassword: (email: string, password: string) => void;
  signInUserWithEmailAndPassword: (email: string, password: string) => void;
  resetPassword: (email: string) => void;
  deleteAccount: () => void;
  updatePassword: (confirmPassword: string, password: string) => void;

};

const authContextDefaultValues: authContextType = {
  user: null,
  setUser: null,
  error: null,
  // login: () => { },
  loginWithGoogle: () => { },
  logout: () => { },
  createUserWithEmailAndPassword: () => { },
  signInUserWithEmailAndPassword: () => { },
  resetPassword: () => { },
  deleteAccount: () => { },
  updatePassword: () => { },
};


const AuthContext = createContext<authContextType>(authContextDefaultValues);

export default function useAuth() {
  return useContext(AuthContext);
}

type Props = {
  children: ReactNode;
};
export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<any>();

  const router = useRouter();
  const pathname = router.pathname;

  const loginWithGoogle = async () => {
    const { error, user } = await AuthService.loginWithGoogle();
    if (error) {
      setError({ [pathname]: error });
    }
    setUser(user ?? null);
  };

  const logout = async () => {
    await AuthService.logout();
    setUser(null);
  };

  const createUserWithEmailAndPassword = async (email: string, password: string) => {
    if (email && password) {
      const { error, user } = await AuthService.createUserWithEmailAndPassword(
        email,
        password
      );
      if (error) {
        setError({ [pathname]: error });
        return;
      }
      setUser(user ?? null);
      router.push(`/verify?email=${email}`);
    } else {
      setError({ [pathname]: "Email and password can not be empty" });
    }
  };

  const signInUserWithEmailAndPassword = async (email: string, password: string) => {
    if (email && password) {
      const { error, user } = await AuthService.signInUserWithEmailAndPassword(
        email,
        password
      );
      if (error) {
        setError({ [pathname]: error });
        return;
      }
      setUser(user ?? null);
      router.push("/");
    } else {
      setError({ [pathname]: "Email and password can not be empty" });
    }
  };
  const resetPassword = async (email: string) => {
    if (email) {
      const error = await AuthService.resetPassword(email);
      if (error) {
        setError({ [pathname]: error });
        return;
      }
      router.push(`/verify?email=${email}`);
    } else {
      setError({ [pathname]: "Email can not be empty" });
    }
  };

  const deleteAccount = async () => {
    const error = await AuthService.deleteAccount();
    setError({ [pathname]: error });
  };

  const updatePassword = async (confirmPassword: string, password: string) => {
    if (confirmPassword === password) {
      const error = await AuthService.updatePassword(password);
      setError({ [pathname]: error });
    } else {
      setError({ [pathname]: "password doesn't match!" });
    }
  };

  const value = {
    user,
    error,
    loginWithGoogle,
    logout,
    setUser,
    createUserWithEmailAndPassword,
    signInUserWithEmailAndPassword,
    resetPassword,
    deleteAccount,
    updatePassword,
  };

  // return <AuthContext.Provider value={value} {...props} />;
  return (
    <>
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    </>
  );
}