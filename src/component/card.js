import React from 'react'
import Carddata from './card-data'
import data from './data'

function Card(){
  return (
    <div>
        {data.map((val)=>(
            <Carddata
                key={val.id}
                products={val}
            />
        ))}
    </div>
  )
}

export default Card