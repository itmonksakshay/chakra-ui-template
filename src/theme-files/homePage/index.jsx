import React,{Component} from 'react';
import {Box} from '@chakra-ui/core';
import Slider from './slider';
export default class Home extends Component {

  render(){
    return(<Box pr={15} pl={15} pos="relative" w="100%" maxW="100%" flexBasis="100%">
        <Box as="main" mr={-15} ml={-15} display="flex" flexWrap="wrap">
         <Slider/>
        </Box>
      </Box>);


  }


}
