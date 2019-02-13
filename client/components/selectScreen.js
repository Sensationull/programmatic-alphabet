import React from 'react';
import Quick from '../../assets/QuickPlay.png';
import Bolt from '../../assets/ LightningBolt.png'

 const SelectScreen = () => (
   <div className="container">
   
     <div className="box-1 box" >

      <div className="upperHalf">
        <img src={Quick} className="box-img"></img>
      </div>
      
      <div className="lowerHalf">
        <div>
          <img src={Bolt} id="bolt"></img>
        </div>
        <div>QuickPlay</div>
      </div>
      
     </div>
     <div className="box-2 box">Arcade</div>
     <div className="box-3 box">Competitive</div>
     <div className="box-4 box">Game Browser</div>
   </div>
 );
 
 export default SelectScreen;