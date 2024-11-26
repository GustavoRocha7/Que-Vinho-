import { Box, HStack, Image, Text } from "native-base";
import React from "react";
import { GradientSquareButton } from "../atoms/GradientSquareButton";
import wineT from '../../img/img/categories/wineT.png'
import wineB from '../../img/img/categories/wineB.png'
import wineR from '../../img/img/categories/wineR.png'


export function CategoryList() {
    return (
        <Box
            mb="20px"
            mt="5px"
            width="100%"
            alignSelf="center"
            justifyContent="center" 
        >
            <HStack
                justifyContent="center"
                alignItems="center" 
                width="100%" 
            >
                <Box >
                    <GradientSquareButton isGradient>
                        <Text color="white">All</Text>
                    </GradientSquareButton>
                </Box>

                <Box ml="20px">
                    <GradientSquareButton isGradient={false}>
                        <Image source={wineT} alt="Vinho Tinto" size='7' />
                    </GradientSquareButton>
                </Box>

                <Box ml="20px">
                    <GradientSquareButton isGradient={false}>
                        <Image source={wineB} alt="Vinho Branco" size='7' />
                    </GradientSquareButton>
                </Box>

                <Box ml="20px">
                    <GradientSquareButton isGradient={false}>
                        <Image source={wineR} alt="Vinho Rosé" size='7' />
                    </GradientSquareButton>
                </Box>
            </HStack>
        </Box>
    );
}