import React from "react";
import Image from "next/image";
import banner from "@/image/banner/banner.png";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Icon,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";

import bannerStyle from "@/styles/component/home/banner.style";

const Banner: React.FC = () => {
  const { classes } = bannerStyle();

  return (
    <>
      <Box>
        <Image
          src={banner}
          alt="str"
          sizes="100vw"
          style={{ width: "100%", height: "auto", display: "block" }}
          width={1649}
          height={627}
          priority={true}
        />
        <Box className={classes.boxTextField}>
          <TextField
            fullWidth
            placeholder="ค้นหาบน pantip"
            size="small"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <Icon>
                      <SearchIcon />
                    </Icon>
                  </IconButton>
                </InputAdornment>
              ),
              sx: {
                borderRadius: 20,
                background: "#FFFF",
                borderColor: "#FFFF",
                fieldset: {
                  borderColor: "#FFFF",
                  border: "none !important",
                },
              },
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Banner;
