import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from 'next/link'
import HomeFullWidthcarosuel from "@/components/testslider/slider"
const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const tattoos = [
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/21561_20230312230323292-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/ba76717a-788c-42ec-a50c-c946a7deb7b7`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/26057_20230814190028838-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/ffbb5f5b-c124-4599-9a2a-8b8fb70d0305`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/2836_20220916175556641-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/fe25e0ec-bf1d-451d-93d4-70ac74a6286d`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/13796_20230105095643483-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/1374fce3-e79a-4381-a9f7-281c84793b5c`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/18174_20230208215617181-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/c2377f90-d4c4-4056-896e-53a2da502273`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/22296_20230323003140535-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/32a4ef5e-159d-4e3a-8498-5f2244b0fb8d`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/4677_20221006183710030-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/570d3a82-3d83-41b1-8b3c-ed72fe064c42`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/4674_20221006183315588-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/ebdd32be-7b9f-429b-8adb-4dc92161143a`,
    },
  ];


  return (
    <>
     
<HomeFullWidthcarosuel
        title={'f'}
        content={'dd'}
        datas={tattoos}
        buttonName={''}
        keyword={``}
        sectionBg=""
        altTag={"d"}
      />

  
    </>
  );
}
