  import { AppBar,styled,Toolbar, Typography } from '@mui/material';
  import React from 'react';


  const StyledAppbar  = styled(AppBar)({
    boxShadow : "none",
    backgroundColor     : "antiquewhite",
    color     : 'grey',
    marginTop : '1px',
    cursor:'pointer',
    hover: 'underline'
  }) 

  const StyledTypography = styled(Typography)({
    marginLeft: '30px',
    '&:hover': {
      textDecoration: 'underline',
    },
  });
  

  const Header = () => {
        return(

      <StyledAppbar>
          <Toolbar>
                <StyledTypography  style={{font:"bold",fontSize:"25px",marginLeft:'60px',color:'black'}}>A N Y D A Y </StyledTypography>
                <StyledTypography  style={{marginLeft:'360px',}}>Venues</StyledTypography>
                <StyledTypography  style={{marginLeft:'30px'}}>Event Spaces</StyledTypography>
                <StyledTypography  style={{marginLeft:'30px'}}>Gift Vouchers</StyledTypography>
                <StyledTypography  style={{marginLeft:'30px'}}>About</StyledTypography>
                <StyledTypography  style={{marginLeft:'30px'}}>What's On</StyledTypography>
                <StyledTypography  style={{marginLeft:'30px'}}>Anyday Stories</StyledTypography>
                <StyledTypography  style={{marginLeft:'30px'}}> Contact</StyledTypography>
          </Toolbar>
      </StyledAppbar>

    );
  }

  export default Header;