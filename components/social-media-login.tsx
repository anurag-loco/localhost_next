import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import { Box } from "@mui/material";
import Image from "next/image";

export type SocialMediaLoginType = {
  className?: string;
  label?: string;

  /** Style props */
  socialLoginContainerPadding?: CSSProperties["padding"];
};

const SocialMediaLogin: NextPage<SocialMediaLoginType> = ({
  className = "",
  label,
  socialLoginContainerPadding,
}) => {
  const socialLoginContainerStyle: CSSProperties = useMemo(() => {
    return {
      padding: socialLoginContainerPadding,
    };
  }, [socialLoginContainerPadding]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-2.5 shrink-0 text-left text-base text-dark font-archivo ${className}`}
    >
      <div className="self-stretch relative tracking-[0.02em] leading-[160%]">
        {label}
      </div>
      <div
        className="self-stretch flex flex-row items-start justify-start flex-wrap content-start py-0 pl-0 pr-0.5 gap-x-[13.9px] gap-y-3.5 text-center text-light-text"
        style={socialLoginContainerStyle}
      >
        <div className="flex-1 rounded-lg bg-whitesmoke-100 flex flex-col items-center justify-start py-[25px] px-3.5 box-border gap-[18px] min-w-[125px]">
          <Image
            className="w-10 h-[40.5px] relative object-cover"
            loading="lazy"
            width={40}
            height={41}
            alt=""
            src="/socialloginimage@2x.png"
          />
          <a className="[text-decoration:none] self-stretch relative tracking-[0.24px] text-[inherit]">
            Google
          </a>
        </div>
        <div className="flex-[0.5692] rounded-lg bg-whitesmoke-100 flex flex-col items-center justify-start py-[25px] px-[42px] box-border gap-[18px] min-w-[125px] mq450:flex-1">
          <Image
            className="w-10 h-[40.5px] relative object-cover"
            width={40}
            height={41}
            alt=""
            src="/socialloginimage-1@2x.png"
          />
          <a className="[text-decoration:none] self-stretch relative tracking-[0.24px] text-[inherit]">
            Facebook
          </a>
        </div>
        <div className="flex-1 rounded-lg bg-whitesmoke-100 flex flex-col items-center justify-start py-[25px] pl-[15px] pr-[13px] box-border gap-[18px] min-w-[125px]">
          <Image
            className="w-10 h-[40.5px] relative object-cover"
            width={40}
            height={41}
            alt=""
            src="/socialloginimage-2@2x.png"
          />
          <div className="self-stretch relative tracking-[0.24px]">Apple</div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaLogin;
