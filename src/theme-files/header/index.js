import React,{Component} from 'react';
import {Box} from '@chakra-ui/core';
import TopNav from './topNav';
const MainHeader =(props)=>(<Box as="header" display="flex" mr={-15} ml={-15} flexWrap="wrap" {...props}/>);
export default class Header extends Component {
  render(props){
     return(<MainHeader {...props}>
      <TopNav/>
     </MainHeader>);
  }

}
