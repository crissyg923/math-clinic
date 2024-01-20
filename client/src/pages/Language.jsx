import { 
    Card, 
    CardHeader, 
    CardBody, 
    CardFooter, 
    Stack, 
    Text, 
    Box, 
    Button,
    Heading, 
    Divider, 
    Menu, 
    MenuButton, 
    MenuList,
    MenuItem 
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons'

// import { Link } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Language() {
return(
    <div className="container">
<Card>
  <CardHeader>
    <Heading size='md'>Select a Language / Chwazi yon lang / Selecciona in idioma</Heading>
  </CardHeader>
 
    <Divider />
    <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Languages
  </MenuButton>
  <MenuList>
  <Box as="span" display="block" textAlign="left" p="0">
  <Link to="/creole" style={{ textDecoration: 'none' }}>
    <MenuItem>Creole</MenuItem>
    </Link>
    <Link to="/english" style={{ textDecoration: 'none' }}>
    <MenuItem >English</MenuItem>
    </Link>
    <Link to="/english" style={{ textDecoration: 'none' }}>
    <MenuItem >Spanish</MenuItem>
    </Link>
    </Box>
  </MenuList>
</Menu>
</Card>
 

</div>
)
}