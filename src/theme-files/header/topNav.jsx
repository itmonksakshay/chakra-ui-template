import React from 'react';
import {Box,Stack,PseudoBox,Link} from '@chakra-ui/core';

const ListItem=(props)=>(<PseudoBox as="li" 
  display="inline" 
  borderRight={1} 
  borderRightStyle="solid" 
  borderRightColor="white"
  pt="0.1rem"
  pr="0.5rem"
  pl="0.5rem"
  pb="0.1rem"{...props}>
  <Link href="#" color="primary.10" textDecoration="none">{props.children}</Link>
  </PseudoBox>);

const  LeftNav =()=>(<Box flex="basis" w="auto" maxW="none" pos="relative" minH={1} pr={15} pl={15} mr="auto">
    <Stack as="ul" display="block" listStyleType="none" m={0} p={0 } fontSize={13} fontFamily="Open Sans, sans-serif">
      <ListItem>+91 9113923240</ListItem>
      <ListItem>codepluck@codepluck.com</ListItem>
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
    display ={["","","block",""]}>
    <Box display="flex" mr={-15} ml={-15} flexWrap="wrap">
     <LeftNav/>
    </Box>
  </Box>);
}
