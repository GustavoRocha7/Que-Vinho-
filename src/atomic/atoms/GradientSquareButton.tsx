import { LinearGradient } from "expo-linear-gradient";
import { Box, Center, useTheme } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Gradient } from "./GRadient";

type Props = {
    children: React.ReactNode
    isGradient?: boolean
}

export function GradientSquareButton({ isGradient = true, children }: Props) {

    const { colors } = useTheme()
    return <TouchableOpacity >

        <Center shadow="5" w="44px" borderRadius="10" h="44px" bg="primary.50:alpha.9">
            {isGradient ? <Gradient>{children}</Gradient> : children}

        </Center>
    </TouchableOpacity>
}