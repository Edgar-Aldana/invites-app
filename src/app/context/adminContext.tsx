"use client"
import React, { createContext, useContext, useEffect, useState } from 'react'

export const AdminContext = createContext<{
  isAdmin: boolean | null
  setIsAdmin: (isAdmin: boolean) => void
} | null>(null)

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null)

  useEffect(() => {
    const localAdmin = localStorage.getItem('isAdmin')
    if (localAdmin) {
      setIsAdmin(JSON.parse(localAdmin))
    }
  }, [])

  useEffect(() => {
    if (isAdmin !== null) {
      localStorage.setItem('isAdmin', JSON.stringify(isAdmin))
    }
  }, [isAdmin])

  return (
    <AdminContext.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </AdminContext.Provider>
  )
}

export const useAdmin = () => {
  const context = useContext(AdminContext)
  if (context === null) {
    throw new Error('useAdmin must be used within an AdminProvider')
  }
  return context
}
