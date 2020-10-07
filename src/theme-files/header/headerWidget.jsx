import React from 'react';
import {Box,Link} from '@chakra-ui/core';
import {AiFillHeart,AiOutlineShoppingCart,AiOutlineMoneyCollect} from "react-icons/ai"
import {HiOutlineCurrencyRupee} from "react-icons/hi";
export default  function HeaderWidget({children}){
  
  const HeaderLink=(props,{link})=>(<Link href={link}
       pt="0.25rem"
       pb="0.25rem"
       pr="0.4rem"
       pl="0.4rem"
       color="primary.50"
       fontWeight="bold"
       lineHeight="2.5"
       display="inline-block"{...props}/>); 

  return(<Box textAlign={["center","center","center","left"]}
    w={["100%","100%","100%","auto"]}
    maxWidth={["auto","auto","auto","100%"]}
    pos="relative"
    pr={15}
    pl={15}>
      {children}
    <Box w={["75%","75%","75%","100%"]}
     display="inline-block"
     float="left">
      <HeaderLink link="#"><AiFillHeart style={{display:"inline-block"}}/><Box as="span">10</Box></HeaderLink>
      <HeaderLink link="#">
        <AiOutlineShoppingCart style={{display:"inline-block"}}/>
        <Box as="span" mr="1rem"> 2 </Box>
        <AiOutlineMoneyCollect style={{display:"inline-block"}}/>
        <Box as="span" display="inline-block" mr="0.5rem">  2,000 </Box>
        <HiOutlineCurrencyRupee style={{display:"inline-block"}} />
      </HeaderLink>
    </Box>
    </Box>);
}
