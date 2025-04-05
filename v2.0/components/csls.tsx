import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";

interface CarouselProps {
	pictureLinks: string[];
	pictureAlts: string[];
	autoPlay?: boolean;
	interval?: number;
}

const ImageCarousel: React.FC<CarouselProps> = ({
	pictureLinks,
	pictureAlts,
	autoPlay = true,
	interval = 5000,
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [prevIndex, setPrevIndex] = useState(0);
	const [direction, setDirection] = useState<"next" | "prev">("next");
	const [isAnimating, setIsAnimating] = useState(false);
	const carouselRef = useRef<HTMLDivElement>(null);
	const slidesRef = useRef<(HTMLDivElement | null)[]>([]);

	if (pictureLinks.length !== pictureAlts.length) {
		console.error(
			"pictureLinks and pictureAlts arrays must have the same length"
		);
	}

	const animateSlide = (newIndex: number, dir: "next" | "prev") => {
		if (isAnimating || newIndex === currentIndex) return;

		setIsAnimating(true);
		setPrevIndex(currentIndex);
		setCurrentIndex(newIndex);
		setDirection(dir);
	};

	useEffect(() => {
		if (slidesRef.current.length === 0) return;

		const currentSlide = slidesRef.current[currentIndex];
		const prevSlide = slidesRef.current[prevIndex];

		if (!currentSlide || !prevSlide || currentIndex === prevIndex) {
			setIsAnimating(false);
			return;
		}

		gsap.set(currentSlide, {
			autoAlpha: 0,
			x: direction === "next" ? "100%" : "-100%",
			scale: 0.8,
		});

		const tl = gsap.timeline({
			onComplete: () => setIsAnimating(false),
		});

		tl.to(prevSlide, {
			duration: 0.25,
			x: direction === "next" ? "-30%" : "30%",
			scale: 0.85,
			autoAlpha: 0,
			ease: "power1.in",
		});

		tl.to(
			currentSlide,
			{
				duration: 0.25,
				x: "0%",
				scale: 1,
				autoAlpha: 1,
				ease: "power1.out",
			},
			"-=0.25"
		);
	}, [currentIndex, prevIndex, direction]);

	const nextSlide = () => {
		if (isAnimating) return;
		const newIndex =
			currentIndex === pictureLinks.length - 1 ? 0 : currentIndex + 1;
		animateSlide(newIndex, "next");
	};

	const prevSlide = () => {
		if (isAnimating) return;
		const newIndex =
			currentIndex === 0 ? pictureLinks.length - 1 : currentIndex - 1;
		animateSlide(newIndex, "prev");
	};

	const goToSlide = (index: number) => {
		if (isAnimating) return;
		const dir = index > currentIndex ? "next" : "prev";
		animateSlide(index, dir);
	};

	useEffect(() => {
		if (!autoPlay) return;

		const slideInterval = setInterval(() => {
			if (!isAnimating) {
				nextSlide();
			}
		}, interval);

		return () => clearInterval(slideInterval);
	}, [autoPlay, interval, isAnimating, currentIndex]);

	return (
		<div
			ref={carouselRef}
			className="relative w-full mx-auto max-w-lg overflow-hidden rounded-2xl shadow-lg"
		>
			<div className="relative min-h-96 bg-gray-900">
				{pictureLinks.map((src, index) => (
					<div
						key={index}
						ref={(el) => {
							slidesRef.current[index] = el;
						}}
						className="absolute inset-0 w-full h-full"
						style={{
							visibility:
								index === currentIndex || index === prevIndex
									? "visible"
									: "hidden",
						}}
					>
						<img
							src={src}
							alt={pictureAlts[index] || `Slide ${index + 1}`}
							className="object-cover md:object-scale-down h-full mx-auto"
						/>
					</div>
				))}

				<button
					onClick={prevSlide}
					disabled={isAnimating}
					className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-white/30 text-white hover:text-black p-3 rounded-full transition-all duration-300 transform hover:scale-110 disabled:opacity-50"
					aria-label="Previous slide"
				>
					<ChevronLeft size={24} />
				</button>

				<button
					onClick={nextSlide}
					disabled={isAnimating}
					className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-white/30 text-white hover:text-black p-3 rounded-full transition-all duration-300 transform hover:scale-110 disabled:opacity-50"
					aria-label="Next slide"
				>
					<ChevronRight size={24} />
				</button>
			</div>

			<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3">
				{pictureLinks.map((_, index) => (
					<button
						key={index}
						onClick={() => goToSlide(index)}
						disabled={isAnimating}
						className={`w-2 h-2 rounded-full transition-all duration-300 ${
							index === currentIndex
								? "bg-white scale-125"
								: "bg-white/50 hover:bg-white/80"
						}`}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>
		</div>
	);
};

export default ImageCarousel;
