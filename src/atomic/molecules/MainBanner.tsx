import { Box,Image } from "native-base";
import React from "react";
import { ImageBackground } from "react-native";


import slider from '../../img/img/slider.png'
import wine from '../../img/img/WineBanner.png'


export function MainBanner() {
    return <Box w="100%" h="225" mt="60px" mb='25px'>
        <ImageBackground source={slider} style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} resizeMode="contain">
            <Image source={wine} size="150"/>
        </ImageBackground>
        
        
    </Box>
}