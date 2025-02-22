import { PaletteIcon } from 'lucide-react'
import React from 'react'
import {THEMES} from "../constants"

const ThemeSelector = () => {
  return (
    <div className=' dropdown dropdown-end'>
        <button tabIndex={0} className='btn btn-ghost btn-circle'>
            <PaletteIcon size={20}/>
        </button>

        <div tabIndex={0} className='dropdown-content mt-2 p-1 shadow-2xl bg-base-200 backdrop-blur-lg rounded-2xl w-56 border border-base-content/10'>
            
        </div>
    </div>
  )
}

export default ThemeSelector