import {AiFillFacebook, AiFillInstagram, AiFillTwitterCircle} from 'react-icons/ai'
import { GreenButton } from "./button"
import Link from 'next/link'

type Service = {
	title: string,
	description: string,
	image: string
}

type HealthServiceCards = {
	service: Service
}

type Doctor = {
	name: string,
	division: string,
	image: string
}

export const Doctors:Doctor[] = [
	{ name: "Dr. Sarah Johnson", division: "Pediatrics", image: '/assets/images/doctors/ashkan-forouzani-DPEPYPBZpB8-unsplash.jpg' },
  { name: "Dr. Michael Lee", division: "Cardiology" , image: '/assets/images/doctors/bruno-rodrigues-279xIHymPYY-unsplash.jpg'},
  { name: "Dr. Emily Wilson", division: "Dermatology" , image: '/assets/images/doctors/cdc-_N7I1JyPYJw-unsplash.jpg'},
  { name: "Dr. Robert Smith", division: "Orthopedics" , image: '/assets/images/doctors/dalton-ngangi-ZCztndOWdjs-unsplash (1).jpg'},
  { name: "Dr. Jennifer Garcia", division: "Obstetrics and Gynecology" , image: '/assets/images/doctors/national-cancer-institute-kooSjlL8LnQ-unsplash.jpg'},
  { name: "Dr. David Brown", division: "Neurology" , image: '/assets/images/doctors/pexels-thirdman-5327585.jpg'},
  { name: "Dr. Laura Martinez", division: "Internal Medicine" , image: '/assets/images/doctors/pexels-antoni-shkraba-6749773.jpg'},
  { name: "Dr. John Anderson", division: "Gastroenterology" , image: '/assets/images/doctors/pexels-pavel-danilyuk-5998468.jpg'},
  { name: "Dr. Jessica Robinson", division: "Psychiatry" , image: '/assets/images/doctors/pexels-thirdman-5327580.jpg'},
  { name: "Dr. William Taylor", division: "Ophthalmology" , image: '/assets/images/doctors/rian-ramirez-rm7rZYdl3rY-unsplash.jpg'},
  { name: "Dr. Elizabeth White", division: "Endocrinology" , image: '/assets/images/doctors/siednji-leon-fkgsW3bhFzU-unsplash.jpg'},
  { name: "Dr. Christopher Martinez", division: "Oncology" , image: '/assets/images/doctors/vaibhav-vivian-3HIroMoyre8-unsplash.jpg'}
]

const HealthService:Service[] = [
	{title: 'Laboratory Analysis', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae aperiam neque nam facilis non nesciunt?', image: '/assets/images/services/arseny-togulev-DE6rYp1nAho-unsplash.jpg'},
	{title: 'Neurology Clinic', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae aperiam neque nam facilis non nesciunt?', image: '/assets/images/services/brandon-holmes-GofYo51GQ_4-unsplash.jpg'},
	{title: 'Pediatric Clinic', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae aperiam neque nam facilis non nesciunt?', image: '/assets/images/services/marcelo-leal-6pcGTJDuf6M-unsplash.jpg'},
	{title: 'Pathology Clinic', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae aperiam neque nam facilis non nesciunt?', image: '/assets/images/services/martha-dominguez-de-gouveia-g0PTp89dumc-unsplash.jpg'},
	{title: 'Table Paralysis', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae aperiam neque nam facilis non nesciunt?', image: '/assets/images/services/piron-guillaume-U4FyCp3-KzY-unsplash.jpg'},
	{title: 'Heart of Surgery', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae aperiam neque nam facilis non nesciunt?', image: '/assets/images/services/martha-dominguez-de-gouveia-KF-h9HMxRKg-unsplash.jpg'},
]

const ServiceCard:React.FC<HealthServiceCards> = ({service}) => {
  return (
		<div className="flex flex-col min-w-[150px] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-[10px]">
			<div className="w-[100%] h-[100px] md:h-[200px] rounded-[10px]">
				<img src={service.image} alt={service.title} className='w-[100%] h-[100%] rounded-[10px]'/>
			</div>
			<div className="p-4 md:p-7 flex flex-col gap-[20px]">
				<h1 className="font-bold text-[1em] md:text-[1.4em] lg:text-[1.8em]">{service.title}</h1>
				<p>{service.description}</p>
				<GreenButton content="Read More"/>
			</div>
		</div>
	)
}

export const ServiceCards = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
			{
				HealthService.map((item, idx) => (
					<ServiceCard key={idx} service={item}/>
				))
			}
		</div>
	)
}

export const DoctorCard:React.FC<Doctor> = ({name, division, image}) => {
	return (
		<div className="md:w-[250px] w-[100%] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
			<div className="w-[100%] h-[300px]">
				<img src={image} alt={name} className='w-[100%] h-[100%]'/>
			</div>
			<div className="flex flex-col items-center justify-center">
				<div className="text-center">
					<h1 className='mt-[15px] font-bold text-[18px]'>{name}</h1>
					<h2 className='font-bold text-MediumDarkBlue text-[15px]'>{division}</h2>
				</div>
				<div className="flex items-center gap-[20px] my-[30px]">
					<Link href={'#'}><AiFillFacebook size='25px'/></Link>
					<Link href={'#'}><AiFillInstagram size='25px'/></Link>
					<Link href={'#'}><AiFillTwitterCircle size='25px'/></Link>
				</div>
			</div>
		</div>
	)
}