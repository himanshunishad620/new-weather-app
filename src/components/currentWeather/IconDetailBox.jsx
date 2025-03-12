import React from 'react'

import IconDetailCard from './IconDetailCard'
import { useWeatherProvider } from '../../utils/useWeatherProvider'
import { WiFog,WiWindDeg,WiHumidity,WiBarometer  } from "react-icons/wi";
import IconDetailBoxSkeleton from './IconDetailBoxSkeleton';

export default function IconDetailBox() {
  const {data,loading}=useWeatherProvider()
  if(loading){
    return <IconDetailBoxSkeleton/>
  }
  return (
        <div className=' col-span-1 lg:col-span-2 gap-4 lg:gap-4 gap-y-4  grid grid-cols-2 grid-rows-2 '>
                <IconDetailCard>
                    <WiFog className='text-white w-2/5 h-2/5'/>
                    <p className='text-white text-lg lg:text-sm'>{data.currentConditions.visibility} km</p>
                    <p className='absolute top-2 left-2 text-white text-lg lg:text-sm'>Visibility</p>
                </IconDetailCard>
                <IconDetailCard>
                    <WiWindDeg style={{transform:`rotate(${data.currentConditions.winddir}deg)`}} className='text-white w-2/5 h-2/5'/>
                    <p className='text-white text-lg lg:text-sm'>{data.currentConditions.windspeed} km/h</p>
                    <p className='absolute top-2 left-2 text-white text-lg lg:text-sm'>Wind</p>
                </IconDetailCard>
                <IconDetailCard>
                    <WiHumidity className='text-white w-2/5 h-2/5'/>
                    <p className='text-white text-lg lg:text-sm'>{data.currentConditions.humidity} %</p>
                    <p className='absolute top-2 left-2 text-white text-lg lg:text-sm'>Humidity</p>
                </IconDetailCard>
                <IconDetailCard>
                    <WiBarometer className='text-white w-2/5 h-2/5'/>
                    <p className='text-white text-lg lg:text-sm'>{data.currentConditions.pressure} mb</p>
                    <p className='absolute top-2 left-2 text-white text-lg lg:text-sm'>Pressure</p>
                </IconDetailCard>
        </div>
  )
}
