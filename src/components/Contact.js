import { Card, CardContent, Typography, Box, Button, Link } from "@mui/joy";
import ArticleIcon from "@mui/icons-material/Article";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import DownloadResume from "./DownloadResume";

export default function Contact() {
	return (
		<div>
			<Card
				variant="soft"
				color="#9923"
				sx={{
					maxWidth: 630,
					width: "100%",
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
						<Typography level="h3" sx={{ pb: 2 }}>
							Maminiaina Ravalorison
						</Typography>

						<Typography level="body-sm">
							Jr. Software Engineer and 7 x Hackathon Winner
						</Typography>
					</CardContent>

					<CardContent
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							// on small screen: height: "146px"
							height: "116px",

							alignItems: "end",
						}}
					>
						<div>
							<DownloadResume />
						</div>

						<Box
							sx={{
								display: "flex",
								gap: 2,
								justifyContent: "end",
								alignItems: "center",
							}}
						>
							<Link
								startDecorator={
									<img
										width="28"
										height="28"
										src="https://img.icons8.com/?size=300&id=DpOQ6G5p47f0&format=png&color=000000"
									/>
								}
								href="https://www.instagram.com/mami_rvl/?hl=en"
							/>
							<Link
								startDecorator={
									<img
										width="28"
										height="28"
										src="https://img.icons8.com/?size=300&id=uzhJQ5CyNoaH&format=png&color=000000"
									/>
								}
								href="https://www.linkedin.com/in/mravaloarison/"
							/>
							<Link
								startDecorator={
									<img
										width="28"
										height="28"
										src="https://img.icons8.com/?size=100&id=zuHqpgzrusU5&format=png&color=000000"
									/>
								}
								href="https://github.com/mravaloarison"
							/>
						</Box>
					</CardContent>
				</Box>
			</Card>
		</div>
	);
}
