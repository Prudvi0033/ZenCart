import { PaletteIcon } from 'lucide-react'
import React from 'react'
import {THEMES} from "../constants"
import { useThemeStore } from '../store/useThemeStore'

const ThemeSelector = () => {
  const {theme, setTheme} = useThemeStore()
  return (
    <div className='dropdown dropdown-end'>
        <button tabIndex={0} className='btn btn-ghost btn-circle'>
            <PaletteIcon size={20}/>
        </button>

        <div tabIndex={0} className='dropdown-content mt-2 p-1 shadow-2xl bg-base-200 backdrop-blur-lg rounded-2xl w-56 border border-base-content/10'>
            {THEMES.map(themeOption => (
              <button
                key={themeOption.name}
                className={`w-full px-2 py-4 rounded-xl flex items-center gap-3 transition-colors
                    ${theme === themeOption.name ? "bg-primary/10 text-primary" : "hover:bg-base-content/5"}
                  `}
                onClick={() => setTheme(themeOption.name)}
              >
                <PaletteIcon size={15} />
                <span className='text-sm font-medium'>{themeOption.label}</span>


                <div className='ml-auto flex gap-1'>
                    {themeOption.colors.map((color, i)=>(
                      <span key={i} className='size-2 rounded-full' style={{background : color}}></span>
                    ))}
                </div>
              </button>
            ))}
        </div>
    </div>
  )
}

export default ThemeSelector