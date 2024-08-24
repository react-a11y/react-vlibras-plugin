import reactLogo from '/react.svg'
import './App.scss'
import ReactVLibras from 'react-vlibras-plugin';
import ModalInstall from "./components/ModalInstall";
import { useLayoutEffect, useState } from 'react';
import ReactTechsLogos from 'react-techs-logos'

function App() {
  const [modalInstall, setModalInstall] = useState(false);

  useLayoutEffect(() => {
    if (modalInstall) {
      document.body.classList.add("modal-active");
    } else {
      document.body.classList.remove("modal-active");
    }
  }, [modalInstall]);

  const links = [
    { title: 'React a11y', link: 'https://github.com/react-a11y' },
    { title: 'VLibras Docs', link: 'https://vlibras.gov.br/doc/widget/index.html' },
    { title: 'React Dev', link: 'https://react.dev' },
  ];
  
  const socialLinks = [
    { href: 'https://github.com/react-a11y/react-vlibras-plugin', label: 'Github React VLibras', icon: 'github' },
    { href: 'https://www.npmjs.com/package/react-vlibras-plugin', label: 'NPM React VLibras', icon: 'npm' },
  ];

  const PillGroup = () => (
    <div className="pill-group">
      {links.map((item) => (
        <a
          key={item.title}
          className="pill"
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{item.title}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="14"
            viewBox="0 -960 960 960"
            width="14"
            fill="currentColor"
          >
            <path
              d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"
            />
          </svg>
        </a>
      ))}
    </div>
  );
  
  const SocialLinks = () => (
    <div className="social-links">
      {socialLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          aria-label={link.label}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ReactTechsLogos name={link.icon} />
        </a>
      ))}
    </div>
  );

  return (
    <>
      <div className="shimmer top"></div>
      <div className="shimmer bottom"></div>

      <ReactVLibras />

      <ModalInstall
        active={modalInstall}
        closeModal={() => setModalInstall(false)}
      />

      <main className="main">
        <div className="content">
          <div className="left-side">
            <img src={reactLogo} className="logo react" alt="React logo" />
            <h1>VLibras</h1>
            <div className="install">
              <code className="code-wrapper">{`<react-vlibras-plugin/>`}</code>
              <button className="button-modal" type="button" onClick={() => setModalInstall(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="gear" width="30" height="30" viewBox="0 0 306.257 306.257"><path d="m274.968 136.765 23.788-21.476-15.897-38.379-32.006 1.635-23.141-23.141 1.635-32.006-38.379-15.897-21.476 23.788h-32.726L115.289 7.5 76.91 23.397l1.635 32.006-23.141 23.141-32.006-1.634-15.897 38.379 23.788 21.476v32.726L7.501 190.967l15.897 38.379 32.007-1.635 23.141 23.141-1.635 32.006 38.379 15.897 21.476-23.788h32.726l21.476 23.788 38.379-15.897-1.635-32.006 23.141-23.141 32.006 1.635 15.897-38.379-23.788-21.476v-32.726zm-121.84 60.808c-24.546 0-44.445-19.898-44.445-44.445 0-24.546 19.899-44.444 44.445-44.444s44.445 19.898 44.445 44.444c0 24.546-19.899 44.445-44.445 44.445z" fill="#51b3da"/><path d="M153.128 78.545c-41.191 0-74.583 33.392-74.583 74.583s33.392 74.583 74.583 74.583c41.191 0 74.583-33.392 74.583-74.583s-33.391-74.583-74.583-74.583zm0 119.028c-24.546 0-44.445-19.898-44.445-44.445 0-24.546 19.899-44.444 44.445-44.444s44.445 19.898 44.445 44.444c0 24.546-19.899 44.445-44.445 44.445z" fill="#c7e9f4"/><path d="M282.468 166.157v-26.059l21.313-19.243a7.5 7.5 0 0 0 1.903-8.437L289.787 74.04a7.507 7.507 0 0 0-7.311-4.62l-28.678 1.465-18.427-18.427 1.465-28.677a7.501 7.501 0 0 0-4.62-7.312L193.837.571a7.503 7.503 0 0 0-8.438 1.903l-19.241 21.314h-26.06L120.856 2.474a7.502 7.502 0 0 0-8.437-1.903L74.04 16.468a7.5 7.5 0 0 0-4.62 7.312l1.465 28.677-18.427 18.427-28.677-1.464a7.51 7.51 0 0 0-7.312 4.62L.572 112.419a7.5 7.5 0 0 0 1.903 8.437l21.313 19.242v26.06L2.475 185.4a7.5 7.5 0 0 0-1.903 8.437l15.897 38.379a7.5 7.5 0 0 0 7.312 4.62l28.677-1.465 18.427 18.427-1.465 28.677a7.501 7.501 0 0 0 4.62 7.312l38.379 15.897a7.497 7.497 0 0 0 8.437-1.903l19.243-21.314h26.06l19.241 21.314a7.5 7.5 0 0 0 8.437 1.904l38.379-15.897a7.5 7.5 0 0 0 4.62-7.312l-1.465-28.677 18.427-18.427 28.678 1.465a7.498 7.498 0 0 0 7.311-4.62l15.897-38.379a7.5 7.5 0 0 0-1.903-8.437l-21.313-19.244zm-4.513 55.429-26.721-1.365a7.492 7.492 0 0 0-5.686 2.187l-23.141 23.141a7.498 7.498 0 0 0-2.186 5.686l1.365 26.72-28.599 11.846-17.929-19.859a7.502 7.502 0 0 0-5.567-2.474h-32.726a7.5 7.5 0 0 0-5.567 2.474l-17.929 19.859-28.599-11.846 1.365-26.72a7.498 7.498 0 0 0-2.187-5.686l-23.141-23.141a7.49 7.49 0 0 0-5.686-2.187l-26.72 1.365-11.846-28.599 19.859-17.929a7.5 7.5 0 0 0 2.474-5.567v-32.726a7.5 7.5 0 0 0-2.474-5.567l-19.859-17.929L28.301 84.67l26.72 1.365a7.495 7.495 0 0 0 5.686-2.187l23.141-23.141a7.498 7.498 0 0 0 2.187-5.686l-1.365-26.72 28.599-11.846 17.929 19.859a7.5 7.5 0 0 0 5.567 2.474h32.726a7.5 7.5 0 0 0 5.567-2.474l17.929-19.859 28.599 11.846-1.365 26.72a7.5 7.5 0 0 0 2.186 5.686l23.141 23.141a7.486 7.486 0 0 0 5.686 2.187l26.721-1.365 11.846 28.599-19.858 17.929a7.502 7.502 0 0 0-2.475 5.567v32.726c0 2.122.899 4.145 2.475 5.567l19.858 17.929-11.846 28.599z" fill="#13829b"/><path d="M153.128 71.045c-45.261 0-82.084 36.822-82.084 82.083s36.822 82.084 82.084 82.084c45.261 0 82.083-36.822 82.083-82.084s-36.822-82.083-82.083-82.083zm0 149.167c-36.99 0-67.084-30.094-67.084-67.084s30.094-67.083 67.084-67.083c36.989 0 67.083 30.094 67.083 67.083s-30.093 67.084-67.083 67.084z" fill="#13829b"/><path d="M153.128 101.184c-28.642 0-51.944 23.302-51.944 51.944s23.302 51.944 51.944 51.944c28.643 0 51.944-23.302 51.944-51.944s-23.301-51.944-51.944-51.944zm0 88.888c-20.371 0-36.944-16.573-36.944-36.944s16.573-36.944 36.944-36.944c20.371 0 36.944 16.573 36.944 36.944s-16.573 36.944-36.944 36.944z" fill="#13829b"/></svg>
                Instalação
              </button>
            </div>
          </div>
          <div className="divider" role="separator" aria-label="Divider"></div>
          <div className="right-side">
            <PillGroup />
            <SocialLinks />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
