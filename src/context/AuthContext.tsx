"use client"
import { error } from "console";
import React, { createContext, ReactNode, SetStateAction, useContext, useState } from "react";

type AuthContextType = {
  userIsLogIn: boolean;
  setUserIsLogIn: React.Dispatch<SetStateAction<boolean>>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userIsLogIn, setUserIsLogIn] = useState(true)

  return (
    <AuthContext.Provider value={{ userIsLogIn, setUserIsLogIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Authcontext must be use in AuthProvider")
  }
  return context
}