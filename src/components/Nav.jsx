import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Nav = (props) => {
    let prev = props.pagesInfo.prev ? parseInt(props.pagesInfo.prev.split('=')[1].match(/\d+/)) : ''
    let next = props.pagesInfo.next ? parseInt(props.pagesInfo.next.split('=')[1].match(/\d+/))  : ''
   
  
  return(
      <Container maxWidth="sm" sx={{display: 'flex'}}>
       <nav className="pagination">
      
      {
        prev ? (
            <div onClick={()=>{
                props.goNextPage(props.pagesInfo.prev)
               

            }}>
                {prev}   ⇐ prev
            </div>

        ) : ''
      }
        <div className='currentPage'>
            {props.currentPage} / {props.pagesInfo.pages} <br />
            <small style={{fontSize:'10px'}}>{props.pagesInfo.count}</small>
        </div>
      {
        next ? (
            <div onClick={()=>{
                props.goNextPage(props.pagesInfo.next)
                
            }}>
                next ⇒  {next}
            </div>

        ) : ''
      }
  </nav>
  </Container>
  );
};

export default Nav;
