"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import GoBackButton from "@/components/GobackButton";
import ProjectContent from "@/components/ProjectContent";

export default function ProjectPage() {
	useGSAP(() => {
		gsap.fromTo(
			".main",
			{ x: 10, opacity: 0 },
			{ x: 0, duration: 0.2, opacity: 1 }
		);
	}, []);

	return (
		<div className="w-screen h-screen flex flex-col items-center px-4 py-8 main opacity-0 overflow-y-auto bg-white text-black">
			<GoBackButton />
			<ProjectContent />
		</div>
	);
}
