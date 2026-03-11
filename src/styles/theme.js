import { createTheme } from "@mui/material/styles";

const theme = createTheme({

  palette: {
    primary: {
      main: "#1976d2"
    },
    success: {
      main: "#4caf50"
    },
    warning: {
      main: "#ff9800"
    },
    error: {
      main: "#f44336"
    }
  },

  typography: {
    fontFamily: "Roboto, sans-serif"
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none"
        }
      }
    }
  }

});

export default theme;