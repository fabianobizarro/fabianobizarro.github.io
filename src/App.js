import './App.css';

import Menu from './Components/Menu';
import BaseInfo from './Components/BaseInfo';
import Tabs from './Components/Tabs';
import Footer from './Components/Footer';

const App = () => (
  <>
    <Menu />
    <section>
      <BaseInfo />
      <Tabs />
    </section>
    <Footer />
  </>
);

export default App;
