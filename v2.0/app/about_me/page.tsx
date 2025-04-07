"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ImageScroller from "@/components/img_scroll";

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
			<div className="p-8 md:p-12 max-w-7xl w-full mx-auto text-lg md:text-xl text-gray-700 leading-relaxed">
				<button
					onClick={goBack}
					className="text-indigo-500 flex gap-2 mb-8 items-center text-xl md:text-2xl font-semibold hover:cursor-pointer"
				>
					<ArrowLeft />
					Go back
				</button>

				<ImageScroller
					images={[
						"/winner.jpeg",
						"/frenz.jpeg",
						"/frenz13.jpeg",
						"/frenz14.jpeg",
						"/frenz15.jpeg",
						"/frenz16.jpeg",
						"/frenz3.jpeg",
						"/frenz4.jpeg",
						"/frenz5.jpeg",
						"/frenz6.jpeg",
						"/frenz7.jpeg",
						"/frenz8.jpeg",
						"/frenz2.jpeg",
						"/frenz9.jpeg",
						"/frenz10.jpeg",
						"/frenz11.jpeg",
						"/frenz12.jpeg",
						"/frenz1.jpeg",
					]}
				/>

				<h1 className="pt-8 text-2xl md:text-3xl font-bold text-black">
					My Journey
				</h1>
				<p className="pt-4">
					My name is Rava. I recently graduated with a major in{" "}
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
					, where I had no coding background and where English wasn't
					even my second language.
				</p>
				<p className="pt-4">
					I wasn’t born into tech — I pursued it out of curiosity,
					passion, and pure determination.
				</p>

				<h2 className="pt-10 text-xl md:text-2xl font-bold text-black">
					Why I Do What I Do
				</h2>
				<p className="pt-4">
					My country, Madagascar, is currently ranked as one of the{" "}
					<span className="font-semibold text-black">
						poorest nation in the world
					</span>
					. There are very few globally known success stories from
					Madagascar — I want to be one of them. Not for fame, but to{" "}
					<span className="font-semibold text-black">
						inspire people from my homeland
					</span>{" "}
					to dream big, believe in themselves, and pursue tech or any
					passion with all their heart.
				</p>

				<h2 className="pt-10 text-xl md:text-2xl font-bold text-black">
					My Hackathon Journey
				</h2>
				<p className="pt-4">
					As an international student in the U.S., I faced barriers to
					internships due to{" "}
					<span className="font-semibold text-black">
						visa and hiring restrictions
					</span>
					. Instead of giving up, I turned to{" "}
					<span className="font-semibold text-black">hackathons</span>{" "}
					to learn and gain real-world experience.
				</p>
				<p className="pt-4">
					Through{" "}
					<Link
						href="https://devpost.com/mrava?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
						target="_blank"
						className="text-indigo-600 underline"
					>
						10 hackathon wins
					</Link>
					, I've earned over{" "}
					<span className="font-semibold text-black">$9,000</span> in
					prize money and connected with incredible teams and mentors.
				</p>

				<h2 className="pt-10 text-xl md:text-2xl font-bold text-black">
					Community Matters
				</h2>
				<p className="pt-4">
					What I value most about the{" "}
					<span className="font-semibold text-black">
						hacker community
					</span>{" "}
					is being surrounded by people with similar energy, passions,
					and ambitions.
				</p>
				<p className="pt-4">
					I have also met a lot of people and I find it exciting to
					know that someday, I'll be able to say I have{" "}
					<span className="text-black font-bold">
						friends from all over the world
					</span>
					. These connections have shaped who I am, and I hope to one
					day give back even more.
				</p>
			</div>
		</div>
	);
}
