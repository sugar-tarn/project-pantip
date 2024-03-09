import { makeStyles } from "tss-react/mui";

const menuStyle = makeStyles()((theme) => {
  return {
    closeButton: {
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
      [theme.breakpoints.down("sm")]: {
        width: "8.889vw",
        height: "8.889vw",
      },
    },
    drawerSlide: {
      display: "flex",
      [theme.breakpoints.down("md")]: {
        display: "flex",
      },
    },
    drawer: {
      width: "100%",
      height: "100%",
      color: "#093D52",
      backgroundColor: "#151F27",
    },
    flexContent: {
      display: "flex",
      width: "100%",
      height: "100%",
      flexDirection: "column",
    },
    flexBar: {
      width: "100%",
      height: "auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "2.0833% 3.125%",
      [theme.breakpoints.down("sm")]: {
        padding: "4.444% 4.444%",
      },
    },
    flexButton: {
      display: "flex",
    },
    flexList: {
      padding: "6.25%  0 0 5.2083%",
      display: "inline-flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      gap: "24px",
      [theme.breakpoints.down("sm")]: {
        padding: "6.667%  0 0 6.667%",
      },
    },
    textHeader: {
      color: "#FFFFFF",
    },
  };
});

export default menuStyle;
