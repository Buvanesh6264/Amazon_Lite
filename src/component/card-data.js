import React from 'react'

function carddata({products}) {
  const {tname,imgsrc,info}=products
  return (
    <div className='cards'>
      <h3>{tname}</h3>
      <img src={imgsrc} alt='pic' className='card-img'/>
      <p>{info}</p>
      <button>Get now</button>      
    </div>
  )
}

export default carddata