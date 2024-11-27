import { Box, Icon, Text } from "native-base";
import React from "react";
import { GradientSquareButton } from "../atoms/GradientSquareButton";
import { AntDesign } from "@expo/vector-icons"
import { invert } from "react-native-svg/lib/typescript/elements/Shape";


type Props = {
    text: string
    inverted?: boolean,
    type?: "goBack" | "default" | "down";
    handlePress: () => void; 
}
export function Header({text, inverted = false, type = "default", handlePress}: Props){

    const iconModifier = {
        default: 'search1',
        goBack: 'left',
        down: 'down'
    }

    return <Box h="100px" alignItems="center" p='3'mt='5' flexDirection="row" justifyContent={inverted? "flex-start" : "space-between"}>
        {!inverted && (<Text fontSize="lg" fontWeight="bold" color="white" >{text}</Text>)}

        <GradientSquareButton onPress={handlePress}>
            <Icon  as={AntDesign} name={iconModifier[type]} color="white" />
        </GradientSquareButton>

        {inverted && (<Text fontSize="lg"  ml="56px" fontWeight="bold" color="white" >{text}</Text>)}

        
    </Box>
}