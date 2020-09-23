import {theme} from "@chakra-ui/core";
const customTheme = {
  ...theme,
  colors:{
    ...theme.colors,
    white:"#fff",
    black:"#000",
    primary:{
     10:"#e0e0e0",
     20:"#343a40"
    }
  }

}
export default customTheme;
