import { Box, styled, Typography, } from "@mui/material";
import Add from "@mui/icons-material/Add";


const StyledBoxi = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  height: '65vh',
  width: '70%',
  marginTop: '70px',
  marginLeft: '50px',
  marginBottom: '30px',
  fontSize: '50px',
   
});

const StyledTypography = styled(Typography)({
  position: 'relative',
  height : '25vh',
  display: 'block', 
  fontSize: '30px',
  fontFamily:'Cursive',
  '&::after': {
    content: '""',
    position: 'absolute',
    left: '0',
    bottom: '35px', // Adjust this value to move the underline up or down
    width: '120%', // Adjust this value to change the underline length
    height: '1px', // Adjust this value to change the underline thickness
    backgroundColor: 'grey',
     // Adjust this value to change the underline color
  },
  '&:hover':{
    cursor: 'pointer',
    color:'grey',
    fontFamily:'Cursive'
  },
  '&:Add':{
     marginLeft:'20%',
  },
});

const Third = () => {
  return (
   
    <StyledBoxi>
      <StyledTypography >
        EAT <Add />
      </StyledTypography>
      <StyledTypography>
        DRINK <Add/>
      </StyledTypography>
      <StyledTypography>
        Private Dining & Events <Add />
      </StyledTypography>
      <StyledTypography>
        About Biànca <Add />
      </StyledTypography>
    </StyledBoxi>
  );
}

export default Third;
