import { makeStyles } from "tss-react/mui";

const defaultLayoutStyle = makeStyles()(() => {
  return {
    boxLayout: {
      width: "100%",
      height: "100vh",
    },
    boxFlex: {
      display: "flex",
      width: "100%",
      height: "100%",
      flexDirection: "column",
      backgroundColor: "#151F27",
    },
    boxChildren: {
      backgroundColor: "#151F27",
    },
  };
});

export default defaultLayoutStyle;
