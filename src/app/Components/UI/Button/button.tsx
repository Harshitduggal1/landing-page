import { FC } from "react";
import { Link } from "@nextui-org/react";
type TButton = {
  value: string;
  styles?: string;
  size: "sm" | "md" | "lg";
  href: string;
};

export const MyButton: FC<TButton> = ({ value, styles, size, href }) => {
  return (
    <>
      <Link
        href={href}
        size={size}
        className={`px-4 py-3 font-medium rounded-full ${styles}`}
      >
        {value}
      </Link>
    </>
  );
};
