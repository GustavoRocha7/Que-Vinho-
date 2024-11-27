import { Box, HStack, Image, Text } from "native-base";
import React from "react";
import { GradientSquareButton } from "../atoms/GradientSquareButton";
import wineT from '../../img/img/categories/wineT.png';
import wineB from '../../img/img/categories/wineB.png';
import wineR from '../../img/img/categories/wineR.png';

type CategoryListProps = {
    activeCategory: string;
    setActiveCategory: (category: string) => void;
};

export function CategoryList({ activeCategory, setActiveCategory }: CategoryListProps) {
    const categories = [
        { id: "all", label: "All", icon: null },
        { id: "Tinto", label: "", icon: wineT },
        { id: "Branco", label: "", icon: wineB },
        { id: "Rosé", label: "", icon: wineR },
    ];

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
                {categories.map(({ id, label, icon }) => (
                    <Box ml={id !== "all" ? "20px" : "0"} key={id}>
                        <GradientSquareButton
                            isGradient={activeCategory === id}
                            onPress={() => setActiveCategory(id)}
                        >
                            {icon ? (
                                <Image source={icon} alt={id} size="7" />
                            ) : (
                                <Text color="white">{label}</Text>
                            )}
                        </GradientSquareButton>
                    </Box>
                ))}
            </HStack>
        </Box>
    );
}
