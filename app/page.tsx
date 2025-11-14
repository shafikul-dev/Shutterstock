import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeaturedSection from '@/components/FeaturedSection';
import TopSellers from '@/components/TopSellers';
import ProductCard from '@/components/ProductCard';
import ImageCarousel from '@/components/ImageCarousel';
import CategoryCards from '@/components/CategoryCards';
import HelpSection from '@/components/HelpSection';
import { products, promotionalBanners, carouselSlides, categoryCards, guideCards } from '@/lib/data';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Image Carousel */}
        <ImageCarousel slides={carouselSlides} autoPlay={true} autoPlayInterval={5000} />

        {/* Category Cards */}
        <CategoryCards cards={categoryCards} />

        {/* Help Section */}
        {/* <HelpSection
          mainImage="/pixel/1.webp"
          guideCards={guideCards}
        /> */}

        {/* Products Grid */}
        <section className="py-12 bg-[#fcf6f6] w-full relative">
          <div className="w-full mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-[38px] items-start">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
