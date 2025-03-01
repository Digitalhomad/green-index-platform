'use client'

import { useAuth } from '@/contexts/AuthContext'

export default function Home() {
  const { user } = useAuth()

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Welcome to Green Index
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Your platform for sustainability benchmarking and verification
      </p>
      
      {user ? (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Welcome back, {user.email}</h2>
          <p className="text-gray-600">
            Start exploring sustainability metrics and benchmarks.
          </p>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
          <p className="text-gray-600">
            Sign in to access sustainability metrics and benchmarks.
          </p>
        </div>
      )}
    </div>
  )
}
