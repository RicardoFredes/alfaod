import Hx from '../components/Hx'
import MainView from '../components/MainView'
import LazyLoading from '../components/LazyLoading'

export default () => (
  <MainView>
    <section className="PV2x">
      <div className="Container BellowTextCenter">
        <LazyLoading className="TextCenter">
          <img
            title="Manifesto"
            src="https://www.alfajoresodara.com.br/wp-odara/wp-content/uploads/2018/08/odaraText_manifesto.png" />
        </LazyLoading>
        <FirstSection />
        <SecondSection />
      </div>
    </section>
  </MainView>
)

const FirstSection = () => (
  <div className="Row FlexCenter">
    <LazyLoading style={{ minWidth: '50%' }}>
      <img src="https://www.alfajoresodara.com.br/wp-odara/wp-content/uploads/2018/08/odara_manifesto_foto_1.png" />
    </LazyLoading>
    <div className="P24">
      <Hx  className="PV8" size={6}>Boas energias, nosso principal ingrediente.</Hx>
      <p className="DoubleSpace PV8 FS2x ColorDescription">
        A vontade de deixar vidas mais doces nos levou à felicidade que
        cabe na palma da mão. Recheamos nossos alfajores com paz e
        tranquilidade para transmitir aquilo que chamamos de relaxar e
        curtir o momento.
      </p>
      <p className="DoubleSpace PV8 FS2x ColorDescription">
        É só experimentar para o seu mundo ficar odara.
      </p>
    </div>
  </div>
)

const SecondSection = () => (
  <div className="Row FlexDirectionRowReverse PT1x">
    <LazyLoading style={{ minWidth: '50%' }} className="PT1x">
      <img src="https://www.alfajoresodara.com.br/wp-odara/wp-content/uploads/2018/10/odara_manifesto_foto_3.png" />
    </LazyLoading>
    <div className="P24">
      <Hx  className="PV8" size={6}>Na beira da praia da Ferrugem.</Hx>
      <p className="DoubleSpace PV8 FS2x ColorDescription">
        Assim nasceram os Alfajores Odara. A história toda começa com uma mochila nas costas e um adeus à cidade grande lá em 2013! O sonho de uma vida tranquila olhando o sol se pôr no mar foi o que fez um jovem casal se mudar de Porto Alegre com destino a Garopaba.
      </p>
      <p className="DoubleSpace PV8 FS2x ColorDescription">
        Mas como ainda não dá para viver só de amor, era hora de pôr a mão na massa (que logo viraria um alfa): começaram do zero, produzindo alfajores em casa com a receita de uma amiga (a Vê fazia os melhores do mundo!) para vender na beira da praia.
      </p>
      <p className="DoubleSpace PV8 FS2x ColorDescription">
        Escolher o nome não foi uma tarefa difícil. Odara, no Hindú, significa paz de espírito e tranquilidade, que representava bem o momento que estavam vivendo.
      </p>
      <p className="DoubleSpace PV8 FS2x ColorDescription">
        A experiência de verão deu certo e, então, o Jeison e a Isa (o casal da história) resolveram voltar a Porto Alegre para poder estruturar a produção e levar a felicidade que cabe na palma da mão a mais pessoas.
      </p>
      <p className="DoubleSpace PV8 FS2x ColorDescription">
        Nesse meio tempo, em 2014, o Kauê cruzou pelo caminho deles. Era a peça-chave que faltava para os alfajores serem o que são hoje e pra fazer a vida de mais gente ficar Odara!
      </p>
    </div>
  </div>
)
