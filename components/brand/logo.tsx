import { SparklesIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <a className="text-2xl font-bold flex items-center">
        <SparklesIcon className="h-6 text-[#031e79] dark:text-[#c4d1fc] mr-2" />
        {/* Spark */}
        <span className="text-[#031e79] dark:text-[#c4d1fc]">Spark</span>
        <span className="text-[#FF47C7]">Blog</span>
      </a>
    </Link>
  );
};

export default Logo;
