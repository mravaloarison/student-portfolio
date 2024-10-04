import { Button, Tooltip } from "@mui/joy";

export default function Technology({ name, icon }) {
	return (
		<Tooltip title={name}>
			<Button
				variant="link"
				startDecorator={
					<img width="21" height="21" src={icon} alt="icon" />
				}
				sx={{ px: 0 }}
			></Button>
		</Tooltip>
	);
}
