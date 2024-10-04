export const ListOfTechnologies = [
	{
		name: "Amplify by AWS",
		icon: "https://img.icons8.com/?size=100&id=33039&format=png&color=000000",
	},
	{
		name: "API",
		icon: "https://img.icons8.com/?size=100&id=Ov4kJCn8JtAH&format=png&color=000000",
	},
	{
		name: "Firestore",
		icon: "https://img.icons8.com/?size=100&id=SQEEoDcpUD6c&format=png&color=000000",
	},
	{
		name: "PostgreSQL",
		icon: "https://img.icons8.com/?size=100&id=38561&format=png&color=000000",
	},
	{
		name: "C#",
		icon: "https://img.icons8.com/?size=100&id=mhwmyz1eu7T5&format=png&color=000000",
	},
	{
		name: "Visual Studio",
		icon: "https://img.icons8.com/?size=100&id=ezj3zaVtImPg&format=png&color=000000",
	},
	{
		name: ".NET Maui",
		icon: "https://img.icons8.com/?size=100&id=1BC75jFEBED6&format=png&color=000000",
	},
	{
		name: "XCode",
		icon: "https://img.icons8.com/?size=100&id=51974&format=png&color=000000",
	},
	{
		name: "Swift",
		icon: "https://img.icons8.com/?size=100&id=24465&format=png&color=000000",
	},
	{
		name: "SwiftUI",
		icon: "https://img.icons8.com/?size=100&id=3cCrxzZF7LfB&format=png&color=000000",
	},
	{
		name: "Flask",
		icon: "https://img.icons8.com/?size=100&id=MHcMYTljfKOr&format=png&color=000000",
	},
	{
		name: "Github",
		icon: "https://img.icons8.com/?size=100&id=62856&format=png&color=000000",
	},
	{
		name: "React",
		icon: "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000",
	},
	{
		name: "MediaPipe",
		icon: "https://img.icons8.com/?size=100&id=MYjfd47hfzYG&format=png&color=000000",
	},
	{
		name: "Game dev",
		icon: "https://img.icons8.com/?size=100&id=sY9Y61aHdgZv&format=png&color=000000",
	},
	{
		name: "Javascript",
		icon: "https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000",
	},
	{
		name: "Gemini API",
		icon: "https://img.icons8.com/?size=100&id=eoxMN35Z6JKg&format=png&color=000000",
	},
	{
		name: "Chrome Extension API",
		icon: "https://img.icons8.com/?size=100&id=GsBZ74FbIf7a&format=png&color=000000",
	},
	{
		name: "Python",
		icon: "https://img.icons8.com/?size=100&id=l75OEUJkPAk4&format=png&color=000000",
	},
	{
		name: "Google Cloud",
		icon: "https://img.icons8.com/?size=100&id=fpGM2cINbbu4&format=png&color=000000",
	},
	{
		name: "Google Maps API",
		icon: "https://img.icons8.com/?size=100&id=y9LJ0mNaH6XG&format=png&color=000000",
	},
	{
		name: "Firebase Auth",
		icon: "https://img.icons8.com/?size=100&id=87330&format=png&color=000000",
	},
	{
		name: "Typescript",
		icon: "https://img.icons8.com/?size=100&id=nCj4PvnCO0tZ&format=png&color=000000",
	},
];

