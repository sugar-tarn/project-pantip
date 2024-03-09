import React from "react";
import Image from "next/image";
import CommentIcon from "@mui/icons-material/Comment";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Skeleton,
  Typography,
} from "@mui/material";
import { RecommendedTopic } from "@/interface/home.interface";

import cardRecommendedTopicStyle from "@/styles/component/home/cardRecommendedTopic.style";

interface IProps {
  loading: boolean;
  dataRecommendedTopic: RecommendedTopic[];
}

const CardRecommendedTopic: React.FC<IProps> = (props) => {
  const { dataRecommendedTopic, loading } = props;
  const { classes } = cardRecommendedTopicStyle();

  return (
    <>
      <Box>
        <Box className={classes.boxTitle}>
          <IconButton className={classes.iconBtn}>
            <ForumRoundedIcon className={classes.iconTitle} />
          </IconButton>
          <Typography
            variant="fontBoldVw30Md22Sm18"
            className={classes.txtTitle}
          >
            กระทู้แนะนำโดยสมาชิก
          </Typography>
        </Box>
        <Grid container spacing={{ md: 6.5, xs: 2 }} justifyContent="center">
          {dataRecommendedTopic
            ? dataRecommendedTopic.slice(0, 9).map((data, index) => (
                <Grid item md={4} sm={6} xs={12} key={index}>
                  <Box className={classes.boxCardItems}>
                    <Box>
                      {loading ? (
                        <Skeleton
                          variant="rectangular"
                          width="100%"
                          height="14.012vw"
                          sx={{
                            background: "#D6D6D6",
                          }}
                        />
                      ) : (
                        <Image
                          src={data.image}
                          alt="str"
                          sizes="100vw"
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "block",
                          }}
                          width={424}
                          height={269}
                          priority={true}
                        />
                      )}
                    </Box>
                    <Box className={classes.boxContent}>
                      <Box className={classes.boxTxtContent}>
                        {loading ? (
                          <Skeleton variant="rectangular" />
                        ) : (
                          <Typography
                            component="p"
                            variant="fontMediumVw16Md15Sm14"
                            className={classes.txtHeader}
                          >
                            {data.title}
                          </Typography>
                        )}
                      </Box>
                      <Box className={classes.boxPost}>
                        <Box display="flex">
                          {loading ? (
                            <Skeleton variant="rectangular" />
                          ) : (
                            <Avatar
                              alt="avatar"
                              src={data.avatar.src}
                              className={classes.avatarProfile}
                            />
                          )}
                          {loading ? (
                            <Skeleton
                              variant="rectangular"
                              width={"10vw"}
                              height={"100%"}
                            />
                          ) : (
                            <Box marginLeft="14px">
                              <Typography
                                variant="fontMediumVw14Md14Sm14"
                                component="p"
                                className={classes.txtInfoPost}
                              >
                                {data.name}
                              </Typography>
                              <Typography
                                variant="fontMediumVw14Md14Sm14"
                                className={classes.txtInfoPost}
                              >
                                {data.dateTime}
                              </Typography>
                            </Box>
                          )}
                        </Box>
                        {loading ? (
                          <Skeleton
                            variant="rectangular"
                            width={"5vw"}
                            height={"100%"}
                          />
                        ) : (
                          <Box display="flex">
                            <CommentIcon className={classes.iconComment} />
                            <Typography
                              variant="fontMediumVw14Md14Sm14"
                              className={classes.txtComment}
                            >
                              {data.commentTotal}
                            </Typography>
                          </Box>
                        )}
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              ))
            : null}
        </Grid>
      </Box>
    </>
  );
};

export default CardRecommendedTopic;
