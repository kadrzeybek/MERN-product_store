import { Container, Flex, HStack, Text,Button, useColorMode } from "@chakra-ui/react"
import { Link } from "react-router-dom"


const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={'1140px'} px={4} py={4}>
      <Flex
        h={16}
        alignItems={'center'}
        justifyContent={'space-between'}
        flexDir={{
          base: 'column',
          sm: 'row'
        }}
      >
        <Text
          bgGradient="linear(to-l, orange.200, purple.300)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          <Link to={'/'}>Product Store 🛒</Link>
        </Text>
        <HStack spacing={2} alignItems={'center'}>
          <Button><Link to={"/"}>Home</Link></Button>
          <Button><Link to={"/create"}>Create New</Link></Button>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? '🌙' : '☀️'}
          </Button>
        </HStack>
      </Flex>
    </Container>
  )
}

export default Navbar
