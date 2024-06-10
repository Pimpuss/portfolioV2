import './App.scss';
import { Anchor, ConfigProvider } from 'antd';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experiences from './components/Experiences/Experiences';
import Contact from './components/Contact/Contact';
import { useEffect, useRef } from 'react';
import scrollIntoView from 'smooth-scroll-into-view-if-needed';

const App = () => {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const currentSection = useRef(0);
  const isScrolling = useRef(false);

  const sectionKeys = ['home', 'about', 'skills', 'experiences', 'contact'];
  const sectionTitles = [
    'Accueil',
    'À propos',
    'Compétences',
    'Expériences',
    'Contact',
  ];

  useEffect(() => {
    if (!window.location.hash) {
      window.location.hash = '#home';
    }

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling.current) return;
      isScrolling.current = true;

      if (e.deltaY > 0) {
        // Scroll down
        if (currentSection.current < sectionsRef.current.length - 1) {
          currentSection.current += 1;
        }
      } else {
        // Scroll up
        if (currentSection.current > 0) {
          currentSection.current -= 1;
        }
      }

      const section = sectionsRef.current[currentSection.current];
      if (section) {
        scrollIntoView(section, {
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
          scrollMode: 'if-needed',
        }).then(() => {
          isScrolling.current = false;
        });
        // Update URL hash immediately
        window.location.hash = `#${sectionKeys[currentSection.current]}`;
        // Update active Anchor link
        updateActiveLink();
      } else {
        isScrolling.current = false;
      }
    };

    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLAnchorElement).closest('a');
      if (anchor && anchor.hash) {
        const key = anchor.hash.substring(1); // Get key without '#'
        const index = sectionKeys.indexOf(key);
        if (index !== -1) {
          currentSection.current = index;
        }
      }
    };

    const updateActiveLink = () => {
      const activeLink = document.querySelector(
        '.ant-anchor-link-title-active'
      );
      if (activeLink) {
        activeLink.classList.remove('ant-anchor-link-title-active');
      }
      const newActiveLink = document.querySelector(
        `a[href="#${
          sectionKeys[currentSection.current]
        }"] .ant-anchor-link-title`
      );
      if (newActiveLink) {
        newActiveLink.classList.add('ant-anchor-link-title-active');
      }
    };

    window.addEventListener('wheel', handleWheel);
    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      document.removeEventListener('click', handleClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
              items={sectionKeys.map((key, index) => ({
                key,
                href: `#${key}`,
                title: sectionTitles[index],
              }))}
            />
          </div>
          <div
            id="home"
            className="section"
            ref={(el) => (sectionsRef.current[0] = el)}
          >
            <Home />
          </div>
          <div
            id="about"
            className="section"
            ref={(el) => (sectionsRef.current[1] = el)}
          >
            <About />
          </div>
          <div
            id="skills"
            className="section"
            ref={(el) => (sectionsRef.current[2] = el)}
          >
            <Skills />
          </div>
          <div
            id="experiences"
            className="section"
            ref={(el) => (sectionsRef.current[3] = el)}
          >
            <Experiences />
          </div>
          <div
            id="contact"
            className="section"
            ref={(el) => (sectionsRef.current[4] = el)}
          >
            <Contact />
          </div>
        </div>
      </ConfigProvider>
    </>
  );
};

export default App;
