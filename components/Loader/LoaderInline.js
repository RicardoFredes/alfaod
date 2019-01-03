import styled, { keyframes } from 'styled-components'

export default () => (
  <div className="Loader LoaderInline P24 TextCenter">
    <Loader />
  </div>
)

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Loader = styled.div`
  display: inline-block;
  width: 64px;
  height: 64px;
  &:after {
    content: ' ';
    display: block;
    width: 32px;
    height: 32px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #f42434;
    border-color: #f42434 transparent #f42434 transparent;
    animation: ${rotate} 1.2s linear infinite;
  }
`
