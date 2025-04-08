"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Divider from "@/components/divider";
import { projects, SocialMediaLinks } from "./fakedb";
import SocialMediaView from "@/components/social_medias";
import Link from "next/link";
import ProjectCard from "@/components/project_card";
import { Link2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();

	useGSAP(() => {
		gsap.fromTo(
			".main",
			{ x: 10, opacity: 0 },
			{ x: 0, duration: 0.2, opacity: 1 }
		);

		gsap.from(".logo", {
			x: 10,
			duration: 0.5,
			stagger: 0.1,
			opacity: 0,
			ease: "power2.inOut",
		});

		gsap.from(".intro", {
			x: 10,
			duration: 0.5,
			stagger: 0.1,
			opacity: 0,
			ease: "power2.inOut",
		});

		gsap.from(".projects", {
			x: 10,
			duration: 0.3,
			opacity: 0,
			ease: "power2.inOut",
		});
	}, []);

	function leavePage() {
		gsap.to(".main", { x: 0.2, duration: 0.2, opacity: 0 });
		setTimeout(() => {
			// window.location.href = "/about_me";
			router.push("/about_me");
		}, 200);
	}

	return (
		<div className="main w-full max-w-screen mx-auto min-h-screen p-8 xl:p-12 bg-white font-sans">
			<div className="flex flex-col gap-12">
				<nav className="max-w-7xl mx-auto w-full">
					<div className="flex justify-between items-center">
						<div className="logo w-14 h-14 xl:w-20 xl:h-20 border border-gray-200 rounded-full p-1">
							<img
								src="/IMG_6917.jpeg"
								alt="Logo"
								className="w-full h-full rounded-full object-scale-down"
							/>
						</div>
						<div className="flex items-center gap-4 xl:gap-6">
							{SocialMediaLinks.map((SM) => (
								<div
									key={SM.name}
									className="logo w-10 h-10 xl:w-14 xl:h-14 border border-gray-200 rounded-full p-1 hover:shadow-lg transition-transform"
								>
									<SocialMediaView
										mediaName={SM.name}
										mediaLink={SM.link}
										mediaIcon={SM.icon}
									/>
								</div>
							))}
						</div>
					</div>
				</nav>

				<section className="max-w-7xl mx-auto w-full text-gray-600 text-xl xl:text-2xl font-medium leading-relaxed">
					<p className="intro">
						My name is Rava. I will soon be graduating with a major
						in{" "}
						<span className="font-semibold text-black">
							Computer Information Systems
						</span>{" "}
						and a minor in{" "}
						<span className="font-semibold text-black">
							Mathematics
						</span>
						. I'm originally from{" "}
						<Link
							href="https://en.wikipedia.org/wiki/Madagascar"
							target="_blank"
							className="text-indigo-600 underline"
						>
							Madagascar
						</Link>
						, where I had no coding background and where English
						wasn't even my second language.
					</p>
					<button
						onClick={leavePage}
						className="text-indigo-500 flex gap-2 items-center pt-8 xl:pt-12 intro hover:underline"
					>
						Read more
						<Link2 />
					</button>
				</section>

				{/* Projects Section */}
				<section className="max-w-7xl mx-auto w-full flex flex-col gap-10 projects">
					<Divider />
					<h2 className="text-3xl font-bold text-black">Projects</h2>
					<div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
						{projects.map((project) => (
							<ProjectCard
								key={project.title}
								title={project.title}
								description={project.description}
								year={project.year}
								ts={project.technologies}
								githubLink={project.githubLink}
								screenshots={project.screenshots || []}
							/>
						))}
					</div>
				</section>

				<footer className="max-w-7xl mx-auto w-full">
					<Divider />
					<div className="text-center text-xs text-gray-400 pt-8 xl:pt-12">
						© 2025 by Rava
					</div>
				</footer>
			</div>
		</div>
	);
}
