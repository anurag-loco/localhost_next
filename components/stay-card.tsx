import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import { Box } from "@mui/material";
import Image from "next/image";

export type StayCardType = {
  className?: string;
  placeName?: string;
  placeLocation?: string;
  price?: string;

  /** Style props */
  stayHeartIconsBackgroundImage?: CSSProperties["backgroundImage"];
};

const StayCard: NextPage<StayCardType> = ({
  className = "",
  stayHeartIconsBackgroundImage,
  placeName,
  placeLocation,
  price,
}) => {
  const stayHeartIconsStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: stayHeartIconsBackgroundImage,
    };
  }, [stayHeartIconsBackgroundImage]);

  return (
    <div
      className={`flex-1 rounded-3xs bg-white border-light-grey-border border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-start justify-start min-w-[370px] max-w-full [row-gap:20px] text-left text-xs text-accent font-archivo mq450:flex-wrap ${className}`}
    >
      <div
        className="h-[130px] flex-1 flex flex-col items-start justify-start relative gap-2.5 bg-[url('/stay-heart-icons@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[150px] max-w-[180px]"
        style={stayHeartIconsStyle}
      >
        <div className="!m-[0] absolute top-[10px] left-[10px] rounded-smi bg-white hidden flex-row items-center justify-start py-1.5 px-[7px] gap-0.5 z-[0]">
          <Image
            className="h-2.5 w-[6.7px] relative"
            width={7}
            height={10}
            alt=""
            src="/superhost-icon.svg"
          />
          <div className="relative tracking-[-0.01em] font-medium">
            Superhost
          </div>
        </div>
        <Image
          className="w-[30px] h-[30px] absolute !m-[0] top-[10px] right-[10px]"
          width={30}
          height={30}
          alt=""
          src="/hearticon-1.svg"
        />
      </div>
      <div className="flex-[0.8737] flex flex-col items-start justify-start p-4 box-border gap-5 min-w-[220px] text-base text-dark mq450:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-3">
          <div className="self-stretch flex flex-col items-start justify-start gap-1">
            <div className="self-stretch relative tracking-[0.02em] font-semibold">
              {placeName}
            </div>
            <div className="self-stretch relative text-sm tracking-[0.02em] text-light-text">
              {placeLocation}
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-1.5 text-sm">
            <div className="relative tracking-[0.02em] font-semibold">4.8</div>
            <Image
              className="h-[13px] w-[13px] relative"
              width={13}
              height={13}
              alt=""
              src="/star-icon.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start gap-0.5 text-accent">
          <div className="relative tracking-[0.02em] font-semibold">
            {price}
          </div>
          <div className="flex-1 relative text-sm tracking-[0.02em] text-light-text">
            /night
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayCard;
