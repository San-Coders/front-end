// Component:
import { Seo } from "@/ui/components/seo/seo";

// Design System
import { Navigation } from "@/ui/components/navigation/navigation";
import { Footer } from "@/ui/components/navigation/footer";

export default function Home() {
  return (
    <>
      <Seo title="San Coders" description="Description..." />

      <Navigation />

      <Footer />
    </>
  );
}
