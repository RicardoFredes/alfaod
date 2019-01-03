import React, { Component } from 'react'

export default class extends Component {
  state = { active: false }

  componentDidMount = () => {
    if (!hasIntersetionObserver) return this.setState({ active: true })
    return this._observer.observe(this._ref.current)
  }

  componentWillUnmount = this.unobserve

  handleIntersect = element => {
    if (!element[0].isIntersecting) return null
    this.setState({ active: true })
    return this.unobserve()
  }

  _ref = React.createRef()

  _observer = hasIntersetionObserver && new IntersectionObserver(this.handleIntersect)

  unobserve = () => hasIntersetionObserver && this._observer.unobserve(this._ref.current)

  get componentProps() {
    const { active } = this.state
    return {
      ...this.props,
      component: null,
      ref: this._ref,
      style: {
        ...this.props.style,
        opacity: active ? 1 : 0,
        transition: 'all ease 1s',
        transitionDelay: `${this.props.delay || 0}s`,
        transform: `translateY(${active ? 0 : 40}px)`,
      }
    }
  }

  render = () => {
    const Component = this.props.component || 'div'
    return (
      <Component {...this.componentProps}>
        {this.state.active && this.props.children}
      </Component>
    )
  }
}

const hasIntersetionObserver = typeof IntersectionObserver === 'function'
