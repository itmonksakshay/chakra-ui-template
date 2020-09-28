import React from 'react';
import {Box,Stack,PseudoBox,Link} from '@chakra-ui/core';
import {BiPhoneCall,BiLogIn} from 'react-icons/bi';
import {AiOutlineMail,AiOutlineUserAdd} from 'react-icons/ai';
const ListItem=(props)=>(<PseudoBox as="li" 
  display="inline" 
  borderRight={1} 
  borderRightStyle="solid" 
  borderRightColor="white"
  pt="0.1rem"
  pr="0.5rem"
  pl="0.5rem"
  pb="0.1rem"
  _last={{borderRight:0}}
  {...props}>
  <Link href="#" color="primary.10" 
    textDecoration="none" 
    _hover={{textDecoration:"none",color:"white"}} 
    _focus={{textDecoration:"none",color:"white"}}>
  {props.children}</Link>
  </PseudoBox>);

const RightNav=()=>(<Box flexBasis="auto" w="auto" maxW="100%" pos="relative" minH={1} pr={15} pl={15}>
    <Stack as="ul" display="block" listStyleType="none" m={0} p={0 } fontSize={13} fontFamily="Open Sans, sans-serif">
    <ListItem><AiOutlineUserAdd style={{display:"inline-block",marginRight:"0.5rem"}} />Register</ListItem>
    <ListItem><BiLogIn style={{display:"inline-block",marginRight:"0.5rem"}} />Login</ListItem>
    </Stack>
  </Box>);


const  LeftNav =()=>(<Box flexBasis="auto" w="auto" maxW="100%" pos="relative" minH={1} pr={15} pl={15} mr="auto">
    <Stack as="ul" display="block" listStyleType="none" m={0} p={0 } fontSize={13} fontFamily="Open Sans, sans-serif">
      <ListItem><BiPhoneCall style={{display:"inline-block",marginRight:"0.5rem"}}/> +91 9113923240</ListItem>
      <ListItem><AiOutlineMail style={{display:"inline-block",marginRight:"0.5rem"}}/>codepluck@codepluck.com</ListItem>
    </Stack>
 </Box>);

export default function TopNav(){
 return (<Box pos="relative" 
    w="100%" 
    pr={15} 
    pl={15} 
    maxW="100%" 
    flexBasis="100%" 
    bg="primary.20"
    pt="0.5rem" 
    pb="0.5rem"
    display ={["none","none","none","block"]}>
    <Box display="flex" mr={-15} ml={-15} flexWrap="wrap">
     <LeftNav/>
     <RightNav/>
    </Box>
  </Box>);
}
