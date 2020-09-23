import React from 'react';
import {Box,Stack,PseudoBox,Link} from '@chakra-ui/core';

const LeftNavItem =(props)=>(<PseudoBox as="li" 
  display="inline" 
  borderRight="1px" 
  borderStyle="solid" 
  borderColor="white" 
  {...props}/>);

const  LeftNav =()=>(<Box flex="basis" w="auto" maxW="none" pos="relative" minH={1} pr={15} pl={15} mr="auto">
    <Stack as="ul" styleType="none" m={0} p={0 } fontSize={13} fontFamily="Open Sans, sans-serif">
      <LeftNavItem><Link color="primary.10" textDecoration="none" href="tel:919113923240">+91 9113923240</Link></LeftNavItem>
      <LeftNavItem><Link color="primary.10" textDecoration="none" href="mailto:codepluck@codepluck.com">codepluck@codepluck.com</Link></LeftNavItem>
 </Stack></Box>);

function TopNav() {
 return(<Box pos="relative" 
    w="100%" 
    pr={15} 
    pl={15} 
    maxW="100%" 
    flexBasis="100%" 
    bg="primary.20"
    pt="0.5rem" 
    pb="0.5rem"
    display ={["","","block",""]}>
    <Box display="flex" mr={-15} ml={-15} flexWrap="wrap">
     <LeftNav/>
    </Box>
  </Box>);
}
export default TopNav;
