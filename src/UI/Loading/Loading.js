import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Backdrop } from '../Backdrop/Backdrop';
import Wrapper from "../../components/hoc/Wrapper"
import "./Loading.scss"
const CircularIndeterminate = (props) => {
  return (
    <Wrapper>
      <Backdrop click={props.modalClose}/>
      <div  className="loadBox">
         <Box sx={{ display: 'flex' }}>
             <CircularProgress />
         </Box>
      </div>
    </Wrapper>
  );
}

export default CircularIndeterminate