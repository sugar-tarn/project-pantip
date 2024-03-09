import React from "react";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import { Box, IconButton, Typography } from "@mui/material";

import announceStyle from "@/styles/component/home/announce.style";

const Announce: React.FC = () => {
  const { classes } = announceStyle();

  return (
    <>
      <Box>
        <Box className={classes.boxTitle}>
          <IconButton className={classes.iconBtn}>
            <CampaignRoundedIcon className={classes.iconTitle} />
          </IconButton>
          <Typography
            variant="fontBoldVw30Md22Sm18"
            className={classes.txtTitle}
          >
            Announce
          </Typography>
        </Box>
        <Box className={classes.boxAnnounce}>
          <Box className={classes.boxTxtAnnounce}>
            <Typography
              variant="fontSemiBoldVw16Md16Sm14"
              className={classes.txtHighlightAnnounce}
            >
              Highlight
            </Typography>
            <Typography
              variant="fontMediumVw16Sm13"
              className={classes.txtAnnounce}
            >
               Pantip Daily Podcast 🎧 3 อันดับกระทู้ฮิตบนพันทิป ประจำวันที่ 7
              มีนาคม 📊
            </Typography>
          </Box>
          <Box className={classes.boxTxtAnnounce}>
            <Typography
              variant="fontSemiBoldVw16Md16Sm14"
              className={classes.txtActivityAnnounce}
            >
              Activity
            </Typography>
            <Typography
              variant="fontMediumVw16Sm13"
              className={classes.txtAnnounce}
            >
               Pantip Point 💰 มีนามีใจ...ชวนเธอคนดีมาเล่น #เกมเขาวงกต
              พร้อมตามหาน้องเพี้ยนกัน ! 🧐🔎
            </Typography>
          </Box>
          <Box className={classes.boxTxtAnnounce}>
            <Typography
              variant="fontSemiBoldVw16Md16Sm14"
              className={classes.txtBodyAnnounce}
            >
              Announce
            </Typography>
            <Typography
              variant="fontMediumVw16Sm13"
              className={classes.txtAnnounce}
            >
              พันทิปเปิดตัวฟีเจอร์ใหม่ : follow ระบบติดตามสมาชิก
              เริ่มติดตามเพื่อนสมาชิกกันได้แล้วนะ
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Announce;
