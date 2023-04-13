
import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import logoIgnite from "../assets/logo.svg"
import { Container, Header } from '../styles/stylesComponents/StyledApp'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <img src={logoIgnite.src} alt=''/>
      </Header>
      <Component {...pageProps} />

    </Container>
  )
}
