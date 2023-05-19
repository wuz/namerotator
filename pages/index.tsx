import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const { names = "", speed = "5000" } = router.query;
  const namesMap = (names as string).split(",");
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === namesMap.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, Number(speed));
    return () => clearInterval(interval);
  }, [setCurrentIndex, currentIndex, namesMap, speed]);
  return <div>{namesMap[currentIndex]}</div>;
};

export default Home;
