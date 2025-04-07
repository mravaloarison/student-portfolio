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
		<div className="w-screen h-screen main opacity-0 bg-white overflow-y-scroll">
			<div className="p-8 md:p-12 max-w-7xl w-full mx-auto text-xl md:text-2xl font-semibold text-gray-500">
				<button
					onClick={goBack}
					className="text-indigo-400 flex gap-2 items-center text-xl md:text-2xl font-semibold hover:cursor-pointer"
				>
					<ArrowLeft />
					Go back
				</button>

				<h1 className="pt-10 text-3xl md:text-4xl font-bold text-black">
					About Me
				</h1>

				<p className="intro pt-6 md:pt-10">
					My name is Rava. I recently graduated with a major in{" "}
					<span className="text-black font-bold">
						Computer Information Systems
					</span>{" "}
					and a minor in{" "}
					<span className="text-black font-bold">Mathematics</span>.
					I'm originally from{" "}
					<span className="text-black hover:underline">
						<Link
							href="https://en.wikipedia.org/wiki/Madagascar"
							target="_blank"
						>
							Madagascar
						</Link>
					</span>{" "}
					where I started with no coding background and where English
					wasn't even my second language. I wasn't born into tech, I
					pursued it out of curiosity and determination.
				</p>

				<p className="pt-8 md:pt-12 intro">
					As an international undergrad studying in the U.S., I faced
					difficulties landing internships due to{" "}
					<span className="text-black font-bold">
						visa and hiring restrictions
					</span>
					. But rather than let that slow me down, I turned to{" "}
					<span className="text-black font-bold">hackathons</span> to
					get real-world experience and grow.
				</p>
				<p className="pt-6 intro">
					Through{" "}
					<span className="text-black hover:underline">
						<Link
							href="https://devpost.com/mrava?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
							target="_blank"
						>
							10 hackathon wins
						</Link>
					</span>
					, I've earned over{" "}
					<span className="text-black font-bold">$9,000</span> in
					prize money.
				</p>

				<div className="pt-6 pb-10">
					<img
						src="/images/story2.jpg"
						alt="Hackathon win photo"
						className="w-full h-full object-cover border border-gray-300 rounded-2xl"
					/>
				</div>

				<h2 className="text-2xl md:text-3xl font-bold text-black pt-8">
					My Purpose
				</h2>
				<p className="pt-6 intro">
					Coming from Madagascar — currently ranked as one of the
					poorest country in the world — I have seen very few globally
					known success stories. My ultimate dream is to change that.
					I want to inspire people from my homeland to dream big,
					believe in themselves, and pursue tech or any passion with
					all their heart. If I can do it, starting with no background
					and teaching myself everything, then so can they.
				</p>

				<h2 className="text-2xl md:text-3xl font-bold text-black pt-12">
					What Hackathons Mean to Me
				</h2>

				<p className="pt-8 intro">
					What I value most about the{" "}
					<span className="text-black font-bold">
						hacker community
					</span>{" "}
					is being surrounded by people with similar energy, passions,
					and ambitions.
				</p>

				<p className="pt-8 md:pt-12 intro">
					I have also met a lot of people and I find it exciting to
					know that someday, I'll be able to say I have{" "}
					<span className="text-black font-bold">
						friends from all over the world
					</span>
					.
				</p>

				<div className="pt-6 pb-12">
					<img
						src="/images/story4.jpg"
						alt="Friends photo"
						className="w-full h-full object-cover border border-gray-300 rounded-2xl"
					/>
				</div>
			</div>
		</div>
	);
}
