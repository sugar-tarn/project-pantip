import { StaticImageData } from "next/image";

export interface RecommendedTopic {
  image: StaticImageData;
  title: string;
  name: string;
  dateTime: string;
  commentTotal: string;
  avatar: StaticImageData;
}

export interface TrendTopic {
  image: StaticImageData;
  title: string;
  name: string;
  dateTime: string;
  commentTotal: string;
  avatar: StaticImageData;
}
