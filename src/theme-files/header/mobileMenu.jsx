import React,{createRef,forwardRef} from 'react';
import {Box,PseudoBox,Stack,Link} from '@chakra-ui/core';
import {IoIosMenu,IoMdArrowDropdown} from 'react-icons/io';


const MenuButton=({click})=>(<PseudoBox as="button" onClick={click}>
            <IoIosMenu size={32}/>
          </PseudoBox>);

const MenuItem=({children,link})=>( <PseudoBox as="li">
          <Link href={link}
           display="block"
           w="100%"
           pt={1} pb={1} pr={6} pl={5}
           color="black"
           opacity="0.5" 
            _active={{textDecoration:"none",opacity:"0.9",bg:"white"}}
            _focus={{textDecoration:"none",opacity:"0.9",bg:"transparent"}}>{children}</Link>
        </PseudoBox>
);

const DropdownSubMenuItem=({link ,...props})=>(<Link
                                                href={link}
                                                display="block"
                                                w="100%"
                                                pt={1} pb={1} pr={6} pl={5}
                                                color="black"
                                                opacity="0.5" 
                                                _active={{textDecoration:"none",opacity:"0.9",bg:"white"}}
                                                _focus={{textDecoration:"none",opacity:"0.9",bg:"transparent"}}
                                                {...props}/>)

const DropdownSubMenu=forwardRef((props,ref)=>(<Box display="none" ml={18} 
                                  ref={ref}
                                  border={1} borderStyle="solid" {...props}/>));

const DropdownMenuItem=({linkName,children,click})=>(<PseudoBox as="li">
                            <Link  display="block"
                              href="#"
                              w="100%"
                              onClick={click}
                              pt={1} pb={1} pr={6} pl={5}
                              color="black"
                              opacity="0.5" 
                              _active={{textDecoration:"none",opacity:"0.9",bg:"white"}}
                              _focus={{textDecoration:"none",opacity:"0.9",bg:"transparent"}}>
                              {linkName}<IoMdArrowDropdown style={{display:"inline-block"}}/>
                            </Link>
                            {children}
                           </PseudoBox>);


const MobileNav=forwardRef((props,ref)=>{
            const {dropdownRef,buttonRef} = ref;
            return (<Box pos="absolute"
            ref={buttonRef}
            top="100%"
            float="none"
            left={15}
            fontSize="1rem"
            minW="10rem"
            textAlign="left"
            display="none"
            pt={2} pb={2} mt={1}
            bg="white">
        <Stack as="ul"
          listStyleType="none">
          <MenuItem link="#">Home</MenuItem>
          <DropdownMenuItem click={props.click} linkName="Electronics">
            <DropdownSubMenu ref={dropdownRef} >
              <DropdownSubMenuItem link="#">Sony Dslr</DropdownSubMenuItem>
            </DropdownSubMenu>
          </DropdownMenuItem>
          <MenuItem link="#">Login</MenuItem>
          <MenuItem link="#">Sign Up </MenuItem>
      </Stack>
    </Box>)});

export default function MobileMenu(){
  
  let isMenuClosed = true;
  let isDropDownClosed= true;
  const buttonRef = createRef();
  const dropdownRef = createRef();
  const dropdownToggle=()=>{
       (isDropDownClosed)?
      (isDropDownClosed = false,dropdownRef.current.style.display="inline-block"):
      (isDropDownClosed=true,dropdownRef.current.style.display="none");

    
  }
  const buttonToggle=()=>{
   (isMenuClosed)?
      (isMenuClosed = false,buttonRef.current.style.display="inline-block"):
      (isMenuClosed=true,buttonRef.current.style.display="none");
  }
  return(<Box display={["inline-block","inline-block","inline-block","none"]}
    w="25%"
    float="left"
    pt={2}
    pr="3.25rem"><MenuButton click={buttonToggle}/><MobileNav click={dropdownToggle} ref={{buttonRef,dropdownRef}}/></Box>);
}
