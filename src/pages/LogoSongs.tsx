import React from 'react'
import styled from 'styled-components'
import Mixer from 'res/mixer.jpg'

const LogoSongsContainer = styled.div``

const MixerWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 18rem;
  width: 100%;
  margin: 2rem 0;
`
const MixerImg = styled.img`
  object-fit: cover;
  width: 95%;
  border-radius: 10px;
`

const LogoSongs = () => {
  return (
    <LogoSongsContainer>
      <MixerWrapper>
        <MixerImg src={Mixer} alt="mixer" />
      </MixerWrapper>
    </LogoSongsContainer>
  )
}

export default LogoSongs
