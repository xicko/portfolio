import Link from "next/link";
import Image from "next/image";
import AnimatedComponent from "./AnimatedComponent";

interface WebPortfolioItem {
  imageUrl: string;
  label: string;
  link: string;
}

interface WebPortfolioProps {
  items: WebPortfolioItem[];
}

const WebShowcase: React.FC<WebPortfolioProps> = ({ items }) => {
  return (
    <div className="flex justify-center md:p-10 p-6">
      <div className="grid max-w-fit lg:grid-cols-2  min-[700px]:grid-cols-2 grid-rows-1 md:gap-x-16 md:gap-y-8 gap-8">
        {items.map((item, index) => (
          <AnimatedComponent key={index}>
            <div className="max-w-[550px] relative overflow-hidden ">
              <Link
                href="/[WEBprojects]"
                as={`/${item.link}`}
                key={item.link}
                className="block relative "
              >
                <Image
                  className="w-full rounded-md transition duration-300 ease-in-out transform hover:opacity-75"
                  src={item.imageUrl}
                  alt={item.label}
                  width={755}
                  height={425}
                  placeholder="blur"
                  blurDataURL={item.imageUrl}
                />
                <div className="absolute inset-0 flex items-center justify-center rounded-md opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-black bg-opacity-50">
                  <div className="md:w-[70px] md:h-[70px] w-[40px] h-[40px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 512 512"
                    >
                      <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
                    </svg>
                  </div>
                </div>
              </Link>
              <Link href="/[WEBprojects]" as={`/${item.link}`} key={item.link}>
                <div className="md:text-2xl text-xl font-bold text-white text-left py-4 mb-2">
                  {item.label}
                </div>
              </Link>
            </div>
          </AnimatedComponent>
        ))}
      </div>
    </div>
  );
};

export default WebShowcase;
