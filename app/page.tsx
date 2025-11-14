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
          mainImage="/pixel/13.webp"
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
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Turn used gear into new possibilities
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto mb-8 text-lg">
                We offer a reliable platform for buying and selling used photography gear.
                Whether you're a beginner looking for affordable equipment or a professional
                photographer in search of high-end gear at a discounted price, we've got you covered.
              </p>
              <div className="flex justify-center gap-4 mt-8">
                <button className="px-10 py-4 bg-gray-900 text-white font-semibold uppercase rounded hover:bg-gray-800 transition-colors text-sm tracking-wide">
                  BUY
                </button>
                <button className="px-10 py-4 bg-gray-900 text-white font-semibold uppercase rounded hover:bg-gray-800 transition-colors text-sm tracking-wide">
                  SELL
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Top Sellers */}
        <TopSellers />
      </main>

      <Footer />
    </div>
  );
}
