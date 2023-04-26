import { Header, ProfileInfo, Article } from '@/components/indext'
import path from "path"
import fs from "fs"

export default function Home({files}: any) {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <Header></Header>
      <section className="mt-4 max-w-screen-xl w-full flex flex-1">
        <div className="bg-white w-1/4 mr-8 p-4">
          <ProfileInfo></ProfileInfo>
        </div >
        <div className="bg-white flex-1 p-4 h-vh/8 overflow-y-auto">
          <Article files={files}></Article>
        </div>
      </section>
    </main>
  )
}

export async function getStaticProps() {

  const pagesDir = path.join(process.cwd(), 'static/md');
  const files = fs.readdirSync(pagesDir).map(item => {
    return {
      cTime: fs.statSync(path.join(process.cwd(), 'static/md', item)).birthtime.toDateString(),
      name: item.split(".")[0],
    }
  });

  return {
    props: {
      files
    },
  }
}