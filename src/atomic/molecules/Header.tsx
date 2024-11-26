import { Box, Icon, Text } from "native-base";
import React from "react";
import { GradientSquareButton } from "../atoms/GradientSquareButton";
import { AntDesign } from "@expo/vector-icons"


type Props = {
    text: string
}
export function Header({text}: Props){
    return <Box h="100px" alignItems="center" p='3'mt='5' flexDirection="row" justifyContent="space-between">
        <Text fontSize="lg" fontWeight="bold" color="white" >{text}</Text>

        <GradientSquareButton>
            <Icon  as={AntDesign} name="search1" color="white" />
        </GradientSquareButton>
    </Box>
}