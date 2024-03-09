import React from "react";
import NextLink from "next/link";
import MenuBar from "@/components/headerLayout/menu.component";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton, Typography } from "@mui/material";

import headerLayoutStyle from "@/styles/layouts/headerLayout.style";

const HeaderLayout: React.FC = () => {
  const { classes } = headerLayoutStyle();
  const [open, setOpen] = React.useState<boolean>(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <Box className={classes.boxCenterBar}>
        <Box className={classes.boxFlexGrow}>
          <Box className={classes.boxContentCenter}>
            <NextLink className={classes.textLink} href="/">
              <Typography variant="fontMediumVw16">หน้าแรก</Typography>
            </NextLink>
            <NextLink href="/" className={classes.textLink}>
              <Typography variant="fontMediumVw16">คอมมูนิตี้</Typography>
            </NextLink>
            <NextLink href="/" className={classes.textLink}>
              <Typography variant="fontMediumVw16">กิจกรรม</Typography>
            </NextLink>
            <NextLink className={classes.textLink} href="/">
              <Typography variant="fontMediumVw16">แลกพอยต์</Typography>
            </NextLink>
            <NextLink className={classes.textLink} href="/">
              <Typography variant="fontMediumVw16">อื่นๆ</Typography>
            </NextLink>
            <NextLink className={classes.textLink} href="/">
              <Typography variant="fontMediumVw16">ตั้งกระทู้</Typography>
            </NextLink>
            <NextLink className={classes.textLink} href="/">
              <Typography variant="fontMediumVw16">
                เข้าสู่ระบบ/สมัครสมาชิก
              </Typography>
            </NextLink>
          </Box>
        </Box>
        <IconButton onClick={handleOpen} className={classes.menuButton}>
          <MenuIcon />
        </IconButton>
        <MenuBar
          open={open}
          setOpen={() => {
            handleOpen();
          }}
        />
      </Box>
    </>
  );
};

export default HeaderLayout;
