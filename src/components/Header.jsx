import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AbcIcon from '@mui/icons-material/Abc';
import TextFormatIcon from '@mui/icons-material/TextFormat';

const Header = () => (
  <AppBar position="sticky" style={{ backgroundColor: "#4EC5D4" }}>
    <Toolbar>
      <Typography variant="h6" style={{ flexGrow: 1, color: "#fff", display: 'flex', alignItems: 'center', gap: 6 }}>
        <AbcIcon /> AlifboO‘yin
      </Typography>

      <Button color="inherit">Biz haqimizda</Button>

      <Button
        color="inherit"
        sx={{
          alignItems: "center",
          display: "flex",
          gap: 1
        }}
      >
        Harflar <TextFormatIcon />
      </Button>

      <Button
        color="inherit"
        sx={{
          alignItems: "center",
          display: "flex",
          gap: 1
        }}
      >
        Bog‘lanish <LocalPhoneIcon />
      </Button>

      <Button
        variant="contained"
        style={{ backgroundColor: "#fff", color: "#28a745" }}
      >
        Bepul darsni sinab ko‘rish
      </Button>
    </Toolbar>
  </AppBar>
);

export default Header;
