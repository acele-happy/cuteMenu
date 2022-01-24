import { AppBar,Toolbar, Typography } from "@mui/material";

const  AppHeader= ()=> {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            My React App 
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default AppHeader;
