import { CardContent, Link, Typography } from "@mui/joy";

export default function Profile() {
	return (
		<CardContent>
			<Typography level="h3" sx={{ pb: { xs: 2, sm: 4 } }}>
				Maminiaina Ravalorison
			</Typography>

			<Typography level="body-sm">
				Jr. Software Developer and{" "}
				<span>
					<Link
						href="https://devpost.com/mrava?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
						target="_blank"
						variant="outlined"
						underline="always"
					>
						7 x Hackathon Winner
					</Link>
				</span>
			</Typography>
		</CardContent>
	);
}
