import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';  // Импорт gray-matter

type PostProps = {
  title: string;
  body: string;
};

export default function PostPage({ title, body }: PostProps) {
  return (
    <article>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </article>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('content', 'posts'));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('content', 'posts', params.slug + '.md'),
    'utf-8'
  );

  const { data: { title }, content } = matter(markdownWithMeta);  // Используем gray-matter для разбора метаданных

  return {
    props: {
      title,
      body: content,
    },
  };
}
