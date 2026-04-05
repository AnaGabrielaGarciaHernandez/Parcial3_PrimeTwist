import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProductCard({ name, price, image, description, navigation, cart, setCart }) {

    const handleAddToCart = () => {
        const exists = cart.find(item => item.name === name);
        if (exists) {
            setCart(cart.map(item =>
                item.name === name
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        } else {
            setCart([...cart, { name, price, image, description, quantity: 1 }]);
        }
    };

    const itemInCart = cart.find(item => item.name === name);
    const quantity = itemInCart ? itemInCart.quantity : 0;

    return (
        <TouchableOpacity
            style={styles.card}
            onPress={() =>
                navigation.navigate('ProductDetail', {
                    name,
                    price,
                    image,
                    description,
                })}
        >
            <Image source={image} style={styles.image} />
            <View style={styles.infocontainer}>
                <Text style={styles.productName}>{name}</Text>
                <Text style={styles.productPrice}>${price}</Text>
                <Text style={styles.productDescription} numberOfLines={2}>
                    {description}
                </Text>

                <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
                    <Text style={styles.addButtonText}>
                        {quantity > 0 ? `Agregar más (${quantity} en carrito)` : 'Agregar al carrito'}
                    </Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#b7c2f7',
        borderRadius: 16,
        overflow: 'hidden',
        marginBottom: 16,
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
        alignItems: 'center',
        paddingVertical: 12,
        width: '85%',
        alignSelf: 'center',
    },
    image: {
        width: 140,
        height: 140,
        marginBottom: 10,
    },
    infocontainer: {
        alignItems: 'center',
    },
    productName: {
        fontSize: 17,
        fontWeight: '700',
        marginBottom: 5,
        textAlign: 'center',
    },
    productPrice: {
        fontSize: 15,
        color: '#0026ff',
        marginTop: 4,
        fontWeight: '600',
    },
    productDescription: {
        fontSize: 13,
        color: '#444',
        textAlign: 'center',
        marginTop: 6,
        paddingHorizontal: 8,
    },
    addButton: {
        marginTop: 10,
        backgroundColor: '#4a6fa5',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
    },
    addButtonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 13,
    },
});