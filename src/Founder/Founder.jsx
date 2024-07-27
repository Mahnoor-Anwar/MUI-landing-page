import { Stack , Box, Typography} from '@mui/material'
import React from 'react'
// import Stack from '@mui/material/Stack';
import FounderImg from '../assets/JWP Images/image.jpg'
import style from './founder.module.css'

const Founder = () => {
  return (
    <Stack mt={5}>
      <Box sx={{borderRadius:'50%', display:'flex', justifyContent:'center'}} justifyContent="center">
          <img src={FounderImg} className={style.founder}/>
      </Box>
      <Box>
          <Typography variant="h4" textAlign="center" mt={3} color="green" fontWeight="bold">MUHAMMAD ALI MUGHAL</Typography>
      </Box>
      <Box>
          <Typography mt={4} textAlign="center" color="grey">Founder of Jawan Pakistan</Typography>
      </Box>
      <Box sx={{width:"32%" , margin:'auto'}}>
          <Typography color="grey" textAlign="center" pt={5}> aim to be most efficient provider of business process outsourcing services by setting the industry standards for costa nd quality of services. Our long term success will be driven by our relentless focus on recruiting and developing the most talented pool of human capital in our industry</Typography>
      </Box>
    </Stack>
  )
}

export default Founder
