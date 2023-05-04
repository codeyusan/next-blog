import fs from 'fs';
import path from 'path';
import matter from "gray-matter";
import ReactMarkdown from 'react-markdown'

export default function Markdown({ essay, title }: any) {
  return <div className="min-h-screen flex items-center p-12 flex-col">
    <div className="mb-8 text-3xl">{title}</div>
    <article className="prose prose-slate">
      <ReactMarkdown>{essay}</ReactMarkdown>
    </article>
  </div>;
}

export async function getStaticPaths() {
  const pagesDir = path.join(process.cwd(), 'static/md');
  const files = fs.readdirSync(pagesDir).map(item => {
    return {
      params: {
        text: item.split(".")[0]
      },
    }
  });
  return {
    paths: files,
    fallback: false
  }
}

export async function getStaticProps({params}: any) {
  const content = fs.readFileSync(path.join(process.cwd(), 'static/md', params.text + '.md')).toString();
  const info = matter(content);
  return {
    props: {
      essay: info.content,
      title: params.text
    },
  };
}