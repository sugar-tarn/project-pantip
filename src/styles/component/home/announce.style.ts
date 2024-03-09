import { makeStyles } from "tss-react/mui";

const announceStyle = makeStyles()((theme) => {
  return {
    boxTitle: {
      display: "flex",
      alignItems: "center",
      paddingBottom: "2.165%",
      [theme.breakpoints.down("md")]: {
        paddingBottom: "5.412%",
      },
      [theme.breakpoints.down("sm")]: {
        paddingBottom: "6.412%",
      },
    },
    iconBtn: {
      background: "#0084FE",
      width: "4.167vw",
      height: "4.167vw",
    },
    iconTitle: {
      width: "2.5vw",
      height: "2.5vw",
      color: "#FFFF",
    },
    txtTitle: {
      color: "#FFFF",
      marginLeft: "2.89%",
    },
    boxAnnounce: {
      gap: "28px",
      display: "flex",
      flexDirection: "column",
    },
    boxTxtAnnounce: {
      backgroundColor: "#202E39",
      padding: "2% 5.5%",
      borderRadius: "10px",
    },
    txtHighlightAnnounce: {
      color: "#ff9800",
      marginRight: "12px",
    },
    txtActivityAnnounce: {
      color: "#5c6bc0",
      marginRight: "12px",
    },
    txtBodyAnnounce: {
      color: "#388e3c",
      marginRight: "12px",
    },
    txtAnnounce: {
      color: "#FFFFFF",
    },
  };
});

export default announceStyle;
