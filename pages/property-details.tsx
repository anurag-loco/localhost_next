import type { NextPage } from "next";
import { Typography, Box, Button } from "@mui/material";
import Image from "next/image";
import MainHeader from "../components/main-header";
import ListingHero from "../components/listing-hero";
import SimilarStaysSection from "../components/similar-stays-section";
import Footer from "../components/footer";

const PropertyDetails: NextPage = () => {
  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] text-left text-sm text-black font-archivo">
      <MainHeader />
      <main className="self-stretch flex flex-row items-start justify-start pt-0 px-[50px] pb-5 box-border max-w-full mq800:pl-[25px] mq800:pr-[25px] mq800:box-border">
        <section className="flex-1 flex flex-col items-start justify-start gap-11 max-w-full text-left text-5xl text-dark font-archivo mq800:gap-[22px]">
          <ListingHero />
          <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full">
            <div className="self-stretch border-light-grey-border border-b-[1px] border-solid box-border flex flex-col items-start justify-start pt-0 px-0 pb-[22px] gap-5 max-w-full">
              <h3 className="m-0 self-stretch relative text-inherit tracking-[0.02em] font-semibold font-[inherit] mq450:text-lgi">
                About this home
              </h3>
              <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-10 max-w-full text-base mq800:gap-5">
                <div className="flex-1 flex flex-col items-start justify-start gap-2 min-w-[500px] max-w-full mq800:min-w-full">
                  <div className="relative leading-[160%] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:6] [-webkit-box-orient:vertical]">
                    <p className="[margin-block-start:0] [margin-block-end:17px]">
                      Welcome to Brightwoods Cabin, your idyllic retreat nestled
                      in the heart of Bridlepath, Ontario! Our cozy cabin,
                      surrounded by the tranquility of nature's embrace, is
                      designed to provide the ultimate relaxing getaway.
                    </p>
                    <p className="[margin-block-start:0] [margin-block-end:17px]">
                      <b className="font-archivo">{`Living Space: `}</b>
                      <span>
                        This charming cabin boasts a spacious living area
                        adorned with rustic decor and modern amenities. Enjoy
                        the warmth of the wood-burning fireplace, relax on the
                        plush sofas, and make yourself at home with our
                        entertainment center featuring a flat-screen TV, WiFi,
                        and more.
                      </span>
                    </p>
                    <p className="[margin-block-start:0] [margin-block-end:17px]">
                      <b className="font-archivo">Bedrooms:</b>
                      <span>
                        {" "}
                        With 3 beautifully appointed bedrooms, our cabin
                        comfortably accommodates up to [number of guests]. Each
                        room is furnished with luxurious bedding and unique
                        woodland-inspired touches to ensure a restful slumber.
                      </span>
                    </p>
                    <p className="[margin-block-start:0] [margin-block-end:17px]">
                      <b className="font-archivo">{`Kitchen & Dining:`}</b>
                      <span>
                        {" "}
                        Our fully-equipped kitchen offers everything you need to
                        prepare delicious home-cooked meals. The open dining
                        area provides a welcoming space to enjoy meals with
                        friends and family.
                      </span>
                    </p>
                    <p className="[margin-block-start:0] [margin-block-end:17px]">
                      <b className="font-archivo">Bathrooms:</b>
                      <span>
                        {" "}
                        2 modern bathrooms stocked with fresh towels,
                        toiletries, and all essential amenities add to your
                        convenience.
                      </span>
                    </p>
                    <p className="[margin-block-start:0] [margin-block-end:17px]">
                      <b className="font-archivo">Outdoor Space:</b>
                      <span>
                        {" "}
                        Step outside to a serene outdoor setting. Whether it's a
                        morning coffee on the porch, a BBQ in the yard, or a
                        soothing evening by the fire pit, the beauty of
                        Bridlepath is at your doorstep.
                      </span>
                    </p>
                    <p className="[margin-block-start:0] [margin-block-end:17px]">
                      <b className="font-archivo">Location:</b>
                      <span>
                        {" "}
                        Located just minutes from [local attractions, trails,
                        dining, shopping], our cabin offers the perfect base to
                        explore the best of the region or simply unwind in
                        seclusion.
                      </span>
                    </p>
                    <p className="[margin-block-start:0] [margin-block-end:17px]">
                      <b className="font-archivo">Hosted with Love:</b>
                      <span>
                        {" "}
                        We take pride in hosting our guests and are committed to
                        making your stay unforgettable. We're just a call or
                        message away should you need anything during your stay.
                      </span>
                    </p>
                    <p className="m-0">
                      Come, be our guest at [Cabin Name], and experience a piece
                      of woodland serenity right here in Bridlepath, Ontario.
                      Book now and make yourself at home!
                    </p>
                  </div>
                  <a className="[text-decoration:none] relative tracking-[0.46px] leading-[26px] font-semibold text-accent text-center">
                    Show more
                  </a>
                </div>
                <div className="w-[500px] flex flex-col items-start justify-start gap-6 max-w-full text-lg">
                  <div className="flex flex-row items-center justify-start gap-5 max-w-full mq450:flex-wrap">
                    <Image
                      className="h-[60px] w-[60px] relative rounded-lg overflow-hidden shrink-0"
                      loading="lazy"
                      width={60}
                      height={60}
                      alt=""
                      src="/frame-65.svg"
                    />
                    <div className="flex flex-col items-start justify-start gap-0.5">
                      <div className="relative tracking-[0.02em] leading-[150%] font-semibold">
                        Dedicated workspace
                      </div>
                      <div className="relative text-base tracking-[0.02em] text-gray-200">
                        A private room equipped with WiFi
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-5 max-w-full mq450:flex-wrap">
                    <Image
                      className="h-[60px] w-[60px] relative rounded-lg overflow-hidden shrink-0"
                      width={60}
                      height={60}
                      alt=""
                      src="/frame-65-1.svg"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start gap-0.5 min-w-[273px] max-w-full">
                      <div className="self-stretch relative tracking-[0.02em] leading-[150%] font-semibold">
                        Self check-in
                      </div>
                      <div className="self-stretch relative text-base tracking-[0.02em] text-gray-200">
                        Check in with just your phone
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-5 max-w-full mq450:flex-wrap">
                    <Image
                      className="h-[60px] w-[60px] relative rounded-lg overflow-hidden shrink-0"
                      width={60}
                      height={60}
                      alt=""
                      src="/frame-65-2.svg"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start gap-0.5 min-w-[273px] max-w-full">
                      <div className="self-stretch relative tracking-[0.02em] leading-[150%] font-semibold">
                        Free cancellation
                      </div>
                      <div className="self-stretch relative text-base tracking-[0.02em] text-gray-200">
                        Cancel anytime
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[19px] max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-5 min-w-[500px] max-w-full mq800:min-w-full">
                <h3 className="m-0 w-[781.8px] relative text-inherit tracking-[0.02em] font-semibold font-[inherit] inline-block max-w-full mq450:text-lgi">
                  Amenities
                </h3>
                <div className="self-stretch flex flex-col items-start justify-start gap-[31px] text-base mq450:gap-[15px]">
                  <div className="w-full flex flex-row items-start justify-start flex-wrap content-start gap-x-[5.1px] gap-y-[5px] max-w-[1280px] mq1350:max-w-full">
                    <div className="flex-1 flex flex-col items-start justify-start gap-3.5 min-w-[250px]">
                      <div className="self-stretch flex flex-row items-center justify-start gap-2.5">
                        <Image
                          className="h-[21px] w-5 relative overflow-hidden shrink-0"
                          loading="lazy"
                          width={20}
                          height={21}
                          alt=""
                          src="/amenities01icon.svg"
                        />
                        <div className="flex-1 relative">Lakeside</div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-2.5">
                        <Image
                          className="h-5 w-5 relative overflow-hidden shrink-0"
                          loading="lazy"
                          width={20}
                          height={20}
                          alt=""
                          src="/amenities02icon.svg"
                        />
                        <div className="flex-1 relative">Kitchen</div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-2.5">
                        <Image
                          className="h-5 w-5 relative overflow-hidden shrink-0"
                          loading="lazy"
                          width={20}
                          height={20}
                          alt=""
                          src="/amenities03icon.svg"
                        />
                        <div className="flex-1 relative">
                          Security cameras on property
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-2.5">
                        <Image
                          className="h-5 w-5 relative overflow-hidden shrink-0"
                          loading="lazy"
                          width={20}
                          height={20}
                          alt=""
                          src="/amenities04icon.svg"
                        />
                        <div className="flex-1 relative">Wifi</div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-3.5 min-w-[250px]">
                      <div className="self-stretch flex flex-row items-center justify-start gap-2.5">
                        <Image
                          className="h-5 w-5 relative overflow-hidden shrink-0"
                          loading="lazy"
                          width={20}
                          height={20}
                          alt=""
                          src="/amenities05icon.svg"
                        />
                        <div className="flex-1 relative">Free parking</div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-2.5">
                        <Image
                          className="h-5 w-5 relative overflow-hidden shrink-0"
                          loading="lazy"
                          width={20}
                          height={20}
                          alt=""
                          src="/amenities06icon.svg"
                        />
                        <div className="flex-1 relative">Outdoor shower</div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-2.5">
                        <Image
                          className="h-5 w-5 relative overflow-hidden shrink-0"
                          loading="lazy"
                          width={20}
                          height={20}
                          alt=""
                          src="/amenities07icon.svg"
                        />
                        <div className="flex-1 relative">Hot water</div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-2.5">
                        <Image
                          className="h-5 w-5 relative overflow-hidden shrink-0"
                          loading="lazy"
                          width={20}
                          height={20}
                          alt=""
                          src="/amenities08icon.svg"
                        />
                        <div className="flex-1 relative">Shampoo</div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-3.5 min-w-[250px]">
                      <div className="self-stretch flex flex-row items-center justify-start gap-2.5">
                        <Image
                          className="h-5 w-5 relative overflow-hidden shrink-0"
                          width={20}
                          height={20}
                          alt=""
                          src="/amenities09icon.svg"
                        />
                        <div className="flex-1 relative">Fire Extinguisher</div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-2.5">
                        <Image
                          className="h-5 w-5 relative overflow-hidden shrink-0"
                          width={20}
                          height={20}
                          alt=""
                          src="/amenities10icon.svg"
                        />
                        <div className="flex-1 relative">Freezer</div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-2.5">
                        <Image
                          className="h-5 w-5 relative overflow-hidden shrink-0"
                          width={20}
                          height={20}
                          alt=""
                          src="/amenities11icon.svg"
                        />
                        <div className="flex-1 relative">Coffee Maker</div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-2.5">
                        <Image
                          className="h-5 w-5 relative overflow-hidden shrink-0"
                          width={20}
                          height={20}
                          alt=""
                          src="/amenities12icon.svg"
                        />
                        <div className="flex-1 relative">Glass stove</div>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="w-[185px] h-12 hover:bg-saddlebrown"
                    disableElevation
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      color: "#171e1d",
                      fontSize: "16",
                      borderColor: "#171e1d",
                      borderRadius: "6px",
                      "&:hover": { borderColor: "#171e1d" },
                      width: 185,
                      height: 48,
                    }}
                  >
                    Show all amenities
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start relative gap-5 max-w-full">
                  <div className="self-stretch flex flex-row items-center justify-between [row-gap:20px] max-w-full gap-0 mq800:flex-wrap">
                    <div className="w-[346px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border gap-[5px] max-w-full">
                      <h3 className="m-0 relative text-inherit tracking-[0.02em] font-semibold font-[inherit] mq450:text-lgi">
                        Where you’ll be
                      </h3>
                      <div className="flex flex-row items-center justify-start gap-1.5 text-base">
                        <Image
                          className="h-[11px] w-[9.3px] relative"
                          width={9}
                          height={11}
                          alt=""
                          src="/vector-3.svg"
                        />
                        <div className="relative">The Bridle Path</div>
                      </div>
                    </div>
                    <div className="w-[154px] rounded-xl flex flex-row items-start justify-start py-0.5 px-0 box-border gap-6 text-center text-3xs">
                      <div className="w-[108px] flex flex-row items-start justify-start gap-2.5 text-left text-base">
                        <Image
                          className="h-[47px] w-[47px] relative"
                          loading="lazy"
                          width={47}
                          height={47}
                          alt=""
                          src="/suncloud.svg"
                        />
                        <div className="flex-1 flex flex-col items-start justify-start py-0 px-0 gap-0.5">
                          <div className="relative tracking-[0.02em] leading-[150%] font-semibold">
                            20°C
                          </div>
                          <div className="relative text-sm tracking-[0.02em] text-gray-200 inline-block min-w-[94px]">
                            Broken clouds
                          </div>
                        </div>
                      </div>
                      <div className="hidden flex-col items-start justify-start gap-2">
                        <div className="flex flex-col items-start justify-start gap-2">
                          <Image
                            className="w-10 h-10 relative"
                            width={40}
                            height={40}
                            alt=""
                            src="/sun.svg"
                          />
                          <div className="self-stretch flex flex-col items-center justify-start">
                            <b className="self-stretch relative">23°C</b>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start">
                          <div className="self-stretch relative">Sun</div>
                          <div className="self-stretch relative">27 Aug</div>
                        </div>
                      </div>
                      <div className="hidden flex-col items-start justify-start gap-2">
                        <div className="flex flex-col items-start justify-start gap-2">
                          <Image
                            className="w-10 h-10 relative"
                            width={40}
                            height={40}
                            alt=""
                            src="/suncloud-1.svg"
                          />
                          <div className="self-stretch flex flex-col items-center justify-start">
                            <b className="self-stretch relative">22°C</b>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start">
                          <div className="self-stretch relative">Mon</div>
                          <div className="self-stretch relative">28 Aug</div>
                        </div>
                      </div>
                      <div className="hidden flex-col items-start justify-start gap-2">
                        <div className="flex flex-col items-start justify-start gap-2">
                          <Image
                            className="w-10 h-10 relative"
                            width={40}
                            height={40}
                            alt=""
                            src="/sun.svg"
                          />
                          <div className="self-stretch flex flex-col items-center justify-start">
                            <b className="self-stretch relative">23°C</b>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start">
                          <div className="self-stretch relative">Tue</div>
                          <div className="self-stretch relative">29 Aug</div>
                        </div>
                      </div>
                      <div className="hidden flex-col items-start justify-start gap-2">
                        <div className="flex flex-col items-start justify-start gap-2">
                          <Image
                            className="w-10 h-10 relative"
                            width={40}
                            height={40}
                            alt=""
                            src="/suncloud-1.svg"
                          />
                          <div className="self-stretch flex flex-col items-center justify-start">
                            <b className="self-stretch relative">20°C</b>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start">
                          <div className="self-stretch relative">Wed</div>
                          <div className="self-stretch relative">30 Aug</div>
                        </div>
                      </div>
                      <div className="hidden flex-col items-start justify-start gap-2">
                        <div className="flex flex-col items-start justify-start gap-2">
                          <Image
                            className="w-10 h-10 relative"
                            width={40}
                            height={40}
                            alt=""
                            src="/suncloud-1.svg"
                          />
                          <div className="self-stretch flex flex-col items-center justify-start">
                            <b className="self-stretch relative">19°C</b>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start">
                          <div className="self-stretch relative">Thu</div>
                          <div className="self-stretch relative">31 Aug</div>
                        </div>
                      </div>
                      <div className="hidden flex-col items-start justify-start gap-2">
                        <div className="flex flex-col items-start justify-start gap-2">
                          <Image
                            className="w-10 h-10 relative"
                            width={40}
                            height={40}
                            alt=""
                            src="/sun.svg"
                          />
                          <div className="self-stretch flex flex-col items-center justify-start">
                            <b className="self-stretch relative">24°C</b>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start">
                          <div className="self-stretch relative">Fri</div>
                          <div className="self-stretch relative">1 Sep</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Image
                    className="self-stretch h-[248px] relative rounded-lg max-w-full overflow-hidden shrink-0 object-cover"
                    width={500}
                    height={248}
                    alt=""
                    src="/map-background@2x.png"
                  />
                  <Image
                    className="w-[37px] h-[65px] absolute !m-[0] right-[10px] bottom-[10px] rounded overflow-hidden shrink-0 z-[1]"
                    loading="lazy"
                    width={37}
                    height={65}
                    alt=""
                    src="/frame-92.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <SimilarStaysSection />
        </section>
      </main>
      <Footer
        footerBorderTop="unset"
        supportMargin="unset"
        supportAlignSelf="unset"
        supportWidth="421px"
        supportDisplay="inline-block"
        hostingMargin="unset"
        hostingWidth="636px"
        localhostMargin="unset"
        localhostWidth="1281px"
      />
      <div className="self-stretch border-light-grey-border border-t-[1px] border-solid box-border flex flex-col items-center justify-start pt-2.5 px-[50px] pb-3 max-w-full mq800:pl-[25px] mq800:pr-[25px] mq800:box-border">
        <div className="w-full flex flex-row items-start justify-start flex-wrap content-start gap-x-5 gap-y-2.5 max-w-[1340px] mq1350:max-w-full">
          <div className="flex-1 relative leading-[120%] font-light inline-block min-w-[280px] max-w-full">
            © 2023 Localhost, Inc. All Rights Reserved
          </div>
          <div className="h-[17px] flex-1 flex flex-row items-start justify-start flex-wrap content-start gap-x-5 gap-y-2 min-w-[280px] max-w-[312px] mq800:max-w-full">
            <div className="relative leading-[120%] font-light">
              Privacy Policy
            </div>
            <div className="relative leading-[120%] font-light">{`Terms & Conditions`}</div>
            <div className="relative leading-[120%] font-light inline-block min-w-[68px]">
              Contact us
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
