import LazyLoading from '../components/LazyLoading'
import MainView from '../components/MainView'
import Head from 'next/head'
import Hx from '../components/Hx'
import Slider from '../components/Slider'

export default () => (
  <MainView>
    <Slider />
    <div className="Container P2x">
      <LazyLoading className="TextCenter">
        <img
        title="Boas energias que cabem na palma da mão"
        src="https://www.alfajoresodara.com.br/wp-odara/wp-content/uploads/2018/08/odaraText_boasenergias.png" />
      </LazyLoading>
    </div>
  </MainView>
)

