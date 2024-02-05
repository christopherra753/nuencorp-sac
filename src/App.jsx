import { useState } from 'react'
import { RiMenuLine, RiCloseLine, RiArrowRightDoubleFill } from 'react-icons/ri'
import Circle from './components/resources/Circle'

function App () {
  const [currentHeader, setCurrentHeader] = useState(1)

  return (
    <div className='font-sans relative overflow-x-hidden'>
      <div className='absolute -z-10 -top-40 -right-40'>
        <Circle className='fill-primary-50/30 size-96' />
      </div>

      <nav className='flex items-center justify-between p-5'>
        <a href='#inicio'>
          <img src='/logo.png' className='h-full max-h-[60px]' alt='Logo de Nuencorp' />
        </a>

        <ul className='hidden lg:flex gap-5'>
          <a className='text-white text-lg px-6 py-1 rounded-lg bg-primary-400' href='#inicio'>Inicio</a>
          <a className='text-degradate-800 px-6 py-1 rounded-lg text-lg hover:bg-primary-400 hover:text-white transition-colors' href='#nosotros'>Nosotros</a>
          <a className='text-degradate-800 px-6 py-1 rounded-lg text-lg hover:bg-primary-400 hover:text-white transition-colors' href='#servicios'>Servicios</a>
          <a className='text-degradate-800 px-6 py-1 rounded-lg text-lg hover:bg-primary-400 hover:text-white transition-colors' href='#contacto'>Contacto</a>
          <button className='lg:hidden'>
            <RiCloseLine />
          </button>
        </ul>

        <button className='lg:hidden'>
          <RiMenuLine className='text-2xl' />
        </button>
      </nav>

      <header className='p-5'>
        <div className='relative min-h-[70vh] flex'>
          <section className={`${currentHeader === 1 ? 'relative opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none absolute top-0 left-0 inset-0'} transition-all duration-500 ease-in flex flex-col`}>
            <div>
              <span className='uppercase tracking-wider text-primary-400'>Somos Nuencorp</span>
              <h1 className='text-2xl font-semibold mb-5'>Transparencia y Consistencia</h1>
              <p className='text-degradate-800 mb-5'>
                Construimos relaciones solidas basadas en la transparencia y la confianza. Cuente con nosotros para cumplir sus compromisos de manera consistente.
              </p>
              <a className='inline-flex items-center px-6 py-2 mb-5 bg-primary-500 text-white hover:bg-primary-600 transition-colors' href='#servicios'>
                Nuestro servicios
                <RiArrowRightDoubleFill className='mt-0.5 text-xl' />
              </a>
            </div>
            <div className='flex-1'>
              <img className='w-full h-full object-cover rounded-md' src='/confianza.jpg' alt='' />
            </div>
          </section>

          <section className={`${currentHeader === 2 ? 'relative opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none absolute top-0 left-0 inset-0'} transition-all duration-500 ease-in flex flex-col`}>
            <div>
              <span className='uppercase tracking-wider text-primary-400'>Somos Nuencorp</span>
              <h1 className='text-2xl font-semibold mb-5'>Vanguardia Tecnológica</h1>
              <p className='text-degradate-800 mb-5'>
                Mantenemos un enfoque proactivo en la adopción de tecnologías emergentes para mejorar continuamente nuestros servicios y ofrecer soluciones logísticas de vanguardia.
              </p>
              <a className='inline-flex items-center px-6 py-2 mb-5 bg-primary-500 text-white hover:bg-primary-600 transition-colors' href='#servicios'>
                Nuestro servicios
                <RiArrowRightDoubleFill className='mt-0.5 text-xl' />
              </a>
            </div>
            <div className='flex-1'>
              <img className='w-full h-full object-cover rounded-md' src='/innovacion.jpg' alt='' />
            </div>
          </section>

          <section className={`${currentHeader === 3 ? 'relative opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none absolute top-0 left-0 inset-0'} transition-all duration-500 ease-in flex flex-col`}>
            <div>
              <span className='uppercase tracking-wider text-primary-400'>Somos Nuencorp</span>
              <h1 className='text-2xl font-semibold mb-5'>Puntualidad Garantizada</h1>
              <p className='text-degradate-800 mb-5'>
                Puntualidad en cada entrega. En Nuencorp, cumplimos con tiempos precisos para garantizar la satisfacción total de nuestros clientes. Confíe en nosotros para una logística eficiente y oportuna.
              </p>
              <a className='inline-flex items-center px-6 py-2 mb-5 bg-primary-500 text-white hover:bg-primary-600 transition-colors' href='#servicios'>
                Nuestro servicios
                <RiArrowRightDoubleFill className='mt-0.5 text-xl' />
              </a>
            </div>
            <div className='flex-1'>
              <img className='w-full h-full object-cover rounded-md' src='/puntualidad.jpg' alt='' />
            </div>
          </section>
        </div>

        <div className='flex w-32 gap-2 mt-4'>
          <button
            onClick={() => setCurrentHeader(1)}
            className={`min-w-5 h-5 ${currentHeader === 1 ? 'flex-1 bg-primary-500' : 'bg-degradate-300 hover:bg-primary-500 transition-colors'} rounded-full transition-all duration-500 ease-in`}
          />

          <button
            onClick={() => setCurrentHeader(2)}
            className={`min-w-5 h-5 ${currentHeader === 2 ? 'flex-1 bg-primary-500' : 'bg-degradate-300 hover:bg-primary-500 transition-colors'} rounded-full transition-all duration-500 ease-in`}
          />

          <button
            onClick={() => setCurrentHeader(3)}
            className={`min-w-5 h-5 ${currentHeader === 3 ? 'flex-1 bg-primary-500' : 'bg-degradate-300 hover:bg-primary-500 transition-colors'} rounded-full transition-all duration-500 ease-in`}
          />
        </div>
      </header>

      <main>
        <section className='bg-primary-50/30 p-5'>
          <div className=''>
            <span className='uppercase tracking-wider text-primary-400'>Nosotros</span>
            <h1 className='text-2xl font-semibold mb-5'>Garantizando Rutas Exitosas</h1>
            <p className='text-degradate-800 mb-5'>
              En Nuencorp, nos destacamos por ofrecer un servicio logístico que vaya más allá de la simple entrega de mercancía. Nos orgullece ser una empresa peruana con una visión clara de ser el socio estratégico de nuestros clientes para garantizar que sus productos llegues a su destino de manera segura, eficiente y puntual.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
