import { Logo } from "@/ui/design-system/logo/logo";
import { Container } from "../container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import { Button } from "@/ui/design-system/button/button";
import Link from "next/link";
import { ActiveLink } from "@/ui/components/navigation/active-link";

interface Props {}

export const Navigation = ({}: Props) => {
  return (
    <div className="border-b-2 border-gray-400">
      <Container className="flex items-center justify-between py-1.5 gap-7">
        <Link href="/">
          <div className="flex items-center gap-2.5">
            <Logo size="small" />
            <div className="flex flex-col">
              <div className="text-gray font-extrabold text-[24px]">
                San Coders
              </div>

              <Typography variant="caption4" component="span" theme="gray">
                Trouve de linspiration et des feedbacks !
              </Typography>
            </div>
          </div>
        </Link>
        <div className="flex items-center gap-7">
          <Typography
            variant="caption3"
            component="div"
            className="flex items-center gap-7"
          >
            <ActiveLink href="/design-system">Design</ActiveLink>
            <ActiveLink href="/projets">Projets</ActiveLink>
            <ActiveLink href="/formations">Formations</ActiveLink>
            <ActiveLink href="/contacts">Contacts</ActiveLink>
          </Typography>
          <div className="flex items-center gap-2">
            <Button size="small" variant="secondary">
              Connexion
            </Button>
            <Button size="small">Rejoindre</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
