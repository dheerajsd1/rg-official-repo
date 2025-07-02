import NewsLetter from '@/components/contactUs/NewsLetter'
import Banner from '@/components/retailRequirement/Banner'
import RetailRequirement from '@/components/retailRequirement/RetailRequirement'
import WhyRetailRequirement from '@/components/retailRequirement/WhyRetailRequirement'
import React from 'react'

const page = () => {
  return (
    <>
    <Banner/>
    <RetailRequirement/>    
    <WhyRetailRequirement/>
    <NewsLetter/>

    </>
  )
}

export default page