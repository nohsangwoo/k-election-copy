import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
// import TabPanel from '@mui/lab/TabPanel'
import styled from 'styled-components'
// import { selectedNavItemState } from 'atoms/navAtom'
// import { useRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'

const NavContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  background-color: rgba(0, 0, 0, 0.2); /*까만색(0,0,0) 80% 불투명도*/
  justify-content: center;
  color: red;
`

const Nav = () => {
  const menuList = [
    '회사소개',
    '선거로고송',
    '선거홍보영상',
    '제작의뢰',
    '제작문의',
  ]

  const [value, setValue] = useState('1')
  const navigate = useNavigate()
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
    console.log('newValue?: ', newValue)
    switch (newValue) {
      case '1':
        navigate(`/`)
        break
      case '2':
        navigate(`/logoSongs`)
        break
      case '3':
        navigate(`/promotionVideo`)
        break
      case '4':
        navigate(`/request`)
        break
      case '5':
        navigate(`/inquiries`)
        break
      default:
        break
    }
  }

  return (
    <NavContainer>
      <Box
        sx={{
          typography: 'body1',
        }}
      >
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', color: 'red' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              {menuList.map((navItem: string, index: number) => {
                return (
                  <Tab
                    sx={{ color: 'gray' }}
                    key={index + 1}
                    label={navItem}
                    value={`${index + 1}`}
                  />
                )
              })}
            </TabList>
          </Box>
          {/* <TabPanel value="1">Item One</TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel> */}
        </TabContext>
      </Box>
    </NavContainer>
  )
}

export default Nav
