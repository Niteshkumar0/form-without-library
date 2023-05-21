import React, { useState } from 'react'
import './form.css'
export default function Form({label,onchange,errorMessage,...othervale}) {
  let [focused,setFocused] = useState(false)
  return (
    <div>
      <label className='block text-gray-500'>{label}</label>
      <input {...othervale} onBlur={() => setFocused(true)} focused={focused.toString()} className='border rounded-lg h-8 w-full text-black pl-3 focus:outline-none' onChange={onchange}/>
      <p className='error'>{errorMessage}</p>
    </div>
  )
}
