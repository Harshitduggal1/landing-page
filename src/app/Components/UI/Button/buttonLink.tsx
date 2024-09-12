import { FC, ReactNode } from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
type TButtonLink = {
  value: ReactNode;
  href: string;
  styles: string;
  size: "sm" | "md" | "lg";
};

export const ButtonLink: FC<TButtonLink> = ({ href, value, styles, size }) => {
  return (
    <>
      <Button size={size} className={styles} href={href} as={Link}>
        {value}
      </Button>
    </>
  );
};
