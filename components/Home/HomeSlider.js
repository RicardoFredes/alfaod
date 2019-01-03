import { Component } from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import slides from '../../static/json/slides'
import styled from 'styled-components'

export default class extends Component {
  state = {
    position: 0,
    quantify: slides.length
  }

  componentDidMount = () => this.interval

  componentWillUnmount = clearInterval(this.interval)

  interval = setInterval(() => this.setNextPosition(), 7000)

  setNextPosition = () => {
    const nextPosition = this.state.position + 1
    if (nextPosition < this.state.quantify) this.setState({ position: nextPosition })
    else this.setState({ position: 0 })
  }

  reseInterval = position => {
    clearInterval(this.interval)
    this.setState({ position })
    return this.interval = setInterval(() => this.setNextPosition(), 7000)
  }

  render = () => (
    <section className="SliderSection BellowTextCenter">
      <div className="Slider Flex">
        {slides.map(({ image, title, description, button }, key) =>
          <Slide
            image={image}
            position={this.state.position}
            key={key}
            className="Slide Flex AICenter">
            <div className="SlideContent Container P3x">
              {title.map((part, key) => (
                <div className="FS9x Strong SlideTitle" key={key}>{part}</div>
              ))}
              <p className="FS6x MV24">{description}</p>
              {button && (
                <Link href={button.href}>
                  <a className="Btn BtnSecondary">{button.name}</a>
                </Link>
              )}
            </div>
          </Slide>
        )}
      </div>
      <div className="Bullets Flex FlexCenter">
        {slides.map((props, key) =>
          <div
            key={key}
            className={classNames({
              Active: key === this.state.position
            }, 'Bullet')}
            onClick={() => this.reseInterval(key)} />
        )}
      </div>
    </section>
  )
}

const Slide = styled.div`
  min-width: 100vw;
  background-image: url(${({ image }) => image || ''});
  transform: translateX(${({ position }) => getTranslateByPosition(position)});
  transition: transform ease .3s;

`

const getTranslateByPosition = position => `-${position * 100}vw`
