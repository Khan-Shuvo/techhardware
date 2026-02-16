"use client"
import { user } from "@/types/Type";
import React, { createContext, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";

type AuthContextType = {
  userIsLogIn: boolean;
  setUserIsLogIn: React.Dispatch<SetStateAction<boolean>>
  users: user[];
  setUsers: React.Dispatch<SetStateAction<user[]>>;
  currentUser: user | null;
  setCurrentUser: React.Dispatch<SetStateAction<user | null>>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userIsLogIn, setUserIsLogIn] = useState(false)
  const [users, setUsers] = useState<user[]>([])
  const [currentUser, setCurrentUser] = useState<user | null>(null)

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('/users.json')
      const users = await res.json()
      setUsers(users)
    }
    fetchUsers()

    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser)
      setCurrentUser(parsedUser)
      setUserIsLogIn(true)
    }
  }, [])

  useEffect(() => {
    if(currentUser){
      localStorage.setItem('user', JSON.stringify(currentUser))
      setUserIsLogIn(true)
    }else{
      localStorage.removeItem('user')
      setUserIsLogIn(false)
    }
  },[currentUser])

  return (
    <AuthContext.Provider value={{ userIsLogIn, setUserIsLogIn, users, setUsers, currentUser, setCurrentUser }}>
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