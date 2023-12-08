import { Input ,Button, Stack,Box, Flex,Text} from '@chakra-ui/react'
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

        <Stack direction={"column"} align={"center"} w={{md:"90%", lg:"70%"}} m={"auto"} >
          <Box>Write Your Friend's Name</Box>
      <Input type="text" onChange={(e)=>SetInputValue(e.target.value)}/>
      <Button colorScheme='blue' onClick={HandleGenerate} mb={"40px"} >
        Generate
      </Button>
      <Text textAlign={"center"} >Click on Generate button then click on copy  button to copy the link and send it to your friend</Text>

      <Box border={link?"1px solid black":null} >
      {link}
      <Button onClick={handleCopyClick}>Copy</Button>
      </Box>
      </Stack>
    
    </div>
  )
}

export default Home
