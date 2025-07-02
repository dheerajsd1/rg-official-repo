import Banner from '@/components/services/Banner'
import Immergix from '@/components/services/Immergix'
import PossibleRoadBlocks from '@/components/services/PossibleRoadBlocks'
import ServicesWeOffer from '@/components/services/ServicesWeOffer'
import React from 'react'

const page = () => {
  return (
    <>
    <Banner/>
    <ServicesWeOffer/>
    <Immergix />
    <PossibleRoadBlocks />
    </>
  )
}

export default page
