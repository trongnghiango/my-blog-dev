# Readme

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

``` tsx
const Home: NextPage = ({
  blogData,
  tags,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [filterWord, setFilterWord] = useState<string[]>([])
  const [selectedIdx, setSelectedIdx] = useState<number[]>([])
  const filteredBlog: BlogPost[] = useMemo(() => {
    return filterWord.length > 0
      ? blogData.filter((blog: BlogPost) => {
          return filterWord.every((filter) => blog.tags.includes(filter))
        })
      : blogData
  }, [filterWord])
  const filterLabel = (tag: any, idx: number) => {
    if (selectedIdx.includes(idx)) {
      setSelectedIdx(selectedIdx.filter((id) => id !== idx))
      setFilterWord(filterWord.filter((filter) => filter !== tag.innerText))
    } else {
      setSelectedIdx([...selectedIdx, idx])
      setFilterWord([...filterWord, tag.innerText])
    }
  }

  return (
    <main className="layout">
      <title> Home Page </title>
      <section>
        <div className="mt-3 text-center">
          <h1 className="text-[3rem]"> Welcome to DevBlog </h1>
          <p>
            A full-stack blog made with Next.js, TailwindCSS, Github GraphQL
          </p>
        </div>
      </section>
      <section className="flex flex-col items-center text-[1.15rem] mt-12">
        <div className="flex gap-3 mb-12">
          {tags.map((tag: string, idx: number) => {
            return (
              <button
                className={`${
                  selectedIdx.includes(idx)
                    ? 'label-selected hover:bg-sky-400 transition-all duration-300'
                    : 'label hover:bg-sky-400 transition-all duration-300'
                }`}
                key={idx}
                onClick={(e) => filterLabel(e.target, idx)}
              >
                {tag}
              </button>
            )
          }
        </div>
       
      </section>
        <section className='container mx-auto flex flex-col gap-3 mt-8 mb-12'>
          

            {
              filteredBlog.map((blog: BlogPost) => {
          return (
            
            
                 <BlogCard key={id} title={title} bodyText={bodyText} tags={tags} url={url} />

           
          )
        })}
          
        </section>
    </main>
  )
}
export default Home

const BlogCard: React.FC<BlogPost> = ({ id, title, bodyText, createdAt, author, tags, url }) => {

  const previewText = bodyText?.substring(0, 150) + ' ...'
  return (
    <a href={url} target="_blank" rel="noreferrer" className='card px-4 py-2'>
      <div>
        <h3 className='font-medium text-2xl text-[#dfa612] py-2'>👉 {' '} {title}</h3>

        <p className='py-3 font-light'>{previewText}</p>

        <div className="tags flex items-center gap-2">
          {
            !!tags && tags.map((tag: string, index: number) => {
              return (
                <span key={index} className="tag text-sm border rounded-full py-1 px-2">
                  {tag}
                </span>
              );
            })
          }
        </div>
      </div>
    </a>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  let blogs: BlogPost[] = await getBlogs()
  let tags: string[] = []
  for (const blog of blogs) {
    for (const tag of blog.tags) {
      if (!tags.includes(tag)) {
        tags.push(tag)
      }
    }
  }
  console.log(tags)
  return {
    props: {
      blogData: blogs,
      tags: tags,
    },
  }
}
```