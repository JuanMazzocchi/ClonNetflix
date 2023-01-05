import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CardContainer } from '../../../common/styledComponents/CardContainer';
import Modal from 'react-modal';
import useModal from '../../../common/hooks/useModal';
import PopUpMovies from '../PopUpMovies/PopUpMovies';


const CarouselSlides=({item})=>{
      const [display,setDisplay]=useState("block");
      const {closeModal,openModal,showModal}=useModal()       
      const customStyles = {
            overlay: {
              backgroundColor:"rgba(20,20,20,0.7)",
              zIndex:"5",
              width:"100%",
              maxHeight:"100%",
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              // position:"relative"
            },
              content: {
                marginTop:"5rem",
                width:"45%",
                height:"700px",
                borderRadius:"10px",
                border:"trasnparent",
                 
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
      const navigate=useNavigate();
      const GoToTrailer= (item)=>{
            if (item.SERIES!="Serie"){ navigate(`/movie/${item.id}`)}
            else
            {
                  navigate(`/serie/${item.id}`)
            };
            };
      
  

      
               


      
      return  (<>
                  
            <CardContainer display={display}>
                  <Modal 
                        shouldCloseOnOverlayClick={
                              true}
                        isOpen={showModal}
                        ariaHideApp={false}
                        contentLabel="Etiqueta del modal" 
                        style={customStyles}
                        className="modal"
                        closeTimeoutMS={100}>   
                        <div onClick={()=>{closeModal()}}> 
                              <PopUpMovies item={item} />
                        </div>
                  </Modal>
                  <img src={item?.poster} alt="poster"  width="90%" id={item.id} onClick={openModal}   />
            </CardContainer></>)                      
}

export default CarouselSlides;