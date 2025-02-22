import React from 'react'
import { ShoppingBagIcon, ShoppingCart } from 'lucide-react'
import { useResolvedPath, Link } from 'react-router-dom'
import ThemeSelector from './ThemeSelector'

const Navbar = () => {
  const { pathname } = useResolvedPath()
  const isHomePage = pathname === "/"
  return (
    <div className='bg-base-300 backdrop-blur-lg border-b border-base-content/10 sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='navbar justify-between'>
          <Link to="/">
            <div className='text-2xl flex items-center gap-2 font-sans px-4'>
              ZenCart <span><ShoppingCart /></span>
            </div>
          </Link>

          <div className='flex space-x-6'>
            <div>
              <ThemeSelector/>
            </div>
            {isHomePage && (
              <div className='indicator'>
                <div className='p-2 rounded-full hover:bg-base-200 transition-colors duration-200'>
                  <ShoppingBagIcon size={20} />
                  <span className='badge badge-xs badge-primary indicator-item'>8</span>
                </div>
              </div>
            )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar