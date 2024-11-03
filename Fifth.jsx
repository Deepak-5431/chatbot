import { Typography,Box,Button } from "@mui/material";




const Fifth  = () => {
  return(
   <Box>
   <Typography style={{width:'20px',marginLeft:'100px',marginTop:'80px',marginBottom:'-50px',fontSize:'30px'}}>
            Newsletter
   </Typography>
   <Typography style={{textAlign:'center',marginBottom:'20px',marginTop:'8px',fontFamily:'Inria Sans',
    fontSize:'30px'
   }}>
           Receive the latest Anyday news directly to your inbox.
   </Typography>
   <Button variant="outlined" sx={{marginLeft:'28%',backgroundColor:'white',color:'black',borderRadius:'20px',textDecoration:'none',fontFamily:'Inria Sans',
    textTransform: 'none',fontSize:'15px',marginBottom:'10px','&:hover': {
            backgroundColor: 'black', // Change background color to black on hover
            color: 'white', // Change text color to white on hover
          },
   }}>
    subscribe now</Button>
   </Box>
  )
}


export default Fifth;