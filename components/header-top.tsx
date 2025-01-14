import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import { Box } from "@mui/material";
import Image from "next/image";

export type HeaderTopType = {
  className?: string;

  /** Style props */
  headerTop?: CSSProperties["top"];
  headerPosition?: CSSProperties["position"];
  headerFlex?: CSSProperties["flex"];
};

const HeaderTop: NextPage<HeaderTopType> = ({
  className = "",
  headerTop,
  headerPosition,
  headerFlex,
}) => {
  const headerStyle: CSSProperties = useMemo(() => {
    return {
      top: headerTop,
      position: headerPosition,
      flex: headerFlex,
    };
  }, [headerTop, headerPosition, headerFlex]);

  return (
    <header
      className={`self-stretch flex-1 bg-white border-light-grey-border border-b-[1px] border-solid box-border flex flex-col items-center justify-start pt-3.5 px-[50px] pb-3 max-w-full text-left text-sm text-black font-archivo mq800:pl-[25px] mq800:pr-[25px] mq800:box-border ${className}`}
      style={headerStyle}
    >
      <div className="w-full flex flex-row items-center justify-between flex-wrap content-center max-w-[1340px] gap-5 mq1350:max-w-full">
        <Image
          className="h-[40.5px] w-[156px] relative"
          loading="lazy"
          width={156}
          height={41}
          alt=""
          src="/logo.svg"
        />
        <div className="flex flex-row items-start justify-end py-0 pl-px pr-0 box-border gap-[30px] min-w-[230px]">
          <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[40px]">
            Home
          </a>
          <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[37px]">
            Stays
          </a>
          <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[95px]">
            Become a host
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeaderTop;
