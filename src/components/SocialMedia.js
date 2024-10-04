import { Box, Link } from "@mui/joy";
import { SocialMedias } from "./FakeDb";

export default function SocialMedia() {
	const SM = SocialMedias;

	return (
		<Box
			sx={{
				display: "flex",
				gap: 1,
				justifyContent: "end",
				alignItems: "center",
			}}
		>
			{SM.map((socialMedia) => (
				<Link
					key={socialMedia.link}
					startDecorator={
						<img
							width="23"
							height="23"
							src={socialMedia.icon}
							alt="SM icon"
						/>
					}
					href={socialMedia.link}
					target="_blank"
				/>
			))}
		</Box>
	);
}
