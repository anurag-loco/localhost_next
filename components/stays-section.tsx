import type { NextPage } from "next";
import { Box, Button } from "@mui/material";
import SearchSectionHeader from "./search-section-header";
import ListingItem from "./listing-item";

export type StaysSectionType = {
  className?: string;
};

const StaysSection: NextPage<StaysSectionType> = ({ className = "" }) => {
  return (
    <main
      className={`self-stretch bg-white flex flex-col items-center justify-start py-6 px-[50px] gap-[22px] text-left text-xl text-black font-archivo mq800:pl-[25px] mq800:pr-[25px] mq800:box-border mq1350:pt-5 mq1350:pb-5 mq1350:box-border ${className}`}
    >
      <SearchSectionHeader />
      <div className="w-full flex flex-row items-start justify-center flex-wrap content-start gap-x-[17.3px] gap-y-5 max-w-[1340px] min-h-[1692px] text-xs text-accent mq1350:max-w-full">
        <ListingItem
          image="/listing01image@2x.png"
          showSuperhostTag
          listingTitle="Brightwoods Cabins"
          listingSubtitle="Bridlepath, Ontario, Canada"
          rating="4.9"
          price="$658"
        />
        <ListingItem
          image="/listing02image@2x.png"
          showSuperhostTag={false}
          listingTitle="Missisuaga Aistream"
          listingSubtitle="Missisauga, Ontario, Canada"
          rating="4.8"
          price="$502"
        />
        <ListingItem
          image="/listing03image@2x.png"
          showSuperhostTag={false}
          listingTitle="Urban Loft"
          listingSubtitle="Georgina Bay, Ontario, Canada"
          rating="4.5"
          price="$410"
        />
        <ListingItem
          image="/listing04image@2x.png"
          showSuperhostTag={false}
          listingTitle="Forestville Cottages"
          listingSubtitle="Simcoe, Ontario Canada"
          rating="5.0"
          price="$325"
        />
        <ListingItem
          image="/listing05image@2x.png"
          showSuperhostTag={false}
          listingTitle="Unionville Logde"
          listingSubtitle="Markham, Ontario Canada"
          rating="4.6"
          price="$485"
        />
        <ListingItem
          image="/listing06image@2x.png"
          showSuperhostTag={false}
          listingTitle="Niagara Homes"
          listingSubtitle="Niagara, Ontario, Canada"
          rating="4.9"
          price="$655"
        />
        <ListingItem
          image="/listing07image@2x.png"
          showSuperhostTag={false}
          listingTitle="Sunny Estate"
          listingSubtitle="Barcort, Ontario Canada"
          rating="5.0"
          price="$320"
        />
        <ListingItem
          image="/listing08image@2x.png"
          showSuperhostTag={false}
          listingTitle="Lawrence Hills"
          listingSubtitle="Lawrence, Ontario Canada"
          rating="5.0"
          price="$350"
        />
        <ListingItem
          image="/listing09image@2x.png"
          showSuperhostTag={false}
          listingTitle="Simcoe Lake Lodge"
          listingSubtitle="Simcoe, Ontario, Canada"
          rating="5.0"
          price="$395"
        />
        <ListingItem
          image="/listing10image@2x.png"
          showSuperhostTag={false}
          listingTitle="Wasaga Beach Home"
          listingSubtitle="Georgina Bay, Ontario, Canada"
          rating="5.0"
          price="$385"
        />
        <ListingItem
          image="/listing11image@2x.png"
          showSuperhostTag={false}
          listingTitle="Banff Hills"
          listingSubtitle="Banff, Alberta, Canada"
          rating="5.0"
          price="$385"
        />
        <ListingItem
          image="/listing12image@2x.png"
          showSuperhostTag={false}
          listingTitle="Creemore Canada"
          listingSubtitle="Creemore, Alberta, Canada"
          rating="5.0"
          price="$385"
        />
        <ListingItem
          image="/listing13image@2x.png"
          showSuperhostTag={false}
          listingTitle="Kawartha Lakes"
          listingSubtitle="Kawartha, Alberta,  Canada"
          rating="5.0"
          price="$385"
        />
        <ListingItem
          image="/listing14image@2x.png"
          showSuperhostTag={false}
          listingTitle="Revelstoke Cabin"
          listingSubtitle="Revelstoke, Alberta, Canada"
          rating="5.0"
          price="$385"
        />
        <ListingItem
          image="/listing15image@2x.png"
          showSuperhostTag={false}
          listingTitle="Brightwoods Estate"
          listingSubtitle="Brightwoods Estate"
          rating="5.0"
          price="$385"
        />
        <ListingItem
          image="/listing16image@2x.png"
          showSuperhostTag={false}
          listingTitle="Brightwoods Estate"
          listingSubtitle="Brightwoods Estate"
          rating="5.0"
          price="$385"
        />
      </div>
      <Button
        className="w-[147px] h-12"
        disableElevation
        variant="outlined"
        sx={{
          textTransform: "none",
          color: "#00c29f",
          fontSize: "16",
          borderColor: "#00c29f",
          borderRadius: "6px",
          "&:hover": { borderColor: "#00c29f" },
          width: 147,
          height: 48,
        }}
      >
        Show more
      </Button>
    </main>
  );
};

export default StaysSection;
