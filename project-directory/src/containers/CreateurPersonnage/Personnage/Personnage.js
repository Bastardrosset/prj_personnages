import React from 'react'
import ImagePerso from './ImagePerso/ImagePerso';


const Personnage = (props) => {
  return (
    <div className='row no-gutters'>
      <div className='col-6'>
        <ImagePerso numImage={props.image}/>
      </div>
      <div className='col-6'>
        Force : {props.force} <br/>
        Agilite : {props.agilite} <br/>
        Intelligence : {props.intelligence}
      </div>
    </div>
  )
}

export default Personnage
