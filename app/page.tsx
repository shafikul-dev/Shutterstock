import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import ImageCarousel from '@/components/ImageCarousel';
import CategoryCards from '@/components/CategoryCards';
import UsedGearSection from '@/components/UsedGearSection';
import { products, carouselSlides, categoryCards, sellers, guideCards } from '@/lib/data';
import HelpSection from '@/components/HelpSection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="grow">
        {/* Image Carousel */}
        <ImageCarousel slides={carouselSlides} autoPlay={true} autoPlayInterval={5000} />

        {/* Category Cards */}
        <CategoryCards cards={categoryCards} />

        {/* Help Section */}
        <HelpSection
          mainImage="/pixel/1.webp"
          guideCards={guideCards}
        />

        {/* Products Grid */}
        <section className="py-8 md:py-12 bg-[#fcf6f6] w-full relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-[38px] justify-items-center">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Featured savings / Used Gear Section */}
        <UsedGearSection sellers={sellers} />
      </main>

      <Footer />
    </div>
  );
}
