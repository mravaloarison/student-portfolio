import Link from "next/link";

export default function SocialMediaView({
	mediaName,
	mediaLink,
	mediaIcon,
}: {
	mediaName: string;
	mediaLink: string;
	mediaIcon: string;
}) {
	return (
		<>
			<Link href={mediaLink} target="_blank">
				<img src={mediaIcon} alt={mediaName} />
			</Link>
		</>
	);
}
