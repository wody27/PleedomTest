import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Background from '../components/Background';
import { kakaoButton1, kakaoButton2, photo } from '../images';

export default function ResultPage({ location }) {
  const scoreArray = location.state.answer;
  const mbtiArray = location.state.mbti;

  let score = 0;
  for (let i = 0; i < 5; i++) {
    if (scoreArray[i] !== -1) score += scoreArray[i];
  }
  console.log(score);
  console.log(mbtiArray);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
  }

  const getRandomMission = () => {
    switch (score) {
      case 10:
      case 9:
      case 8:
        return highMission[getRandomInt(0, 6)];
      case 7:
      case 6:
      case 5:
      case 4:
        return middleMission[getRandomInt(0, 6)];
      case 3:
      case 2:
      case 1:
      case 0:
        return lowMission[getRandomInt(0, 6)];
    }
  };
  const highMission = [
    '‘쓰레기덕질’ 프로그램에 동참해보기',
    '‘용기를 냅시다’ 챌린지 참여하기',
    '제로웨이스트 상품을 이용해보기',
    '리필스테이션을 이용해보기',
    '환경 관련 마이크로 시위에 참여해보기',
    '일회용 빨대 대신 다회용 빨대 사용해보기',
  ];

  const middleMission = [
    '플로깅 실천해보기',
    '일회용 비닐봉투 대신 장바구니를 사용해보기',
    '플라스틱 컵 대신 텀블러 사용해보기',
    '물티슈를 거절하고 화장실에서 손 씻기',
    '플라스틱 용품 대신 나무 칫솔, 종이테이프 사용해보기',
    '매거진 쓸(SSSSL) 구독하기',
  ];

  const lowMission = [
    '요일별 일회용 플라스틱 사용량 적어보기',
    '배달음식 이용 시 불필요한 일회용품 받지 않기',
    '과일 알맹이만 구매해보기',
    '독서를 통해 ‘폐플라스틱’ 문제의 심각성을 느껴보기 ',
    '종이 박스의 테이프를 떼고 분리배출하기',
    '깨끗한 플라스틱은 압착하여 부피를 줄여 분리배출하기',
  ];

  return (
    <Wrapper>
      <Background page="1_1" />
      <Label>
        ‘작은 행동으로 큰 변화를 이끌어 낼 당신에게.’
        <br />더 나은 지구를 위한 방법, 함께해요!
      </Label>
      <MissionBox>
        <BackgroundPhoto src={photo} alt="" />
        <ShadowBox />
        <MissionLabel>Mission</MissionLabel>
        <RandomMission>{getRandomMission()}</RandomMission>
      </MissionBox>

      <DescriptionLabel>
        맞춤행동을 실천하고 <br />
        인스타그램을 통해 친구들과 공유하면
      </DescriptionLabel>
      <EmphasizeLabel>제로웨이스트 상품을 받을 수 있어!</EmphasizeLabel>
      <ChallengeButton>이벤트 참여하기</ChallengeButton>
      <QuestionLabel>
        다른 사람들의 인지-실천 부조화 <br />
        극복 스토리가 궁금하다면?
      </QuestionLabel>
      <StoryButton>스토리 보러가기</StoryButton>
      <ShareLabel>테스트 공유하기</ShareLabel>
      <KakaoButton src={kakaoButton2} alt="" />
      <Link to="/">
        <MainButton>메인으로 돌아가기</MainButton>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Label = styled.div`
  position: absolute;
  top: 820px;
  left: 36px;
  right: 36px;

  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  text-align: center;
  color: #4c5264;
`;

const MissionBox = styled.div``;
const ShadowBox = styled.div`
  position: absolute;
  top: 895px;
  left: 0;
  right: 0;

  z-index: 3;

  background-color: black;
  height: 250px;
  object-fit: contain;
  opacity: 0.5;
`;
const BackgroundPhoto = styled.img`
  position: absolute;
  top: 895px;
  left: 0;
  right: 0;

  z-index: 2;

  height: 250px;
  object-fit: contain;
  opacity: 0.8;
`;
const MissionLabel = styled.div`
  position: absolute;
  top: 968px;
  left: 157px;
  right: 157px;

  z-index: 4;

  font-size: 16px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: #3acce1;
`;
const RandomMission = styled.div`
  position: absolute;
  top: 1006px;
  left: 90px;
  right: 90px;

  z-index: 4;

  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
`;

const DescriptionLabel = styled.div`
  position: absolute;
  top: 1185px;
  left: 64px;
  right: 64px;

  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: #4c5264;
`;

const EmphasizeLabel = styled.div`
  position: absolute;
  top: 1240px;
  left: 60px;
  right: 60px;

  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: center;
  color: #4c5264;
`;

const ChallengeButton = styled.div`
  position: absolute;
  top: 1290px;
  left: 44px;
  right: 44px;

  border-radius: 6px;
  border: solid 0.3px #ffffff;
  background-color: #3acce1;

  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;

  line-height: 48px;
`;

const QuestionLabel = styled.div`
  position: absolute;
  top: 1382px;
  left: 83px;
  right: 83px;

  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: #4c5264;
`;

const StoryButton = styled.div`
  position: absolute;
  top: 1454px;
  left: 44px;
  right: 44px;

  border-radius: 6px;
  border: solid 0.3px #ffffff;
  background-color: #3acce1;

  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;

  line-height: 48px;
`;

const ShareLabel = styled.div`
  position: absolute;
  top: 1546px;
  right: 134px;
  left: 134px;

  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #3acce1;
`;

const KakaoButton = styled.img`
  position: absolute;
  top: 1589px;
  left: 137px;

  width: 29px;
  height: 29px;
`;

const MainButton = styled.div`
  position: absolute;
  top: 1675px;
  left: 24px;
  right: 24px;

  margin-bottom: 33px;

  font-size: 15px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: #454f63;

  line-height: 52px;

  border-radius: 12px;
  background-color: #e2e4eb;
`;