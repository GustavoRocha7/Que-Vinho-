import { Box, Image } from "native-base";
import React from "react";

type ImagePreviewProps = {
    showDescription: boolean,
    alt: string,
    image: string,
}

export function ImagePreview({ showDescription = false, alt, image }: ImagePreviewProps) {
    return <Box width="100%" height={!showDescription ? "200" : "300"} justifyContent="center" alignItems="center">
        <Image
            src={image}
            w="350px"
            h="250px"
            alt={alt}
            resizeMode="contain"
            flex="1"
        />
    </Box>
}