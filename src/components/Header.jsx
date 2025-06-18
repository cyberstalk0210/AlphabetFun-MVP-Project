import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AbcIcon from '@mui/icons-material/Abc';
import TextFormatIcon from '@mui/icons-material/TextFormat';
const Header = () => (
  <AppBar position="sticky" style={{ backgroundColor: "#28a745" }}>
    <Toolbar>
      <Typography variant="h6" style={{ flexGrow: 1, color: "#fff" }}>
        Alphabet Fun
      </Typography>
      <Button color="inherit">About</Button>
      <Button
        color="inherit"
  sx={{
    alignItems: "center",
    display: "flex",
    gap: 1}}
      >
Alphabet         <TextFormatIcon/>
     </Button>

      <Button
        color="inherit"
        sx={{ alignItems: "center", display: "flex", gap: 1 }}
      >
        Contact <LocalPhoneIcon />
      </Button>

      <Button
        variant="contained"
        style={{ backgroundColor: "#fff", color: "#28a745" }}
      >
        Book a Free Class
      </Button>
    </Toolbar>
  </AppBar>
);

export default Header;
