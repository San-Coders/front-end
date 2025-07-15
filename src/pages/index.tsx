// Component:
import { Seo } from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";
import { LandingPageContainer } from "@/ui/modules/landing-page/landing-page.container";

export default function Home() {
  return (
    <>
      <Seo title="San Coders" description="Description..." />
      <Layout>
        <LandingPageContainer />
      </Layout>
    </>
  );
}
