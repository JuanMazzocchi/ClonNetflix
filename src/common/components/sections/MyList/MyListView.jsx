import React from 'react'
import Nav from '../../Nav/Nav'
import MyListCarrousel from './MyListCarrousel'
 

const MyListView = () => {
  return (
     <>
     <div style={{paddingTop:"3rem", backgroundColor:"rgba(20,20,20)",zIndex:"5",height:"950px"}}>
     <Nav />
     <MyListCarrousel />
    </div>
     </>
  )
}

export default MyListView