import { Button } from "@/ui/design-system/button/button";
import { footerSocialMediaLinks } from "./app-links";
import { v4 as uuidv4 } from "uuid";
import { RiFacebookBoxFill } from "react-icons/ri";
import clsx from "clsx";

interface Props {
  className?: string;
}

export const SocialNetworksButton = ({
  className = "flex items-center gap-2.5",
}: Props) => {
  const icoList = footerSocialMediaLinks.map((socialNetwork) => (
    <Button
      key={uuidv4()}
      variant="ico"
      iconTheme="gray"
      icon={{ icon: RiFacebookBoxFill }}
    />
  ));

  return <div className={clsx(className)}>{icoList}</div>;
};
