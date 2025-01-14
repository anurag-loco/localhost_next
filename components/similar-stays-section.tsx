import type { NextPage } from "next";
import { Typography, Box } from "@mui/material";
import StayCard from "./stay-card";

export type SimilarStaysSectionType = {
  className?: string;
};

const SimilarStaysSection: NextPage<SimilarStaysSectionType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-5 max-w-full text-left text-5xl text-dark font-archivo ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
        <h3 className="m-0 relative text-inherit tracking-[0.02em] font-semibold font-[inherit] mq450:text-lgi">
          Similar stays
        </h3>
        <a className="[text-decoration:none] relative text-base tracking-[0.46px] leading-[26px] font-semibold text-accent text-center">
          View all
        </a>
      </div>
      <div className="self-stretch overflow-x-auto flex flex-row items-start justify-start flex-wrap content-start py-0 pl-0 pr-1.5 box-border gap-x-[17.1px] gap-y-5 max-w-full text-xs text-accent">
        <StayCard
          placeName="Missisuaga Aistream"
          placeLocation="Missisauga, Ontario, Canada"
          price="$502"
        />
        <StayCard
          stayHeartIconsBackgroundImage="url('/frame-91@3x.png')"
          placeName="Urban Loft"
          placeLocation="Missisauga, Ontario, Canada"
          price="$499"
        />
        <StayCard
          stayHeartIconsBackgroundImage="url('/frame-93@3x.png')"
          placeName="Forestville Cottages"
          placeLocation="Simcoe, Ontario Canada"
          price="$600"
        />
      </div>
    </div>
  );
};

export default SimilarStaysSection;
