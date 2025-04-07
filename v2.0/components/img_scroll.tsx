"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
	images: string[];
	interval?: number;
};

export default function ImageScroller({ images, interval = 3500 }: Props) {
	const containerRef = useRef<HTMLDivElement>(null);
	const [currentIndex, setCurrentIndex] = useState(0);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	const animate = () => {
		const el = containerRef.current;
		if (el) {
			gsap.fromTo(
				el,
				{ opacity: 0, x: 30 },
				{ opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
			);
		}
	};

	useEffect(() => {
		startAutoScroll();
		return () => stopAutoScroll();
	}, [currentIndex]);

	const startAutoScroll = () => {
		stopAutoScroll();
		intervalRef.current = setInterval(() => {
			goToNext();
		}, interval);
	};

	const stopAutoScroll = () => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
			intervalRef.current = null;
		}
	};

	const goToNext = () => {
		setCurrentIndex((prev) => (prev + 1) % images.length);
		animate();
	};

	const goToPrev = () => {
		setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
		animate();
	};

	return (
		<div
			className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gray-50"
			onMouseEnter={stopAutoScroll}
			onMouseLeave={startAutoScroll}
		>
			<div ref={containerRef} className="w-full h-full">
				<img
					src={images[currentIndex]}
					alt={`Image ${currentIndex + 1}`}
					className="w-full h-full object-scale-down"
				/>
			</div>

			<button
				onClick={goToPrev}
				className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/10 hover:bg-black/30 text-white rounded-full p-2 shadow-md"
			>
				<ChevronLeft size={24} />
			</button>

			<button
				onClick={goToNext}
				className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/10 hover:bg-black/30 text-white rounded-full p-2 shadow-md"
			>
				<ChevronRight size={24} />
			</button>
		</div>
	);
}
