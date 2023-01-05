import React, { useState } from 'react';
import Modal from 'react-modal';
import PopUpMovies from '../../../../../features/movies/PopUpMovies/PopUpMovies';
import useModal from '../../../../hooks/useModal';


const CarouselNovedadesModal = (item) => {
 
   const {closeModal,openModal,showModal}=useModal()
    // Modal.setAppElement('#inner');
    const customStyles = {
      overlay: {
        backgroundColor:"rgba(20,20,20,0.4)",
        zIndex:"5",
        width:"1600px",
        maxHeight:"auto",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        // position:"relative"
      },
        content: {
          // padding:"100px",
          widht:"100%",
          height:"300px",
           
          // position:"absolute" ,
          // zIndex:"1",
          // top: '50%',
          // left: '50%',
          // right: 'auto',
          // bottom: 'auto',
          // marginRight: '-50%',
          // transform: 'translate(-50%, -50%)',
          backgroundColor:"rgba(20,20,20)",
          color:"white",
         
        },
      };

       
    return (
    <>  
        <div onClick={()=>{openModal()}}  style={{width:"240px", height:"171px",zIndex:"5",position:"absolute"}} ></div>
    <Modal 
    isOpen={showModal}
    ariaHideApp={false}
    contentLabel="Etiqueta del modal" 
    // onMouseOut={()=>{closeModal()}}
    style={customStyles}
    className="modal"
    closeTimeoutMS={100}>   
    <div 
    // onMouseOver={()=>{openModal()}}
    // onMouseOut={()=>{closeModal()}}
    onClick={()=>{closeModal()}} 
     >
     <PopUpMovies item={item} />
     
     
    </div>
        

    </Modal></>
  )
}

export default CarouselNovedadesModal