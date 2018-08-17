import { withRouter } from 'next/router';

const Header = ({ router: { pathname } }) => (
  <header>
    {/*<Row>
      <Col3>
        <Bubble>DEMOCRACY</Bubble>
      </Col3>
      <Col6>
        <SearchField>Suche</SearchField>
      </Col6>
      <Col3>
        <Filter />
        <Download>App Downloaden</Download>
        <Support>Unterstützen</Support>
      </Col3>
    </Row>
    <Row>
      <Col3>
        <PeriodSelect>19. Legislaturperiode ('17-'21)</PeriodSelect>
      </Col3>
      <Col6>
        <ListSelect />
      </Col6>
      <Col3 />
    </Row>*/}
  </header>
);

export default withRouter(Header);
