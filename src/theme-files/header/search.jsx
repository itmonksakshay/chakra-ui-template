import React from 'react';
import {Box,FormControl,Input,IconButton} from '@chakra-ui/core';
export default function SearchBox(){
  return(<Box mt={["1.5rem","1.5rem","1.5rem","0"]}
    maxW={["auto","auto","auto","41.6%"]}
    flexBasis={["auto","auto","auto","41.6%"]}
    pos="relative"
    w="100%"
    pr={15}
    pl={15}
    ml="auto" 
    mr="auto"
    >
    <FormControl>
      <Box mb="1rem">
        <Box pos="relative" display="flex" flexWrap="wrap" alignItems="stretch" w="100%">
          <Input type="search" 
            pt="0.375rem" 
            pr="0.75rem" 
            pb="0.375rem" 
            pl="0.75rem" 
            display="block" 
            borderColor="primary.20"
            flexGrow={1}
            flexShrink={1}
            flexBasis="auto"
            w="1%"
            mb={0}
            fontSize="1rem"
            fontWeight={400}
            lineHeight={1.5}
            color="primary.40"
            placeholder="Search"
            roundedRight={0}
            border={2}
            borderStyle="inset"
            borderColor="primary.20"/>
            <Box ml={0} display="flex" >
              <IconButton icon="search" 
                pos="relative" 
                color="primary.20" 
                borderColor="primary.20" 
                display="inline-block"
                bg="transparent"
                border={1}
                borderStyle="solid"
                roundedLeft={0}
                pt=".375rem"
                pb=".375rem"
                pr=".75rem"
                pl=".75rem"/>  
            </Box>
        </Box>
      </Box>
    </FormControl>
    </Box>);
}
