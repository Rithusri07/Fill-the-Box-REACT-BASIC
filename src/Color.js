import React from 'react'
import './App.css'
export default function Color({Search,setSearch}) {
  return (
    <div className='in'>
      <input 
      placeholder='color'
      value={Search}
      onChange={(e)=>{setSearch(e.target.value)}}
      />
    </div>
  )
}
