import { Component } from 'react'
import { withRouter } from 'next/router'
import classNames from 'classnames'
import Link from 'next/link'
import navigationMenu from '../data/navigationMenu'
import styled from 'styled-components'

class Header extends Component {
  state = {
    active: false,
    pathName: this.props.router.pathname
  }

  toogleMenu = () => {
    this.setState({ active: !this.state.active })
  }

  render = () => (
    <nav className="Navigation BGPrimary">
      <div
        className="Flex PH16 Container NavigationContainer AICenter JCCenter">
        <Logo />
        <div className={classNames({
            BellowHide: !this.state.active
          }, 'NavigationMenuWrapper', 'FlexGrow')}>
          <Menu pathName={this.state.pathName} />
        </div>
      </div>
      <MenuHamburger onClick={this.toogleMenu} active={this.state.active} />
    </nav>
  )
}

export default withRouter(Header)

const Logo = () => (
  <Link href="/">
    <a className="NavigationBrand InlineBlock">
      <img src="/static/img/brand.png" height={102} width={102} />
    </a>
  </Link>
)

const Menu = ({ pathName }) => (
  <div className="Row NavigationMenu AICenter JCEnd FlexGrow">
    {navigationMenu.map((props, key) => (
      <MenuItem {...props} key={key} active={pathName === props.link} />
    ))}
    <div className="MenuSeparator"/>
    <MenuItem text="Loja" link="/loja" icon="shopping" active={pathName === '/loja'} />
    <MenuItem link="/carrinho" icon="cart" active={pathName === '/carrinho'} />
    <MenuItem link="/entrar" icon="account" active={pathName === '/entrar'} />
  </div>
)

const MenuItem = ({ link, text, icon, active }) => (
  <Link href={link}>
    <a className={classNames({
        Active: active
      }, 'FS2x Block PH8 DecorationNone')}>
      {icon && <i className={`mdi mdi-${icon} mdi-18px MR4`} />}
      {text}
    </a>
  </Link>
)

const MenuHamburger = ({ onClick, active }) => (
  <div className="MenuHamburger AboveHide" onClick={onClick}>
    <i className={`mdi mdi-${active ? 'close' : 'menu'}`} />
  </div>
)
