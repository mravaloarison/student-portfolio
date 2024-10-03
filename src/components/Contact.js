import { Card, CardContent, Typography, Box, Button, Link } from "@mui/joy";
import DownloadResume from "./DownloadResume";

export default function Contact() {
	const socialMedias = [
		{
			icon: "https://img.icons8.com/?size=100&id=59813&format=png&color=000000",
			link: "https://www.instagram.com/mami_rvl/?hl=en",
		},
		{
			icon: "https://img.icons8.com/?size=100&id=98960&format=png&color=000000",
			link: "https://www.linkedin.com/in/mravaloarison/",
		},
		{
			icon: "https://img.icons8.com/?size=100&id=62856&format=png&color=000000",
			link: "https://github.com/mravaloarison",
		},
	];

	return (
		<div>
			<Card
				variant="soft"
				color="#"
				sx={{
					width: { xs: "100%", sm: "630px" },
				}}
			>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "start",
					}}
				>
					<CardContent>
						<Typography level="h3" sx={{ pb: { xs: 2, sm: 4 } }}>
							Maminiaina Ravalorison
						</Typography>

						<Typography level="body-sm">
							Jr. Software Developer and{" "}
							<span>
								<Link
									href="https://devpost.com/mrava?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
									variant="outlined"
									underline="always"
								>
									7 x Hackathon Winner
								</Link>
							</span>
						</Typography>
					</CardContent>

					<CardContent
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							height: { sm: "117px", xs: "150px" },
							alignItems: "end",
						}}
					>
						<div>
							<DownloadResume />
						</div>

						<Box
							sx={{
								display: "flex",
								gap: 1,
								justifyContent: "end",
								alignItems: "center",
							}}
						>
							{socialMedias.map((socialMedia) => (
								<Link
									key={socialMedia.link}
									startDecorator={
										<img
											width="23"
											height="23"
											src={socialMedia.icon}
										/>
									}
									href={socialMedia.link}
								/>
							))}
						</Box>
					</CardContent>
				</Box>
			</Card>
		</div>
	);
}
