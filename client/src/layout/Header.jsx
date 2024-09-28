import { AppBar, Toolbar, Typography, Box } from "@mui/material"
import { Link } from "wouter";

const Header = () => {

  return (
    <AppBar position="static" sx={{ bgcolor: "var(--black-color)" }}>
      <Toolbar sx={{ margin: 0, minHeight: { lg: "55px", md: "55px" }, padding: "1rem 0" }}>

        <Box flexGrow={1} display={"flex"} alignItems={"center"} gap={1} >
          <img
            alt="icon"
            src={"/icon.svg"}
            width={40}
            height={40}
          />
          <Typography variant="h6" component={Link} href="/"  >
            Organizador
          </Typography>
        </Box>

        {/* <TabNavbar /> */}

      </Toolbar>
    </AppBar>
  )
}

export default Header