import { RiArrowRightDoubleFill } from 'react-icons/ri'

function HeaderItem ({ title, description, fileImage, currentItem, value }) {
  const visibleItem = currentItem === value

  return (
    <article className={`flex flex-col gap-5 min-h-[70dvh] md:min-h-[50dvh] transition-all ${visibleItem ? 'relative opacity-100 pointer-events-auto' : 'absolute top-0 left-0 inset-0 opacity-0 pointer-events-none'}`}>
      <div className='flex flex-col gap-2 md:gap-5 md:absolute md:top-5'>
        <div>
          <span className='text-secundary-600 tracking-wider md:text-lg'>SOMOS NUENCORP</span>
          <h2 className='backdrop-blur-3xl text-2xl font-semibold text-balance md:text-4xl'>{title}</h2>
        </div>
        <p className='text-degradate-800 text-pretty leading-relaxed md:text-lg md:w-[300px] lg:w-[400px] xl:w-[480px]'>
          {description}
        </p>
        <a href='' className='bg-primary-500 text-white inline-flex items-center mr-auto px-6 py-2'>
          Nuestros Servicios
          <RiArrowRightDoubleFill className='mt-0.5 text-xl' />
        </a>
      </div>
      <img className='flex-1 md:flex-none rounded-lg md:w-3/5 md:self-end object-cover md:h-[460px]' src={`/${fileImage}`} alt='' />
    </article>
  )
}

export default HeaderItem
