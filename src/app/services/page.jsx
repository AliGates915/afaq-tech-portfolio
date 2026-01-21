import TestimonialsInfinite from '@/components/sections/TestimonialsInfinite'
import AreasOfExpertise from '@/components/serviceSection/AreaofExperties'
import ServiceHeroSection from '@/components/serviceSection/ServiceHeroSection'
import SevicesCardSection from '@/components/serviceSection/SevicesCardSection'
import React from 'react'

const ServicePage = () => {
  return (
    <div>
        <ServiceHeroSection/>
        <SevicesCardSection/>
        <AreasOfExpertise/>
        <TestimonialsInfinite/>
    </div>
  )
}

export default ServicePage