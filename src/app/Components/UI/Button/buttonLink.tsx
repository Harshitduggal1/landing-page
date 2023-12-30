import { FC } from "react";
import { Link, Button } from "@nextui-org/react";
type TButtonLink = {
  value: string;
  href: string;
  styles: string;
};

export const ButtonLink: FC<TButtonLink> = ({ href, value, styles }) => {
  return (
    <>
      <Button className={styles} href={href} as={Link}>
        {value}
      </Button>
    </>
  );
};
