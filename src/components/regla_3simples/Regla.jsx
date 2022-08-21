import React from 'react'
import { useState } from 'react'
function Regla() {
    const [resultado, setResultado] = useState(0)
  const sub=(e)=>{
    e.preventDefault()
   const form = Object.fromEntries(new FormData(e.target))
   console.log(form)
   const multi=Number(form.in2)*Number(form.in1_equivalente)
   const div=multi/Number(form.in1)
    setResultado(div)
  }
  return (
    <div> <form onSubmit={sub}>
    <div className="arriba">
    <div className="item">
      <label htmlFor="__">Valor1</label>
      <input type="number" id="__" placeholder='1' name="in1"/>
    </div>
    <div className="item">
      <label htmlFor="__">Valor2</label>
      <input type="number" id="__"  placeholder='100%' name="in1_equivalente"/>
    </div>
    </div>
   <div className="abajo">
   <div className="item">
      <label htmlFor="__">Valor3</label>
      <input type="number" id="__" placeholder='2' name='in2'/>
    </div>
    <pre>--------</pre>
    <div className="item">
      <label htmlFor="__">Valor4</label>
      <input type="number" id="__" placeholder='x' value={resultado}/>
    </div>

   </div>
    <input type="submit" value="enviar" />
  </form></div>
  )
}

export default Regla