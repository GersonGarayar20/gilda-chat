import React from 'react'
import Mensaje from './Mensaje'

export default function  Messages() {
  return (
    <div className='flex flex-col h-screen'>
      <nav className='flex p-2 border-b-2'>
        <div className='p-2'>
          <img className='w-12 rounded-xl' src="https://imagecdn.app/v1/images/https%3A%2F%2Fimages.unsplash.com%2Fphoto-1525923838299-2312b60f6d69?width=100&height=100" alt="" />
        </div>
        <div className='p-2'>
          <p className='text-xl font-semibold'>Florencio Dorrance</p>
          <p>Online</p>
        </div>
      </nav>
      <main className='flex-grow'>
        <section className='flex'>
          <div className='p-2'>
            <img className='w-12 rounded-xl' src="https://imagecdn.app/v1/images/https%3A%2F%2Fimages.unsplash.com%2Fphoto-1525923838299-2312b60f6d69?width=100&height=100" alt="" />
          </div>
          <div className='p-2 grid gap-3 '>
            <Mensaje text={"omg, this is amazing"} your={false} />
            <Mensaje text={"hola como estas"} your={false} />
          </div>
        </section>
        <section className='flex flex-row-reverse'>
          <div className='p-2 flex'>
            <img className='w-12 rounded-xl' src="https://imagecdn.app/v1/images/https%3A%2F%2Fimages.unsplash.com%2Fphoto-1525923838299-2312b60f6d69?width=100&height=100" alt="" />
          </div>
          <div className='p-2 grid gap-3 '>
            <Mensaje text={"aaaaaaaaaa"} your={true} />
          </div>
        </section>
      </main>
        <form className='p-4'>
          <div className='flex border rounded-xl'>
            <input className='p-3 bg-transparent outline-none flex-grow' type="text" placeholder='Type a message'/>
            <input className='p-3 text-slate-400 hover:text-slate-600' type="button" value="enviar" />
          </div>
        </form>
    </div>
  )
}
