import React from 'react'
import styled from 'styled-components'
import Mixer from 'res/mixer.jpg'
import playlist from './songData'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import FlagIcon from '@mui/icons-material/Flag'
import PageTitle from 'components/PageTitle'

const LogoSongsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
const BasicLayout = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
`

const MixerWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 18rem;
  width: 100%;
  margin: 2rem 0;
`
const MixerImg = styled.img`
  object-fit: cover;
  border-radius: 10px;
  width: 100%;
`

const ContentsWrapper = styled.div`
  display: flex;
  /* border: 1px solid blue; */
  width: 100%;
`
const LeftContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
`

const RightContents = styled.div`
  flex: 1;
`

const PlayListWrapper = styled.div`
  display: flex;
  padding: 2rem 0;
  border-top: 1px solid gray;
  justify-content: space-around;
  align-items: center;
`

const TitleAndName = styled.div`
  display: flex;
  flex-direction: column;
`

const ExclusiveArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  color: red;
  opacity: 0.7;
`

const PlayTimeVisual = styled.div`
  width: 100px;
  height: 20px;
  background-color: blue;
  border: 1px solid black;
  opacity: 0.5;
`

const EstimateButton = styled.div`
  position: fixed;
  top: 30%;
  right: 2%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 140px;
  border: 1px solid black;
  border-radius: 15px;
`

const LogoSongs = () => {
  const lefSideMenu = [
    '코로나 극복!',
    '4.15선거 TOP20',
    'TV/영화/예능/버라이어티',
    '월드컵/올림픽/응원가',
    '한류/K-POP',
    '베스트셀러',
    '감성 기획곡',
    '무료곡',
    '대중가요',
    '메들리&패키지',
  ]

  return (
    <LogoSongsContainer>
      <PageTitle title="LogoSongs" />
      <EstimateButton>견적버튼</EstimateButton>
      <BasicLayout>
        <MixerWrapper>
          <MixerImg src={Mixer} alt="mixer" />
        </MixerWrapper>
        <ContentsWrapper>
          <LeftContents>
            {lefSideMenu.map((item, index) => {
              return <div key={index}>{item}</div>
            })}
          </LeftContents>
          <RightContents>
            {playlist.map((data, index) => {
              return (
                <PlayListWrapper key={index}>
                  <PlayArrowIcon color="success" />
                  <TitleAndName>
                    <div>{data.title}</div>
                    <div>{data.name}</div>
                  </TitleAndName>
                  <ExclusiveArea>
                    {data.isExclusive ? (
                      <>
                        <FlagIcon /> 독점곡
                      </>
                    ) : (
                      <></>
                    )}
                  </ExclusiveArea>
                  <div>{data.genre}</div>
                  <div>{data.target}</div>
                  <div>{data.playTime}</div>
                  <PlayTimeVisual></PlayTimeVisual>
                  <div>{data.info}</div>
                </PlayListWrapper>
              )
            })}
          </RightContents>
        </ContentsWrapper>
      </BasicLayout>
    </LogoSongsContainer>
  )
}

export default LogoSongs
