import gsap from "gsap";
import { ArrowLeft } from "lucide-react";

const GoBackButton = () => {
	const goBack = () => {
		gsap.to(".main", {
			x: -10,
			duration: 0.2,
			opacity: 0,
		});

		setTimeout(() => {
			window.location.href = "/";
		}, 200);
	};

	return (
		<button
			onClick={goBack}
			className="text-indigo-500 flex gap-2 items-center text-xl md:text-2xl font-semibold hover:cursor-pointer mb-6"
		>
			<ArrowLeft />
			Go back
		</button>
	);
};

export default GoBackButton;
