import Logo from '@/components/brand/logo';

const Footer = () => {
  return (
    <footer className="bg-slate-200 dark:bg-slate-800 py-4">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-10">
        <Logo />
        <div>Copyright &copy; {new Date().getFullYear()}</div>

        <div className="social">
          <a
            href="https://github.com/"
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
