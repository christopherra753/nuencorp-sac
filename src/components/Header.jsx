import { useState } from 'react'
import HeaderItem from './HeaderItem'

function Header () {
  const [currentItem, setCurrentItem] = useState(1)

  return (
    <header className='p-5 max-w-7xl mx-auto relative'>
      <section className='relative'>
        <HeaderItem
          title='Transparencia y Consistencia'
          description='Construimos relaciones solidas basadas en la transparencia y la confianza. Cuente con nosotros para cumplir sus compromisos de manera consistente.'
          fileImage='confianza.jpg'
          currentItem={currentItem}
          value={1}
        />
        <HeaderItem
          title='Vanguardia Tecnológica'
          description='Mantenemos un enfoque proactivo en la adopción de tecnologías emergentes para mejorar continuamente nuestros servicios y ofrecer soluciones logísticas de vanguardia.'
          fileImage='innovacion.jpg'
          currentItem={currentItem}
          value={2}
        />
        <HeaderItem
          title='Puntualidad Garantizada'
          description='Comprometidos con la importancia de ser puntuales en las entregas de productos y servicios.'
          fileImage='puntualidad.jpg'
          currentItem={currentItem}
          value={3}
        />
      </section>
      <section className='flex gap-1 mt-5 md:mt-0 md:absolute bottom-5 left-5'>
        <button
          onClick={() => setCurrentItem(1)}
          className={`h-6 ${currentItem === 1 ? 'w-20' : 'w-6'} bg-primary-500 rounded-full transition-all`}
        />
        <button
          onClick={() => setCurrentItem(2)}
          className={`h-6 ${currentItem === 2 ? 'w-20' : 'w-6'} bg-primary-500 rounded-full transition-all`}
        />
        <button
          onClick={() => setCurrentItem(3)}
          className={`h-6 ${currentItem === 3 ? 'w-20' : 'w-6'} bg-primary-500 rounded-full transition-all`}
        />
      </section>
    </header>
  )
}

export default Header
