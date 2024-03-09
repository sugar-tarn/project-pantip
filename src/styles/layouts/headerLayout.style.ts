import { makeStyles } from "tss-react/mui";

const headerLayoutStyle = makeStyles()((theme) => {
  return {
    boxCenterBar: {
      width: "100%",
      height: "96px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      [theme.breakpoints.down("md")]: {
        padding: "2.0833% 3.125%",
        height: "auto",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "4.444% 4.444%",
        height: "auto",
      },
    },
    boxFlexGrow: {
      flexGrow: 1,
      padding: "0 12.6567%",
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    boxContentCenter: {
      display: "flex",
      justifyContent: "space-between",
      backgroundColor: "#202E39",
      borderRadius: "20px",
      alignItems: "center",
      padding: "1.795% 5.385%",
      width: "100%",
      height: "100%",
      pointerEvents: "auto",
    },
    imageBox: {
      display: "flex",
      width: "2.326%",
      height: "auto",
      [theme.breakpoints.down("md")]: {
        width: "3.907%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "6.724%",
      },
    },
    textLink: {
      color: "#ffffff",
      textDecoration: "none",
      "&:hover": {
        color: "#CAB288",
      },
    },
    menuButton: {
      placeSelf: "center",
      width: "5.208vw",
      height: "5.208vw",
      alignItems: "center",
      borderRadius: "100px",
      border: "1px solid var",
      borderColor: "#093D52",
      background: "#CAB288",
      pointerEvents: "auto",
      minWidth: "32px",
      minHeight: "32px",
      "&:focus": {
        background: "#CAB288",
      },
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
      [theme.breakpoints.down("sm")]: {
        width: "8.889vw",
        height: "8.889vw",
      },
    },
  };
});

export default headerLayoutStyle;
