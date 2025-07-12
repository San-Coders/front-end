import { Seo } from "@/ui/components/seo/seo";
import { Typography } from "@/ui/design-system/typography/typography";

export default function Home() {
  return (
    <>
      <Seo title="San Coders" description="Description..." />

      <div className="space-y-5">
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
      </div>
    </>
  );
}
