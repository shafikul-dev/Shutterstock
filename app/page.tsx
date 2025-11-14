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
        <HelpSection
          mainImage="/pixel/1.webp"
          guideCards={guideCards}
        />

        {/* Products Grid */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Used Gear Section */}
      
        {/* Top Sellers */}


      </main>

      <Footer />
    </div>
  );
}
