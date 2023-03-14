import React from 'react'
import { useState } from 'react'
import tasks from "./Assignment/Tasks"
import "./Assignment/Tasks.css"
function Assignments() {
  const [picked,setPicked] = useState(null)
  const toggle = (i) => {
      if (picked === i){
        return setPicked(null)
      }
      setPicked(i)
  }
  return (
    <div className='container'> 
      <div className="length"> 
          {tasks.map((item, i) => ( 
              <div className='item'> 
                <div className='title' onClick={() => toggle(i)}> 
                  <h2>{item.task}</h2> 
                  <span>{picked === i?"▲" : "▼"}</span> 
                </div> 
              <div className={picked === i? "task show" : "task"}>{item.desc}</div>
            </div> 
          ))}
      </div> 
  </div> 
  )
}

export default Assignments