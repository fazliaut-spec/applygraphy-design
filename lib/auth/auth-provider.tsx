"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

interface User {
  id: string
  email: string
  name: string
  avatar?: string
  provider: "google" | "linkedin" | "manual"
  profile?: UserProfile
}

interface UserProfile {
  address: string
  phone: string
  educationLevel: string
  universityName: string
  gpa: string
  certifications: string[]
  documents: Document[]
  consultationHistory: Consultation[]
  purchasedServices: Service[]
}

interface Document {
  id: string
  name: string
  type: string
  url: string
  uploadDate: Date
}

interface Consultation {
  id: string
  date: Date
  time: string
  service: string
  status: "completed" | "upcoming" | "cancelled"
  notes?: string
}

interface Service {
  id: string
  name: string
  price: number
  currency: string
  purchaseDate: Date
  status: "active" | "expired"
}

interface AuthContextType {
  user: User | null
  login: (provider: "google" | "linkedin" | "manual", userData: any) => void
  logout: () => void
  updateProfile: (profile: Partial<UserProfile>) => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem("user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setIsLoading(false)
  }, [])

  const login = (provider: "google" | "linkedin" | "manual", userData: any) => {
    const newUser: User = {
      id: userData.id || Date.now().toString(),
      email: userData.email,
      name: userData.name,
      avatar: userData.avatar,
      provider,
      profile: {
        address: "",
        phone: "",
        educationLevel: "",
        universityName: "",
        gpa: "",
        certifications: [],
        documents: [],
        consultationHistory: [],
        purchasedServices: [],
      },
    }
    setUser(newUser)
    localStorage.setItem("user", JSON.stringify(newUser))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  const updateProfile = (profileUpdate: Partial<UserProfile>) => {
    if (user) {
      const updatedUser = {
        ...user,
        profile: { ...user.profile, ...profileUpdate },
      }
      setUser(updatedUser)
      localStorage.setItem("user", JSON.stringify(updatedUser))
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, updateProfile, isLoading }}>{children}</AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
