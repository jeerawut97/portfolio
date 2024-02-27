import Layout from '../components/layout/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout dynamicTitle='Portfolio'>
      <Component {...pageProps} dynamicTitle='Portfolio' />
    </Layout>
  );
}

export default MyApp
