import React from "react";
import CardRecommendedTopic from "@/components/home/cardRecommendedTopic.component";
import DefaultLayout from "@/layouts/defaultLayout";
import Banner from "@/components/home/banner.component";
import Announce from "@/components/home/announce.component";
import ImageRecommendedTopic1 from "@/image/recommendedTopic/topic-1.png";
import ImageRecommendedTopic2 from "@/image/recommendedTopic/topic-2.png";
import ImageTrendTopic1 from "@/image/trendTopic/topic-1.png";
import ImageTrendTopic2 from "@/image/trendTopic/topic-2.png";
import profile from "@/image/recommendedTopic/profile.png";
import CardTrendTopic from "@/components/home/cardTrendTopic.component";
import { Box } from "@mui/material";

import indexStyle from "@/styles/pages";

const Home: React.FC = () => {
  const { classes } = indexStyle();
  const [loading, setLoading] = React.useState<boolean>(true);

  const dataRecommendedTopic = {
    recommendedTopic: [
      {
        title:
          "เชียร์สด ! แบดมินตัน YONEX French Open 2024 : รอบก่อนรองชนะเลิศ (8 มี.ค. 67) (คู่แรกเวลา 16.00 น.)",
        name: "Stamp-Badminton",
        dateTime: "19 ชั่วโมง",
        commentTotal: "360",
        image: ImageRecommendedTopic1,
        avatar: profile,
      },
      {
        title: "อ.โทริยาม่า อากิระ  เสียชีวิตแล้ว",
        name: "แฮมมะ",
        dateTime: " 8 มี.ค.",
        commentTotal: "121",
        image: ImageRecommendedTopic2,
        avatar: profile,
      },
      {
        title: "แฟนทำความสะอาดบ้านน่ากลัวมากครับ",
        name: "สมาชิกหมายเลข 8007148",
        dateTime: " 8 มี.ค.",
        commentTotal: "125",
        image: ImageRecommendedTopic1,
        avatar: profile,
      },
      {
        title:
          "เชียร์สด ! แบดมินตัน YONEX French Open 2024 : รอบก่อนรองชนะเลิศ (8 มี.ค. 67) (คู่แรกเวลา 16.00 น.)",
        name: "Stamp-Badminton",
        dateTime: "19 ชั่วโมง",
        commentTotal: "360",
        image: ImageRecommendedTopic1,
        avatar: profile,
      },
      {
        title: "อ.โทริยาม่า อากิระ  เสียชีวิตแล้ว",
        name: "แฮมมะ",
        dateTime: " 8 มี.ค.",
        commentTotal: "121",
        image: ImageRecommendedTopic2,
        avatar: profile,
      },
      {
        title: "แฟนทำความสะอาดบ้านน่ากลัวมากครับ",
        name: "สมาชิกหมายเลข 8007148",
        dateTime: " 8 มี.ค.",
        commentTotal: "125",
        image: ImageRecommendedTopic1,
        avatar: profile,
      },
      {
        title:
          "เชียร์สด ! แบดมินตัน YONEX French Open 2024 : รอบก่อนรองชนะเลิศ (8 มี.ค. 67) (คู่แรกเวลา 16.00 น.)",
        name: "Stamp-Badminton",
        dateTime: "19 ชั่วโมง",
        commentTotal: "360",
        image: ImageRecommendedTopic1,
        avatar: profile,
      },
      {
        title: "อ.โทริยาม่า อากิระ  เสียชีวิตแล้ว",
        name: "แฮมมะ",
        dateTime: " 8 มี.ค.",
        commentTotal: "121",
        image: ImageRecommendedTopic2,
        avatar: profile,
      },
      {
        title: "แฟนทำความสะอาดบ้านน่ากลัวมากครับ",
        name: "สมาชิกหมายเลข 8007148",
        dateTime: " 8 มี.ค.",
        commentTotal: "125",
        image: ImageRecommendedTopic1,
        avatar: profile,
      },
    ],
  };

  const dataTrendTopic = {
    trendTopic: [
      {
        title: "หิวข้าว",
        name: "Stamp-Badminton",
        dateTime: "19 ชั่วโมง",
        commentTotal: "360",
        image: ImageTrendTopic1,
        avatar: profile,
      },
      {
        title: "อ.โทริยาม่า อากิระ  เสียชีวิตแล้ว",
        name: "แฮมมะ",
        dateTime: " 8 มี.ค.",
        commentTotal: "121",
        image: ImageTrendTopic2,
        avatar: profile,
      },
      {
        title: "แฟนทำกับข้าวน่ากลัวมากครับ",
        name: "สมาชิกหมายเลข 8007148",
        dateTime: " 8 มี.ค.",
        commentTotal: "125",
        image: ImageTrendTopic1,
        avatar: profile,
      },
      {
        title: "หิวข้าว",
        name: "Stamp-Badminton",
        dateTime: "19 ชั่วโมง",
        commentTotal: "360",
        image: ImageTrendTopic1,
        avatar: profile,
      },
      {
        title: "อ.โทริยาม่า อากิระ  เสียชีวิตแล้ว",
        name: "แฮมมะ",
        dateTime: " 8 มี.ค.",
        commentTotal: "121",
        image: ImageTrendTopic2,
        avatar: profile,
      },
      {
        title: "แฟนทำกับข้าวน่ากลัวมากครับ",
        name: "สมาชิกหมายเลข 8007148",
        dateTime: " 8 มี.ค.",
        commentTotal: "125",
        image: ImageTrendTopic1,
        avatar: profile,
      },
      {
        title: "หิวข้าว",
        name: "Stamp-Badminton",
        dateTime: "19 ชั่วโมง",
        commentTotal: "360",
        image: ImageTrendTopic1,
        avatar: profile,
      },
      {
        title: "อ.โทริยาม่า อากิระ  เสียชีวิตแล้ว",
        name: "แฮมมะ",
        dateTime: " 8 มี.ค.",
        commentTotal: "121",
        image: ImageTrendTopic2,
        avatar: profile,
      },
      {
        title: "แฟนทำกับข้าวน่ากลัวมากครับ",
        name: "สมาชิกหมายเลข 8007148",
        dateTime: " 8 มี.ค.",
        commentTotal: "125",
        image: ImageTrendTopic1,
        avatar: profile,
      },
    ],
  };

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <DefaultLayout>
      <Box className={classes.paddingBanner}>
        <Banner />
      </Box>
      <Box className={classes.paddingAll}>
        <Announce />
      </Box>
      <Box className={classes.paddingAll}>
        <CardRecommendedTopic
          dataRecommendedTopic={dataRecommendedTopic.recommendedTopic}
          loading={loading}
        />
      </Box>
      <Box className={classes.paddingAll}>
        <CardTrendTopic
          dataTrendTopic={dataTrendTopic.trendTopic}
          loading={loading}
        />
      </Box>
    </DefaultLayout>
  );
};

export default Home;
