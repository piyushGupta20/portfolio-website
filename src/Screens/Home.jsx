import React from 'react'
import {ReactComponent as Image} from '../components/img.svg'


function Home() {
  return (
    <div className='flex justify-between align-middle'>
        <Image width={300} className="m-10"/>
        <div className='m-10'>
        <h1 className='text-orange-400 text-5xl mt-6 '>PEEUSH GUPTA</h1>
        <h3 className='text-orange-300 text-xl mt-6'>web developer,coding enthuthiast and student and git commit</h3>
        <h5 className='text-orange-100 text-sm mt-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur impedit libero sapiente. Harum quidem repellendus voluptatum, libero eaque culpa cupiditate!</h5>
    </div>
        </div>
  )
}

export default Home