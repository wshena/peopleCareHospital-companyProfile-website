'use client'

import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import {HiMenuAlt3} from 'react-icons/hi'
import {IoMdClose} from 'react-icons/io'
import { NavbarLink } from "../contents";
import { EmeraldButton } from './button';
import {FaAngleDown} from 'react-icons/fa'
import logo from 'public/assets/images/pngwing.com.png'

export default function Navbar() {
	const [isClick, setIsClick] = useState(false);
	const handleClick = () => {
		setIsClick(!isClick);
	}	
	useEffect(() => {
		handleClick();
	}, [])

  return (
    <header className="lg:max-w-[1200px] w-[100%] mx-auto relative">
			<nav className="flex items-center justify-between p-[1rem] md:p-6 lg:p-8">
				<Link href={'/'}><Image src={logo} alt="Logo" width={50} height={50}/></Link>
				
				<button className="md:hidden" onClick={() => handleClick()}><HiMenuAlt3 style={{width: '25px', height:'25px'}}/></button>
				{
					isClick  && (
						<div className="gap-5 flex flex-col md:hidden absolute top-0 right-0 w-[60%] h-[100vh] bg-orange-300 p-[1.8rem] border-orange-500 border">
							<div className='w-[100%] flex items-end justify-end'><button onClick={() => handleClick()}><IoMdClose style={{width: '25px', height:'25px'}}/></button></div>
							{
								NavbarLink.map((link, idx) => (
									<Link href={'#'} key={idx} className="hover:border-b border-white">{link.link}</Link>
								))
							}
						</div>
					)
				}

				<div className="gap-5 hidden md:flex">
					{
						NavbarLink.map((link, idx) => (
							<Link href={'#'} key={idx} className="">{link.link}</Link>
						))
					}
				</div>

				<div className='hidden md:block'>
					<EmeraldButton content='Appointment'/>
				</div>
			</nav>
		</header>
  )
}