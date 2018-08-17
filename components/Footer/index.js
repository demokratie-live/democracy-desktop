import { withRouter } from 'next/router';

const Footer = (props) => {
  console.log("props", props) ;
  return (
    <footer>
      {/*<linkX>DEMOCRACY Deutschland e.V.</linkX>
      <hyphen />
      <linkX>Impressum</linkX>
      <hyphen />
      <linkX>Nutzungsbedingungen</linkX>
      <hyphen />
      <linkX>Datenschutz</linkX> */}
    </footer>
  );
};

export default withRouter(Footer);
