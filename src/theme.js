import {theme} from "@chakra-ui/core";
const customTheme = {
  ...theme,
  colors:{
    ...theme.colors,
    white:"#fff",
    black:"#000",
    primary:{
     10:"#e0e0e0",
     20:"#343a40",
     30:"#404040",
     40:"#495057",
     50:"#656565",
     60:"#212529",
     70:"#040202",
     80:"#007bff"
    }
  },
  breakpoints: ["30em", "48em", "62em", "80em"]

}
export default customTheme;
