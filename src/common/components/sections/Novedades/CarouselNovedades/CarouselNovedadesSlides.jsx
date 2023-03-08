import React from 'react';
import useModal from '../../../../hooks/useModal';
import { CardContainer } from '../../../../styledComponents/CardContainer';
import Modal from 'react-modal';
import PopUpMovies from '../../../../../features/movies/PopUpMovies/PopUpMovies';
import { StyleImagen, StyleNumero } from './styles/SlidesStyle';
import numeros from '../../../../../utils/numeros';
const CarouselNovedadesSlides = ({item, index}) => {

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
          let imagen="";
        
    if (index==0){
        imagen=numeros.uno
    }else if(index==1){
        imagen=numeros.dos
    }else if(index==2){
        imagen=numeros.tres
    }else if(index==3){
        imagen=numeros.cuatro
    }else if(index==4){
        imagen=numeros.cinco
    }else if(index==5){
        imagen=numeros.seis
    }else if(index==6){
        imagen=numeros.siete
    }else if(index==7){
        imagen=numeros.ocho
    }else if(index==8){
        imagen=numeros.nueve
    }else if (index==9){
        imagen=numeros.diez
    };

   


  return (<>
  <CardContainer>
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
        <div  style={{display:"flex", paddingTop:"1rem", width:"170%" }}>
        <StyleNumero>
            <img src={imagen} width="170%" onClick={()=>{openModal()}} />
        </StyleNumero>
        <StyleImagen>
            <img src={item?.poster} alt={index[0]}   width="100%" onClick={()=>{openModal()}} />
        </StyleImagen>
        </div>  





  </CardContainer>
  
  
  
  
  
  </>
    
  )
}

export default CarouselNovedadesSlides