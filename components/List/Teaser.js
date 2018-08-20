import { Col, Card, Icon } from 'antd';
import Link from 'Components/shared/Link';

const Teaser = () => (
  <Col xs={24} sm={24} lg={8}>
    <Link as={`/gesetz/234877/Some-Title`} href={`/details?title=testTitle`}>
      <article>
        ##Time
        <Card
          hoverable
          cover={
            <img
              alt="example"
              src="https://www.bundestag.de/image/558288/16x9/750/422/aefcd3415c9e921d4405f2e346d8bc73/UM/kw26_pa_gesundheit_cannabis_bild.jpg"
            />
          }
        >
          ##Cannabiskontrollgesetz (CannKG) ##Antrag/Gesetz ##1.124 haben abgestimmt
          <Icon type="tool" />
          <Icon type="tool" />
          <Icon type="tool" />
          <Icon type="tool" />
          <Icon type="tool" />
          <Icon type="tool" />
          ##Weiterlesen
        </Card>
      </article>
    </Link>
  </Col>
);

export default Teaser;
