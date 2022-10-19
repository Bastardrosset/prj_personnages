import React from 'react'
import ImagePerso1 from '../../../../assets/images/persos/player1.png';
import ImagePerso2 from '../../../../assets/images/persos/player2.png';
import ImagePerso3 from '../../../../assets/images/persos/player3.png';



const ImagePerso = (props) => {

    let imageToPrint="";
    if(props.numImage === 1) imageToPrint = ImagePerso1;
    else if(props.numImage === 2) imageToPrint = ImagePerso2;
    else if(props.numImage === 3) imageToPrint = ImagePerso3;

  return (
    <div>
      <img src={imageToPrint} alt="perso"/>
    </div>
  )
}

export default ImagePerso
