import { Container, Heading, useColorModeValue, VStack, Box, Input, Button, useToast } from '@chakra-ui/react';
import React from 'react'
import { useProductStore } from '../store/product';

const CreatePage = () => {
    const [newProduct, setNewProduct] = React.useState({
        name: '',
        price: '',
        image: ''
    });

    const toast = useToast();

    const {createProduct} = useProductStore()

    const handleAddProduct = async () => {
        const {success, message} = await createProduct(newProduct);
        if(!success){
            toast({
                title: "Error",
                description: message,
                status: "error",
                isClosable: true,
                duration: 3000,
                position: "bottom-right"
            })
        } else {
            toast({
                title: "Success",
                description: message,
                status: "success",
                isClosable: true,
                duration: 3000,
                position: "bottom-right",
            })
        }
        setNewProduct({name:'', price:'', image:''})

    }

  return (
    <Container>
      <VStack spacing={8}>
        <Heading as={'h1'} size={'2xl'} textAlign={'center'} mt={8} mb={8}>
          Create New Product
        </Heading>
      </VStack>
      <Box
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        p={6}
        rounded={'lg'}
        shadow={'md'}
      >
        <VStack spacing={4}>
          <Input
            placeholder="Name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          />
          <Input
            placeholder="Price"
            value={newProduct.price}
            type='number'
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          />
          <Input
            placeholder="Image URL"
            value={newProduct.image}
            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
          />
          <Button colorScheme='blue' onClick={handleAddProduct} w="full"> Add Product</Button>
        </VStack>
      </Box>
    </Container>
  )
}

export default CreatePage
