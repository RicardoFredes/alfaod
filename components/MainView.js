import Head from 'next/head'
import "../stylus/index.styl"
import Header from '../components/Header'
import Footer from '../components/Footer'

export default ({ children, meta = {} }) => (
	<>
    <Head>
      <title>{meta.title || 'Alfajores Odara'}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:700,500,500i,400,400i,300,300i"
        rel="stylesheet" />
			<link
			  href="https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css"
				rel="stylesheet" />
    </Head>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </>
)
