import { Button } from "@/ui/design-system/button/button";
import { footerSocialMediaLinks } from "./app-links";
import { v4 as uuidv4 } from "uuid";
import clsx from "clsx";
import { RiFacebookBoxFill } from "react-icons/ri";

interface Props {
  theme?: "accent" | "secondary" | "gray";
  className?: string;
}

export const SocialNetworksButton = ({
  className = "flex items-center gap-2.5",
  theme = "accent",
}: Props) => {
  const icoList = footerSocialMediaLinks.map((socialNetwork) => (
    <Button
      key={uuidv4()}
      variant="ico"
      iconTheme={theme}
      icon={{
        icon: socialNetwork.icon ? socialNetwork.icon : RiFacebookBoxFill,
      }}
      baseUrl={socialNetwork.baseUrl}
      linkType={socialNetwork.type}
    />
  ));

  return <div className={clsx(className)}>{icoList}</div>;
};
