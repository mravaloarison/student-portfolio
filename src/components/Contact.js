import { Card, CardContent, Box } from "@mui/joy";
import DownloadResume from "./DownloadResume";
import SocialMedia from "./SocialMedia";
import Profile from "./Profile";

export default function Contact() {
	return (
		<div>
			<Card
				variant="soft"
				color=""
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
					<Profile />
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
						<SocialMedia />
					</CardContent>
				</Box>
			</Card>
		</div>
	);
}
