"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Divider from "@/components/divider";
import { useRef } from "react";
import { projects, SocialMediaLinks } from "./fakedb";
import SocialMediaView from "@/components/social_medias";
import Link from "next/link";
import ProjectCard from "@/components/project_card";
import { Link2 } from "lucide-react";

export default function Home() {
	const tl = useRef(gsap.timeline());

	useGSAP(() => {
		tl.current = gsap.timeline();

		gsap.fromTo(
			".main",
			{ scale: 0.2, opacity: 0 },
			{ scale: 1, duration: 0.2, opacity: 1 }
		);

		const logos = gsap.utils.toArray(".logo");
		tl.current.from(logos, {
			x: 10,
			duration: 0.5,
			stagger: 0.1,
			opacity: 0,
			ease: "power2.inOut",
		});

		const intros = gsap.utils.toArray(".intro");
		tl.current.from(intros, {
			y: 10,
			duration: 0.5,
			stagger: 0.1,
			opacity: 0,
			ease: "power2.inOut",
		});

		tl.current.from(".projects", {
			y: 10,
			duration: 0.3,
			opacity: 0,
			ease: "power2.inOut",
		});
	});

	function leavePage() {
		gsap.to(".main", { x: 0.2, duration: 0.2, opacity: 0 });

		setTimeout(() => {
			window.location.href = "/about_me";
		}, 200);
	}

	return (
		<div className="main w-full max-w-screen mx-auto min-h-screen opacity-0 p-8 md:p-12 bg-white">
			<div className="flex flex-col gap-8 md:gap-12">
				<nav className="max-w-4xl mx-auto w-full">
					<div className="flex justify-between items-center">
						<div className="w-full">
							<div className="w-14 h-14 md:w-20 md:h-20 border border-gray-200 rounded-full p-1 logo">
								<img
									src="/IMG_6917.jpeg"
									alt="Logo"
									className="w-full h-full rounded-full object-scale-down"
								/>
							</div>
						</div>
						<div className="w-full flex items-end justify-end gap-6">
							{SocialMediaLinks.map((SM) => (
								<div
									key={SM.name}
									className="w-10 h-10 md:w-14 md:h-14 border border-gray-200 rounded-full p-1 logo hover:shadow-lg gorup transition-transform"
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

				<div className="text-xl md:text-2xl font-semibold max-w-4xl mx-auto w-full text-gray-500">
					<p
						className="intro overflow-hidden text-ellipsis whitespace-pre-wrap"
						style={{
							display: "-webkit-box",
							WebkitBoxOrient: "vertical",
							WebkitLineClamp: 3,
						}}
					>
						I am Rava, a recent graduate with a major in Computer
						Information Systems and a minor in Mathematics.
						Originally from{" "}
						<span className="text-black hover:underline">
							<Link
								href="https://en.wikipedia.org/wiki/Madagascar"
								target="_blank"
							>
								Madagascar
							</Link>
						</span>{" "}
						, I studied in New York City for the last four years
						with a lot of passion for technology and as a{" "}
						<span className="text-black">
							self-taught developer
						</span>
						. I love learning new things and I am always looking for
						new opportunities to grow.
					</p>
					<button
						onClick={leavePage}
						className="text-indigo-400 flex gap-2 items-center pt-8 md:pt-12 intro hover:cursor-pointer"
					>
						Read more
						<Link2 />
					</button>
				</div>

				<div className="max-w-4xl mx-auto w-full flex flex-col gap-8 md:gap-12 projects">
					<Divider />
					<div className="text-3xl font-semibold text-black">
						Projects
					</div>
					<div className="flex flex-col gap-12">
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
				</div>

				<footer className="max-w-4xl mx-auto w-full">
					<Divider />
					<div className="flex pt-8 md:pt-12">
						<div className="text-xs text-gray-500">
							© 2025 by Rava
						</div>
					</div>
				</footer>
			</div>
		</div>
	);
}
