// add bootstrap css
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import Layout from '../components/layout';

//store - context
import { StoreProvider } from '../utils/Store';

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </StoreProvider>
  );
}

export default MyApp;
