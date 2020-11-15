import React, { Fragment, useEffect } from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';

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
  Page5_3,
  Page6_1,
  Page6_2,
  Page6_3,
  Page7_1,
  Page7_2,
  Page7_3,
  Page8_1,
  Page8_2,
  Page9_1,
  Page10_1,
  Page10_2,
  Page10_3,
  Page11_1,
  Page11_2,
  Page11_3,
  Page12_1,
  ResultPage,
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
          <Route path="/15" component={Page5_3} />
          {/* Page 6 */}
          <Route path="/16" component={Page6_1} />
          <Route path="/17" component={Page6_2} />
          <Route path="/18" component={Page6_3} />
          {/* Page 7 */}
          <Route path="/19" component={Page7_1} />
          <Route path="/20" component={Page7_2} />
          <Route path="/21" component={Page7_3} />
          {/* Page 8 */}
          <Route path="/22" component={Page8_1} />
          <Route path="/23" component={Page8_2} />

          {/* Page 9 */}
          <Route path="/24" component={Page9_1} />

          {/* Page 10 */}
          <Route path="/25" component={Page10_1} />
          <Route path="/26" component={Page10_2} />
          <Route path="/27" component={Page10_3} />

          {/* Page 11 */}
          <Route path="/28" component={Page11_1} />
          <Route path="/29" component={Page11_2} />
          <Route path="/30" component={Page11_3} />

          {/* Page 12 */}
          <Route path="/31" component={Page12_1} />

          <Route path="/result" component={ResultPage} />
        </Switch>
      </Wrapper>
      <Web>모바일에서 이용해주세요.</Web>
    </Fragment>
  );
}

const Wrapper = styled.div`
  @media screen and (min-width: 429px) {
    display: none;
    z-index: 0;
  }

  font-family: S-CoreDream-3Light;
  @font-face {
    font-family: 'S-CoreDream-3Light';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  // 더 작은 사이즈들
  @media (max-height: 568px) {
    font-size: 14px;
  }

  // 아이폰 6,7,8,SE 사이즈
  @media (min-height: 569px) and (max-height: 668px) {
    font-size: 16px;
  }

  // 아이폰 plus 사이즈
  @media (min-height: 669px) and (max-height: 736px) {
    font-size: 18px;
  }

  // 아이폰 X, XS 사이즈
  @media (min-height: 737px) and (max-height: 812px) {
    font-size: 20px;
  }
`;

const Web = styled.div`
  @media screen and (max-width: 428px) {
    display: none;
    z-index: 0;
  }
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #3acce1;
  border: solid 3px #3acce1;
  color: #ffffff;

  text-align: center;

  font-weight: normal;
  font-stretch: normal;
  font-size: 20px;

  padding: 20px 100px;

  border-radius: 6px;
  box-shadow: 0 4px 8px 0 rgba(69, 111, 128, 0.1);
`;
