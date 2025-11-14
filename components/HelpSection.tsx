import Image from 'next/image';
import { GuideCard } from '@/types';

interface HelpSectionProps {
  mainImage: string;
  guideCards: GuideCard[];
}

export default function HelpSection({ mainImage, guideCards }: HelpSectionProps) {
  return (
    <div className="container mx-auto px-5" id="cta">
      <div className="my-[73px]">
        <div className="flex gap-[15px]">
        {/* Left Section - Main Image */}
        <div className="w-1/2 hidden lg:flex">
          <Image
            src={mainImage}
            alt=""
            width={500}
            height={500}
            className="w-[792px] h-[470px] object-cover"
            loading="lazy"
          />
        </div>

        {/* Right Section - Content */}
        <div className="lg:w-1/2 content">
          <div>
            <h3 className="font-extralightbold text-5xl">New to photography? Let us help!</h3>
            <p className='pt-2 line-clamp-3 overflow-hidden text-ellipsis'>We offer a variety of written & recorded guides for all aspects of photography, ranging from equipment handling to artistic theory.</p>
            
            {/* Search Input */}
            <div className="relative my-3">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="absolute text-[var(--brand-color)] top-[13px] text-lg left-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
              </svg>
              <input
                type="text"
                className="bg-white hover:bg-gray-200 h-[42px] w-full md:w-[270px] px-12 rounded-lg focus:outline-none hover:cursor-pointer"
                placeholder="Search Guide"
                name=""
              />
            </div>
          </div>

          {/* Guide Cards */}
          <div className="details">
            {guideCards.map((card, index) => (
              <div key={card.id} className={`details flex gap-4 ${index > 0 ? 'mt-[14px]' : ''}`}>
                <div>
                  <Image
                    src={card.image}
                    alt=""
                    width={800}
                    height={500}
                    className="w-full md:w-[269px] h-[147px] object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col justify-around">
                  <div>
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                  </div>
                  <div className="flex items-center link gap-5">
                    <a className="underline text-[#737373] hover:text-[var(--brand-color)]" href={card.link || '/'}>
                      Read More
                    </a>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 45 45"
                        fill="none"
                      >
                        <path
                          d="M22.5 37.5L19.8281 34.875L30.3281 24.375H7.5V20.625H30.3281L19.8281 10.125L22.5 7.5L37.5 22.5L22.5 37.5Z"
                          fill="#F33838"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
