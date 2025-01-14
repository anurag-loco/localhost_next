import type { NextPage } from "next";
import { useState } from "react";
import {
  Typography,
  Box,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Image from "next/image";

export type HeroContainerType = {
  className?: string;
};

const HeroContainer: NextPage<HeroContainerType> = ({ className = "" }) => {
  const [
    checkInDatePickerDateTimePickerValue,
    setCheckInDatePickerDateTimePickerValue,
  ] = useState(null);
  const [
    checkOutDatePickerDateTimePickerValue,
    setCheckOutDatePickerDateTimePickerValue,
  ] = useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div
        className={`self-stretch flex flex-col items-start justify-start max-w-full text-left text-21xl-4 text-black font-archivo ${className}`}
      >
        <div className="self-stretch flex flex-col items-center justify-start pt-[50px] px-[50px] pb-[30px] box-border bg-[url('/frame-38@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq800:pl-[25px] mq800:pr-[25px] mq800:box-border">
          <div className="w-full flex flex-col items-start justify-start gap-6 max-w-[1340px] mq1350:max-w-full">
            <div className="flex flex-col items-start justify-start gap-2 max-w-full">
              <b className="relative leading-[110%] inline-block max-w-full mq800:text-13xl mq800:leading-[36px] mq450:text-5xl mq450:leading-[27px]">
                <span>{`Find a `}</span>
                <span className="text-accent">host</span>
                <span> for every journey</span>
              </b>
              <h3 className="m-0 relative text-xl leading-[120%] font-light font-[inherit] mq450:text-base mq450:leading-[19px]">
                Discover the best local rental properties that fits your every
                travel needs
              </h3>
            </div>
            <div className="self-stretch shadow-[0px_6px_12px_rgba(0,_0,_0,_0.02)] rounded-3xs bg-white border-light-grey-border border-[0.7px] border-solid box-border flex flex-row items-center justify-start flex-wrap content-center py-[9px] px-3 gap-x-[8.3px] gap-y-2.5 max-w-full mq800:flex-col">
              <TextField
                className="[border:none] bg-[transparent] h-14 flex-1 font-roboto text-sm text-black min-w-[335px] max-w-full mq800:min-w-full mq800:flex-[unset] mq800:self-stretch"
                placeholder="Accommodation"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <img width="24px" height="24px" src="/iconhome.svg" />
                  ),
                }}
                sx={{
                  "& fieldset": { borderColor: "#d9d9d9" },
                  "& .MuiInputBase-root": {
                    height: "56px",
                    backgroundColor: "#fff",
                    paddingRight: "12px",
                    fontSize: "14px",
                  },
                  "& .MuiInputBase-input": { color: "#000" },
                }}
              />
              <div className="flex-1 flex flex-row items-center justify-start flex-wrap content-center py-0 pl-0 pr-2 box-border gap-x-[7px] gap-y-2.5 min-w-[462px] max-w-full mq800:min-w-full mq800:flex-[unset] mq800:self-stretch">
                <div className="h-14 flex-1 min-w-[74px] gap-5 mq800:min-w-full">
                  <DatePicker
                    value={checkInDatePickerDateTimePickerValue}
                    onChange={(newValue: any) => {
                      setCheckInDatePickerDateTimePickerValue(newValue);
                    }}
                    sx={{
                      fieldset: {
                        borderColor: "#d9d9d9",
                        borderTopWidth: 1,
                        borderRightWidth: 1,
                        borderBottomWidth: 1,
                        borderLeftWidth: 1,
                      },
                      "&:hover": {
                        fieldset: { borderColor: "#d9d9d9" },
                        ".MuiOutlinedInput-notchedOutline": {
                          borderColor: "#d9d9d9",
                        },
                      },
                      "& input::placeholder": {
                        textColor: "rgba(0, 0, 0, 0.85)",
                        fontSize: 14,
                      },
                      input: {
                        color: "rgba(0, 0, 0, 0.85)",
                        fontSize: 14,
                        textAlign: "left",
                        fontWeight: "400",
                      },
                      "& .MuiInputBase-root": {
                        backgroundColor: "#fff",
                        height: 56,
                        gap: "8px",
                        flexDirection: { flexDirection: "row" },
                      },
                    }}
                    slotProps={{
                      textField: {
                        size: "medium",
                        fullWidth: false,
                        required: false,
                        autoFocus: false,
                        error: false,
                        color: "primary",
                        placeholder: "Check-in",
                      },
                      openPickerIcon: {
                        component: () => (
                          <img
                            width="24px"
                            height="24px"
                            src="/calendartodayfilled-1.svg"
                          />
                        ),
                      },
                    }}
                  />
                </div>
                <div className="h-14 flex-1 min-w-[74px] mq800:min-w-full">
                  <DatePicker
                    value={checkOutDatePickerDateTimePickerValue}
                    onChange={(newValue: any) => {
                      setCheckOutDatePickerDateTimePickerValue(newValue);
                    }}
                    sx={{
                      fieldset: {
                        borderColor: "#d9d9d9",
                        borderTopWidth: 1,
                        borderRightWidth: 1,
                        borderBottomWidth: 1,
                        borderLeftWidth: 1,
                      },
                      "&:hover": {
                        fieldset: { borderColor: "#d9d9d9" },
                        ".MuiOutlinedInput-notchedOutline": {
                          borderColor: "#d9d9d9",
                        },
                      },
                      "& input::placeholder": {
                        textColor: "rgba(0, 0, 0, 0.85)",
                        fontSize: 14,
                      },
                      input: {
                        color: "rgba(0, 0, 0, 0.85)",
                        fontSize: 14,
                        textAlign: "left",
                        fontWeight: "400",
                      },
                      "& .MuiInputBase-root": {
                        backgroundColor: "#fff",
                        height: 56,
                        gap: "8px",
                        flexDirection: { flexDirection: "row" },
                      },
                    }}
                    slotProps={{
                      textField: {
                        size: "medium",
                        fullWidth: true,
                        required: false,
                        autoFocus: false,
                        error: false,
                        placeholder: "Check-out",
                      },
                      openPickerIcon: {
                        component: () => (
                          <img
                            width="24px"
                            height="24px"
                            src="/calendartodayfilled-1.svg"
                          />
                        ),
                      },
                    }}
                  />
                </div>
                <div className="flex-1 rounded bg-white border-gainsboro border-[1px] border-solid box-border flex flex-row items-center justify-between py-3.5 px-3 min-w-[74px] gap-[0] mq800:min-w-full">
                  <input
                    className="[border:none] [outline:none] font-roboto text-sm bg-[transparent] flex-1 relative leading-[22px] text-gray-300 text-left inline-block max-w-[80%] mq750:flex-1"
                    placeholder="Guest"
                    type="text"
                  />
                  <Image
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    width={24}
                    height={24}
                    alt=""
                    src="/iconuser.svg"
                  />
                </div>
              </div>
              <Button
                className="h-14 w-[142px] mq800:text-center mq800:self-stretch mq800:w-auto mq800:min-w-[142]"
                startIcon={
                  <img width="19px" height="19px" src="/iconsearch.svg" />
                }
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#00c29f",
                  borderRadius: "4px",
                  "&:hover": { background: "#00c29f" },
                  width: 142,
                  height: 56,
                }}
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default HeroContainer;
