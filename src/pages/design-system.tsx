// Component
import { Container } from "@/ui/components/container/container";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Seo } from "@/ui/components/seo/seo";

// Design System
import { Button } from "@/ui/design-system/button/button";
import { Avatar } from "@/ui/design-system/logo/avatar";
import { Logo } from "@/ui/design-system/logo/logo";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Typography } from "@/ui/design-system/typography/typography";

// Icons
import { RiShieldUserLine } from "react-icons/ri";

export default function DesignSystem() {
  return (
    <>
      <Seo title="Design System" description="Description..." />

      <Navigation />

      <Container className=" py-10 space-y-10">
        {/* Typography */}
        <div className="space-y-2">
          <Typography variant="caption2" weight="medium">
            Typography
          </Typography>
          <div className="flex flex-col gap-2 p-5 border border-gray-400 divide-y-2 divide-gray-400 rounded">
            <div className="pb-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                Display
              </Typography>
              <Typography variant="display">Nothing is imposible</Typography>
            </div>

            <div className="pb-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                H1
              </Typography>
              <Typography variant="h1">
                Nothing is imposible, the word itself says, I'm possible !
              </Typography>
            </div>

            <div className="pb-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                H2
              </Typography>
              <Typography variant="h2">
                Your time is limited, so don't waste it living someone else's
                life.
              </Typography>
            </div>

            <div className="pb-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                H3
              </Typography>
              <Typography variant="h3">
                The greatest glory in living lies not in never falling, but in
                rising every time we fall.
              </Typography>
            </div>

            <div className="pb-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                H4
              </Typography>
              <Typography variant="h4">
                The way to get started is to quit talking and begin doing.
              </Typography>
            </div>

            <div className="pb-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                H5
              </Typography>
              <Typography variant="h5">
                Life is what happens when you're busy making other plans.
              </Typography>
            </div>

            <div className="pb-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                Lead
              </Typography>
              <Typography variant="lead">
                The future belongs to those who believe in the beauty of their
                dreams.
              </Typography>
            </div>

            <div className="pb-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                Body sm
              </Typography>
              <Typography variant="body-sm">
                It does not matter how slowly you go as long as you do not stop.
              </Typography>
            </div>

            <div className="pb-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                Body base
              </Typography>
              <Typography variant="body-base">
                The best way to predict the future is to create it.
              </Typography>
            </div>

            <div className="pb-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                Body large
              </Typography>
              <Typography variant="body-lg">
                You only live once, but if you do it right, once is enough.
              </Typography>
            </div>
          </div>
          <div className="flex flex-row gap-2 p-5 border border-gray-400 divide-x-2 divide-gray-400 rounded">
            <div className="p-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                Caption 1
              </Typography>
              <Typography variant="caption1" weight="regular">
                Regular
              </Typography>
              <Typography variant="caption1" weight="medium">
                Medium
              </Typography>
            </div>
            <div className="p-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                Caption 2
              </Typography>
              <Typography variant="caption2" weight="regular">
                Regular
              </Typography>
              <Typography variant="caption2" weight="medium">
                Medium
              </Typography>
            </div>
            <div className="p-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                Caption 3
              </Typography>
              <Typography variant="caption3" weight="regular">
                Regular
              </Typography>
              <Typography variant="caption3" weight="medium">
                Medium
              </Typography>
            </div>
            <div className="p-5 space-y-2">
              <Typography variant="caption3" weight="medium">
                Caption 4
              </Typography>
              <Typography variant="caption4" weight="regular">
                Regular
              </Typography>
              <Typography variant="caption4" weight="medium">
                Medium
              </Typography>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-7">
          {/* Spinners */}
          <div className="qpace-y-2">
            <Typography variant="caption2" weight="medium">
              Spinners
            </Typography>
            <div className="flex items-center gap-2 p-5 border border-gray-400 rounded">
              <Spinner size="small" variant="primary" />
              <Spinner size="medium" variant="primary" />
              <Spinner size="large" variant="primary" />
            </div>
          </div>
          {/* Avatar */}
          <div className="qpace-y-2">
            <Typography variant="caption2" weight="medium">
              Avatar
            </Typography>
            <div className="flex items-center gap-2 p-5 border border-gray-400 rounded">
              <Avatar
                size="small"
                src="/assets/images/pp.png"
                alt="Avatar de Sanesu"
              />
              <Avatar src="/assets/images/pp.png" alt="Avatar de Sanesu" />
              <Avatar
                size="large"
                src="/assets/images/pp.png"
                alt="Avatar de Sanesu"
              />
            </div>
          </div>
          {/* Logo */}
          <div className="qpace-y-2">
            <Typography variant="caption2" weight="medium">
              Logo
            </Typography>
            <div className="flex items-center gap-2 p-5 border border-gray-400 rounded">
              <Logo size="very-small" />
              <Logo size="small" />
              <Logo />
              <Logo size="large" />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-2">
          <Typography variant="caption2" weight="medium">
            Buttons
          </Typography>
          <div className="p-5 space-y-8 border border-gray-400 rounded">
            <div className="space-y-2">
              <Typography variant="caption2" weight="medium">
                Small
              </Typography>
              <div className="flex items-center gap-2">
                <Button isLoading size="small">
                  Accent
                </Button>
                <Button
                  isLoading
                  size="small"
                  icon={{ icon: RiShieldUserLine }}
                  iconPosition="left"
                >
                  Accent
                </Button>
                <Button isLoading variant="secondary" size="small">
                  Secondary
                </Button>
                <Button
                  isLoading
                  variant="ico"
                  iconTheme="accent"
                  size="small"
                  icon={{ icon: RiShieldUserLine }}
                />
                <Button
                  isLoading
                  variant="ico"
                  iconTheme="secondary"
                  size="small"
                  icon={{ icon: RiShieldUserLine }}
                />
                <Button
                  isLoading
                  variant="ico"
                  iconTheme="gray"
                  size="small"
                  icon={{ icon: RiShieldUserLine }}
                />
                <Button isLoading size="small" variant="outline">
                  Outline
                </Button>
                <Button isLoading size="small" variant="disabled" disabled>
                  Disabled
                </Button>
              </div>

              <div className="flex items-center gap-2">
                <Button size="small">Accent</Button>
                <Button
                  size="small"
                  icon={{ icon: RiShieldUserLine }}
                  iconPosition="left"
                >
                  Accent
                </Button>
                <Button variant="secondary" size="small">
                  Secondary
                </Button>
                <Button
                  variant="ico"
                  iconTheme="accent"
                  size="small"
                  icon={{ icon: RiShieldUserLine }}
                />
                <Button
                  variant="ico"
                  iconTheme="secondary"
                  size="small"
                  icon={{ icon: RiShieldUserLine }}
                />
                <Button
                  variant="ico"
                  iconTheme="gray"
                  size="small"
                  icon={{ icon: RiShieldUserLine }}
                />
                <Button size="small" variant="outline">
                  Outline
                </Button>
                <Button size="small" variant="disabled" disabled>
                  Disabled
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Typography variant="caption2" weight="medium">
                Medium
              </Typography>
              <div className="flex items-center gap-2">
                <Button isLoading size="medium">
                  Accent
                </Button>
                <Button
                  isLoading
                  size="medium"
                  icon={{ icon: RiShieldUserLine }}
                  iconPosition="left"
                >
                  Accent
                </Button>
                <Button isLoading variant="secondary" size="medium">
                  Secondary
                </Button>
                <Button
                  isLoading
                  variant="ico"
                  iconTheme="accent"
                  size="medium"
                  icon={{ icon: RiShieldUserLine }}
                />
                <Button
                  isLoading
                  variant="ico"
                  iconTheme="secondary"
                  size="medium"
                  icon={{ icon: RiShieldUserLine }}
                />
                <Button
                  isLoading
                  variant="ico"
                  iconTheme="gray"
                  size="medium"
                  icon={{ icon: RiShieldUserLine }}
                />
                <Button isLoading size="medium" variant="outline">
                  Outline
                </Button>
                <Button isLoading size="medium" variant="disabled" disabled>
                  Disabled
                </Button>
              </div>

              <div className="flex items-center gap-2">
                <Button size="medium">Accent</Button>
                <Button
                  size="medium"
                  icon={{ icon: RiShieldUserLine }}
                  iconPosition="left"
                >
                  Accent
                </Button>
                <Button variant="secondary" size="medium">
                  Secondary
                </Button>
                <Button
                  variant="ico"
                  iconTheme="accent"
                  size="medium"
                  icon={{ icon: RiShieldUserLine }}
                />
                <Button
                  variant="ico"
                  iconTheme="secondary"
                  size="medium"
                  icon={{ icon: RiShieldUserLine }}
                />
                <Button
                  variant="ico"
                  iconTheme="gray"
                  size="medium"
                  icon={{ icon: RiShieldUserLine }}
                />
                <Button size="medium" variant="outline">
                  Outline
                </Button>
                <Button size="medium" variant="disabled" disabled>
                  Disabled
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Typography variant="caption2" weight="medium">
                Large
              </Typography>
              <div className="flex items-center gap-2">
                <Button isLoading size="large">
                  Accent
                </Button>
                <Button
                  isLoading
                  size="large"
                  icon={{ icon: RiShieldUserLine }}
                  iconPosition="left"
                >
                  Accent
                </Button>
                <Button isLoading variant="secondary" size="large">
                  Secondary
                </Button>
                <Button
                  isLoading
                  variant="ico"
                  iconTheme="accent"
                  size="large"
                  icon={{ icon: RiShieldUserLine }}
                />
                <Button
                  isLoading
                  variant="ico"
                  iconTheme="secondary"
                  size="large"
                  icon={{ icon: RiShieldUserLine }}
                />
                <Button
                  isLoading
                  variant="ico"
                  iconTheme="gray"
                  size="large"
                  icon={{ icon: RiShieldUserLine }}
                />
                <Button isLoading size="large" variant="outline">
                  Outline
                </Button>
                <Button isLoading size="large" variant="disabled" disabled>
                  Disabled
                </Button>
              </div>

              <div className="flex items-center gap-2">
                <Button size="large">Accent</Button>
                <Button
                  size="large"
                  icon={{ icon: RiShieldUserLine }}
                  iconPosition="left"
                >
                  Accent
                </Button>
                <Button variant="secondary" size="large">
                  Secondary
                </Button>
                <Button
                  variant="ico"
                  iconTheme="accent"
                  size="large"
                  icon={{ icon: RiShieldUserLine }}
                />
                <Button
                  variant="ico"
                  iconTheme="secondary"
                  size="large"
                  icon={{ icon: RiShieldUserLine }}
                />
                <Button
                  variant="ico"
                  iconTheme="gray"
                  size="large"
                  icon={{ icon: RiShieldUserLine }}
                />
                <Button size="large" variant="outline">
                  Outline
                </Button>
                <Button size="large" variant="disabled" disabled>
                  Disabled
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
