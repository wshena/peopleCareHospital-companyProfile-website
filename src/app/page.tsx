'use client'

import Navbar from './components/navbar'
import imageCare from 'public/assets/images/ilustrationCare-removebg-preview.png'
import doctorOperation from 'public/assets/images/vecteezy_doctor-and-assistant-perform-surgery_1226507.jpg'
import Image from 'next/image'
import { BlueButton } from './components/button'
import { ServiceCards } from './components/card'
import Footer from './components/footer'
import {Facilities, HomePost} from '@/app/contents/index'
import Link from 'next/link'
import DoctorCarousel from './components/carousel'
import { useState } from 'react'

const SearchForm = () => {
  return (
    <div className='flex items-center justify-center px-[1rem] pb-[2rem] md:p-0'>
      <form className='max-w-[800px] md:w-[600px] lg:w-[800px] md:absolute md:bottom-[-140px] lg:bottom-[-100px] bg-white border-black rounded-[10px] p-5 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
        <h1 className='text-VeryDarkBlue text-[20px] md:text-[2em] font-bold'>Find Our Doctor</h1>
        <p className='text-gray text-[12px] md:text-[15px] py-[20px] md:py-0'>Find the best doctor from our hospital according to your needs</p>

        <div className="flex mt-[10px] gap-[20px] flex-col md:flex-row items-center justify-center md:justify-between">
          <input type="text" name="docter" id="docter" className='w-[100%] border rounded-[15px] border-LightBlue p-2' placeholder='Find a Doctor Here'/>
          <BlueButton content='Search'/>
        </div>
      </form>
    </div>
  )
}

