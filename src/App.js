import { Typography, Stack } from "@mui/joy";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

function App() {
	return (
		<Stack
			direction="column"
			spacing={{ xs: 2, sm: 4 }}
			sx={{
				justifyContent: "center",
				alignItems: "center",
				padding: { xs: 2, sm: 4 },
			}}
		>
			<Contact />
			<AboutMe />
			<Projects />
			<Typography level="body-xs">
				{" "}
				© Handcoded by Rava <span className="noto-emoji">🦮</span>
			</Typography>
		</Stack>
	);
}

export default App;
