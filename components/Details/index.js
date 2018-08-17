import {withRouter} from 'next/router'

import { H1 } from "../shared/Headlines";

const Details = ({ router: { pathname, query } }) => (
<details>
    <H1>{query.title}</H1>
    This is the Details

    </details>
);

export default withRouter(Details);
