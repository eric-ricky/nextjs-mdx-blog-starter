import { useTheme } from 'next-themes';
import Image from 'next/image';

const GitHubMark = () => {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <a
      href="https://github.com/eric-ricky/nextjs-mdx-blog-starter"
      aria-label="GitHub"
      target="_blank"
      rel="noreferrer"
      className="relative h-6 w-6 md:h-8 md:w-8 cursor-pointer overflow-hidden"
    >
      <Image
        src={
          currentTheme === 'dark'
            ? '/images/github-mark-white.png'
            : '/images/github-mark.png'
        }
        layout="fill"
        objectFit="cover"
        alt="github mark"
      />
    </a>
  );
};

export default GitHubMark;
