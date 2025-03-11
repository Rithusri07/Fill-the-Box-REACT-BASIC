import React from 'react'
import './App.css'
export default function Box({colors,hexValue}) {
  return (
    <section>
    <div className="square"
      style={{
        backgroundColor: colors
      }}
      >
      <p>{colors?colors:'empty'}</p>
      <p>{hexValue? hexValue:null}</p>
    </div>
    </section>
  )
}
