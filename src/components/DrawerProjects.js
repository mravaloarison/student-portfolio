import { Drawer, ModalClose, Box, Stack, Typography, Grid } from "@mui/joy";
import ProjectElement from "./ProjectEl";
import CastForEducationOutlinedIcon from "@mui/icons-material/CastForEducationOutlined";
import { ListOfProjects } from "./FakeDb";

export default function DrawerProjects({ open, toggleDrawer }) {
	const LOP = ListOfProjects;

	return (
		<Drawer
			open={open}
			onClose={toggleDrawer(false)}
			size="lg"
			anchor="right"
		>
			<ModalClose />
			<Box p={2}>
				<Stack spacing={2} direction="row" alignItems="center">
					<CastForEducationOutlinedIcon />
					<Typography variant="h4">Projects</Typography>
				</Stack>
				<Box my={2} maxWidth={630} mx="auto" py={{ xs: 2, sm: 8 }}>
					<Grid container spacing={4}>
						{LOP.map((project) => (
							<ProjectElement
								key={project.name}
								name={project.name}
								description={project.description}
								technologies={project.technologies}
							/>
						))}
					</Grid>
				</Box>
			</Box>
		</Drawer>
	);
}
