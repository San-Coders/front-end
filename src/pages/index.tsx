import { RiHome2Fill } from "react-icons/ri";

// Component:
import { Seo } from "@/ui/components/seo/seo";

// Design System:
import { Button } from "@/ui/design-system/buuton/button";
import { Typography } from "@/ui/design-system/typography/typography";
import { Spinner } from "@/ui/design-system/spinner/spinner";

export default function Home() {
  return (
    <>
      <Seo title="San Coders" description="Description..." />

      <div className="flex items-center gap-4 p-10">
        <Spinner size="small" variant="primary" />
        <Spinner size="medium" variant="primary" />
        <Spinner size="large" variant="primary" />
      </div>

      <div className="flex items-center gap-4 p-10">
        <Button isLoading size="small">
          Accent
        </Button>
        <Button
          isLoading
          size="small"
          icon={{ icon: RiHome2Fill }}
          iconPosition="left"
        >
          Left
        </Button>
        <Button
          isLoading
          size="small"
          icon={{ icon: RiHome2Fill }}
          iconPosition="right"
        >
          Right
        </Button>
        <Button isLoading size="small" variant="secondary">
          Secondary
        </Button>
        <Button isLoading size="small" variant="outline">
          Outline
        </Button>
        <Button isLoading size="small" variant="disabled" disabled>
          Disabled
        </Button>

        <Button
          isLoading
          size="small"
          variant="ico"
          icon={{ icon: RiHome2Fill }}
          iconTheme="accent"
        />
        <Button
          isLoading
          size="small"
          variant="ico"
          icon={{ icon: RiHome2Fill }}
          iconTheme="secondary"
        />
        <Button
          isLoading
          size="small"
          variant="ico"
          icon={{ icon: RiHome2Fill }}
          iconTheme="gray"
        />
      </div>

      <div className="flex items-center gap-4 p-10">
        <Button size="medium">Accent</Button>
        <Button size="medium" icon={{ icon: RiHome2Fill }} iconPosition="left">
          Left
        </Button>
        <Button size="medium" icon={{ icon: RiHome2Fill }} iconPosition="right">
          Right
        </Button>
        <Button size="medium" variant="secondary">
          Secondary
        </Button>
        <Button size="medium" variant="outline">
          Outline
        </Button>
        <Button size="medium" variant="disabled" disabled>
          Disabled
        </Button>

        <Button
          size="medium"
          variant="ico"
          icon={{ icon: RiHome2Fill }}
          iconTheme="accent"
        />
        <Button
          size="medium"
          variant="ico"
          icon={{ icon: RiHome2Fill }}
          iconTheme="secondary"
        />
        <Button
          size="medium"
          variant="ico"
          icon={{ icon: RiHome2Fill }}
          iconTheme="gray"
        />
      </div>

      <div className="flex items-center gap-4 p-10">
        <Button size="large">Accent</Button>
        <Button size="large" icon={{ icon: RiHome2Fill }} iconPosition="left">
          Left
        </Button>
        <Button size="large" icon={{ icon: RiHome2Fill }} iconPosition="right">
          Right
        </Button>
        <Button size="large" variant="secondary">
          Secondary
        </Button>
        <Button size="large" variant="outline">
          Outline
        </Button>
        <Button size="large" variant="disabled" disabled>
          Disabled
        </Button>
        <Button
          size="large"
          variant="ico"
          icon={{ icon: RiHome2Fill }}
          iconTheme="accent"
        />
        <Button
          size="large"
          variant="ico"
          icon={{ icon: RiHome2Fill }}
          iconTheme="secondary"
        />
        <Button
          size="large"
          variant="ico"
          icon={{ icon: RiHome2Fill }}
          iconTheme="gray"
        />
      </div>

      {/* <div className="space-y-5">
        <Typography variant="display" component="div">
          San Coders
        </Typography>
        <Typography variant="body-lg" component="h1" theme="primary">
          San Coders
        </Typography>
        <Typography variant="lead" component="div" theme="secondary">
          San Coders
        </Typography>
        <Typography variant="body-sm" component="div" theme="gray">
          San Coders
        </Typography>
        <Typography variant="caption4" component="div">
          San Coders
        </Typography>
        <Typography variant="caption4" component="div" weight="medium">
          San Coders
        </Typography>
      </div> */}
    </>
  );
}
