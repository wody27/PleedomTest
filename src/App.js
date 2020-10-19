import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import {
  StartPage,
  GuidePage,
  Page1_1,
  Page1_2,
  Page1_3,
  Page2_1,
  Page2_2,
  Page2_3,
  Page2_4,
  Page2_5,
  Page3_1,
  Page3_2,
  Page3_3,
  Page4_1,
  Page5_1,
  Page5_2,
  Page6_1,
  Page6_2,
  Page6_3,
} from './pages';

export default function App() {
  return (
    <Fragment>
      <Wrapper>
        <Switch>
          <Route exact path="/" component={StartPage} />
          <Route path="/0" component={GuidePage} />

          {/* Page 1 */}
          <Route path="/1" component={Page1_1} />
          <Route path="/2" component={Page1_2} />
          <Route path="/3" component={Page1_3} />

          {/* Page 2 */}
          <Route path="/4" component={Page2_1} />
          <Route path="/5" component={Page2_2} />
          <Route path="/6" component={Page2_3} />
          <Route path="/7" component={Page2_4} />
          <Route path="/8" component={Page2_5} />

          {/* Page 3 */}
          <Route path="/9" component={Page3_1} />
          <Route path="/10" component={Page3_2} />
          <Route path="/11" component={Page3_3} />

          {/* Page 4 */}
          <Route path="/12" component={Page4_1} />

          {/* Page 5 */}
          <Route path="/13" component={Page5_1} />
          <Route path="/14" component={Page5_2} />

          {/* Page 6 */}
          <Route path="/15" component={Page6_1} />
          <Route path="/16" component={Page6_2} />
          <Route path="/17" component={Page6_3} />
        </Switch>
      </Wrapper>
      <Web>모바일에서 이용해주세요.</Web>
    </Fragment>
  );
}

const Wrapper = styled.div`
  @media screen and (min-width: 400px) {
    display: none;
    z-index: 0;
  }
`;

const Web = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: black;
  color: white;

  @media screen and (max-width: 400px) {
    display: none;
    z-index: 0;
  }
`;
