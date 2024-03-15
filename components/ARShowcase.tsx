import Link from 'next/link';
import Image from 'next/image';

interface ARPortfolioItem {
    imageUrl: string;
    label: string;
    link: string;
}

interface ARPortfolioProps {
    items: ARPortfolioItem[];
}

const ARShowcase: React.FC<ARPortfolioProps> = ({ items }) => {
    return (
        <div className='flex justify-center md:p-10 p-6'>
            <div className="grid max-w-fit lg:grid-cols-3 min-[700px]:grid-cols-3 grid-cols-2 grid-rows-1 md:gap-x-16 md:gap-y-8 gap-8">
                {items.map((item, index) => (
                    <div key={index} className="md:max-w-[345px] relative overflow-hidden ">
                        <Link href={item.link} className="block relative ">
                            
                                <Image
                                    className="w-full rounded-md transition duration-300 ease-in-out transform hover:opacity-75"
                                    src={item.imageUrl}
                                    alt={item.label}
                                    width={600}
                                    height={600}
                                />
                                <div className="absolute inset-0 flex items-center justify-center rounded-md opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-black bg-opacity-50">
                                    <span className="text-white md:text-4xl text-2xl">View</span>
                                </div>
                            
                        </Link>
                        <Link href={item.link}>
                            <div className="md:text-2xl text-xl font-medium text-white text-left py-4 mb-2">{item.label}</div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ARShowcase;
