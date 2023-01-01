import Logo from '@/components/brand/logo';
import GitHubMark from '@/components/ui/github-mark';
import ThemeToggle from '@/components/ui/theme-toggle';
import Link from 'next/link';

const menuItems = [
  { label: 'Home', link: '/' },
  { label: 'Components', link: '/' },
  { label: 'Showcase', link: '/' },
  { label: 'Next.js', link: '/' },
];

const Header = () => {
  return (
    <section className="brand-white border-b-2 border-slate-200 dark:border-slate-600">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
        <Logo />

        {/* menu */}
        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center border-r-2">
            {menuItems.map((item, i) => (
              <div className="mr-2" key={i}>
                <Link href={item.link} prefetch={false}>
                  <a className="inline-block px-4 text-md font-medium no-underline rounded-md dark:text-gray-200 hover:text-primary focus:text-primary">
                    {item.label}
                  </a>
                </Link>
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <GitHubMark />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
