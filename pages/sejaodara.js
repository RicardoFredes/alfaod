import { Component } from 'react'
import Hx from '../components/Hx'
import LazyLoading from '../components/LazyLoading'
import MainView from '../components/MainView'

export default () => (
  <MainView>
    <section className="BellowTextCenter">
      <div className="Container PV2x">
        <LazyLoading className="TextCenter">
          <img
            title="Seja Odara"
            src="https://www.alfajoresodara.com.br/wp-odara/wp-content/uploads/2018/08/odaraText_sejaodara.png" />
        </LazyLoading>
        <div className="Row">
          <LazyLoading style={{ minWidth: '50%' }} className="P24">
            <img src="https://www.alfajoresodara.com.br/wp-odara/wp-content/uploads/2018/08/odara_distribuicao_foto_1.png" />
          </LazyLoading>
          <div className="FS2x PH16">
            <Text />
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  </MainView>
)

const Text = () => (
  <div>
    <Hx>Queremos espalhar a felicidade na palma da mão de todo mundo.</Hx>
    <p className="SingleSpace MV16">
      Curtiu a ideia e também quer oferecer boas energias para seus clientes? Vamos conversar!
    </p>
    <p className="SingleSpace MV16">
      Se você tem um ponto de venda, nosso representante da região pode ir até você. Preencha o formulário abaixo e logo mais entraremos em contato!
    </p>
    <Hx className="PT16">Nós curtimos bater um bom papo!</Hx>
    <p className="SingleSpace MV16">
      Escreva pra gente e conte um pouco de como podemos tornar a vida mais odara.
    </p>
    <p className="SingleSpace MV16">
      Sugestões, elogios, parcerias, eventos… Estamos sempre abertos!
    </p>
  </div>
)

class ContactForm extends Component {
  render = () => (
    <form className="PT1x">
      <input type="text" placeholder="Nome" name="name" />
      <input type="email" placeholder="Email" name="email" />
      <input type="phone" placeholder="Telefone" name="phone" />
      <input type="text" placeholder="Assunto" name="subject" />
      <textarea name="message" rows="10" placeholder="Sua mensagem" />
      <button type="submit" className="Btn BtnSecondary W100 TextCenter">Enviar</button>
    </form>
  )
}
