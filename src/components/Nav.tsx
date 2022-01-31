import React from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import styled from 'styled-components'

const NavContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  background-color: red;
  justify-content: center;
`

const Nav = () => {
  const menuList = [
    '회사소개',
    '선거로고송',
    '선거홍보영상',
    '제작의뢰',
    '제작문의',
  ]
  const [value, setValue] = React.useState('1')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <NavContainer>
      <Box
        sx={{
          typography: 'body1',
        }}
      >
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Item One" value="1" />
              <Tab label="Item Two" value="2" />
              <Tab label="Item Three" value="3" />
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
