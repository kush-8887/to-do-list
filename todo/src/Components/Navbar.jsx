import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex justify-between bg-slate-800 text-white py-3'>
        <span className='font-bold text-xl mx-8'>
            Todo
        </span>
        <ul className='flex gap-8 mx-8'>
            <li className='hover:font-bold hover:pb-4'>Home</li>
            <li className='hover:font-bold hover:pb-4'>Your Tasks</li>
        </ul>
    </nav>
  )
}
