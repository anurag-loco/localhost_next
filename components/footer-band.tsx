import type { NextPage } from "next";
import { Box } from "@mui/material";

export type FooterBandType = {
  className?: string;
};

const FooterBand: NextPage<FooterBandType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch border-light-grey-border border-t-[1px] border-solid box-border flex flex-col items-center justify-start pt-2.5 px-[50px] pb-3 max-w-full text-left text-sm text-black font-archivo mq800:pl-[25px] mq800:pr-[25px] mq800:box-border ${className}`}
    >
      <div className="w-full flex flex-row items-start justify-start flex-wrap content-start gap-x-5 gap-y-2.5 max-w-[1340px] mq1350:max-w-full">
        <div className="flex-1 relative leading-[120%] font-light inline-block min-w-[280px] max-w-full">
          © 2023 Localhost, Inc. All Rights Reserved
        </div>
        <div className="flex-1 flex flex-row items-start justify-start flex-wrap content-start gap-x-5 gap-y-2 min-w-[280px] max-w-[312px] mq800:max-w-full">
          <div className="relative leading-[120%] font-light">
            Privacy Policy
          </div>
          <div className="relative leading-[120%] font-light">{`Terms & Conditions`}</div>
          <div className="relative leading-[120%] font-light">Contact us</div>
        </div>
      </div>
    </div>
  );
};

export default FooterBand;