export default function Home() {
  const [isClick, setIsClick] = useState(0);
  const handleCLick = (idx: number) => {
    setIsClick(idx);
  }

  return (
    <main>
      <Navbar />

      <section className='bg-blue-100 md:relative'>
        <div className='lg:max-w-[1200px] w-[100%] mx-auto p-[1rem] md:p-6 lg:p-8 grid grid-cols-1 md:grid-cols-2 items-center '>
          <div className="flex items-center justify-center">
            <Image src={imageCare} alt='image-care'/>
          </div>
          <div className='text-center md:text-start md:order-first mb-[2rem] md:mb-0'>
            <h1 className='text-black uppercase font-bold text-[1.5em] md:text-[2em] lg:text-[3em]'>Top Class <span className='text-blue-900'>Medical Care</span> Hospital</h1>
            <p className='my-[15px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quasi doloremque unde excepturi asperiores ratione nobis, error odit porro, sequi dolorem beatae libero repellat sed adipisci. Tempore nesciunt accusantium atque.</p>
            <BlueButton content='KNOW MORE'/>
          </div>
        </div>

        <SearchForm />
      </section>

      {/* About */}
      <section className='lg:max-w-[1200px] w-[100%] mx-auto my-[50px] md:mt-[100px] md:pt-[100px] md:pb-6 md:px-6 lg:p-8 grid grid-cols-1 md:grid-cols-2 items-center gap-7'>
        <Image src={doctorOperation} alt='operation' className='grid-cols-3'/>
        <div className='p-[1rem] md:p-6 lg:p-8 text-center md:text-start'>
          <h5 className='font-bold text-blue-500 border-b border-black lg:w-[20%] mb-5'>About Us</h5>
          <h1 className='text-black uppercase font-bold text-[1.5em] md:text-[1.5em] lg:text-[2.5em]'>Best Medical Care For Yourself and Your Family</h1>
          <p className='my-[15px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia dicta laborum, molestias repellendus dignissimos pariatur corrupti asperiores excepturi voluptates. Doloribus!</p>

          <BlueButton content='CONTINUE'/>
        </div>
      </section>
      {/* About */}
      
      {/* Medical Services */}
      <section className='border-t lg:max-w-[1200px] w-[100%] mx-auto p-[1rem] md:p-6 lg:p-8'>
        <div className="flex flex-col items-center py-[30px]">
          <div className="w-[100%] md:w-[60%]">
            <h5 className="text-center text-DarkBlue mb-[10px]  text-[12px] md:text-[18px] font-bold">Medical and General Practice Care</h5>
            <h1 className="text-center mb-[50px] text-[1.5em] md:text-[1.5em] lg:text-[2.5em] text-VeryDarkBlue font-bold">Provide a Wide Range of Health Services For All Patients</h1>
          </div>
          <ServiceCards />

          <div className='mt-[50px]'>
            <BlueButton content='SEE MORE' />
          </div>
        </div>
      </section>
      {/* Medical Services */}

      {/* Medical Facilities */}
      <section className='lg:max-w-[1200px] w-[100%] mx-auto p-[1rem] md:p-6 lg:p-8'>
        <h1 className='text-center mb-[50px] text-[1.5em] md:text-[1.5em] lg:text-[2.5em] text-VeryDarkBlue font-bold'>Our Best Medical Facilites</h1>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-[30px]">
          <aside className='flex flex-col w-[100%] lg:w-[350px]'>
            {
              Facilities.map((item, idx) => (
                <div key={idx} className=''>
                  <button onClick={() => handleCLick(idx)} className={`w-[100%] border-r text-start p-[15px] ${isClick === idx ?'lg:border-r-orange-600 bg-DarkBlue w-[100%] lg:bg-white' : ''} `}>{item.title}</button>
                </div>
              ))
            }
          </aside>

          <div className='flex flex-col gap-[20px] lg:gap-0 lg:flex-row justify-between'>
            <div className='w-[100%] lg:w-[350px]'>
              <h1 className='font-bold text-[1.8rem]'>{Facilities[isClick].title}</h1>
              <p className='py-[10px]'>{Facilities[isClick].description}</p>
              <BlueButton content='DETAILS >' />
            </div>
            <div className='w-[100%] lg:w-[450px] lg:h-[300px] order-first lg:order-last'>
              <img src={Facilities[isClick].image[0]} alt={Facilities[isClick].title} className='w-[100%] h-[100%]'/>
            </div>
          </div>
        </div>
      </section>
      {/* Medical Facilities */}

      {/* Our Teams */}
      <section className='lg:max-w-[1200px] w-[100%] mx-auto p-[1rem] md:p-6 lg:p-8'>
        <h1 className='text-center mb-[50px] text-[1.5em] md:text-[1.5em] lg:text-[2.5em] text-VeryDarkBlue font-bold'>Our Teams</h1>
          
        <div className='px-[20px]'>
          <DoctorCarousel />
        </div>
      </section>
      {/* Our Teams */}

      {/* Post */}
      <section className='lg:max-w-[1200px] w-[100%] mx-auto p-[1rem] md:p-6 lg:p-8'>
        <h1 className='text-center mb-[50px] text-[1.5em] md:text-[1.5em] lg:text-[2.5em] text-VeryDarkBlue font-bold'>Articles and Information</h1>
        <div className="container">
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-[50px] lg:gap-[100px]'>
            <div className=''>
              <div className='mb-[20px]'>
                <img src={HomePost[0].image} alt='operation'/>
              </div>
              <div className='p-5'>
                <p className='mb-[15px]'>By: {HomePost[0].by}, {HomePost[0].date}</p>
                <Link href={'#'} className='hover:text-MediumDarkBlue'><h1 className='text-[2em] font-bold'>{HomePost[0].title}</h1></Link>
                <p className='mt-[15px] mb-[20px] text-[1em]'>{HomePost[0].description}</p>
                      
                <BlueButton content='Read More' />
              </div>
            </div>

            <div className='flex flex-col gap-[50px] pb-[50px] lg:pb-0'>
              {
                HomePost.map((post, idx) => (
                  <div key={idx} className='flex items-center gap-[20px]'>
                    <div className='w-[100px] h-[100px]'>
                      <img src={post.image} alt='post-image' className='w-[100%] h-[100%]'/>
                    </div>
                    <div className='w-[70%]'>
                      <p className='text-[12px]'>{post.date}</p>
                      <Link href={'#'} className='hover:text-MediumDarkBlue'><h1 className='text-[15px]'>{post.title}</h1></Link>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
      {/* Post */}

      <Footer />
    </main>
  )
}
