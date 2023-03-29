import React from 'react'
let count = 0;
function Countchange()
{
    count++;
    alert("You clicked have :"+count)
}
function Count() {
  return (
    <div>
        <button onClick={Countchange}>Click Me</button>
    </div>
  )
}

export default Count