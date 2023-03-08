import { Swiper, SwiperSlide } from 'swiper/react';
import { CarouselContainer } from '../../../../../features/movies/Carousel/styles/CarouselContainer';
import useFetch from '../../../../hooks/useFetch';
import numeros from '../../../../../utils/numeros';
import getNovedadesMovies from '../services/getNovedadesMovies';
import { StyleContainer, StyleImagen, StyleNumero } from './styles/SlidesStyle';
import CarouselNovedadesModal from './CarouselNovedadesModal';
import useModal from '../../../../hooks/useModal';
import { sliderNumerosProps } from '../../../../../features/movies/Carousel/props/sliderProps';
import Modal from 'react-modal';
import PopUpMovies from '../../../../../features/movies/PopUpMovies/PopUpMovies';
import CarouselNovedadesSlides from './CarouselNovedadesSlides';

 

const CarouselNumeros =()=>{

    const {data}=useFetch(getNovedadesMovies);
    const {openModal,closeModal,showModal}=useModal();

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
            border:"transparent",
             
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
        
        let newdata=data.slice(0,10)
        
    return (

        <><CarouselContainer>
          <h4 style={{padding:"1rem"}}>Top 10 Novedades Peliculas</h4>  
            <Swiper
            {...sliderNumerosProps}
            className="mySwiper">
                  {newdata?.map((item,index)=>{
                        return(
                              <SwiperSlide key={data.id}>
                                    <CarouselNovedadesSlides item={item}  index={index} />
                              </SwiperSlide>
                        )
                  })}
            </Swiper>
        </CarouselContainer>
    
      
      
      </>)



};

export default CarouselNumeros;

 