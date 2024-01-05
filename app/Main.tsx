import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import Image from '@/components/Image'

const MAX_DISPLAY = 4

export default function Home({ posts }) {
  return (
    <>
      <div>
        <div className="space-y-2 pb-8 pt-28 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Instarem's Engineering Blog
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul>
          {!posts.length && 'No posts found.'}
          {console.log(posts)}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags, thumbnail } = post
            return (
              <li key={slug} className="py-3">
                <article>
                  <div className="rounded-2xl h-60 shadow-md px-5 py-9 flex flex-row">
                    <Image
                      alt={title}
                      src={thumbnail}
                      className="rounded-2xl w-40 h-40"
                      width={168}
                      height={168}
                    ></Image>
                    <div className="flex flex-col justify-center mx-[32px]">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="font-medium leading-6 text-gray-500 dark:text-gray-400 text-xs">
                          <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                        </dd>
                      </dl>
                      <div className="flex flex-row">
                        <h2 className="text-xl font-bold leading-8 tracking-tight">
                          <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                            {title}
                          </Link>
                          <Image
                            alt={title}
                            src="/static/images/arrow.svg"
                            className="ml-6 inline w-4 h-4 cursor-pointer"
                            width={16}
                            height={16}
                          ></Image>
                        </h2>
                      </div>
                      <div className="flex flex-wrap mt-[4px]">
                        {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                      <div className="max-w-none text-neutral-700 text-sm mt-[16px]">{summary}</div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6 mt-4">
          <Link
            href="/blog"
            className="text-instarem-pink text-sm font-semibold"
            aria-label="All posts"
          >
            Check out all our posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
