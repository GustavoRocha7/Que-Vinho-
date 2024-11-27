import { useRoute } from "@react-navigation/native";
import { Box, Button, HStack, Image, Text } from "native-base";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import api from "../../service/api";
import { CardProps } from "../Home";

import rectangle from "../../img/img/rectangle.png"
import { ImagePreview } from "../../atomic/atoms/ImagePreview";
import { ButtonDetail } from "../../atomic/atoms/ButtonDetail";
type RouteParams = {
    equipmentId: string;
}

export function Detail() {
    const route = useRoute()
    const { equipmentId } = route.params as RouteParams

    const [equipment, setEquipment] = useState<CardProps>({} as CardProps)
    const [toggleDescription, setToggleDescription] = useState(true)

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

    function handleToggleDescription (){
        setToggleDescription((oldValue) => !oldValue)
    }

    return (
        <>
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
                    <HStack w="100%" justifyContent="space-between">
                        <ButtonDetail title="Descrição" onPress={handleToggleDescription}/>

                        <ButtonDetail title="Ficha Tecnica" />



                    </HStack>
                </Box>
            ) : (<Box bg="primary.100" borderTopRadius={30} shadow={5} h="460px">
                <Box pl="7" p="7" pt="7">
                    <HStack w="100%" justifyContent="space-between">
                        <ButtonDetail title="Descrição" onPress={handleToggleDescription}/>

                        <ButtonDetail title="Ficha Tecnica" />
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
                        onPress={() => { }}>
                        Adicionar ao carrinho
                    </Button>

                </HStack>
            </Box>
            )}

        </>
    );
}