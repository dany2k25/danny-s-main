import React from "react";
import Title from "./Title";

const HomeBanner = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <Title className="text-3xl md:text-4xl uppercase font-bold text-center">
      Where Horsepower Meets Streetwear
      </Title>
      <p className="text-sm text-center text-lightColor/80 font-medium max-w-[480px]">
        Find everything you need to look and feel your best, and shop the latest
        collection for BMW Motorsport,Porsche and Mercedes AMG Series
      </p>
    </div>
  );
};

export default HomeBanner;
