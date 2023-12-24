






import React, { useState } from 'react';
import '../App.css';
import { NavLink, useParams } from 'react-router-dom';


const Crihstmas = () => {
  const [playsong,setPlaysong]=useState(false)
  const [potlibag,Setpotli]=useState(false)
    let { name } = useParams();
    const [audio] = useState(new Audio('../santam.mpeg'));
    const playMusic = () => {
      setPlaysong(!playsong)
      if(playsong==true){
        audio.play();
        Setpotli(true)
      }else{
        audio.pause();
      }
    };

const potli=()=>{
  
}
  
  return (
    <div className='bady' onClick={playMusic}>
       {!potlibag?<div className='clickme' onClick={playMusic} ><img src="../potli.png" alt="potli" /></div>:null}
        <h1 className="happy-birthday">Merry Christmas {name} !</h1>
     
    <div className="birthday-message">
     
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
    </div>
    <div className='balloon1'><img src="../h1.png" alt="photo" /></div>
    <div className='balloon2'><img src="../h2.png" alt="" /></div>
    <div className='balloon3'><img src="../h3.png" alt="" /></div>
    <button className='homebtn' > <NavLink to={"/"}>Home</NavLink> </button>
    
    </div>
  );
};

export default Crihstmas;



