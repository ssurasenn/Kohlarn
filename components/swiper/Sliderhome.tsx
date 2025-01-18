'use client'
import { LandmarkCardProps } from '@/utils/types'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import OtherInfo from './OtherInfo';


const Sliderhome = ({ landmarks }: { landmarks: LandmarkCardProps[] }) => {
  return (
    <div>
      <Swiper      
        navigation={true}
        autoplay={{
          delay: 2500
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        >
        {
          landmarks.map((landmark) => {
            return (
              
                <SwiperSlide key={landmark.image} className='group'>
                  <div
                    className='relative rounded-md overflow-hidden'>
                    <img
                      className='w-full h-[600px] object-cover 
                   brightness-50 group-hover:brightness-75 transition-all duration-300'
                      
                      src={landmark.image}
                      alt=''
                    />
                    <div className='absolute bottom-0 left-0 z-50'>
                      <div className='col-span-4 mb-4 flex h-full flex-1
                      justify-end px-5 md:mb-4 md:justify-end md:px-10'
                      >
                      <OtherInfo landmark={landmark}/>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              
            )
          })
        }
      </Swiper>
    </div>
  )
}
export default Sliderhome