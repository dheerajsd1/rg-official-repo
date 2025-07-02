import NewsLetter from '@/components/contactUs/NewsLetter'
import Banner from '@/components/managementConsultancy/Banner'
import ManagementConsultancy from '@/components/managementConsultancy/ManagementConsultancy'
import WhyManagementConsultancy from '@/components/managementConsultancy/WhyManagementConsultancy'
import React from 'react'

const page = () => {
  return (
    <>
    <Banner/>
    <ManagementConsultancy/>
    <WhyManagementConsultancy/>
    <NewsLetter/>
    </>
  )
}

export default page