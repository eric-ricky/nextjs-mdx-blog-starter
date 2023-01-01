export interface IPostMeta {
  excerpt: string;
  slug: string;
  title: string;
  tags: string[];
  date: string;
  image: string;
}

export interface IPost {
  content: string;
  meta: PostMeta;
}
