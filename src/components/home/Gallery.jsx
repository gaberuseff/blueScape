import {ImageGallery} from "@/components/ui/image-gallery";

const galleryImages = [
  "/yachts/yacht-1.webp",
  "/yachts/yacht-2.webp",
  "/yachts/yacht-3.webp",
  "/yachts/yacht-4.webp",
  "/yachts/yacht-5.webp",
  "/yachts/yacht-6.webp",
  "/yachts/yacht-7.webp",
  "/yachts/yacht-8.webp",
];

function Gallery() {
  return (
    <section id="gallery" className="py-14 md:py-32">
      <ImageGallery images={galleryImages} />
    </section>
  );
}

export default Gallery;
