import {
	Card,
	CardContent,
	Typography,
	Box,
	Button,
	Grid,
	Stack,
	Tooltip,
} from "@mui/joy";
import CastForEducationOutlinedIcon from "@mui/icons-material/CastForEducationOutlined";

export default function Projects() {
	return (
		<div>
			<Card
				variant="soft"
				width={{ xs: "100%", sm: 630 }}
				sx={{
					maxWidth: 630,
					backgroundColor: "primary.50",
				}}
			>
				<CardContent>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "start",
							width: "100%",
						}}
					>
						<Typography level="h4">Projects</Typography>
						<Button
							variant="soft"
							color="primary"
							startDecorator={<CastForEducationOutlinedIcon />}
						>
							More
						</Button>
					</div>
					<Box mt={2}>
						<Grid container spacing={{ sm: 2, xs: 4 }}>
							<Grid item xs={12} sm={6}>
								<Stack
									direction="row"
									sx={{
										alignItems: "start",
									}}
								>
									<Tooltip title="MediaPipe">
										<Button
											variant="link"
											startDecorator={
												<img
													width="27"
													height="27"
													src="https://img.icons8.com/?size=100&id=MYjfd47hfzYG&format=png&color=000000"
												/>
											}
											sx={{ px: 0 }}
										></Button>
									</Tooltip>
									<Tooltip title="Javascript">
										<Button
											variant="link"
											startDecorator={
												<img
													width="27"
													height="27"
													src="https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000"
												/>
											}
											sx={{ px: 0 }}
										></Button>
									</Tooltip>
								</Stack>
								<Button sx={{ px: 0 }} variant="link">
									<Typography
										level="title-md"
										sx={{
											textDecoration: "underline",
										}}
									>
										Flappy x ML
									</Typography>
								</Button>
								<Typography level="body-sm">
									Flappy Bird using face detection to control
									the bird.
								</Typography>
							</Grid>
							<Grid item xs={12} sm={6}>
								<Stack
									direction="row"
									sx={{
										alignItems: "start",
									}}
								>
									<Tooltip title="Gemini API">
										<Button
											variant="link"
											startDecorator={
												<img
													width="27"
													height="27"
													src="https://img.icons8.com/?size=100&id=eoxMN35Z6JKg&format=png&color=000000"
												/>
											}
											sx={{ p: 0 }}
										></Button>
									</Tooltip>

									<Tooltip title="Chrome Extension API">
										<Button
											variant="link"
											startDecorator={
												<img
													width="27"
													height="27"
													src="https://img.icons8.com/?size=100&id=GsBZ74FbIf7a&format=png&color=000000"
												/>
											}
											sx={{ px: 0 }}
										></Button>
									</Tooltip>
									<Tooltip title="Python">
										<Button
											variant="link"
											startDecorator={
												<img
													width="27"
													height="27"
													src="https://img.icons8.com/?size=100&id=l75OEUJkPAk4&format=png&color=000000"
												/>
											}
											sx={{ px: 0 }}
										></Button>
									</Tooltip>
								</Stack>
								<Button sx={{ px: 0 }} variant="link">
									<Typography
										level="title-md"
										sx={{
											textDecoration: "underline",
										}}
									>
										Smart Dictionary
									</Typography>
								</Button>
								<Typography level="body-sm">
									A Chrome extension that explains any
									highlighted text based on its context within
									the webpage, offering clear, relevant
									insights for better understanding.
								</Typography>
							</Grid>
							<Grid item xs={12} sm={6}>
								<Stack
									direction="row"
									sx={{
										alignItems: "start",
									}}
								>
									<Tooltip title="Google Cloud">
										<Button
											variant="link"
											startDecorator={
												<img
													width="27"
													height="27"
													src="https://img.icons8.com/?size=100&id=fpGM2cINbbu4&format=png&color=000000"
												/>
											}
											sx={{ p: 0 }}
										></Button>
									</Tooltip>
									<Tooltip title="Google Maps API">
										<Button
											variant="link"
											startDecorator={
												<img
													width="27"
													height="27"
													src="https://img.icons8.com/?size=100&id=y9LJ0mNaH6XG&format=png&color=000000"
												/>
											}
											sx={{ px: 0 }}
										></Button>
									</Tooltip>
									<Tooltip title="Firebase Auth">
										<Button
											variant="link"
											startDecorator={
												<img
													width="27"
													height="27"
													src="https://img.icons8.com/?size=100&id=87330&format=png&color=000000"
												/>
											}
											sx={{ px: 0 }}
										></Button>
									</Tooltip>
									<Tooltip title="Typescript">
										<Button
											variant="link"
											startDecorator={
												<img
													width="27"
													height="27"
													src="https://img.icons8.com/?size=100&id=nCj4PvnCO0tZ&format=png&color=000000"
												/>
											}
											sx={{ px: 0 }}
										></Button>
									</Tooltip>
								</Stack>
								<Button sx={{ px: 0 }} variant="link">
									<Typography
										level="title-md"
										sx={{
											textDecoration: "underline",
										}}
									>
										Pollen Web app
									</Typography>
								</Button>
								<Typography level="body-sm">
									A web app that display information about
									pollen-producing plants in a user-specified
									location.
								</Typography>
							</Grid>
						</Grid>
					</Box>
				</CardContent>
			</Card>
		</div>
	);
}
