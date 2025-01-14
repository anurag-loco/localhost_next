import type { NextPage } from "next";
import { Box } from "@mui/material";
import HeaderTop from "./header-top";

export type MainHeaderType = {
  className?: string;
};

const MainHeader: NextPage<MainHeaderType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-5 box-border top-[0] z-[99] sticky max-w-full ${className}`}
    >
      <HeaderTop />
    </div>
  );
};

export default MainHeader;
