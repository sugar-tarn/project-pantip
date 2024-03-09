import { makeStyles } from "tss-react/mui";

const bannerStyle = makeStyles()((theme) => {
  return {
    boxTextField: {
      padding: "0 34.022%",
      [theme.breakpoints.down("md")]: {
        padding: "15.022% 23.022%",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "15.022% 0",
      },
    },
  };
});

export default bannerStyle;
