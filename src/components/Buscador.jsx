import React from 'react'

export default function Buscador() {
  return (
    <form className="px-6 py-3">
      <div className="bg-slate-100 flex rounded-xl">
        <input className="py-3 pl-3 text-slate-400 hover:text-slate-600 cursor-pointer" type="button" value="search" />
        <input className="p-3 flex-grow bg-transparent outline-none" type="search" name="" id="" placeholder="Search messages"/>
      </div>
    </form>
  )
}
