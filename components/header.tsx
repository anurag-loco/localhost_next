import type { NextPage } from "next";
import { Box } from "@mui/material";
import Image from "next/image";

export type HeaderType = {
  className?: string;
};

const Header: NextPage<HeaderType> = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch bg-white border-light-grey-border border-b-[1px] border-solid flex flex-col items-center justify-start pt-3.5 px-[50px] pb-3 mq800:pl-[25px] mq800:pr-[25px] mq800:box-border ${className}`}
    >
      <div className="w-full flex flex-row items-center justify-between flex-wrap content-center max-w-[1340px] gap-5 sm:items-center sm:justify-center mq1440:items-center mq1440:justify-between mq1440:gap-0 mq1350:max-w-full">
        <Image
          className="h-[40.5px] w-[156px] relative"
          loading="lazy"
          width={156}
          height={41}
          alt=""
          src="/logo.svg"
        />
        <nav className="m-0 flex flex-row items-start justify-end py-0 pl-px pr-0 box-border gap-[30px] min-w-[230px] text-left text-sm text-black font-archivo">
          <a className="[text-decoration:none] relative text-[inherit]">Home</a>
          <a className="[text-decoration:none] relative text-[inherit]">
            Stays
          </a>
          <a className="[text-decoration:none] relative text-[inherit]">
            Become a host
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
