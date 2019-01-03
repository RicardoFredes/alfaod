import { Component } from 'react'
import Hx from '../Hx'
import Link from 'next/link'
import LoaderInline from '../Loader/LoaderInline'
import styled from 'styled-components'

const userId = '1559962143'
const token = '1559962143.3a81a9f.beb77ae811a747af9da4c3514fadc8bd'
const resultsPerPage = 6

const uri = `https://api.instagram.com/v1/users/${userId}/media/recent`
const instagramApiUri = `${uri}?access_token=${token}&count=${resultsPerPage}`

export default class extends Component {
  state = {
    error: false,
    fetching: false,
    data: [],
    nextUri: instagramApiUri,
  }

  componentDidMount = () => this.getPhotos()

  getPhotos = () => {
    this.setState({ fetching: true })
    return fetch(this.state.nextUri)
      .then(res => res.json())
      .then(({ data, pagination }) => {
        const dataParsed = dataParser(data)
        return this.setState({
          data: this.state.data.concat(dataParsed),
          nextUri: pagination && pagination.next_url,
        })
      })
      .catch(() => this.setState({ error: true }))
      .then(() => this.setState({ fetching: false }))
  }

  render = () => (
    <section className="P2x">
      <div className="Container">
        <Link href="https://www.instagram.com/alfajoresodara/">
          <a target="_blank" className="DecorationNone ColorText">
            <Hx size={7} strong center className="PB1x">
              @AlfajoresOdara
            </Hx>
          </a>
        </Link>
        <div className="Grid GridThreeColumns Container">
          {this.state.data.map((props, key) => <Photo {...props} key={key} />)}
        </div>
        {this.state.fetching ? (
          <LoaderInline />
        ) : (
          <Button onClick={this.getPhotos} />
        )}
      </div>
    </section>
  )
}

const Button = ({ onClick }) => (
  <div className="TextCenter PT1x">
    <span className="Btn BtnPrimary Pointer" onClick={onClick}>
      Carregar mais fotos
    </span>
  </div>
)

const Photo = ({ title, image, link }) => {
  return (
    <PhotoStyled>
      <Link href={link}>
        <a target="_blank">
          <img src={image} title={title} />
        </a>
      </Link>
    </PhotoStyled>
  )
}

const PhotoStyled = styled.div`
  img {
    width: 100%;
    height: auto;
    transition: ease all .3s;
    &:hover {
      filter: brightness(.8)
    }
  }
`

const dataParser = data => data.map(({ caption, images, link }) => {
  const title = caption && caption.text || ''
  const image = images && images.thumbnail && images.low_resolution.url
  if (!image) return null
  return { title, image, link }
})
