import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  return (
    <header
      className="flex items-center justify-between py-4 
          before:content-[''] 
          before:w-[500px] 
          before:h-[500px] 
        before:bg-instarem-blue 
          before:block before:rounded-full 
          before:absolute 
          before:top-0 
          before:right-[30%]
          before:z-[-1]
          before:translate-x-[120%]
          before:translate-y-[-50%]"
    >
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between mr-3 w-44 h-14">
            <Logo />
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        <Link
          href="/"
          aria-label={siteMetadata.headerTitle}
          className="font-semibold text-instarem-pink border-b-2 border-b-instarem-pink border-b-solid"
        >
          {'Personal'}
        </Link>
        <Link href="/" aria-label={siteMetadata.headerTitle} className="font-semibold">
          {'Business'}
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden font-bold text-gray-900 dark:text-gray-100 sm:block"
            >
              {link.title}
            </Link>
          ))}
        {/* <ThemeSwitch /> */}
        <MobileNav />
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        <Link href="/" aria-label={siteMetadata.headerTitle} className="font-bold">
          {'Login'}
        </Link>
        <button
          aria-label={siteMetadata.headerTitle}
          className="h-[44px] rounded-md bg-instarem-pink px-8 font-bold text-white text-sm leading-[44px]"
        >
          {'Sign Up'}
        </button>
      </div>
    </header>
  )
}

export default Header
