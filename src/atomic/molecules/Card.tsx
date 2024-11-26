import { Box, Image,Text } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import { CardProps } from "../../Page/Home";
import { TextAlpha50 } from "../atoms/TextAlpha50";

export function Card({
    id,
    image,
    price,
    model,
    title
}: CardProps) {
    return (
        <TouchableOpacity 
            style={{ padding: 5, width: '50%', height: 240, opacity: 0.9 }} 
            onPress={() => {}}
        >
            <Box 
                borderRadius="20px"
                p="4" 
                flex="1" 
                shadow="5" 
                bg="primary.50:alpha.9"
                justifyContent="center"
                alignItems="center"
            >
                <Box 
                    justifyContent="center" 
                    alignItems="center" 
                    width="100%" 
                    height="80px" 
                >
                    <Image 
                        src={image} 
                        width="121px" 
                        height="80px" 
                        alt="vinho" 
                        resizeMode="contain" 
                    />
                </Box>
                <Box mt="17px">
                    <TextAlpha50 text={title}></TextAlpha50>
                    <Text fontSize="md" bold color="white">
                        {model}
                    </Text>
                    <TextAlpha50 text={`R$ ${price}`}></TextAlpha50>
                </Box>
            </Box>
        </TouchableOpacity>
    );
}
