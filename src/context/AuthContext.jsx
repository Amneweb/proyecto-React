import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../helpers/firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [usuario, setUsuario] = useState(null);
  const desloguearse = () => {
    signOut(auth)
      .then(() => {
        setIsLoggedIn(false);
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUsuario(user);

        console.log("uid en context", usuario);
      } else {
        console.log("user is logged out");
      }
    });
  }, []);
  return (
    <AuthContext.Provider value={{ isLoggedIn, usuario, desloguearse }}>
      {children}
    </AuthContext.Provider>
  );
};
