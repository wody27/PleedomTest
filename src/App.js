import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import { StartPage, GuidePage, page2_2 } from './pages';

export default function App() {
  return (
    <Wrapper>
      <Route exact path="/" component={StartPage} />
      <Route path="/guide" component={GuidePage} />
      {/* <Route path="/2-2" component={page2_2} /> */}
      {/* <Route path="/1-2" component={} />
      <Route path="/1-3" component={} />
      <Route path="/2-1" component={} />
      <Route path="/2-2" component={} />
      <Route path="/2-3" component={} />
      <Route path="/2-4" component={} />
      <Route path="/2-5" component={} />
      <Route path="/3-1" component={} />
      <Route path="/3-2" component={} />
      <Route path="/3-3" component={} />
      <Route path="/4-1" component={} /> */}
    </Wrapper>
  );
}

const Wrapper = styled.div``;
