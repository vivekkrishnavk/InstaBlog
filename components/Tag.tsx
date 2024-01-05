import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-3 text-xs text-blue-500 bg-blue-100 rounded-full px-[5px] py-[3px] text-center"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
