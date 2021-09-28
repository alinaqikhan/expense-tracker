import React, { useEffect, useRef } from 'react'
import './stylesheets/App.css';
import { Details } from './components/Details';
import { Grid } from '@material-ui/core';
import useStyles from './styles';
import { Main } from './components/Main';
import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel } from '@speechly/react-ui';
import { SpeechState, useSpeechContext } from '@speechly/react-client';

export const App = () => {

  const { desktop, mobile, main, last, grid } = useStyles();
  const { speechState } = useSpeechContext();
  const mainGrid = useRef(null);

  const executeScroll = () => mainGrid.current.scrollIntoView();

  useEffect(() => {
    if (speechState === SpeechState.Recording) {
      executeScroll();
    }
  }, [speechState])

  return (
    <div>
      <Grid className={grid} container spacing={0} alignItems="center" justifyContent="center" style={{height:'100vh'}}>

        <Grid item xs={12} sm={4} className={mobile}>
          <Details title="Income"/>
        </Grid>
        {/* ------------ */}
        <Grid ref={mainGrid} item xs={12} sm={3} className={main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4} className={desktop}>
          <Details title="Income"/>
        </Grid>
        {/* ------------ */}
        <Grid item xs={12} sm={4} className={last}>
          <Details title="Expense"/>
        </Grid>

      </Grid>
      <PushToTalkButtonContainer>
        <PushToTalkButton />
        <ErrorPanel />
      </PushToTalkButtonContainer>
    </div>
  )
}

