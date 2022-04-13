import '../styles/globals.css';
import '../styles/search.css';
import '../styles/moviecard.css';
import '../styles/detail.css';
import '../styles/mynav.css';
import '../styles/footer.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../redux';

const store = createStore(rootReducer);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
