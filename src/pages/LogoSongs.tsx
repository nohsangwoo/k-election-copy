import React from 'react'
import styled from 'styled-components'
import Mixer from 'res/mixer.jpg'

const LogoSongsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
const BasicLayout = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  border: 1px solid red;
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
  border: 1px solid blue;
  width: 100%;
`
const LeftContents = styled.div`
  border: 1px solid red;
  width: 20%;
`

const RightContents = styled.div`
  border: 1px solid black;
`

const LogoSongs = () => {
  return (
    <LogoSongsContainer>
      <BasicLayout>
        <MixerWrapper>
          <MixerImg src={Mixer} alt="mixer" />
        </MixerWrapper>
        <ContentsWrapper>
          <LeftContents>left sside</LeftContents>
          <RightContents>right side</RightContents>
        </ContentsWrapper>
      </BasicLayout>
    </LogoSongsContainer>
  )
}

export default LogoSongs
