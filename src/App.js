import React,{Component} from 'react';
import {ThemeProvider,CSSReset} from '@chakra-ui/core';
import {Switch,Router} from 'react-router-dom';
import Index from './theme-files';
import Home from './theme-files/home';
import customTheme from './theme';
class App extends Component{
  render(){
    console.log(this);
    return(<ThemeProvider theme={customTheme}>
      <CSSReset/>
        <Index>
        <Home/>
        </Index>
      </ThemeProvider>);
  }
}
export default App;
