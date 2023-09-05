import React from 'react'

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


import { useSelector } from 'react-redux';

import { ResultPageConfig } from '../../../config'


const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const PlayersTabPanel = (props) => {
  const playerBallsResult = useSelector((state) => state.game.gameData['playerBallsResult']);


  const handleChange = (event, newValue) => {
    props.setValue(newValue);
    props.setShow(false)
  };
  return (
    <div className='playerTabs'>
      <Tabs value={props.value} onChange={handleChange}>
        {
          playerBallsResult.map((item, index) => {
            return <Tab key={index} label={`${ResultPageConfig.PLAYER_TITLE} ${index + 1} `} {...a11yProps(index)} />
          })
        }
      </Tabs>
    </div>)
}