import Link from 'next/link';
import Image from 'next/image';

interface PortfolioItem {
    imageUrl: string;
    label: string;
    link: string;
}

interface PortfolioProps {
    items: PortfolioItem[];
}

const WebShowcase: React.FC<PortfolioProps> = ({ items }) => {
    return (
        <div className='flex justify-center md:p-10 p-6'>
            <div className="grid max-w-fit lg:grid-rows-3 lg:grid-cols-3 min-[700px]:grid-rows-2 min-[700px]:grid-cols-2 grid-rows-1 md:gap-16 gap-8">
                {items.map((item, index) => (
                    <div key={index} className="max-w-[500px] relative overflow-hidden">
                        <Link href={item.link} className="block relative">
                            
                                <Image
                                    className="w-full rounded-md transition duration-300 ease-in-out transform hover:opacity-75"
                                    src={item.imageUrl}
                                    alt={item.label}
                                    width={600}
                                    height={600}
                                />
                                <div className="absolute inset-0 flex items-center justify-center rounded-md opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-black bg-opacity-50">
                                    <span className="text-white text-3xl">View</span>
                                </div>
                            
                        </Link>
                        <Link href={item.link}>
                            <div className="text-xl text-left py-4 mb-2">{item.label}</div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WebShowcase;
