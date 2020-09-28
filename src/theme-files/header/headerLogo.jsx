import React from 'react';
import {Box,Link} from '@chakra-ui/core';
import {isUrl} from './headerFunctions';

const Logo =({isImage,src})=>isImage?(<Box as="img" src={src} maxW={60}/>):(<Box>{src}</Box>);

export default function HeaderLogo(props){
  const LogoName = "Ecommerce";
  const isImage = isUrl(LogoName);
  return(<Box width={["100%","100%","100%","auto"]} 
    flexBasis={["","","","auto"]} 
    maxW={["","","","100%"]} 
    pos="relative"
    pr={15}
    pl={15}> 
       <Box fontSize="2rem" lineHeight={1} fontFamily="Righteous ,cursive" textAlign={["center","center","center","left"]}>
        <Link color="primary.30" 
          href="/" 
          _hover={{texDecoration:"none",color:"black"}} 
          _focus={{textDecoration:"none",color:"black"}}>
          <Logo isImage={isImage} src={LogoName}  />
        </Link>
       </Box>
    </Box>);

}
