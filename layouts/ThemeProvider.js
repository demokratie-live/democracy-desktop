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
          font-family: "anticon";
          src: url("/static/fonts/democracy/icons.eot?6342a7af6fcbca43f332fe515a97a57e?#iefix") format("embedded-opentype"),
      url("/static/fonts/democracy/icons.woff2?6342a7af6fcbca43f332fe515a97a57e") format("woff2"),
      url("/static/fonts/democracy/icons.woff?6342a7af6fcbca43f332fe515a97a57e") format("woff"),
      url("/static/fonts/democracy/icons.ttf?6342a7af6fcbca43f332fe515a97a57e") format("truetype"),
      url("/static/fonts/democracy/icons.svg?6342a7af6fcbca43f332fe515a97a57e#icons") format("svg");
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
