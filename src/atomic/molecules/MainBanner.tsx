import { Box,Image } from "native-base";
import React from "react";
import { ImageBackground } from "react-native";


import slider from '../../img/img/slider.png'
import wine from '../../img/img/WineBanner.png'


export function MainBanner() {
    return (
        <Box 
            w="100%" 
            h="225px" 
            mt="-3" 
            mb="30px" 
            display="flex" 
            justifyContent="center" 
            alignItems="center"
        >
            <ImageBackground
                source={slider}
                style={{
                    width: '100%', 
                    height: '100%', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                }}
                resizeMode="contain"
            >
                <Image source={wine} size="150" />
            </ImageBackground>
        </Box>
    );
}
