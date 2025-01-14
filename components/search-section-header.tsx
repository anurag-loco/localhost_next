import type { NextPage } from "next";
import { Typography, Box } from "@mui/material";
import Image from "next/image";

export type SearchSectionHeaderType = {
  className?: string;
};

const SearchSectionHeader: NextPage<SearchSectionHeaderType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-full flex flex-row items-center justify-between pt-3.5 px-0 pb-0 box-border max-w-[1340px] gap-5 text-left text-xl text-black font-archivo mq450:flex-wrap mq1350:max-w-full ${className}`}
    >
      <div className="flex flex-row items-center justify-start gap-1">
        <h3 className="m-0 relative text-inherit tracking-[0.02em] leading-[120%] font-normal font-[inherit] mq450:text-base mq450:leading-[19px]">
          Stays nearby:
        </h3>
        <h3 className="m-0 relative text-inherit tracking-[0.02em] leading-[120%] font-semibold font-[inherit] mq450:text-base mq450:leading-[19px]">
          Toronto Ontario
        </h3>
      </div>
      <div className="h-[46px] w-[84px] rounded-4xs bg-white border-light-grey-border border-[0.7px] border-solid box-border flex flex-row items-center justify-start py-[5px] px-1.5">
        <div className="h-9 w-9 rounded-md bg-accent flex flex-row items-start justify-start p-2 box-border">
          <Image
            className="h-5 w-5 relative"
            width={20}
            height={20}
            alt=""
            src="/bento-menu1.svg"
          />
        </div>
        <div className="h-9 w-9 flex flex-row items-start justify-start p-2 box-border">
          <Image
            className="h-5 w-5 relative"
            width={20}
            height={20}
            alt=""
            src="/map.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchSectionHeader;
