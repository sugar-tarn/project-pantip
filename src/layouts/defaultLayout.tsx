import React from "react";
import HeaderLayout from "@/layouts/headerLayout";
import { Box, Button } from "@mui/material";

import defaultLayoutStyle from "@/styles/layouts/defaultLayout.style";

interface IProp {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<IProp> = (props) => {
  const { classes } = defaultLayoutStyle();
  const { children } = props;

  return (
    <Box className={classes.boxLayout}>
      <Box className={classes.boxFlex}>
        <Box sx={{ padding: "2% 0" }}>
          <HeaderLayout />
        </Box>
        <Box className={classes.boxChildren}>
          <main>{children}</main>
        </Box>
      </Box>
    </Box>
  );
};

export default DefaultLayout;
