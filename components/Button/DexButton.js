import React from 'react'

import { Select, Image, } from '@chakra-ui/select'

const DexButton = () => {
    return (
        <div>
            <Select
                maxW="150px"
                fontWeight="bold"
                float="right"
                borderColor="blackAlpha.900"
                bg="green.700">
                <option
                    fontWeight="bold"
                    value="sushiswap">
                    {/* <Image
                    boxSize="2rem"
                    borderRadius="full"
                    src="https://cryptologos.cc/logos/sushiswap-sushi-logo.png?v=014"
                    alt=""
                    mr="12px"
                /> */}
                    Sushiswap</option>
                <option
                    value="quickswap">
                    {/* <Image
                    boxSize="2rem"
                    borderRadius="full"
                    src="https://placekitten.com/100/100"
                    alt="Fluffybuns the destroyer"
                    mr="12px"
                /> */}
                    Quickswap</option>
                <option
                    value="pangolin">
                    {/* <Image
                    boxSize="2rem"
                    borderRadius="full"
                    src="https://placekitten.com/100/100"
                    alt="Fluffybuns the destroyer"
                    mr="12px"
                /> */}
                    Pangolin</option>
                <option
                    value="spiritswap">
                                {/* <Image
                    boxSize="2rem"
                    borderRadius="full"
                    src="https://placekitten.com/100/100"
                    alt="Fluffybuns the destroyer"
                    mr="12px"
                /> */}
                    Spiritswap</option>
                <option
                    value="spookyswap">
                    {/* <Image
                    boxSize="2rem"
                    borderRadius="full"
                    src="https://placekitten.com/100/100"
                    alt="Fluffybuns the destroyer"
                    mr="12px"
                /> */}
                    Spookyswap</option>
            </Select>
        </div>
    )
}

export default DexButton
