import React from 'react'

export default function Mensaje({text, your}) {

  return (
      <p className={`${your ? "bg-indigo-600 text-white" : "bg-slate-100"} px-4 py-2 rounded-xl`}>{text}</p>  
  )
}
