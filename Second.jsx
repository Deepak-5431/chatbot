import { Box, Typography,styled } from "@mui/material";

const StyledBox = styled(Box)({
  marginTop: '100px', 
  width : '40%' ,
  height: '300px', 
  backgroundColor: '#antiquewhite', // Example background color
  display: 'flex',
  boxSizing: 'border-box',
});



const InfoBox = styled(Box)({
  marginTop: '-20%',
  marginLeft: '20%',
  width: '60%',
  height: '300px',
  backgroundColor: '#antiquewhite', // Example background color
  display: 'flex',
  boxSizing: 'border-box', // Space between the boxes
});

const Second = () => {
  return(
    <>
    <StyledBox>

    <Typography style={{fontSize:'25px',marginLeft:'85px',marginTop:'20px',fontWeight: 'normal'}}>Venues </Typography>
    </StyledBox>
    <InfoBox>
      <Typography style={{height:'5px',marginLeft:'85px',marginTop:'-1px',fontSize:'50px',fontFamily:'Cursive'}}>
      Biànca 
      </Typography>
      <Typography style={{marginLeft:'-150px',marginTop:'100px',fontFamily:'Cursive',fontSize:'25px',width:'100%'}}>
      Biànca was born out of a desire to bring the spirit of Italian dining to Ada Lane,
       capturing the effervescence of a
      classic trattoria within a sleek, warm and colourful setting. 
      The compact and pink design has nods to the architecture of both ancient and contemporary Italy.
      </Typography>
    </InfoBox>
    <Box >
      <img src="https://images.squarespace-cdn.com/content/v1/633f7b736a91413cb544a0b3/5e6ecb09-cb68-4272-8b04-7b3f1d460ecf/202301xx+Anyday+Group_1895_Chatfield.jpg?format=1500w" alt="dd" 
      style={{width:'100%',height:'600px',marginTop:'20px',}}/>
    </Box>
    </>
  );
}

export default Second;