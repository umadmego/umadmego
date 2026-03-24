
import AppLayout from "@/components/layout/AppLayout";
import HeroSlider from "@/components/homepage/HeroSlider";
import PhotoHighlights from "@/components/homepage/PhotoHighlights";
import InstagramFeed from "@/components/homepage/InstagramFeed";

export default function Home() {
  return (
    <AppLayout>
      <HeroSlider />
      <PhotoHighlights />
      <InstagramFeed />
    </AppLayout>
  );
}
