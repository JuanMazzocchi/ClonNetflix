import { Navigation, Pagination } from "swiper";





export const sliderProps ={
    slidesPerView:8,
    spaceBetween:1,
    slidesPerGroup:4,
    loop:true,
    loopFillGroupWithBlank:true,
    navigation:true,
    modules:[Pagination,Navigation],
    
}

export const sliderNumerosProps={
    slidesPerView:6,
        spaceBetween:1,
        slidesPerGroup:2,
        loop:true,
        loopFillGroupWithBlank:true,
        navigation:true,
        modules:[Pagination, Navigation],



}