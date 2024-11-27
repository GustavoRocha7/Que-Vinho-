import React, { useEffect, useState } from "react";
import { Box, theme } from "native-base";
import { DetailBackground } from "../../atomic/atoms/DetailBackground";
import { MainBanner } from "../../atomic/molecules/MainBanner";
import { Card } from "../../atomic/molecules/Card";
import api from "../../service/api";
import { FlatList } from "react-native";
import { Header } from "../../atomic/molecules/Header";
import { CategoryList } from "../../atomic/organism/CategoryList";
import { useNavigation } from "@react-navigation/native";

export type CardProps = {
    title: string;
    price: number;
    model: string;
    image: string;
    description: string;
    id: string;
};

export function Home() {
    const { navigate } = useNavigation();

    const [equipments, setEquipments] = useState<CardProps[]>([]);
    const [activeCategory, setActiveCategory] = useState<string>('all');

    useEffect(() => {
        async function getEquipments() {
            try {
                const { data } = await api.get('equipments');
                setEquipments(data);
            } catch (err) {
                console.log(err);
            }
        }

        getEquipments();
    }, []);

    const filteredEquipments = activeCategory === 'all'
        ? equipments
        : equipments.filter(equip => equip.model.toLowerCase() === activeCategory.toLowerCase());

    function handleRedirect(id: string) {
        navigate("Detail", {
            equipmentId: id,
        });
    }

    return (
        <Box flex='1' padding="20px" pt="-10px" position="relative">
            <DetailBackground />
            <FlatList
                ListHeaderComponent={() => (
                    <>
                        <Header text='Procurar Vinhos' />
                        <MainBanner />
                        <CategoryList activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                    </>
                )}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                keyExtractor={item => item.id}
                data={filteredEquipments}
                renderItem={({ item: equipment }) => (
                    <Card
                        onPress={() => handleRedirect(equipment.id)}
                        image={equipment.image}
                        id={equipment.id}
                        model={equipment.model}
                        price={equipment.price}
                        title={equipment.title}
                        description={equipment.description}
                    />
                )}
            />
        </Box>
    );
}
