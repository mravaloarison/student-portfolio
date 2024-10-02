import { Card, CardContent, Typography, Stack, Button } from "@mui/joy";
import { Select, Option } from "@mui/joy";
import { useState } from "react";
import Contact from "./components/Contact";

function App() {
	const [color, setColor] = useState("none");

	const ListOfColors = ["primary", "warning", "success"];

	return (
		<Stack
			direction="column"
			spacing={2}
			sx={{
				justifyContent: "center",
				alignItems: "center",
				padding: 4,
			}}
		>
			<Contact />

			<Card variant="soft" color="#ddd6fe">
				<CardContent>
					<Typography level="title-md">Soft card</Typography>
					<Typography>Description of the card.</Typography>
				</CardContent>
			</Card>

			<Card variant="soft">
				<CardContent>
					<Typography level="title-md">Soft card</Typography>
					<Typography>Description of the card.</Typography>
				</CardContent>
			</Card>
		</Stack>
	);
}

export default App;
