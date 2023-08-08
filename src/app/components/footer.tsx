import Link from "next/link";
import {AiFillMail, AiFillFacebook, AiFillInstagram, AiFillTwitterCircle} from 'react-icons/ai'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {BsFillTelephoneFill} from 'react-icons/bs'
import { FooterLinks, FooterLinksPost } from "../contents";
import { BlueButton, GreenButton } from "./button";

export default function Footer() {
  return (
    <footer className="bg-DarkBlue">
			<div className="lg:max-w-[1200px] w-[100%] mx-auto p-[1rem] md:p-6 lg:p-8">

				<div className="flex flex-col gap-[10px] md:gap-0 md:flex-row md:items-center justify-between text-white border-b border-MediumDarkBlue pb-5">
					<Link className="flex items-center gap-[10px] text-[12px] lg:text-[15px]" href={'#'}><AiFillMail /><span className="font-bold">Gmail Account: </span>peoplecare@gmail.com</Link>
					<Link className="flex items-center gap-[10px] text-[12px] lg:text-[15px]" href={'#'}><FaMapMarkerAlt /><span className="font-bold">Address: </span>88 Name Street, Jakarta</Link>
					<Link className="flex items-center gap-[10px] text-[12px] lg:text-[15px]" href={'#'}><BsFillTelephoneFill /><span className="font-bold">Phone Number: </span>+6297834531793</Link>
				</div>

				<div className="grid grid-cols-1 gap-[40px] md:grid-cols-3 lg:grid-cols-4 py-[50px] md:py-[100px] text-white">
					{/* About US */}
					<div className="border-b pb-[15px] md:border-b-0 md:pb-0">
						<h1 className="font-bold text-[20px]">About Us</h1>
						<p className="my-[20px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis natus necessitatibus exercitationem tempore sint magni, doloribus aliquid, adipisci nemo eum tempora, nostrum odio. Qui magni quas, error aut officia repellendus.</p>
						<div className="flex items-center gap-[20px]">
							<Link href={'#'}><AiFillFacebook size='35px'/></Link>
							<Link href={'#'}><AiFillInstagram size='35px'/></Link>
							<Link href={'#'}><AiFillTwitterCircle size='35px'/></Link>
						</div>
					</div>
					{/* About US */}

					{/* Link */}
					<div className="border-b pb-[15px] md:border-b-0 md:pb-0">
						<h1 className="font-bold text-[20px] mb-[20px]">Link</h1>
						<div className="flex flex-col gap-[20px]">
							{
								FooterLinks.map((item, idx) => (
									<Link href={'#'} key={idx} className="text-VeryDarkBlue hover:text-white">{item.link}</Link>
								))
							}
						</div>
					</div>
					{/* Link */}

					{/* Recent Post */}
					<div className="border-b pb-[15px] md:border-b-0 md:pb-0">
						<h1 className="font-bold text-[20px] mb-[20px]">Recent Post</h1>
						<div className="flex flex-col gap-[20px]">
							{
								FooterLinksPost.map((post, idx) => (
									<div className="flex gap-[15px]" key={idx}>
										<div className="flex flex-col gap-[10px]">
											<Link href={'#'} className="text-[15px] hover:text-VeryDarkBlue">{post.title}</Link>
											<p className="text-[12px]">{post.date}</p>
										</div>
									</div>
								))
							}
						</div>
					</div>
					{/* Recent Post */}

					{/* Cpntact Us */}
					<div className="border-b pb-[15px] md:border-b-0 md:pb-0">
						<h1 className="font-bold text-[20px]">Contact Us</h1>
						<h3 className="my-[20px]">Sign up now for weekly updates and news</h3>
						<form action="" method="get" className="mb-[20px]">
							<input type="email" autoComplete="off" name="email" id="email" placeholder="Enter your email" className="border-0 p-4 rounded-[15px]"/>
						</form>
						<GreenButton content="SEND MESSAGE" />
					</div>
					{/* Cpntact Us */}
				</div>	
			</div>
		</footer>
	)
}