import Hx from '../Hx'
import LazyLoading from '../LazyLoading'
import styled from 'styled-components'
import testimonials from '../../data/testimonials'

export default () => (
  <section className="P2x">
    <div className="Container">
      <Hx size={7} strong center>
        Saiba o que estão falando de nós
      </Hx>
      <div className="Flex PT2x FlexWrap JCCenter">
        {testimonials.map((props, key) =>
          <Testimonial key={key} {...props} delay={key/4} />)}
      </div>
    </div>
  </section>
)

const Testimonial = ({ image, name, text, delay }) => (
  <LazyLoading
    className="Flex P16 Testimonial"
    style={{ width: 320 }}
    delay={delay}>
    <TestimonialImage>
      <img src={image} width={50} height={50} />
    </TestimonialImage>
    <div className="TestimonialContent ColorDescription">
      <FiveStars />
      <p className="FS2x SingleSpace MV8">{text}</p>
      <p className="FS2x PT4"><strong>{name}</strong></p>
    </div>
  </LazyLoading>
)

const FiveStars = () => Array(5).fill().map((p, key) =>
  <i className="mdi mdi-star" key={key} style={{ color: '#fdb813' }} />)

const TestimonialImage = styled.div`
  min-width: 50px;
  margin-right: 16px;
  img {
    border-radius: 50%;
  }
`
