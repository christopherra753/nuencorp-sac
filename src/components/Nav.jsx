import { useState } from 'react'
import { RiMenuLine, RiCloseLine } from 'react-icons/ri'

function Nav () {
  const [menu, setMenu] = useState(false)

  return (
    <nav className='flex items-center justify-between p-5 max-w-7xl mx-auto'>
      <a href='#inicio'>
        <img src='/logo.png' className='h-full max-h-[50px]' alt='Logo de Nuencorp' />
      </a>

      <ul className={`${menu ? 'translate-x-0' : 'translate-x-full'} fixed top-0 right-0 w-3/4 h-screen bg-white/50 backdrop-blur-2xl flex flex-col p-5 items-center justify-center gap-5 z-20 lg:static lg:h-auto lg:w-auto lg:bg-transparent lg:backdrop-blur-none lg:flex-row lg:p-0 lg:translate-x-0 transition-all duration-300`}>
        <a className='text-white text-lg px-6 py-1 rounded-lg bg-primary-400' href='#inicio'>Inicio</a>
        <a className='text-degradate-800 px-6 py-1 rounded-lg text-lg hover:bg-primary-400 hover:text-white transition-colors' href='#nosotros'>Nosotros</a>
        <a className='text-degradate-800 px-6 py-1 rounded-lg text-lg hover:bg-primary-400 hover:text-white transition-colors' href='#servicios'>Servicios</a>
        <a className='text-degradate-800 px-6 py-1 rounded-lg text-lg hover:bg-primary-400 hover:text-white transition-colors' href='#contacto'>Contacto</a>
        <button onClick={() => setMenu(false)} className='absolute top-5 right-5 hover:text-red-500 transition-colors lg:hidden'>
          <RiCloseLine className='text-3xl' />
        </button>
      </ul>

      <button onClick={() => setMenu(true)} className='lg:hidden'>
        <RiMenuLine className='text-2xl' />
      </button>
    </nav>
  )
}

export default Nav
