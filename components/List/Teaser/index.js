import { Card, Icon } from 'antd';
import PropTypes from 'prop-types';
import speakingurl from 'speakingurl';

import Link from 'Components/shared/Link';
import Title from 'Components/shared/Ellipsis';
import Ribbon from './Ribbon';
import Time from './Time';

const Teaser = ({ title, procedureId, type }) => (
  <Link
    as={`/${type.toLowerCase()}/${procedureId}/${speakingurl(title)}`}
    href={`/details?id=${procedureId}&title=${speakingurl(title)}`}
  >
    <article>
      <Card
        hoverable
        cover={
          <>
            <Time>##Time</Time>
            <img
              alt="example"
              src="https://www.bundestag.de/image/558288/16x9/750/422/aefcd3415c9e921d4405f2e346d8bc73/UM/kw26_pa_gesundheit_cannabis_bild.jpg"
            />
          </>
        }
      >
        <Title tag={'h2'} lines={2}>
          {title}
        </Title>
        <Ribbon>##Gesetz</Ribbon>
        <Icon type="tool" />
        <Icon type="tool" />
        <Icon type="tool" />
        <Icon type="tool" />
        <Icon type="tool" />
        <Icon type="tool" />
      </Card>
    </article>
  </Link>
);

Teaser.propTypes = {
  title: PropTypes.string.isRequired,
  procedureId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Teaser;
