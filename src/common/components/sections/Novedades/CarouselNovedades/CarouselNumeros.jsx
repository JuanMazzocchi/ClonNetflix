import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
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

    return (

        <>
        <CarouselContainer>
        <h4 style={{padding:"1rem"}}>Top 10 Novedades Peliculas</h4>
        <Swiper
        {...sliderNumerosProps}
        className="mySwiper">

            
           <SwiperSlide key={data[0]?.id}    id="outer"  >
            <StyleContainer  id='inner'>
                {/* <CarouselNovedadesModal  id={data[0]?.id}/> */}
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
                              <PopUpMovies item={data[0]} />
                        </div>
                  </Modal>

                <StyleNumero  >
                    <img src={numeros.uno} width="170%" onClick={()=>{openModal()}}  />
                </StyleNumero>
                <StyleImagen   >
                    <img src={data[0]?.poster} alt={data[0]?.name} width="100%" onClick={()=>{openModal()}} />
                </StyleImagen>                 
            </StyleContainer>
             
        </SwiperSlide>
        <SwiperSlide key={data[1]?.id} >
            <StyleContainer>
            <CarouselNovedadesModal />
                <StyleNumero>
                <img src={numeros.dos}  width="170%" />
                </StyleNumero>
                <StyleImagen>
                <img src={data[1]?.poster} alt="poster" key={data[1]?.id}  width="100%"/>
                </StyleImagen>
            </StyleContainer>
        </SwiperSlide>
        <SwiperSlide key={data[2]?.id} > 
            <StyleContainer>

                <StyleNumero>
                <img src={numeros.tres}  width="170%" />
                </StyleNumero>
                <StyleImagen>
                <img src={data[2]?.poster} alt="poster" key={data[2]?.id}  width="100%"/>
                </StyleImagen>
            </StyleContainer>
        </SwiperSlide>
        <SwiperSlide key={data[3]?.id} >
            <StyleContainer>
                <StyleNumero>
                <img src={numeros.cuatro}  width="170%" />
                </StyleNumero>
                <StyleImagen>
                <img src={data[3]?.poster} alt="poster" key={data[3]?.id}  width="100%"/>
                </StyleImagen>
            </StyleContainer>
        </SwiperSlide>
        <SwiperSlide key={data[4]?.id} >
            <StyleContainer>
                <StyleNumero>
                <img src={numeros.cinco}  width="170%" />
                </StyleNumero>
                <StyleImagen>
                <img src={data[4]?.poster} alt="poster" key={data[4]?.id}  width="100%"/>
                </StyleImagen>
            </StyleContainer>
        </SwiperSlide>
        <SwiperSlide key={data[5]?.id} >
            <StyleContainer>
                <StyleNumero>
                <img src={numeros.seis}  width="170%" />
                </StyleNumero>
                <StyleImagen>
                <img src={data[5]?.poster} alt="poster" key={data[5]?.id}  width="100%"/>
                </StyleImagen>
            </StyleContainer>
        </SwiperSlide>
        <SwiperSlide key={data[6]?.id} >
            <StyleContainer>
                <StyleNumero>
                <img src={numeros.siete}  width="170%" />
                </StyleNumero>
                <StyleImagen>
                <img src={data[6]?.poster} alt="poster" key={data[6]?.id}  width="100%"/>
                </StyleImagen>
            </StyleContainer>
        </SwiperSlide>
        <SwiperSlide key={data[7]?.id} >
            <StyleContainer>
                <StyleNumero>
                <img src={numeros.ocho}  width="170%" />
                </StyleNumero>
                <StyleImagen>
                <img src={data[7]?.poster} alt="poster" key={data[7]?.id}  width="100%"/>
                </StyleImagen>
            </StyleContainer>
        </SwiperSlide>
        <SwiperSlide key={data[8]?.id} >
            <StyleContainer>
                <StyleNumero>
                <img src={numeros.nueve}  width="170%" />
                </StyleNumero>
                <StyleImagen>
                <img src={data[8]?.poster} alt="poster" key={data[8]?.id}  width="100%"/>
                </StyleImagen>
            </StyleContainer>
        </SwiperSlide>
        <SwiperSlide>
            <StyleContainer key={data[9]?.id} >
                <StyleNumero>
                <img src={numeros.diez}  width="170%" />
                </StyleNumero>
                <StyleImagen>
                <img src={data[9]?.poster} alt="poster" key={data[9]?.id}  width="100%"/>
                </StyleImagen>
            </StyleContainer>
        </SwiperSlide>
        </Swiper>
        
      {/* <CarouselSlides service={getTopRatedMovies}/> */}
      </CarouselContainer></>)



};

export default CarouselNumeros;