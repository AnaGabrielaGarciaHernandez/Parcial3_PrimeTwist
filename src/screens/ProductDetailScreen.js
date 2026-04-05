import {View, Text, Image, StyleSheet, ScrollView, TouchableOpacity} from "react-native";

export default function ProductDetailScreen({route,navigation,cart,setCart}) {
    const {name, price, image, description} = route.params;
    return (
        <ScrollView style={styles.container}>
            <Image
                source={image}
                style={styles.image}
            />

            <View style={styles.infoContainer}>
                <Text style={styles.name}>{name}</Text>

                <Text style={styles.price}>${price}</Text>

                <Text style={styles.description}>{description}</Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        const newProduct = {name, price, image};
                        setCart([...cart, newProduct]);
                        alert("Producto Agregado al Carrito");
                    }}
                >
                    <Text style={styles.buttonText}>Agregar al Carrito</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#c8d8ec', 
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 16, 
    },
    infoContainer: {
        padding: 20,
        backgroundColor: '#d9e4ef', 
        borderRadius: 12,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
        marginTop: 20,
    },
    name: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#4a6fa5', 
        textAlign: 'center',
        marginBottom: 10,
    },
    price: {
        fontSize: 22,
        color: '#2c3ea3', 
        marginTop: 10,
        fontWeight: '600',
        textAlign: 'center',
    },
    description: {
        marginTop: 20,
        fontSize: 16,
        color: '#333', 
        lineHeight: 24,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#4a6fa5',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 12,
        marginTop: 30,
        alignSelf: 'center',
        elevation: 4,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});