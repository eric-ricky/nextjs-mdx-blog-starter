<div id="top"></div>

[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

## Welcome to Your Next.js + MDX Blog Starter!

This starter template is designed to get you up and running with a Next.js-powered blog that uses MDX for content. You can use this as a starting point for your own blog or as a reference for how to use Next.js and MDX together.

![Product Preview][product-preview-light]

![Product Preview][product-preview-dark]

### Getting Started

To get started, clone the repository and install the dependencies:

```sh
git clone https://github.com/eric-ricky/nextjs-mdx-blog-starter.git
cd nextjs-mdx-blog-starter

npm install
or
yarn
```

Once the dependencies are installed, you can start the development server by running:

```sh
npm run dev
or
yarn dev
```

This will start the development server at http://localhost:3000. You can view and edit the source code in the /pages and /components directories.

### Writing Blog Posts

Blog posts go in the **/posts** directory. To create a new blog post, create a new file in this directory using the **.mdx** file extension. The file name will be used as the URL for the blog post, so choose a descriptive and meaningful name.

In the front matter of the blog post, you can set various metadata such as the title, author, and date:

```
---
title: My First Blog Post
tags:
  - nextjs
  - reactjs
date: 2022-12-30
excerpt: Some excerpt
image: '/image-location'
---
```

After the front matter, you can write the body of the blog post using MDX syntax. MDX is a format that allows you to write both Markdown and JSX in the same file, so you can include React components in your blog posts.

### Customizing the Template

You can customize the look and feel of the blog by editing the components in the **/components** directory. The main layout of the blog is in /components/layout, and the styles are in /components/styles/global.css. You can also add your own React components and use them in your blog posts.

### Deploying Your Blog

To deploy your blog, you can use a service like [Vercel](https://vercel.com). Vercel makes it easy to deploy Next.js apps with automatic builds and deployments.

Once you have an account, you can connect your GitHub repository and set up automatic deployments. You can also set up a custom domain if you have one.

That's it! You now have a Next.js + MDX blog up and running. Happy blogging!

[Demo](https://sparkblog.vercel.app/)

<!-- ================== contact ================= -->

## Contact

Website - [website](https://erick-otieno-portfolio.vercel.app/)

Linked In - [Eric Otieno](https://linkedin.com/in/erick-otieno-7532b01b9)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/erick-otieno-7532b01b9
[product-preview-dark]: preview-dark.jpeg
[product-preview-light]: preview-light.jpeg
