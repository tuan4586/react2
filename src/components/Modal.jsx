import React from 'react'

export default function Modal({show,onHidden,node}) {
  return (
    <div className='flxed w-screen h-screen z-[9999]'>
      
      <div className="absolute inset-0 bg-black/60" onClick={onHidden}></div>
      <div className='text-center relative w-96 h-96 bg-white rounded-lg py-5 text-3xl'>
        {node.data.label}
        <input type="text" placeholder='Xpath'/>
      </div>
    </div>
  )
}

