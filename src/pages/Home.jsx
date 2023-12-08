import { Input ,Button, Stack,Box, Flex} from '@chakra-ui/react'
import React, {  useState } from 'react'

const Home = () => {
const [link,Setlink]=useState("")
const [InputValue,SetInputValue]=useState("")


    const HandleGenerate=()=>{
Setlink(`https://birthdaybuddy-blue.vercel.app/christmas/${InputValue}`)

    }

   
  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(link);
     
    } catch (err) {
      console.error('Unable to copy to clipboard', err);
    }
  };

  return (
    <div>
<Flex h="85px" bg={"blue.400"} color="white" align={"center"} justify={"center"} fontSize='5xl' fontWeight={"bold"} mb={"100px"} >Wish Your Friend</Flex>

        <Stack direction={"column"} align={"center"} w={{md:"100%", lg:"70%"}} m={"auto"} >
      <Input type="text" onChange={(e)=>SetInputValue(e.target.value)}/>
      <Button colorScheme='blue' onClick={HandleGenerate} mb={"40px"} >
        Generate
      </Button>
      
      <Box border={link?"1px solid black":null} >
      {link}
      <Button onClick={handleCopyClick}>Copy</Button>
      </Box>
      </Stack>
    
    </div>
  )
}

export default Home
