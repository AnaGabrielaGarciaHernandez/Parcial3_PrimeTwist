import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function CartScreen({ cart, setCart }) {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    const removeItem = (name) => {
        setCart(cart.filter(item => item.name !== name));
    };

    return (
        <View style={styles.container}>
            <View style={styles.titleRow}>
                <Text style={styles.title}>Mi carrito</Text>
                {totalItems > 0 && (
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>{totalItems}</Text>
                    </View>
                )}
            </View>

            <FlatList
                data={cart}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={item.image} style={styles.image} />
                        <View style={styles.cardInfo}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.price}>${item.price}</Text>
                            <View style={styles.quantityRow}>
                                <Text style={styles.quantityLabel}>Cantidad:</Text>
                                <View style={styles.quantityBadge}>
                                    <Text style={styles.quantityText}>{item.quantity}</Text>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={styles.deleteButton}
                            onPress={() => removeItem(item.name)}
                        >
                            <Text style={styles.deleteText}>✕</Text>
                        </TouchableOpacity>
                    </View>
                )}
                ListEmptyComponent={<Text style={styles.emptyText}>Tu carrito está vacío</Text>}
                contentContainerStyle={styles.listContainer}
            />

            <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>

            <TouchableOpacity
                style={[styles.button, cart.length === 0 && styles.buttonDisabled]}
                onPress={() => setCart([])}
                disabled={cart.length === 0}
            >
                <Text style={styles.buttonText}>Vaciar carrito</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f4f7fb',
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#4a6fa5',
        padding: 12,
        borderRadius: 12,
        color: '#fff',
        elevation: 3,
        flex: 1,
    },
    badge: {
        position: 'absolute',
        right: -8,
        top: -8,
        backgroundColor: '#e74c3c',
        borderRadius: 12,
        minWidth: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 4,
        elevation: 5,
    },
    badgeText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 13,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 8,
        elevation: 2,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 8,
        marginRight: 15,
    },
    cardInfo: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: '600',
    },
    price: {
        fontSize: 16,
        color: '#2c3ea3',
    },
    quantityRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
        gap: 6,
    },
    quantityLabel: {
        fontSize: 13,
        color: '#666',
    },
    quantityBadge: {
        backgroundColor: '#e8edf8',
        borderRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 2,
    },
    quantityText: {
        fontWeight: '700',
        color: '#4a6fa5',
        fontSize: 13,
    },
    deleteButton: {
        backgroundColor: '#fdecea',
        borderRadius: 20,
        width: 32,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 8,
    },
    deleteText: {
        color: '#e74c3c',
        fontWeight: 'bold',
        fontSize: 14,
    },
    emptyText: {
        fontSize: 16,
        color: '#777',
        textAlign: 'center',
        marginTop: 0,
    },
    listContainer: {
        paddingBottom: 20,
    },
    total: {
        fontSize: 20,
        fontWeight: '700',
        marginTop: 10,
        marginBottom: 14,
        textAlign: 'center',
        color: '#4a6fa5',
    },
    button: {
        backgroundColor: '#4a6fa5',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 12,
        marginTop: 10,
        alignSelf: 'center',
        elevation: 4,
    },
    buttonDisabled: {
        backgroundColor: '#aab8d4',
        elevation: 0,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});