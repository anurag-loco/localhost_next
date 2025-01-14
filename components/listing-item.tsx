import type { NextPage } from "next";
import { useCallback } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

export type ListingItemType = {
  className?: string;
  image: string;
  showSuperhostTag?: boolean;
  listingTitle?: string;
  listingSubtitle?: string;
  rating?: string;
  price?: string;
};

const ListingItem: NextPage<ListingItemType> = ({
  className = "",
  image,
  showSuperhostTag,
  listingTitle,
  listingSubtitle,
  rating,
  price,
}) => {
  const router = useRouter();

  const onListingItemContainerClick = useCallback(() => {
    router.push("/property-details");
  }, [router]);

  return (
    <div
      className={`h-[408px] flex-1 rounded-3xs bg-white border-light-grey-border border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start relative min-w-[304px] cursor-pointer text-left text-xs text-accent font-archivo mq1440:w-full ${className}`}
      onClick={onListingItemContainerClick}
    >
      <Image
        className="self-stretch flex-1 overflow-hidden max-h-full object-cover w-full"
        width={320}
        height={300}
        alt=""
        src={image}
      />
      {showSuperhostTag && (
        <div className="!m-[0] absolute top-[10px] left-[10px] rounded-smi bg-white flex flex-row items-center justify-start py-1.5 pl-[7px] pr-1.5 gap-0.5 z-[1]">
          <Image
            className="h-2.5 w-[6.7px] relative min-h-[10px]"
            width={7}
            height={10}
            alt=""
            src="/superhost-icon.svg"
          />
          <div className="relative tracking-[-0.01em] leading-[8px] font-medium">
            Superhost
          </div>
        </div>
      )}
      <Image
        className="w-[30px] h-[30px] absolute !m-[0] top-[10px] right-[10px] object-cover z-[1]"
        loading="lazy"
        width={30}
        height={30}
        alt=""
        src="/heart-icon@2x.png"
      />
      <div className="self-stretch flex flex-col items-start justify-start p-4 gap-3.5 text-base text-dark">
        <div className="self-stretch flex flex-row items-center justify-start gap-1">
          <div className="flex-1 flex flex-col items-start justify-start gap-1">
            <div className="self-stretch relative tracking-[0.02em] leading-[16px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
              {listingTitle}
            </div>
            <div className="self-stretch relative text-sm tracking-[0.02em] leading-[14px] text-light-text overflow-hidden text-ellipsis whitespace-nowrap">
              {listingSubtitle}
            </div>
          </div>
          <div className="flex flex-row items-center justify-start py-0 pl-0 pr-px gap-1.5 text-sm">
            <div className="h-2.5 relative tracking-[0.02em] font-semibold flex items-center">
              {rating}
            </div>
            <Image
              className="h-[13px] w-[13px] relative min-h-[13px]"
              loading="lazy"
              width={13}
              height={13}
              alt=""
              src="/star-icon.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start py-[7.5px] px-0 text-lgi">
          <div className="flex-1 flex flex-row items-center justify-start py-0 pl-0 pr-[202px] gap-0.5 mq450:pr-5 mq450:box-border">
            <div className="relative tracking-[0.02em] leading-[13px] font-semibold whitespace-nowrap">
              {price}
            </div>
            <div className="relative text-sm tracking-[0.02em] leading-[10px] text-light-text">
              /night
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingItem;
