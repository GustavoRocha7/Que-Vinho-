import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "native-base";
import React from "react";

type Props = {
    children: React.ReactNode
    
}

export function Gradient({children}: Props){
    const { colors } = useTheme()
    
    return <LinearGradient colors={[colors.ocean[50], colors.purple[100]]} style={{
        width: 44, 
        height: 44, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 10, 
        boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2)',
        padding: 12,
    }}> {children}</LinearGradient>
}