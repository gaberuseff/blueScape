import CTA from "@/components/home/CTA"
import Gallery from "@/components/home/Gallery"
import Hero from "@/components/home/Hero"
import HowItBook from "@/components/home/HowItBook"
import QA from "@/components/home/QA"
import ItemsCarousel from "@/features/yachts/ItemsCarousel"

function page() {
  return (
    <>
      <Hero />
      <ItemsCarousel />
      <HowItBook />
      <CTA />
      <QA />
      <Gallery />
    </>
  )
}

export default page
