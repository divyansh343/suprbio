import React from 'react'
import { MdDesignServices } from 'react-icons/md'
import HeadingWrappper from './HeadingWrappper'
import ServiceCard from './ServiceCard'

const ServiceContainer = () => {
  return (
    <>
      <div className='mx-[20px] mt-7 md:mx-[130px] lg:mx-[350px]'>
      <HeadingWrappper title="services" icon={<MdDesignServices />} />
        <div className='grid grid-cols-2 gap-2 lg:gap-3'>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        </div>
      </div>

    </>
  )
}

export default ServiceContainer