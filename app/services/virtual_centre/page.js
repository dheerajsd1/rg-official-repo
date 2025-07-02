import NewsLetter from '@/components/contactUs/NewsLetter'
import Banner from '@/components/virtualCenterService/Banner'
import VirtualContactCenter from '@/components/virtualCenterService/VirtualContactCenter'
import WhyVirtualCenter from '@/components/virtualCenterService/WhyVirtualCenter'
import React from 'react'

const page = () => {
  return (
    <div>
      <Banner/>
      <VirtualContactCenter/>
      <WhyVirtualCenter/>
      <NewsLetter/>
    </div>
  )
}

export default page
