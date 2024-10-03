import {
	Box,
	Button,
	Card,
	CardContent,
	Grid,
	Stack,
	Typography,
} from "@mui/joy";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";

export default function AboutMe() {
	return (
		<div>
			<Card
				variant="soft"
				sx={{
					maxWidth: 630,
					width: "100%",
					backgroundColor: "success.50",
				}}
			>
				<CardContent>
					<Stack
						direction="row"
						spacing={3}
						sx={{
							alignItems: "start",
							justifyContent: "space-between",
						}}
					>
						<Typography level="h4">
							I am a fun guy, a Developer, a Dog Lover, and a
							Musician
						</Typography>
						<div>
							<Button
								variant="soft"
								color="success"
								startDecorator={<ContactsOutlinedIcon />}
							>
								About
							</Button>
						</div>
					</Stack>
					{/* <Stack direction="row" spacing={3} pt={2}>
						<Typography level="h1">
							<p className="noto-emoji">😅</p>
						</Typography>
						<Typography level="h1">
							<p className="noto-emoji">💻</p>
						</Typography>
						<Typography level="h1">
							<p className="noto-emoji">🐶</p>
						</Typography>
						<Typography level="h1">
							<p className="noto-emoji">🎸</p>
						</Typography>
					</Stack> */}
				</CardContent>
			</Card>
		</div>
	);
}
