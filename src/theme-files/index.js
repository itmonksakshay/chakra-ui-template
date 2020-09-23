import React ,{Component} from 'react';
import {Box} from '@chakra-ui/core';
import Header from './header/';
import Footer from './footer';
export default class Index extends Component {
  render(props){
    return(<Box w="100%" pr={15} pl={15} mr="auto" ml="auto" {...props}>
        <Box display="flex" mr={-15} ml={-15} flexWrap="wrap" minH="100vh">
         <Box pos="relative" w="100%" pr={15} pl={15} maxW="100%" flexBasis="100%">
          <Header/>
          {this.props.children}
          <Footer/>
         </Box>
        </Box>
      </Box>);
  }

}
