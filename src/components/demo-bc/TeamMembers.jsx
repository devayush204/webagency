import React from 'react'
import img1 from "../../../public/images/mem1.jpg"
import img2 from "../../../public/images/mem2.jpg"
import img3 from "../../../public/images/mem3.jpg"
import img4 from "../../../public/images/mem4.jpg"
import Image from 'next/image'

const TeamMembers = () => {

    const data = [
        {
            name: 'Daniel Jung',
            position: 'Director and Co-Founder',
            image: img1,
        },
        {
            name: 'Jovana Wolf',
            position: 'Corporate Sale Europe and Euro-Asia',
            image: img2,
        },
        {
            name: 'Montano G',
            position: 'Sales  – Asia and South East',
            image: img3,
        },
        {
            name: 'Muya Litwai',
            position: 'Finance Corporate – South Africa',
            image: img4,
        },
    ]

  return (
    <section className='flex flex-col justify-center lg:px-24 px-2 md:items-center py-10 md:py-20 w-screen'>
        <p className='text-2xl font-semibold text-black ml-8 md:ml-0'>Executive Team</p>
        <p className='text-6xl  font-extrabold text-purple-500 ml-8 md:ml-0 '>Team Members</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-5'>
        {data.map((item, index) =>(
            <div key={index} className='relative rounded-xl overflow-hidden hover:scale-125 transition-all'>
                <Image alt='img' src={item.image} className='w-full  h-full' />
                <div className='absolute z-10 bottom-5 w-full p-2 bg-opacity-70 bg-white'>
                    <p className='text-xl font-bold '>{item.name}</p>
                    <p className='text-xs'>{item.position}</p>
                </div>
            </div>
        ))}
        </div>
    </section>
  )
}

export default TeamMembers