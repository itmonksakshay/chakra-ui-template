import React from 'react';
import {Box,Stack,PseudoBox,Link} from '@chakra-ui/core';
import {IoMdArrowDropdown} from 'react-icons/io'
const DropdownList=({linkName,children,...props})=>(<PseudoBox
  mr={5}
  pos="relative"
  as="li"
  role="group">
        <Link           
            pl=".5rem"
            pr=".5rem"
            pt=".2rem"
            pb=".3rem"
            display="inline-block"
            whiteSpace="noWrap"
            opacity="0.5"
            href="#"
            _hover={{textDecoration:"none",opacity:"1"}}
            _focus={{textDecoration:"none",opacity:"1"}}
            >{linkName}<IoMdArrowDropdown style={{display:"inline-block"}}/></Link>
        {children}
         </PseudoBox> 
);

const DropdownLink =({link,...props})=>(<Link href={link}
              display="block"
              w="100%"
              fontWeight="400"
              clear="both"
              pt="0.25rem"
              pb="0.25rem"
              pr="1.5rem"
              pl="1.5rem"
              color="primary.60"
              textAlign="inherit"
              whiteSpace="nowrap"
              bg="transparent"
              border="0"
              transition="color 0.2s linear 0s"
              _hover={{textDecoration:"none"}}
              _focus={{textDecoration:"none"}} 
              _active={{bg:"primary.80"}}    {...props}/>);

const DropdownListItem=(props)=>(<PseudoBox
            pos="absolute"
            top="100%"
            float="none"
            left="0"
            display="none"
            minW="10rem"
            zIndex="1000"
            pt="0.5rem"
            pb="0.5rem"
            pr={0}
            pl={0}
            mt="0.125rem"
            mr={0}
            ml={0}
            mb={0}
            fontSize="1rem"
            color="primary.60"
            textAlign="left"
            listStyleType="none"
            bg="white"
            backgroundClip="padding-box"
            border="1px"
            borderColor="black"
            borderRadius="0.25rem"
            _groupHover={{display:"block"}} {...props}/>
);

export default function Nav(props){
  return(<Box display={["none","none","none","flex"]} 
    flexWrap="wrap"
    mr={-15}
    ml={-15}>
      <Box as="nav"
        bg="white"
        flexWrap="nowrap"
        flexDirection="row"
        justifyContent="flex-start"
        pos="relative"
        display="flex"
        alignItems="center"
        pt="0.5rem"
        pb="0.5rem"
        pr="1rem"
        pl="1rem"
        flexBasis="100%"
        maxW="100%"
        w="100%">

       <Stack as="ul"
       flexDirection="row"
       mt={0}
       mb={0}
       pl={0}
       ml="auto"
       mr="auto"
       display="flex"
       listStyleType="none">
        <PseudoBox as="li" mr="5px">
          <Link pr=".5rem"
          pl=".5rem"
          pr=".5rem"
          pt=".2rem"
          pb=".3rem"
          display="block"
          textDecoration="none"
          bg="transparent"
          href="/"
          _hover={{textDecoration:"none"}}
          _focus={{textDecoration:"none"}}
          >Home</Link>
        </PseudoBox>
        <DropdownList linkName="Electronics">
          <DropdownListItem>
            <DropdownLink link="#">DSLR</DropdownLink> 
            <DropdownLink link="#">Sony Digital</DropdownLink>
          </DropdownListItem>
        </DropdownList>

       </Stack>

      </Box>
    </Box>);
}
