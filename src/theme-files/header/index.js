import React,{Component} from 'react';
import {Box} from '@chakra-ui/core';
import TopNav from './topNav';
import HeaderLogo from './headerLogo';
import SearchBox from './search';
import HeaderWidget from './headerWidget';
import MobileMenu from './mobileMenu';
import Nav from './mainNav';
const MainHeader =(props)=>(<Box as="header" display="flex" mr={-15} ml={-15} flexWrap="wrap" {...props}/>);
export default class Header extends Component {
  render(props){
     return(<MainHeader {...props}>
      <TopNav/>
      <Box pt="1.5rem" bg="white" flexBasis="100%" maxW="100%" pos="relative" w="100%" pr={15} pl={15}>
       <Box display="flex" flexWrap="wrap" mr={-15} ml={-15}>
        <HeaderLogo/>
        <SearchBox/>
        <HeaderWidget>  
          <MobileMenu/>
        </HeaderWidget>
       </Box>
       <Nav/>
      </Box>
     </MainHeader>);
  }

}
