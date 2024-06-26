import Head from "next/head";
import { Inter } from "next/font/google";
import Slider from "./Slider";
import MonthCategory from "./MonthCategory";
import FeatureProduct from "./FeatureProduct";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>E-commerce Shop</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
      <MonthCategory />
      <FeatureProduct />
    </>
  );
}
