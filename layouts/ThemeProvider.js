import { ThemeProvider } from 'styled-components';

const defaultTheme = {
  colors: {
    default: '#000',
    primary: '#4494d3',
    link: '#0076ff',
  },
  backgrounds: {
    primary: '#ffffff',
    secondary: '#ececec',
    tertiary: 'rgb(242,242,242)',
  },
  fontSizes: {
    small: '16px',
    default: '20px',
    large: '50px',
  },
  space: multi => multi * 10,
};

const ThemeProviderWrapper = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <>
      {children}
      <link rel="stylesheet" href="/static/style.css" />
      <style jsx global>{`
        @font-face {
          font-family: 'helvetica';
          src: url('/static/fonts/HelveticaNeue-Light-08.ttf') format('truetype');
        }
        @font-face {
          font-family: 'edosz';
          src: url('/static/fonts/edosz.ttf') format('truetype');
        }
        @font-face {
          font-family: "icomoon";
          src:    url("/static/fonts/icomoon/icomoon.eot?kp7wew");
          src:    url("/static/fonts/icomoon/icomoon.eot?kp7wew#iefix") format("embedded-opentype"),
                  url("/static/fonts/icomoon/icomoon.ttf?kp7wew") format("truetype"),
                  url("/static/fonts/icomoon/icomoon.woff?kp7wew") format("woff"),
                  url("/static/fonts/icomoon/icomoon.svg?kp7wew#icomoon") format("svg");
          font-weight: normal;
          font-style: normal;
        }
        * {
          font-family: helvetica;
        }
        body {
          background-color: ${props => props.theme.color}
          margin: 0;
          padding: 0;
        }
        a {
          color: #22bad9;
        }
        p {
          font-size: 14px;
          line-height: 24px;
        }
        article {
          margin: 0 auto;
          max-width: 650px;
        }
        button {
          align-items: center;
          background-color: #22bad9;
          border: 0;
          color: white;
          display: flex;
          padding: 5px 7px;
        }
        button:active {
          background-color: #1b9db7;
          transition: background-color 0.3s;
        }
        button:focus {
          outline: none;
        }
      `}</style>
    </>
  </ThemeProvider>
);

ThemeProviderWrapper.displayName = 'ThemeProvider';

export default ThemeProviderWrapper;
