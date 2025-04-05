"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Page() {
	useGSAP(() => {
		gsap.fromTo(
			".main",
			{ x: 10, opacity: 0 },
			{ x: 0, duration: 0.2, opacity: 1 }
		);
	});

	function goBack() {
		gsap.to(".main", {
			x: -10,
			duration: 0.2,
			opacity: 0,
		});

		setTimeout(() => {
			window.location.href = "/";
		}, 200);
	}

	return (
		<div className="w-screen h-screen main opacity-0 bg-white">
			<div className="p-8 md:p-12 max-w-4xl w-full mx-auto text-xl md:text-2xl font-semibold text-gray-500">
				<button
					onClick={goBack}
					className="text-indigo-400 flex gap-2 items-center text-xl md:text-2xl font-semibold hover:cursor-pointer"
				>
					<ArrowLeft />
					Go back
				</button>
				<p className="intro pt-6 md:pt-10">
					I am Rava, a recent graduate with a major in Computer
					Information Systems and a minor in Mathematics. Originally
					from{" "}
					<span className="text-black hover:underline">
						<Link
							href="https://en.wikipedia.org/wiki/Madagascar"
							target="_blank"
						>
							Madagascar
						</Link>
					</span>{" "}
					, I studied in New York City for the last four years with a
					lot of passion for technology and as a{" "}
					<span className="text-black">self-taught developer</span>. I
					love learning new things and I am always looking for new
					opportunities to grow.
				</p>
				<p className="pt-8 md:pt-12 intro">
					As an international undergraduate student in America, I
					faced challenges securing internships due to visa and hiring
					restrictions. Instead of letting this blocking my growth, I
					took initiative by participating in hackathons to gain
					hands-on experience and build my skills. Through{" "}
					<span className="text-black hover:underline">
						<Link
							href="https://devpost.com/mrava?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
							target="_blank"
						>
							10 hackathon wins
						</Link>
					</span>{" "}
					, I secured over <span className="text-black">$9,000</span>{" "}
					prize in money.
				</p>
			</div>
		</div>
	);
}
