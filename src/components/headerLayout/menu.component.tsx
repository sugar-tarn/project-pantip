import React from "react";
import NextLink from "next/link";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Box, Drawer, IconButton, List, Typography } from "@mui/material";

import menuStyle from "@/styles/component/headerLayout/menu.style";

interface IProps {
  open: boolean;
  setOpen: () => void;
}

const MenuBar: React.FC<IProps> = (props) => {
  const { classes } = menuStyle();

  const { open, setOpen } = props;

  return (
    <Drawer
      anchor="top"
      variant="temporary"
      open={open}
      className={classes.drawerSlide}
      classes={{ paper: classes.drawer }}
    >
      <Box className={classes.flexContent}>
        <Box className={classes.flexBar}>
          <Box className={classes.flexButton}>
            <IconButton onClick={setOpen} className={classes.closeButton}>
              <CloseRoundedIcon />
            </IconButton>
          </Box>
        </Box>
        <List className={classes.flexList}>
          <NextLink style={{ textDecoration: "none" }} href={`/`}>
            <Typography variant="fontMedium18" className={classes.textHeader}>
              หน้าแรก
            </Typography>
          </NextLink>
          <NextLink style={{ textDecoration: "none" }} href={`/`}>
            <Typography variant="fontMedium18" className={classes.textHeader}>
              คอมมูนิตี้
            </Typography>
          </NextLink>

          <NextLink style={{ textDecoration: "none" }} href="/">
            <Typography variant="fontMedium18" className={classes.textHeader}>
              กิจกรรม
            </Typography>
          </NextLink>
          <NextLink style={{ textDecoration: "none" }} href={`/`}>
            <Typography variant="fontMedium18" className={classes.textHeader}>
              แลกพอยต์
            </Typography>
          </NextLink>
          <NextLink style={{ textDecoration: "none" }} href={`/`}>
            <Typography variant="fontMedium18" className={classes.textHeader}>
              อื่นๆ
            </Typography>
          </NextLink>
          <NextLink style={{ textDecoration: "none" }} href={`/`}>
            <Typography variant="fontMedium18" className={classes.textHeader}>
              ตั้งกระทู้
            </Typography>
          </NextLink>
          <NextLink style={{ textDecoration: "none" }} href={`/`}>
            <Typography variant="fontMedium18" className={classes.textHeader}>
              เข้าสู่ระบบ/สมัครสมาชิก
            </Typography>
          </NextLink>
        </List>
      </Box>
    </Drawer>
  );
};
export default MenuBar;
