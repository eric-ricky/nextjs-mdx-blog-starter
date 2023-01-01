import Logo from '@/components/brand/logo';

const Footer = () => {
  return (
    <footer className="bg-slate-200 dark:bg-slate-800 py-4">
      <div className="container mx-auto min-h-[15vh] md:min-h-fit flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-2">
        <Logo />
        <div>Copyright &copy; {new Date().getFullYear()}</div>

        <div className="social">
          <a
            href="https://github.com/eric-ricky/nextjs-mdx-blog-starter"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
            className="headingxs hover:underline"
          >
            Get it on GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
