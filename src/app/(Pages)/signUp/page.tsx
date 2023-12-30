"use client";
// React
import { FC, useState } from "react";
// Styles
import s from "./styles/SignUp.module.scss";
// Icons
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
// Next
import Image from "next/image";
import Link from "next/link";
// NextUI
import { Input, Button } from "@nextui-org/react";
// Font
import { Lexend } from "next/font/google";
const font = Lexend({
  subsets: ["latin"],
  weight: ["500"],
});
const SignUp: FC = ({}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <section className={`${s.signUp} w-full h-screen`}>
      <section className={`${s.wrapper} h-full `}>
        <div
          className={`${s.wrapperForm} px-28 py-28 shadow-2xl shadow-black/50 relative z-10`}
        >
          <Link
            href={"/"}
            className={`${s.logo} hover:opacity-80 transition-opacity mb-20 tracking-tight`}
          >
            <Image src={"./Logo.svg"} width={40} height={40} alt="Logo" />
            <h5 style={font.style} className="text-black  text-lg">
              Tax<span className="text-blue ">Pal</span>
            </h5>
          </Link>
          <h5 className="text-black text-lg font-semibold mb-2">
            Get started for free
          </h5>
          <p className="text-gray text-sm">
            Already registered?{" "}
            <Link className="text-blue font-medium" href={"/signIn"}>
              Sign in
            </Link>{" "}
            to your account.
          </p>
          <form className="w-full mt-20">
            <Input
              fullWidth
              type="email"
              label="Email"
              labelPlacement={"outside"}
              placeholder=" "
              radius="sm"
              color="primary"
              classNames={{
                innerWrapper: "bg-transparent",
                inputWrapper: [
                  "text-blue",
                  "bg-slate-100",
                  "border-1",
                  "border-gray/20",
                ],
                label: ["text-sm", "font-medium", "text-blue"],
              }}
              className="mb-16 "
            />
            <Input
              color="primary"
              endContent={
                <button type="button" onClick={() => setIsVisible(!isVisible)}>
                  {isVisible ? (
                    <IoEyeOffOutline color={"#64748B"} />
                  ) : (
                    <IoEyeOutline color={"#64748B"} />
                  )}
                </button>
              }
              fullWidth
              type={isVisible ? "text" : "password"}
              label="Password"
              labelPlacement={"outside"}
              placeholder=" "
              radius="sm"
              classNames={{
                inputWrapper: [
                  "text-blue",
                  "bg-slate-100",
                  "border-1",
                  "border-gray/20",
                  "hover:bg-default-200/70",
                ],
                label: ["text-sm", "font-medium", "text-blue"],
              }}
              className="mb-10 "
            />
            <Button
              fullWidth
              type="submit"
              className="bg-blue text-white font-semibold shadow-md tracking-tight"
              radius="full"
            >
              Sign Up
            </Button>
          </form>
        </div>
        <figure className="relative z-0 bg-[url('/bgSignIn.svg')] bg-no-repeat bg-center bg-cover"></figure>
      </section>
    </section>
  );
};

export default SignUp;
