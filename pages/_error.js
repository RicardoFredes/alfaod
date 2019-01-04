import Hx from '../components/Hx'
import Link from 'next/link'
import MainView from '../components/MainView'

export default () => (
  <MainView>
    <section>
      <div className="Container P3x FS3x">
        <div className="BellowTextCenter PV24">
          <Hx x={1} size={7}>Ops! Não tem nada aqui.</Hx>
          <p className="ColorDescription">Se não encontrou o que
          procurava, <Link href="/produtos"><a className="ColorPrimary">clique aqui</a></Link> e
          conheça os nossos produto</p>
        </div>
      </div>
    </section>
  </MainView>
)
