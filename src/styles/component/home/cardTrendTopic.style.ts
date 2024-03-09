import { makeStyles } from "tss-react/mui";

const cardTrendTopicStyle = makeStyles()((theme) => {
  return {
    boxTitle: {
      display: "flex",
      alignItems: "center",
      paddingBottom: "2.165%",
      [theme.breakpoints.down("md")]: {
        paddingBottom: "5.412%",
      },
      [theme.breakpoints.down("md")]: {
        paddingBottom: "6.412%",
      },
    },
    iconBtn: {
      background: "#EC7B40",
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
    boxCardItems: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      cursor: "pointer",
    },
    boxContent: {
      backgroundColor: "#FFFF",
      padding: "5.62%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    boxTxtContent: {
      paddingBottom: "13.71%",
    },
    txtHeader: {
      color: "#00000",
    },
    boxPost: {
      display: "flex",
      justifyContent: "space-between",
    },
    avatarProfile: {
      width: "2.0834vw",
      height: "2.0834vw",
      [theme.breakpoints.down("md")]: {
        width: "3.907vw",
        height: "3.907vw",
      },
      [theme.breakpoints.down("sm")]: {
        width: "6.907vw",
        height: "6.907vw",
      },
    },
    txtInfoPost: {
      color: "#00000",
    },
    iconComment: {
      width: "1.042vw",
      height: "1.042vw",
      [theme.breakpoints.down("md")]: {
        width: "3.907vw",
        height: "3.907vw",
      },
      [theme.breakpoints.down("sm")]: {
        width: "6.907vw",
        height: "6.907vw",
      },
    },
    txtComment: {
      marginLeft: "10px",
      color: "#00000",
    },
  };
});

export default cardTrendTopicStyle;
