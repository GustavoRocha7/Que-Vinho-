import { LinearGradient } from "expo-linear-gradient";
import { Center, useTheme } from "native-base";
import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Gradient } from "./GRadient";

type Props = TouchableOpacityProps & {
    children: React.ReactNode;
    isGradient?: boolean;
};

export function GradientSquareButton({ isGradient = true, children, ...rest }: Props) {
    const { colors } = useTheme();

    return (
        <TouchableOpacity {...rest}>
            <Center shadow="5" w="44px" borderRadius="10" h="44px" bg="primary.50:alpha.9">
                {isGradient ? <Gradient>{children}</Gradient> : children}
            </Center>
        </TouchableOpacity>
    );
}
