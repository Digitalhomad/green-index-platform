'use client'

import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'

export default function Navbar() {
  const { user, signInWithGoogle, signOut } = useAuth()

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-green-600">
              Green Index
            </Link>
            
            <div className="hidden md:ml-6 md:flex space-x-4">
              <Link href="/companies" className="text-gray-700 hover:text-green-600 px-3 py-2">
                Companies
              </Link>
              <Link href="/benchmarks" className="text-gray-700 hover:text-green-600 px-3 py-2">
                Benchmarks
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700">{user.email}</span>
                <button
                  onClick={() => signOut()}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={() => signInWithGoogle()}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