export const ListOfProjects = [
	{
		name: "Flappy x ML",
		description: "Flappy Bird using face detection to control the bird.",
		technologies: ["MediaPipe", "Game dev", "Javascript"],
	},
	{
		name: "Smart Dictionary",
		description:
			"A Chrome extension that explains any highlighted text based on its context within the webpage, offering clear, relevant insights for better understanding.",
		technologies: ["Gemini API", "Chrome Extension API", "Python", "Flask"],
		link: "",
		github: null,
	},
	{
		name: "Pollen Web app",
		description:
			"A web app that display information about pollen-producing plants in a user-specified location.",
		technologies: [
			"Google Cloud",
			"Google Maps API",
			"Firebase Auth",
			"Typescript",
			"Amplify by AWS",
		],
		link: "",
		github: "https://github.com/mravaloarison/pollen_-ravaloarison",
	},
	{
		name: "Student Porfolio",
		description:
			"My personal portfolio website, built with React and hosted on Github Pages.",
		technologies: ["Github", "React"],
		link: "",
		github: "",
	},
	{
		name: "First time using Firestore",
		description:
			"A bookstore app to test out Firebase Auth and Firestore. It also integragted the Gemini API as I wanted to try it out using Typescript (I usually use Python for Backend) for the first the time.",
		technologies: [
			"Firebase Auth",
			"Firestore",
			"Typescript",
			"Gemini API",
		],
		link: "https://bookbridge-app-gray.vercel.app/",
		github: "https://github.com/mravaloarison/bookstore_app",
	},
	{
		name: "Nypc",
		description:
			"This app was originally a Python app that sends automated email to users. The issue was, it needed to be run manually. Now that it is a web app, it can be run on a server and send emails automatically using Cron Jobs.",
		technologies: ["Python", "Typescript", "Amplify by AWS"],
		link: "https://main.dr80uwsjpr41h.amplifyapp.com/test",
		github: "https://github.com/mravaloarison/nypc",
	},
	{
		name: "Wallet",
		description:
			"This is a simple .NET MAUI application that checks if a credit card number is valid and identifies its type (Visa, MasterCard, Amex or Unknown), originally a project for C from Harvard CS50x.",
		technologies: ["Visual Studio", ".NET Maui", "C#"],
		link: null,
		github: "https://github.com/mravaloarison/wallet",
	},

	{
		name: "My First iOS App",
		description: "A memory game using emojis to learn Swift and SwiftUI.",
		technologies: ["XCode", "Swift", "SwiftUI"],
		link: null,
		github: "https://github.com/mravaloarison/Memorize-CS193p/blob/main/CS193p/ContentView.swift",
	},
	{
		name: "My First Web App",
		description:
			"An app that allows users to create, read, update, and delete passwords.",
		technologies: ["Flask", "Python", "Javascript", "PostgreSQL"],
		link: null,
		github: "https://github.com/mravaloarison/passwave",
	},
];

export const SocialMedias = [
	{
		icon: "https://img.icons8.com/?size=100&id=59813&format=png&color=000000",
		link: "https://www.instagram.com/mami_rvl/?hl=en",
	},
	{
		icon: "https://img.icons8.com/?size=100&id=98960&format=png&color=000000",
		link: "https://www.linkedin.com/in/mravaloarison/",
	},
	{
		icon: "https://img.icons8.com/?size=100&id=62856&format=png&color=000000",
		link: "https://github.com/mravaloarison",
	},
];

export const AboutMeSections = [
	{
		emoji: "👋",
		text: "Hello! I'm a student from Madagascar with a passion for software development. I'm currently seeking an internship or part-time job to gain more experience in the field.",
	},
	{
		emoji: "🌍",
		text: "With a keen interest in Machine Learning, AR and VR, I also love animals and aspire to use my skills to protect the environment and wildlife.",
	},
	{
		emoji: "💻",
		text: "I have a deep love for Hackathons. I find it exciting to collaborate with students and mentors who share my interest in technology. Each Hackathon I attend allows me to explore new tech stacks, making me a fast learner. Additionally, I enjoy helping others learn new things and learning from them in return.",
	},
	{
		emoji: "🐶",
		text: "If all jobs paid the same, I would probably be a dog sitter or work in a dog shelter. I love dogs.",
	},
	{
		emoji: "🎶",
		text: "In my free time, I enjoy playing the guitar, bass, and piano (currently learning this one). You can check out some samples of my playing on my Instagram. I'm also an avid chess player.",
	},
];
