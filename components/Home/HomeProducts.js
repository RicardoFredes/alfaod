import Hx from '../Hx'
import LazyLoading from '../LazyLoading'
import Link from 'next/link'
import homeProducts from '../../data/homeProducts'

export default () => (
  <section className="Products">
    <div className="Container P2x">
      <ProductsTitle />
      <div className="Row JCCenter">
        {homeProducts.map((props, key) =>
          <Product key={key} {...props} delay={key/4} /> )}
      </div>
    </div>
  </section>
)

const ProductsTitle = () => (
  <LazyLoading className="TextCenter">
    <img
      title="Boas energias que cabem na palma da mão"
      src="https://www.alfajoresodara.com.br/wp-odara/wp-content/uploads/2018/08/odaraText_boasenergias.png" />
  </LazyLoading>
)

const Product = ({ name, description, image, button, delay }) => (
  <div className="TextCenter PH2x PT1x" style={{ maxWidth: 400 }} delay={delay}>
    <LazyLoading className="TextCenter">
      <img title={name} src={image} />
    </LazyLoading>
    <Hx size={6}>{name}</Hx>
    <p className="MV16 ColorDescription DoubleSpace FS2x">
      {description}
    </p>
    <Button {...button} />
  </div>
)

const Button = ({ children, href }) => {
  if (!children) return null
  return (
    <Link href={href}>
      <a className="Btn BtnSecondary">{children}</a>
    </Link>
  )
}
