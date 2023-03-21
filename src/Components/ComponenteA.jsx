import React from 'react'

const ComponenteA = ({Holamundo,Unvalor}) => {
    Holamundo();
    const num= 50
    Unvalor(num)
    
    return (
    <div>ComponenteA</div>
  )
}

export default ComponenteA