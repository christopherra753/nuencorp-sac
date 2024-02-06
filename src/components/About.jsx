import React from 'react'
import Circle from './resources/Circle'

function About () {
  return (
    <section className='bg-primary-50/30 p-5'>
      <div className='flex flex-col gap-5 max-w-7xl mx-auto md:flex-row'>
        <div className='flex flex-col gap-2'>
          <div>
            <span className='uppercase tracking-wider text-primary-400'>Nosotros</span>
            <h1 className='text-2xl font-semibold'>Garantizando Rutas Exitosas</h1>
          </div>
          <p className='text-degradate-800 leading-relaxed'>
            En Nuencorp, nos destacamos por ofrecer un servicio logístico que vaya más allá de la simple entrega de mercancía. Nos orgullece ser una empresa peruana con una visión clara de ser el socio estratégico de nuestros clientes para garantizar que sus productos llegues a su destino de manera segura, eficiente y puntual.
          </p>
        </div>
        <div className='relative min-h-[40dvh] sm:min-h-[60dvh] grid place-content-center'>
          <img className='absolute object-cover top-0 left-0 w-[47%] h-[47%] rounded-md shadow-xl' src='/about1.jpg' alt='' />
          <img className='absolute object-cover top-0 right-0 w-[47%] h-[47%] rounded-md shadow-xl' src='/about2.jpg' alt='' />
          <img className='absolute object-cover bottom-0 left-0 w-[47%] h-[47%] rounded-md shadow-xl' src='/about3.jpg' alt='' />
          <img className='absolute object-cover bottom-0 right-0 w-[47%] h-[47%] rounded-md shadow-xl' src='/about4.jpg' alt='' />
          <Circle className='fill-white size-72' />
        </div>
      </div>
    </section>
  )
}

export default About
