import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import { StartPage, GuidePage, Page1_1, Page1_2, Page1_3, Page2_1, Page2_2, Page2_3, Page2_4, Page2_5 } from './pages';
export default function App() {
  return (
    <Wrapper>
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
      {/* <Route path="/9" component={} />
      <Route path="/10" component={} />
      <Route path="/11" component={} />
      <Route path="/12" component={} /> */}
    </Wrapper>
  );
}

const Wrapper = styled.div``;
