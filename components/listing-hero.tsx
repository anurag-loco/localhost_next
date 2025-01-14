import type { NextPage } from "next";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";

export type ListingHeroType = {
  className?: string;
};

const ListingHero: NextPage<ListingHeroType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start flex-wrap content-start py-0 pl-0 pr-0.5 box-border gap-x-[26px] gap-y-7 max-w-full text-left text-10xl text-dark font-archivo ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[15px] min-w-[500px] max-w-full mq800:min-w-full">
        <Image
          className="self-stretch flex-1 rounded-lg max-w-full overflow-hidden max-h-full object-cover min-h-[438px]"
          loading="lazy"
          width={812}
          height={438}
          alt=""
          src="/frame-9@2x.png"
        />
        <div className="rounded-lg overflow-x-auto flex flex-row items-start justify-start gap-2.5 max-w-full">
          <Image
            className="h-[86px] w-40 shrink-0 object-cover"
            loading="lazy"
            width={160}
            height={86}
            alt=""
            src="/frame-46@2x.png"
          />
          <Image
            className="h-[86px] w-40 shrink-0 object-cover"
            loading="lazy"
            width={160}
            height={86}
            alt=""
            src="/frame-47@2x.png"
          />
          <Image
            className="h-[86px] w-40 shrink-0 object-cover"
            loading="lazy"
            width={160}
            height={86}
            alt=""
            src="/frame-48@2x.png"
          />
          <Image
            className="h-[86px] w-40 shrink-0 object-cover"
            loading="lazy"
            width={160}
            height={86}
            alt=""
            src="/frame-49@2x.png"
          />
          <div className="flex flex-row items-start justify-start pt-[30.6px] pb-[30.8px] pl-16 pr-[63px] relative">
            <Image
              className="h-full w-[148.4px] !m-[0] absolute top-[0px] bottom-[0px] left-[0px] rounded max-h-full overflow-hidden shrink-0 object-cover"
              width={148}
              height={86}
              alt=""
              src="/gallery-image@2x.png"
            />
            <Image
              className="h-[24.6px] w-[31.7px] relative z-[1]"
              loading="lazy"
              width={32}
              height={25}
              alt=""
              src="/vector.svg"
            />
          </div>
        </div>
      </div>
      <div className="flex-[0.888] rounded-6xs bg-white border-light-grey-border border-[1px] border-solid box-border flex flex-col items-start justify-start py-[35px] px-[27px] gap-7 min-w-[335px] max-w-[500px] mq800:pt-[23px] mq800:pb-[23px] mq800:box-border mq800:max-w-full mq450:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[17px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-3 max-w-full">
            <div className="self-stretch flex flex-row items-center justify-start gap-1.5 max-w-full mq450:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start gap-1.5 min-w-[261px] max-w-full">
                <h2 className="m-0 self-stretch relative text-inherit tracking-[0.02em] font-semibold font-[inherit] mq450:text-4xl">
                  Brightwoods Cabin
                </h2>
                <div className="relative text-base tracking-[0.02em]">
                  Bridlepath, Ontario, Canada
                </div>
              </div>
              <Image
                className="h-9 w-9 relative"
                loading="lazy"
                width={36}
                height={36}
                alt=""
                src="/hearticon.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-start gap-1.5 text-base">
              <div className="flex flex-row items-center justify-start gap-1">
                <div className="relative tracking-[0.02em] font-semibold">
                  5.0
                </div>
                <Image
                  className="h-4 w-4 relative"
                  width={16}
                  height={16}
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
              <div className="border-light-grey-border border-l-[1px] border-solid flex flex-row items-center justify-start py-0 pl-2 pr-1.5 text-accent">
                <div className="relative [text-decoration:underline] tracking-[0.02em]">
                  200 Reviews
                </div>
              </div>
            </div>
          </div>
          <div className="relative text-base tracking-[0.02em] leading-[160%]">{`Welcome to our cozy cabin retreat nestled in the heart of Bridlepath, Ontario! Surrounded by lush landscapes and tranquil trails, this charming getaway offers the perfect blend of rustic elegance and modern comfort. `}</div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-5 text-17xl">
          <div className="self-stretch h-[39px] flex flex-row items-start justify-between pt-0 px-0 pb-[8.5px] box-border gap-5">
            <div className="flex flex-row items-start justify-start gap-[3px]">
              <b className="relative tracking-[0.02em] inline-block min-w-[89px] mq800:text-10xl mq450:text-3xl">
                $658
              </b>
              <div className="flex flex-col items-start justify-start pt-[18.5px] px-0 pb-0 text-lg">
                <a className="[text-decoration:none] relative tracking-[0.02em] text-[inherit] inline-block min-w-[49px]">
                  /night
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0 text-base text-accent">
              <div className="flex flex-row items-start justify-start gap-1.5">
                <div className="h-[22px] w-[22px] relative">
                  <div className="absolute h-[81.82%] w-[93.64%] top-[9.09%] right-[3.18%] bottom-[9.09%] left-[3.18%]">
                    <Image
                      className="absolute h-[43.33%] w-[63.11%] top-[28.89%] right-[18.45%] bottom-[27.78%] left-[18.45%] rounded-12xs-5 max-w-full overflow-hidden max-h-full"
                      loading="lazy"
                      width={13}
                      height={8}
                      alt=""
                      src="/icon.svg"
                    />
                    <div className="absolute h-full w-full top-[0%] right-[-7.28%] bottom-[-8.33%] left-[0%] rounded-9xs-5 border-accent border-[1.5px] border-solid box-border z-[1]" />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                  <div className="relative tracking-[0.02em]">
                    Best time to Book
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button
            className="self-stretch h-[58px] mq450:pl-5 mq450:pr-5 mq450:box-border"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#00c29f",
              borderRadius: "6px",
              "&:hover": { background: "#00c29f" },
              height: 58,
            }}
          >
            Book this home
          </Button>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-3 text-base text-light-text">
          <div className="relative tracking-[0.02em]">Hosted by:</div>
          <div className="self-stretch border-light-grey-border border-t-[0.7px] border-solid flex flex-row items-center justify-start pt-[7px] px-0 pb-0 gap-2.5 text-dark mq450:flex-wrap">
            <Image
              className="h-[50px] w-[50px] relative rounded-[50%] object-cover"
              loading="lazy"
              width={50}
              height={50}
              alt=""
              src="/ellipse-2@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border gap-0.5 min-w-[169px]">
              <div className="relative tracking-[0.02em] leading-[150%] font-semibold inline-block min-w-[109px]">
                Michelle Ward
              </div>
              <div className="relative text-sm tracking-[0.02em] text-gray-200">
                Joined in May 2021
              </div>
            </div>
            <div className="rounded-mid bg-lightcyan flex flex-row items-center justify-start py-2 pl-[11px] pr-2.5 gap-[5px] text-accent">
              <Image
                className="h-[18.4px] w-[12.3px] relative"
                width={12}
                height={18}
                alt=""
                src="/vector-2.svg"
              />
              <div className="relative tracking-[-0.01em] font-medium inline-block min-w-[76px]">
                Superhost
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingHero;
