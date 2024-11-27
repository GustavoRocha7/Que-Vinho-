import {
    Box,
    Button,
    Center,
    HStack,
    Icon,
    Image,
    ScrollView,
    Text,
} from "native-base";
import { Header } from "../../atomic/molecules/Header";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { CartItem } from "../../atomic/atoms/CartItem";
import { SectionFooterCart } from "../../atomic/molecules/SectionFooterCart";
import { SwipeableButton } from "../../atomic/molecules/SwipeableButton";

export function Cart() {
    const { goBack, navigate } = useNavigation();

    return (
        <Box p="20px" flex="1" mb="-30px" justifyContent="space-between">
            <Box h="68%">
                <Box mt="-20px">
                    <Header
                        text="Carrinho de compras"
                        inverted
                        type={"goBack"}
                        handlePress={goBack}
                    />
                </Box>

                <ScrollView>
                    {[0, 1, 2].map((index) => (
                        <CartItem
                            key={index}  // Adicione a chave única
                            title="Portada Winemaker's Selection 2021"
                            amount="2"
                            image="https://res.cloudinary.com/evino/image/upload/q_auto:good,fl_progressive:steep,f_auto,dpr_1.0,h_434/v1/products/1000022579-standing-front.png"
                            price="200"
                        />
                    ))}
                </ScrollView>
            </Box>

            <Box mb="50px">
                <SectionFooterCart title="SubTotal " value="1200" />
                <SectionFooterCart title="Frete " value="50" />
                <SectionFooterCart title="Total " value="1250" />

                <Center mt="5">
                    <Button
                        w="149"
                        h="43"
                        justifyContent="center"
                        alignItems="center"
                        borderRadius="10px"
                        shadow={5}
                        bg="ocean.100"
                        _pressed={{ bgColor: 'transparent' }}
                    >
                        Finalizar pedido
                    </Button>
                </Center>
            </Box>
        </Box>
    );
}