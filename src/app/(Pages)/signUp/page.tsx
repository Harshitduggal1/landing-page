"use client";
// React
import { FC, useState } from "react";
// Styles
import s from "./styles/SignUp.module.scss";
// Icons
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
// Next
import Image from "next/image";
import Link from "next/link";
// NextUI
import { Input, Button, SelectItem, Select } from "@nextui-org/react";

// Font
import { Lexend } from "next/font/google";
const font = Lexend({
  subsets: ["latin"],
  weight: ["500"],
});
const SignUp: FC = ({}) => {
  const [isVisible, setIsVisible] = useState(false);
  const DATA_SELECT = [
    { value: "AltaVista search" },
    { value: "Super Bowl commercial" },
    { value: "Our route 34 city bus ad" },
    { value: "The `Never Use This` podcast " },
  ];
  return (
    <section
      className={`${s.signUp} w-full h-full bg-[url('/bgSignIn.svg')] bg-no-repeat bg-center bg-cover`}
    >
      <section className={`${s.wrapper} h-full `}>
        <div
          className={`${s.wrapperForm} h-full bg-white px-5 md:px-24 py-12 shadow-2xl shadow-black/50 relative z-10`}
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
          <form className="w-full mt-14">
            <div className={`${s.name} `}>
              <Input
                fullWidth
                type="text"
                label="First Name"
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
                  label: ["text-sm", "font-medium", "text-black"],
                }}
              />
              <Input
                fullWidth
                type="text"
                label="Last name"
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
                  label: ["text-sm", "font-medium", "text-black"],
                }}
              />
            </div>
            <Input
              color="primary"
              fullWidth
              type="email"
              label="Email"
              labelPlacement={"outside"}
              placeholder=" "
              radius="sm"
              classNames={{
                inputWrapper: [
                  "text-blue",
                  "bg-slate-100",
                  "border-1",
                  "border-gray/20",
                ],
                label: ["text-sm", "font-medium", "text-black"],
              }}
              className=""
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
                ],
                label: ["text-sm", "font-medium", "text-black"],
              }}
              className=""
            />
            <Select
              color="primary"
              placeholder=" "
              label="How did you hear about us?"
              labelPlacement={"outside"}
              size="sm"
              classNames={{
                selectorIcon: "text-gray",
                popoverContent: "text-blue",
                trigger: [
                  "g-blue",
                  "py-5",
                  "bg-slate-100",
                  "border-1",
                  "border-gray/20",
                ],
                label: ["text-sm", "font-medium", "text-black"],
              }}
            >
              {DATA_SELECT.map((item, i) => (
                <SelectItem key={i}>{item.value}</SelectItem>
              ))}
            </Select>
            <Button
              fullWidth
              type="submit"
              className={`${s.submitBtn} bg-blue text-white font-semibold shadow-md tracking-tight`}
              radius="full"
            >
              Sign Up
              <GoArrowRight size={16} />
            </Button>
          </form>
        </div>
        <figure className="w-full h-full z-0 bg-[url('/bgSignIn.svg')] bg-no-repeat bg-center bg-cover"></figure>
      </section>
    </section>
  );
};

export default SignUp;
