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

import { Link } from '@chakra-ui/react';

export default function Language() {
return(
    <div className="container">
<Card >
  <CardHeader>
    <Heading size='md'>Select a Language / Chwazi yon lang / Selecciona in idioma</Heading>
  </CardHeader>
 
    <Divider />
    <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Languages
  </MenuButton>
  <MenuList>
  <Link to="/english">
    <MenuItem>Creole</MenuItem>
    </Link>
    <Link to="/english">
    <MenuItem >English</MenuItem>
    </Link>
    <Link to="/english">
    <MenuItem >Spanish</MenuItem>
    </Link>
  </MenuList>
</Menu>
</Card>
 

</div>
)
}