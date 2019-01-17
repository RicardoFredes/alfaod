import Hx from '../components/Hx'
import Link from 'next/link'
import MainView from '../components/MainView'
import LazyLoading from '../components/LazyLoading'
import { alfajores, bocaditos } from '../data/productsPage'

export default () => (
  <MainView>
    <section className="PV2x BellowTextCenter">
      <div className="Container">
        <LazyLoading className="TextCenter">
          <img
            title="Alfajores"
            src="https://www.alfajoresodara.com.br/wp-odara/wp-content/uploads/2018/08/odaraText_alfajores.png" />
        </LazyLoading>
        <div className="DoubleSpace FS3x TextCenter">
          <p>Nossos alfas são produzidos com um ingrediente principal: boas energias.</p>
          <p>Mais amor e Odara, por favor!</p>
        </div>
        <div className="PV1x">
          {alfajores.map((props, key) => <Product {...props} key={key} />)}
        </div>
      </div>
      <hr />
      <div className="Container">
        <LazyLoading className="TextCenter">
          <img
            title="Bocaditos"
            src="https://www.alfajoresodara.com.br/wp-odara/wp-content/uploads/2018/08/odataText_bocaditos.png" />
        </LazyLoading>
        <div className="DoubleSpace FS3x TextCenter">
          <p>Pequenas versões dos nossos alfas. É amor à primeira mordida!</p>
        </div>
        <div className="PV1x">
          {bocaditos.map((props, key) => <Product {...props} key={key} />)}
        </div>
      </div>
    </section>
  </MainView>
)

const Product = ({ image, title, text, weight, box }) => (
  <div className="Row AICenter FS2x">
    <LazyLoading className="TextCenter PH24" style={{ minWidth: '50%' }}>
      <img src={image} />
    </LazyLoading>
    <div>
      <Hx size={5} strong>{title}</Hx>
      <p className="PV16 DoubleSpace">
        {text}
      </p>
      <p className="ColorDescription">
        <span>Peso: {weight} | Unidades: {box} | </span>
        <a className="ColorPrimary" target="_blank" href="https://www.alfajoresodara.com.br/wp-odara/wp-content/uploads/2018/10/ODA_nutircional_af.pdf">
          Tabela nutricional
        </a>
      </p>
      <Link href="/loja">
        <a className="Btn BtnSecondary MT24">Ver opções</a>
      </Link>
    </div>
  </div>
)
