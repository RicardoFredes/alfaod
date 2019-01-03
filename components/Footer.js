import { contact, information, links, social } from '../static/json/footer'
import Link from 'next/link'
import styled from 'styled-components'

export default () => (
  <footer className="Fotter P2x BellowTextCenter">
    <div className="Container Row JCSpaceBetween">
    	<FooterInformation />
      <div className="Row PV1x">
        <FooterLinks />
        <FooterContact />
        <FooterPayment />
      </div>
    </div>
  </footer>
)

const FooterInformation = () => (
  <div>
    <img src="/static/img/brandVersionNegative.png" />
    {information.map((text, key) =>
      <p className="SingleSpace FS12" key={key}>{text}</p>)}
  </div>
)

const FooterLinks = () => (
  <FooterMenuColumn title="Dúvidas frequentes">
    {links.map((props, key) => <LinkItem {...props} key={key} />)}
  </FooterMenuColumn>
)

const FooterContact = () => (
  <FooterMenuColumn title="Fale com a gente">
    {contact.map((props, key) => <LinkItem {...props} key={key} />)}
    <div className="MT12">
      {social.map((props, key) => <LinkIcon {...props} key={key} />)}
    </div>
  </FooterMenuColumn>
)

const FooterPayment = () => (
  <FooterMenuColumn title="Formas de Pagamento">
    <div className="MAuto" style={{ maxWidth: 200 }}>
      <img src="https://www.alfajoresodara.com.br/wp-odara/wp-content/uploads/2018/11/cards-min.png" />
      <Seal>
         <img src="https://www.alfajoresodara.com.br/wp-odara/wp-content/uploads/2018/11/ssl-seguro.png" />
       </Seal>
    </div>
  </FooterMenuColumn>
)

const FooterMenuColumn = ({ title, children }) => (
  <div className="PB1x PH16">
    <p className="Uppercase PB16 FS1x ColorDescription">
      {title}
    </p>
    {children}
  </div>
)

const LinkItem = ({ link, text, target }) => (
  <Link href={link}>
    <a className="Block PV4 FS1x DecorationNone" target={target}>
      {text}
    </a>
  </Link>
)

const LinkIcon = ({ link, title, mdi }) => (
  <Link href={link}>
    <a className="InlineBlock DecorationNone P8" target="_blank">
      <i className={mdi} />
    </a>
  </Link>
)

const Seal = styled.div`
  background-color: white;
  border-radius: 7px;
  padding: 0 3px;
  display: inline-block;
  width: 107px;
  margin-top: 32px;
`
