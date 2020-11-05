import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Background from '../components/Background';
import KakaoShareButton from '../components/KakaoShareButton';

import { photo, btn_share } from '../images';

export default function ResultPage({ location }) {
  // 카카오 기능
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

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

  const getResultCard = () => {
    const resultMBTI = mbtiArray.join('');
    let scoreString = '';
    if (score >= 8) {
      scoreString = 'high';
    } else if (score >= 4) {
      scoreString = 'middle';
    } else {
      scoreString = 'low';
    }

    console.log(resultMBTI + '_' + scoreString);
    return resultMBTI + '_' + scoreString;
  };
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
      default:
        return;
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
      <Background page={getResultCard()} alt="card" />
      {/* <ImageCardStoreButton>동물 저장</ImageCardStoreButton> */}
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
      <KakaoButton />
      <CopyToClipboard
        text="https://pleedom-test-git-master.wody27.vercel.app/"
        onCopy={(t, result) => {
          result && alert('클립보드에 복사되었습니다.');
        }}
      >
        <ClipboardButton src={btn_share} />
      </CopyToClipboard>
      <Link to="/">
        <MainButton>메인으로 돌아가기</MainButton>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Label = styled.div`
  position: absolute;
  top: 759px;
  left: 0;
  right: 0;

  // 더 작은 사이즈들
  @media (max-width: 330px) {
    top: 640px;
    font-size: 13px;
  }

  // Galaxy S5
  @media (min-width: 350px) and (max-width: 370px) {
    top: 740px;
    font-size: 16px;
  }

  // 아이폰 6,7,8,SE,X,XS 사이즈
  @media (min-width: 365px) and (max-width: 385px) {
    top: 740px;
    font-size: 16px;
  }

  // 아이폰 plus 사이즈, Pixel ,Pixel2 XL 사이즈
  @media (min-width: 404px) and (max-width: 424px) {
    top: 820px;
    font-size: 17px;
  }

  // 아이폰 12 Pro Max
  @media (min-width: 428px) {
    top: 840px;
    font-size: 17px;
  }

  font-family: NotoSansCJKkr;
  @font-face {
    font-family: NotoSansCJKkr;
    src: local(NotoSansCJKkr-Regular), url(/path/to/NotoSansCJKkr-Regular.woff2) format('woff2'),
      url(/path/to/NotoSansCJKkr-Regular.woff) format('woff'),
      url(/path/to/NotoSansCJKkr-Regular.ttf) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
  }

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
  top: 850px;
  left: 0;
  right: 0;

  // 아이폰 5
  @media (max-width: 330px) {
    top: 720px;
  }

  // Galaxy S5, Moto G4
  @media (min-width: 350px) and (max-width: 370px) {
    top: 850px;
  }

  // 아이폰 6,7,8,SE,X,XS 사이즈
  @media (min-width: 365px) and (max-width: 385px) {
    top: 830px;
  }

  // 아이폰 11, plus 사이즈, Pixel ,Pixel2 XL 사이즈
  @media (min-width: 404px) and (max-width: 424px) {
    top: 900px;
  }

  // 아이폰 12 Pro Max
  @media (min-width: 428px) {
    top: 920px;
  }

  z-index: 3;

  background-color: black;
  height: 250px;
  object-fit: contain;
  opacity: 0.5;
`;

const BackgroundPhoto = styled.img`
  position: absolute;
  top: 850px;
  left: 0;
  right: 0;

  // 아이폰 5
  @media (max-width: 330px) {
    top: 720px;
  }

  // Galaxy S5, Moto G4
  @media (min-width: 350px) and (max-width: 370px) {
    top: 850px;
  }

  // 아이폰 6,7,8,SE,X,XS 사이즈
  @media (min-width: 365px) and (max-width: 385px) {
    top: 830px;
  }

  // 아이폰 11, plus 사이즈, Pixel ,Pixel2 XL 사이즈
  @media (min-width: 404px) and (max-width: 424px) {
    top: 900px;
  }

  // 아이폰 12 Pro Max
  @media (min-width: 428px) {
    top: 920px;
  }

  z-index: 2;

  height: 250px;
  width: 100%;
  opacity: 0.8;
`;

const MissionLabel = styled.div`
  position: absolute;
  top: 920px;
  left: 50px;
  right: 50px;

  // 아이폰 5
  @media (max-width: 330px) {
    top: 780px;
  }

  // Galaxy S5, Moto G4
  @media (min-width: 350px) and (max-width: 370px) {
    top: 910px;
  }

  // 아이폰 6,7,8,SE,X,XS 사이즈
  @media (min-width: 365px) and (max-width: 385px) {
    top: 890px;
  }

  // 아이폰 11, plus 사이즈, Pixel ,Pixel2 XL 사이즈
  @media (min-width: 404px) and (max-width: 424px) {
    top: 960px;
  }

  // 아이폰 12 Pro Max
  @media (min-width: 428px) {
    top: 980px;
  }

  z-index: 4;

  font-family: 'Noto Sans KR', sans-serif !important;
  @import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);

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
  top: 958px;
  left: 20px;
  right: 20px;

  // 아이폰 5
  @media (max-width: 330px) {
    top: 818px;
    font-size: 17px;
  }

  // Galaxy S5, Moto G4
  @media (min-width: 350px) and (max-width: 370px) {
    top: 958px;
  }

  // 아이폰 6,7,8,SE,X,XS 사이즈
  @media (min-width: 365px) and (max-width: 385px) {
    top: 938px;
    font-size: 20px;
  }

  // 아이폰 11, plus 사이즈, Pixel ,Pixel2 XL 사이즈
  @media (min-width: 404px) and (max-width: 424px) {
    top: 1020px;
    font-size: 20px;
  }

  // 아이폰 12 Pro Max
  @media (min-width: 428px) {
    top: 1028px;
    font-size: 20px;
  }

  z-index: 4;

  font-family: 'Noto Sans KR', sans-serif !important;
  @import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);

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
  top: 1137px;
  left: 20px;
  right: 20px;

  // 아이폰 5
  @media (max-width: 330px) {
    top: 997px;
    font-size: 14px;
  }

  // Galaxy S5, Moto G4
  @media (min-width: 350px) and (max-width: 370px) {
    top: 1137px;
    font-size: 16px;
  }

  // 아이폰 6,7,8,SE,X,XS 사이즈
  @media (min-width: 365px) and (max-width: 385px) {
    top: 1107px;
    font-size: 16px;
  }

  // 아이폰 11, plus 사이즈, Pixel ,Pixel2 XL 사이즈
  @media (min-width: 404px) and (max-width: 424px) {
    top: 1177px;
    font-size: 17px;
  }

  // 아이폰 12 Pro Max
  @media (min-width: 428px) {
    top: 1207px;
    font-size: 17px;
  }

  @font-face {
    font-family: NotoSansCJKkr;
    src: local(NotoSansCJKkr-Regular), url(/path/to/NotoSansCJKkr-Regular.woff2) format('woff2'),
      url(/path/to/NotoSansCJKkr-Regular.woff) format('woff'),
      url(/path/to/NotoSansCJKkr-Regular.ttf) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
  }

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
  top: 1192px;
  left: 50px;
  right: 50px;

  // 아이폰 5
  @media (max-width: 330px) {
    top: 1042px;
    font-size: 16px;
  }

  // Galaxy S5, Moto G4
  @media (min-width: 350px) and (max-width: 370px) {
    top: 1192px;
    font-size: 18px;
  }

  // 아이폰 6,7,8,SE,X,XS 사이즈
  @media (min-width: 365px) and (max-width: 385px) {
    top: 1162px;
    font-size: 18px;
  }

  // 아이폰 11, plus 사이즈, Pixel ,Pixel2 XL 사이즈
  @media (min-width: 404px) and (max-width: 424px) {
    top: 1232px;
    font-size: 19px;
  }

  // 아이폰 12 Pro Max
  @media (min-width: 428px) {
    top: 1262px;
    font-size: 19px;
  }

  font-family: NotoSansCJKkr;
  @font-face {
    font-family: NotoSansCJKkr;
    src: local(NotoSansCJKkr-Medium), url(/path/to/NotoSansCJKkr-Medium.woff2) format('woff2'),
      url(/path/to/NotoSansCJKkr-Medium.woff) format('woff'), url(/path/to/NotoSansCJKkr-Medium.ttf) format('truetype');
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
  }

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
  top: 1249px;
  left: 44px;
  right: 44px;

  // 아이폰 5
  @media (max-width: 330px) {
    top: 1080px;
    font-size: 13px;
  }

  // Galaxy S5, Moto G4
  @media (min-width: 350px) and (max-width: 370px) {
    top: 1239px;
    font-size: 18px;
  }

  // 아이폰 6,7,8,SE,X,XS 사이즈
  @media (min-width: 365px) and (max-width: 385px) {
    top: 1209px;
    font-size: 18px;
  }

  // 아이폰 11, plus 사이즈, Pixel ,Pixel2 XL 사이즈
  @media (min-width: 404px) and (max-width: 424px) {
    top: 1279px;
    font-size: 18px;
  }

  // 아이폰 12 Pro Max
  @media (min-width: 428px) {
    top: 1319px;
    font-size: 18px;
  }

  border-radius: 6px;
  border: solid 0.3px #ffffff;
  background-color: #3acce1;

  font-family: S-CoreDream-6;
  @font-face {
    font-family: S-CoreDream-6;
    src: local(S-CoreDream-6Bold), url(/path/to/S-CoreDream-6Bold.woff2) format('woff2'),
      url(/path/to/S-CoreDream-6Bold.woff) format('woff'), url(/path/to/S-CoreDream-6Bold.ttf) format('truetype');
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
  }

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
  top: 1334px;
  left: 50px;
  right: 50px;

  // 아이폰 5
  @media (max-width: 330px) {
    top: 1150px;
    font-size: 14px;
  }

  // Galaxy S5, Moto G4
  @media (min-width: 350px) and (max-width: 370px) {
    top: 1324px;
    font-size: 18px;
  }

  // 아이폰 6,7,8,SE,X,XS 사이즈
  @media (min-width: 365px) and (max-width: 385px) {
    top: 1290px;
    font-size: 18px;
  }

  // 아이폰 11, plus 사이즈, Pixel ,Pixel2 XL 사이즈
  @media (min-width: 404px) and (max-width: 424px) {
    top: 1354px;
    font-size: 18px;
  }

  // 아이폰 12 Pro Max
  @media (min-width: 428px) {
    top: 1404px;
    font-size: 16px;
  }

  font-family: NotoSansCJKkr;
  @font-face {
    font-family: NotoSansCJKkr;
    src: local(NotoSansCJKkr-Regular), url(/path/to/NotoSansCJKkr-Regular.woff2) format('woff2'),
      url(/path/to/NotoSansCJKkr-Regular.woff) format('woff'),
      url(/path/to/NotoSansCJKkr-Regular.ttf) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
  }
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
  top: 1406px;
  left: 44px;
  right: 44px;

  // 아이폰 5
  @media (max-width: 330px) {
    top: 1215px;
    font-size: 13px;
  }

  // Galaxy S5, Moto G4
  @media (min-width: 350px) and (max-width: 370px) {
    top: 1406px;
    font-size: 18px;
  }

  // 아이폰 6,7,8,SE,X,XS 사이즈
  @media (min-width: 365px) and (max-width: 385px) {
    top: 1376px;
    font-size: 17px;
  }

  // 아이폰 11, plus 사이즈, Pixel ,Pixel2 XL 사이즈
  @media (min-width: 404px) and (max-width: 424px) {
    top: 1430px;
    font-size: 16px;
  }

  // 아이폰 12 Pro Max
  @media (min-width: 428px) {
    top: 1476px;
    font-size: 16px;
  }

  border-radius: 6px;
  border: solid 0.3px #ffffff;
  background-color: #3acce1;

  font-family: S-CoreDream-6;
  @font-face {
    font-family: S-CoreDream-6;
    src: local(S-CoreDream-6Bold), url(/path/to/S-CoreDream-6Bold.woff2) format('woff2'),
      url(/path/to/S-CoreDream-6Bold.woff) format('woff'), url(/path/to/S-CoreDream-6Bold.ttf) format('truetype');
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
  }

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
  top: 1498px;
  right: 50px;
  left: 50px;

  // 아이폰 5
  @media (max-width: 330px) {
    top: 1300px;
    font-size: 14px;
  }

  // Galaxy S5, Moto G4
  @media (min-width: 350px) and (max-width: 370px) {
    top: 1498px;
    font-size: 16px;
  }

  // 아이폰 6,7,8,SE,X,XS 사이즈
  @media (min-width: 365px) and (max-width: 385px) {
    top: 1468px;
    font-size: 16px;
  }

  // 아이폰 11, plus 사이즈, Pixel ,Pixel2 XL 사이즈
  @media (min-width: 404px) and (max-width: 424px) {
    top: 1515px;
    font-size: 17px;
  }

  // 아이폰 12 Pro Max
  @media (min-width: 428px) {
    top: 1568px;
    font-size: 17px;
  }

  font-family: 'Noto Sans KR', sans-serif !important;
  @import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: #3acce1;
`;

const KakaoButton = styled(KakaoShareButton)``;

const ClipboardButton = styled.img`
  width: 40px;
  height: 40px;

  position: absolute;
  top: 1545px;
  right: 140px;

  // 아이폰 5
  @media (max-width: 330px) {
    top: 1345px;
    right: 125px;

    width: 30px;
    height: 30px;
  }

  // Galaxy S5, Moto G4
  @media (min-width: 350px) and (max-width: 370px) {
    top: 1545px;
    right: 140px;
  }

  // 아이폰 6,7,8,SE,X,XS 사이즈
  @media (min-width: 365px) and (max-width: 385px) {
    top: 1515px;
    right: 140px;
  }

  // 아이폰 11, plus 사이즈, Pixel ,Pixel2 XL 사이즈
  @media (min-width: 404px) and (max-width: 424px) {
    top: 1575px;
    right: 160px;
  }

  // 아이폰 12 Pro Max
  @media (min-width: 428px) {
    top: 1615px;
    right: 160px;
  }

  @media (min-width: 350px) and (max-width: 360px) {
    right: 130px;
  }
`;

const MainButton = styled.div`
  position: absolute;
  top: 1627px;
  left: 24px;
  right: 24px;

  // 아이폰 5
  @media (max-width: 330px) {
    top: 1400px;
    font-size: 13px;
  }

  // Galaxy S5, Moto G4
  @media (min-width: 350px) and (max-width: 370px) {
    top: 1627px;
    font-size: 15px;
  }

  // 아이폰 6,7,8,SE,X,XS 사이즈
  @media (min-width: 365px) and (max-width: 385px) {
    top: 1587px;
    font-size: 15px;
  }

  // 아이폰 11, plus 사이즈, Pixel ,Pixel2 XL 사이즈
  @media (min-width: 404px) and (max-width: 424px) {
    top: 1670px;
    font-size: 16px;
  }

  // 아이폰 12 Pro Max
  @media (min-width: 428px) {
    top: 1697px;
    font-size: 16px;
  }

  margin-bottom: 60px;

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
