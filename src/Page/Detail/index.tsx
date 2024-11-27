import { useNavigation, useRoute } from "@react-navigation/native";
import { Box, Button, HStack, Image, Text } from "native-base";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import api from "../../service/api";
import { CardProps } from "../Home";

import rectangle from "../../img/img/rectangle.png"
import { ImagePreview } from "../../atomic/atoms/ImagePreview";
import { ButtonDetail } from "../../atomic/atoms/ButtonDetail";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { transform } from "@babel/core";
import { Header } from "../../atomic/molecules/Header";
 
type RouteParams = {
    equipmentId: string;
}

export function Detail() {

    const {goBack ,navigate} = useNavigation()
    const route = useRoute()
    const { equipmentId } = route.params as RouteParams

    const [equipment, setEquipment] = useState<CardProps>({} as CardProps)
    const [toggleDescription, setToggleDescription] = useState(true)

    const cardOffset = useSharedValue(460)

    useEffect(() => {
        async function getEquipmentById() {
            try {
                const response = await api.get(`equipments/${equipmentId}`)

                setEquipment(response.data)
            } catch (err) {
                alert("Ops, algo deu ruim")
            }
        }

        getEquipmentById()
    }, []);

    function handleToggleDescription() {
        setToggleDescription((oldValue) => !oldValue)
    }

    function handleAnimatedToggle() {
        handleToggleDescription()

        if (toggleDescription) {
            cardOffset.value = withTiming(1, {
                duration: 900
            })
        } else {
            cardOffset.value = withTiming(460, {
                duration: 900
            })
        }

    }

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: cardOffset.value,
                }
            ],
        };
    });

    function handlePress() {
        if(toggleDescription){
            goBack();
    }
        handleAnimatedToggle();

    }

    function handleAddCart(){
        navigate('Cart');
    }

    return (
        <>
            <Box pl="20px" pr="20px">
                <Header text={equipment.title} inverted={true} type={toggleDescription ? "goBack" : "down"} handlePress={handlePress}/>
            </Box>
            <Box
                flex="1"
                position="relative"
                justifyContent="center"
                alignItems="center"
            >
                <Image source={rectangle}
                    alt="image detail"
                    position="absolute"
                    top="50" right="0"
                    bottom="0"
                />

                <ImagePreview showDescription={toggleDescription} image={equipment.image} alt={equipment.title} />
            </Box>


            {toggleDescription ? (
                <Box
                    bg="primary.100" justifyContent="center" p="7" borderTopRadius={30} shadow={5} h="110px">
                    <HStack w="100%" justifyContent="center">
                        <ButtonDetail title="Descrição" onPress={handleAnimatedToggle} />





                    </HStack>
                </Box>
            ) : (
                <Animated.View style={animatedStyle}>
                    <Box bg="primary.100" borderTopRadius={30} shadow={5} h="460px">
                        <Box pl="7" p="7" pt="7">
                            <HStack w="100%" justifyContent="center">
                                <ButtonDetail title="Descrição" onPress={handleAnimatedToggle} />


                            </HStack>
                            <Box mt="30">
                                <Text bold color="white" fontSize="17">{equipment.title}</Text>
                                <Text bold color="white" opacity="0.6" mt="4" fontSize="12">{equipment.description}</Text>
                            </Box>


                        </Box>
                        <HStack
                            position="absolute"
                            bg="primary.200"
                            borderTopRadius={30}
                            justifyContent="space-between"
                            shadow={5}
                            h={100}
                            w={"100%"}
                            mt="30"
                            alignItems="center"
                            p="7"
                            bottom={0}
                        >
                            <Text bold color="ocean.200" fontSize="17">R$ {equipment.price}</Text>


                            <Button
                                w="149"
                                h="43"
                                justifyContent="center"
                                alignItems="center"
                                borderRadius="10px"
                                shadow={5}
                                bg="ocean.100"
                                _pressed={{ bgColor: 'transparent' }}
                                onPress={handleAddCart}>
                                Adicionar ao carrinho
                            </Button>

                        </HStack>
                    </Box>
                </Animated.View>
            )}

        </>
    );
}