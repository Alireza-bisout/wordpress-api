import "@/styles/globals.css";
import "@/styles/root.css"
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
