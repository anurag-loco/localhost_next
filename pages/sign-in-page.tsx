import type { NextPage } from "next";
import { useCallback } from "react";
import {
  Typography,
  Box,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import HeaderTop from "../components/header-top";
import SocialMediaLogin from "../components/social-media-login";
import { useRouter } from "next/router";

const SignInPage: NextPage = () => {
  const router = useRouter();

  const onDontHaveAnClick = useCallback(() => {
    router.push("/sign-up-page");
  }, [router]);

  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] box-border leading-[normal] tracking-[normal] hover:[background:linear-gradient(#fff,_#fff),_#87550a]">
      <HeaderTop headerTop="0" headerPosition="sticky" headerFlex="unset" />
      <main className="self-stretch flex flex-col items-center justify-center py-[203.5px] px-5 box-border bg-[url('/login-sections1@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full shrink-0 z-[1] text-left text-7xl text-dark font-archivo mq800:gap-7 mq800:pt-[86px] mq800:pb-[86px] mq800:box-border mq1150:pt-[132px] mq1150:pb-[132px] mq1150:box-border">
        <div className="w-[589px] rounded-lg overflow-hidden flex flex-row items-start justify-start max-w-full">
          <div className="flex-1 bg-white flex flex-col items-center justify-start py-10 px-12 box-border gap-6 max-w-full mq800:py-[26px] mq800:px-6 mq800:box-border">
            <div className="self-stretch flex flex-col items-start justify-start">
              <h2 className="m-0 self-stretch relative text-inherit tracking-[0.02em] font-bold font-[inherit] mq450:text-2xl">
                Sign in
              </h2>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[37.7px] text-center text-base mq800:gap-[19px]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <form className="m-0 self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0 gap-[26.7px]">
                  <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0 gap-[15.7px]">
                    <TextField
                      className="[border:none] bg-[transparent] self-stretch font-archivo text-base text-light-text"
                      placeholder="Email address"
                      variant="outlined"
                      InputProps={{
                        endAdornment: (
                          <img
                            width="20px"
                            height="20px"
                            src="/iconaccount.svg"
                          />
                        ),
                      }}
                      sx={{
                        "& fieldset": { borderColor: "#d9d9d9" },
                        "& .MuiInputBase-root": {
                          height: "51px",
                          backgroundColor: "#fff",
                          paddingRight: "18.8px",
                        },
                        "& .MuiInputBase-input": { color: "#787878" },
                      }}
                    />
                    <TextField
                      className="[border:none] bg-[transparent] self-stretch font-archivo text-base text-light-text"
                      placeholder="Password"
                      variant="outlined"
                      InputProps={{
                        endAdornment: (
                          <img
                            width="20px"
                            height="20px"
                            src="/iconpassword.svg"
                          />
                        ),
                      }}
                      sx={{
                        "& fieldset": { borderColor: "#d9d9d9" },
                        "& .MuiInputBase-root": {
                          height: "51px",
                          backgroundColor: "#fff",
                          paddingRight: "18.8px",
                        },
                        "& .MuiInputBase-input": { color: "#787878" },
                      }}
                    />
                  </div>
                  <Button
                    className="w-40 h-[52px] hover:bg-saddlebrown"
                    disableElevation
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "16",
                      background: "#00c29f",
                      borderRadius: "6px",
                      "&:hover": { background: "#00c29f" },
                      width: 160,
                      height: 52,
                    }}
                  >
                    Sign in
                  </Button>
                </form>
              </div>
              <div className="self-stretch h-[1.6px] relative border-whitesmoke-300 border-t-[1.6px] border-solid box-border" />
              <SocialMediaLogin
                label="Or sign in with"
                socialLoginContainerPadding="unset"
              />
              <div
                className="self-stretch relative tracking-[0.02em] leading-[160%] cursor-pointer"
                onClick={onDontHaveAnClick}
              >
                <span>{`Don’t have an account yet? `}</span>
                <span className="text-accent">Sign up</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="self-stretch border-light-grey-border border-t-[1px] border-solid box-border flex flex-col items-center justify-start pt-2.5 px-[50px] pb-3 max-w-full text-left text-sm text-black font-archivo mq800:pl-[25px] mq800:pr-[25px] mq800:box-border">
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
      </footer>
    </div>
  );
};

export default SignInPage;
