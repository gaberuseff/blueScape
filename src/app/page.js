import Gallery from "@/components/Gallery"
import Hero from "@/components/Hero"
import CTA from "@/components/CTA"
import HowItBook from "@/components/HowItBook"
import ItemsCarousel from "@/components/ItemsCarousel"
import QA from "@/components/QA"


function page() {
  return (
    <div>
      <Hero />
      <ItemsCarousel />
      <HowItBook />
      <CTA />
      <QA />
      <Gallery />
    </div>
  )
}

export default page
