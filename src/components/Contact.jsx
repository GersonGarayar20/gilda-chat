import React from 'react'

export default function Contact({name}) {
  return (
    <li className="flex p-2 hover:bg-slate-100 rounded-xl cursor-pointer">

      <div className="p-2">
        <img className="w-12 rounded-xl" src="https://imagecdn.app/v1/images/https%3A%2F%2Fimages.unsplash.com%2Fphoto-1525923838299-2312b60f6d69?width=100&height=100" alt="" />
      </div>

      <div className="p-2 flex-grow">
        <p className="text-lg font-bold">{name}</p>
        <p className="text-neutral-500">jajaja</p>
      </div>

      <div className="p-2">
        <p className="text-neutral-500">12m</p>
      </div>
      
    </li>
  )
}
