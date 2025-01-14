import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import { Typography, Box } from "@mui/material";

export type FooterType = {
  className?: string;

  /** Style props */
  footerBorderTop?: CSSProperties["borderTop"];
  supportMargin?: CSSProperties["margin"];
  supportAlignSelf?: CSSProperties["alignSelf"];
  supportWidth?: CSSProperties["width"];
  supportDisplay?: CSSProperties["display"];
  hostingMargin?: CSSProperties["margin"];
  hostingWidth?: CSSProperties["width"];
  localhostMargin?: CSSProperties["margin"];
  localhostWidth?: CSSProperties["width"];
};

const Footer: NextPage<FooterType> = ({
  className = "",
  footerBorderTop,
  supportMargin,
  supportAlignSelf,
  supportWidth,
  supportDisplay,
  hostingMargin,
  hostingWidth,
  localhostMargin,
  localhostWidth,
}) => {
  const footerStyle: CSSProperties = useMemo(() => {
    return {
      borderTop: footerBorderTop,
    };
  }, [footerBorderTop]);

  const supportStyle: CSSProperties = useMemo(() => {
    return {
      margin: supportMargin,
      alignSelf: supportAlignSelf,
      width: supportWidth,
      display: supportDisplay,
    };
  }, [supportMargin, supportAlignSelf, supportWidth, supportDisplay]);

  const hostingStyle: CSSProperties = useMemo(() => {
    return {
      margin: hostingMargin,
      width: hostingWidth,
    };
  }, [hostingMargin, hostingWidth]);

  const localhostStyle: CSSProperties = useMemo(() => {
    return {
      margin: localhostMargin,
      width: localhostWidth,
    };
  }, [localhostMargin, localhostWidth]);

  return (
    <footer
      className={`self-stretch bg-whitesmoke-200 border-light-grey-border border-t-[1px] border-solid box-border flex flex-col items-center justify-start pt-[18px] px-[50px] pb-10 min-h-[287px] max-w-full text-left text-base text-dark font-archivo mq800:pl-[25px] mq800:pr-[25px] mq800:box-border ${className}`}
      style={footerStyle}
    >
      <div className="w-full flex flex-row items-start justify-start flex-wrap content-start gap-2.5 max-w-[1340px] mq1350:max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border gap-5 min-w-[280px] max-w-full">
          <h3
            className="m-0 self-stretch relative text-xl font-semibold font-[inherit] mq450:text-base"
            style={supportStyle}
          >
            Support
          </h3>
          <div className="self-stretch relative">Help Centre</div>
          <div className="self-stretch relative">AirCover</div>
          <div className="self-stretch relative">Combating discrimination</div>
          <div className="self-stretch relative">
            Supporting people with disabilities
          </div>
          <div className="self-stretch relative">Cencellation options</div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-5 pb-0 px-0 box-border gap-5 min-w-[280px] max-w-full">
          <h3
            className="m-0 w-[666px] relative text-xl font-semibold font-[inherit] inline-block max-w-[152%] shrink-0 mq450:text-base"
            style={hostingStyle}
          >
            Hosting
          </h3>
          <div className="self-stretch relative">Local home</div>
          <div className="self-stretch relative">Cover for hosts</div>
          <div className="self-stretch relative">Hosting resources</div>
          <div className="self-stretch relative">Community forum</div>
          <div className="self-stretch relative">Hosting responsibly</div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border gap-5 min-w-[280px] max-w-full">
          <h3
            className="m-0 w-[328.5px] relative text-xl font-semibold font-[inherit] inline-block max-w-full mq450:text-base"
            style={localhostStyle}
          >
            Localhost
          </h3>
          <div className="self-stretch relative">Newsroom</div>
          <div className="self-stretch relative">New Features</div>
          <div className="self-stretch relative">Careers</div>
          <div className="self-stretch relative">Investres</div>
          <div className="self-stretch relative">Gift cards</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
