import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from "firebase/auth";
import { auth, firebaseReady, googleProvider } from "../firebase/firebase.config.js";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!firebaseReady || !auth) {
      setLoading(false);
      return undefined;
    }
    return onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  const requireFirebase = () => {
    if (!firebaseReady || !auth) {
      throw new Error("Firebase is not configured. Add your Firebase keys to the .env file.");
    }
  };

  const registerUser = async ({ name, email, photoURL, password }) => {
    requireFirebase();
    const result = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(result.user, { displayName: name, photoURL });
    setUser({ ...result.user, displayName: name, photoURL });
    return result;
  };

  const loginUser = (email, password) => {
    requireFirebase();
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    requireFirebase();
    return signInWithPopup(auth, googleProvider);
  };

  const resetPassword = (email) => {
    requireFirebase();
    return sendPasswordResetEmail(auth, email);
  };

  const logoutUser = () => {
    requireFirebase();
    return signOut(auth);
  };

  const updateUserProfile = async ({ displayName, photoURL }) => {
    requireFirebase();
    await updateProfile(auth.currentUser, { displayName, photoURL });
    setUser({ ...auth.currentUser, displayName, photoURL });
  };

  const value = useMemo(
    () => ({
      user,
      loading,
      toast,
      firebaseReady,
      setToast,
      registerUser,
      loginUser,
      googleLogin,
      resetPassword,
      logoutUser,
      updateUserProfile
    }),
    [user, loading, toast]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
