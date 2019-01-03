import Link from 'next/link'
import navigationMenu from '../static/json/navigationMenu'

export default () => (
  <nav className="Navigation BGPrimary">
    <div className="Flex PH16 Container NavigationContainer AICenter JCSpaceBetween">
      <Logo />
      <Menu />
    </div>
  </nav>
)

const Logo = () => (
  <Link href="/">
    <a className="NavigationBrand InlineBlock">
      <img src="/static/img/brand.png" height={102} width={102} />
    </a>
  </Link>
)

const Menu = () => (
  <div className="Row NavigationMenu FlexCenter">
    {navigationMenu.map(({ name, pathName }, key) => 
      <Link href={`/${pathName}`} key={key}>
        <a className="FS2x Block PH4 DecorationNone">
          {name}
        </a>
      </Link>
    )}
  </div>
)
