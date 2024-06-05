import './App.scss';
import { Anchor, ConfigProvider } from 'antd';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experiences from './components/Experiences/Experiences';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Anchor: {
              colorPrimary: '#fff',
              colorText: '#fff',
              colorSplit: 'transparent',
              fontSize: 26,
              fontFamily: 'Josefin Sans',
            },
          },
        }}
      >
        <div className="mainContainer">
          <div className="blurNav"></div>
          <div className="anchorContainer">
            <Anchor
              direction="horizontal"
              affix={true}
              showInkInFixed={true}
              items={[
                {
                  key: 'home',
                  href: '#home',
                  title: 'Home',
                },
                {
                  key: 'about',
                  href: '#about',
                  title: 'A Propos',
                },
                {
                  key: 'skills',
                  href: '#skills',
                  title: 'Compétences',
                },
                {
                  key: 'experiences',
                  href: '#experiences',
                  title: 'Expériences',
                },
                {
                  key: 'contact',
                  href: '#contact',
                  title: 'Contact',
                },
              ]}
            />
          </div>
          <div id="home">
            <Home />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="experiences">
            <Experiences />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </div>
      </ConfigProvider>
    </>
  );
};

export default App;
