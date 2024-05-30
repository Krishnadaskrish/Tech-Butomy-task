import React from 'react'
import Navbar from '../Componets/Navbar'
import Hero from '../Componets/Hero'
import Features from '../Componets/Features'
import Transations from '../Componets/Transations'
import Savings from '../Componets/Savings'
import Notifications from '../Componets/Notificatrions'
import Listing from '../Componets/Lising'
import TestimanialSection from '../Componets/TestimanialSection'
function FrontPage() {
  return (
    <>
 
      <Navbar/>
      <Hero/>
      <Features/>
      <Transations/>
      <Savings/>
      <Notifications/>
      <Listing/>
      <TestimanialSection/>

   
    </>
  )
}

export default FrontPage
