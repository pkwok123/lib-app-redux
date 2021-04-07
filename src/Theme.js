import { createMuiTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import red from "@material-ui/core/colors/red";

const Theme = createMuiTheme({
  typography: {
    h2: {
      "@media (max-width:600px)": {
        fontSize: "2.375rem",
      },
    },
    h6: {
      fontWeight: "bold",
      "@media (max-width:600px)": {
        fontSize: "1.125rem",
      },
    },
    body2: {
      fontWeight: "bold",
    },
  },
});

export default Theme;
