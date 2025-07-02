import HelpBot from '@/components/helpBot/HelpBot'
import Banner from '@/components/home/Banner'
import GetInTouch from '@/components/home/GetInTouch'
import LatestServices from '@/components/home/LatestServices'
import MeetTheTeam from '@/components/home/MeetTheTeam'
import Testimonial from '@/components/home/Testimonial'
import WhatWeDo from '@/components/home/WhatWeDo'

export default function Home() {
  return (
    <>
    <Banner />
    <LatestServices/>
    <WhatWeDo/>
    <Testimonial/>
    <GetInTouch/>
    <MeetTheTeam/>
    <HelpBot/>
    </>
  )
}
