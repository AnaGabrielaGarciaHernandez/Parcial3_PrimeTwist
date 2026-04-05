import {View, Text, StyleSheet, FlatList} from "react-native";
import ProductCard from "../components/ProductCard";

export default function ProductListScreen({ navigation, cart, setCart }) {
    const products = [
        {
            id: '1',
            name: 'Cubo 3x3',
            price: 400.00,
            image: require('../../assets/cubo1.jpg'),
            description: "El clasico cubo Rubik 3X3, ideal para principiantes y expertos, con un diseño ergonómico y colores vibrantes para una experiencia de resolución fluida y divertida."
        },
        {
            id: '2',
            name: 'Cubo 3x3 Mirror',
            price: 450.00,
            image: require('../../assets/cubo2.jpg'),
            description: "Un cubo espejo que desafía tu percepcion espacial. Con piezas de diferentes tamaños y formas."
        },
        {
            id: '3',
            name: 'Cubo Megamix',
            price: 550.00,
            image: require('../../assets/cubo3.jpg'),
            description: "Un cubo complejo con multiples caras para un reto avanzado. Ideal para cuberos experimentados que buscan un desafío adicional."
        },
        {
            id: '4',
            name: 'Cubo Pack',
            price: 1500.00,
            image: require('../../assets/cubo4.jpg'),
            description: "Paquete especial con varios cubos para coleccionistas. Incluye diferentes tipos y diseños para una experiencia de cubo completa."
        },
        {
            id: '5',
            name: 'Cubo 5x5',
            price: 600.00,
            image: require('../../assets/cubo5.jpg'),
            description: "Un cubo de 5 capas que ofrece un desafío adicional para los amantes de los cubos. Con un diseño robusto y colores vibrantes."
        },
        {
            id: '6',
            name: 'Cubo 2x2',
            price: 200.00,
            image: require('../../assets/cubo6.jpg'),
            description: "El cubo de 2 capas para los principiantes. Con un diseño sencillo y colores vibrantes para una experiencia de resolución divertida y accesible."
        },
        {
            id: '7',
            name: 'Cubo 3x3 Lego',
            price: 350.00,
            image: require('../../assets/cubo7.jpg'),
            description: "Un cubo de 3 capas con un diseño inspirado en los bloques de construcción Lego. Ideal para los amantes de los cubos y los fans de Lego, con colores vibrantes y una experiencia de resolución divertida."
        },
        {
            id: '8',
            name: 'Cubo Duo',
            price: 500.00,
            image: require('../../assets/cubo8.jpg'),
            description: "Dos increibles cubos en un paquete especial. Ideal para coleccionistas que quieren probar diferentes tipos de cubos."
        },
        {
            id: '9',
            name: 'Cubo 3x3 puzzle',
            price: 550.00,
            image: require('../../assets/cubo9.jpg'),
            description: "Un cubo de 3 capas que ofrece un desafío adicional para los amantes de los cubos. Con un diseño robusto y colores vibrantes."
        },
        {
            id: '10',
            name: 'Cubo de engranajes',
            price: 550.00,
            image: require('../../assets/cubo10.jpg'),
            description: "Un cubo de engranajes diferente a los cubos tradicionales, con un diseño único que desafía tu percepción espacial. Ideal para los amantes de los cubos que buscan un desafío adicional."
        }
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Catálogo de Productos</Text>

            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ProductCard
                        name={item.name}
                        price={item.price}
                        image={item.image}
                        description={item.description}
                        navigation={navigation}
                        cart={cart}
                        setCart={setCart}
                    />
                )}
                contentContainerStyle={styles.listContainer}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#c8d8ec',
        paddingHorizontal: 15,
        paddingTop: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 20,
        textAlign: 'center',
        backgroundColor: '#4a6fa5',
        padding: 12,
        borderRadius: 12,
        color: '#fff',
        elevation: 3,
    },
    listContainer: {
        paddingBottom: 20,
    },
});