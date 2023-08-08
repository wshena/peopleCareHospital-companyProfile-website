type Link = {
	link: string,
	route: string
}

type Post = {
	title: string,
	date: string
}

type MainPost = Post & {
	description: string,
	image: string,
	by: string
}

type TitleDescription = {
	title: string,
	description: string,
	image: string[]
}

export const Facilities:TitleDescription[] = [
	{
		title: 'Admission',
		description: 'Our inpatient unit is equipped with various facilities to increase your comfort during treatment at RSUI.',
		image: [
			'/assets/images/facilities/hush-naidoo-jade-photography-Zp7ebyti3MU-unsplash.jpg'
		]
	},
	{
		title: 'Hemodialysis',
		description: 'Hemodialysis / Dialysis is a medical procedure as a replacement therapy for kidney function that cannot work normally by using a dialysis machine.',
		image: [
			'/assets/images/facilities/jesse-orrico-Us3AQvyOP-o-unsplash.jpg'
		]
	},
	{
		title: 'Intensive Care (ICU, PICU, NICU)',
		description: 'Our intensive care unit is supported by intensive care consultant anesthetists, as well as an experienced and certified medical team in treating critical patients who require intensive care.',
		image: [
			'/assets/images/facilities/lucas-vasques-9vnACvX2748-unsplash.jpg'
		]
	},
	{
		title: 'Medical Check Up',
		description: 'Modern lifestyle and high stress levels have an impact on health. Regular health checks are important to do to prevent degenerative diseases and their fatal consequences.',
		image: [
			'/assets/images/facilities/marcel-scholte-LPurJnihmQI-unsplash.jpg'
		]
	},
	{
		title: 'Laboratory',
		description: "People Care Hospital's laboratory applies the integrated laboratory concept so that it has clinical pathology, anatomical pathology, microbiology, parasitology, biomolecular, and blood bank laboratories.",
		image: [
			'/assets/images/facilities/piron-guillaume-y5hQCIn1c6o-unsplash.jpg'
		]
	},
	{
		title: 'Radiology',
		description: "The People Care Hospital Radiology Unit has excellent services in the fields of neuroradiology, abdominal radiology, musculoskeletal radiology, as well as interventional and cardiovascular radiology.",
		image: [
			'/assets/images/facilities/robina-weermeijer-3KGF9R_0oHs-unsplash.jpg'
		]
	},
]

export const NavbarLink:Link[] = [
	{link: 'Home', route:'/'},
	{link: 'About', route:'/about'},
	{link: 'Doctors', route:'/doctors'},
	{link: 'Blog', route:'/blog'},
	{link: 'Shop', route:'/shop'},
	{link: 'Contact', route:'/contact'},
]

export const FooterLinks:Link[] = [
	{
		link: 'Contact Us',
		route: '/contact'
	},
	{
		link: 'Career',
		route: '/career'
	},
	{
		link: 'Suggestions and critics',
		route: '/critics'
	},
	{
		link: 'Privacy Policy',
		route: '/policy'
	}
]

export const FooterLinksPost:Post[] = [
	{
		title: '10 Simple and Effective Ways to Boost Your Immune System',
		date: '6 August 2023'
	},
	{
		title: 'The Power of Mindfulness: How to Reduce Stress and Improve Well-Being',
		date: '3 August 2023'
	},
	{
		title: 'A Guide to Building a Balanced Diet: Nourish Your Body with Nutrient-Rich Foods',
		date: '1 August 2023'
	}
]

export const HomePost:MainPost[] = [
	{
		title: 'The Role of Nutrition in Maintaining a Healthy Body and Mind',
		description: 'This blog can explore the importance of proper nutrition in supporting overall health, well-being, and mental clarity.',
		date: '5 August 2023',
		image: '/assets/images/boxed-water-is-better-FGKaGbbGv8I-unsplash.jpg',
		by: 'Anonymous'
	},
	{
		title: 'Managing Stress: Effective Strategies for a Healthier and Happier Life',
		description: 'In this blog, you can discuss various techniques and practices to cope with stress and improve mental and physical health.',
		date: '7 August 2023',
		image: '/assets/images/emma-simpson-mNGaaLeWEp0-unsplash.jpg',
		by: 'Anonymous'
	},
	{
		title: 'Understanding Common Medical Conditions: Symptoms, Treatments, and Prevention',
		description: 'This blog can provide valuable information about prevalent medical conditions, their symptoms, available treatments, and preventive measures.',
		date: '10 August 2023',
		image: '/assets/images/jonathan-borba-lrQPTQs7nQQ-unsplash.jpg',
		by: 'Anonymous'
	},
	{
		title: 'Healthcare Technology Advancements: Revolutionizing Patient Care',
		description: 'Explore the latest technological innovations in the healthcare industry and how they are transforming patient care and medical practices.',
		date: '14 August 2023',
		image: '/assets/images/vitalii-pavlyshynets-kcRFW-Hje8Y-unsplash.jpg',
		by: 'Anonymous'
	},
]