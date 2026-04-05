import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { useState } from "react";

const ORDER_HISTORY = [
    { id: '#1023', product: 'Cubo 3x3', date: '28 Mar 2025', price: '$400.00' },
    { id: '#1018', product: 'Cubo Megamix', date: '15 Mar 2025', price: '$550.00' },
    { id: '#1011', product: 'Cubo 2x2', date: '02 Mar 2025', price: '$200.00' },
];

export default function ProfileScreen() {
    const [editing, setEditing] = useState(false);
    const [name, setName] = useState('Usuario Demo');
    const [email, setEmail] = useState('usuario@correo.com');
    const [tempName, setTempName] = useState(name);
    const [tempEmail, setTempEmail] = useState(email);

    const handleEdit = () => {
        setTempName(name);
        setTempEmail(email);
        setEditing(true);
    };

    const handleSave = () => {
        setName(tempName);
        setEmail(tempEmail);
        setEditing(false);
    };

    const handleCancel = () => {
        setEditing(false);
    };

    return (
        <ScrollView style={styles.scroll} contentContainerStyle={styles.container}>

            {/* Header */}
            <View style={styles.header}>
                <View style={styles.avatarWrapper}>
                    <Image
                        style={styles.avatar}
                        source={require('../../assets/logo.png')}
                    />
                    {editing && (
                        <TouchableOpacity style={styles.avatarEditBadge}>
                            <Text style={styles.avatarEditIcon}>📷</Text>
                        </TouchableOpacity>
                    )}
                </View>

                {editing ? (
                    <View style={styles.editFields}>
                        <TextInput
                            style={styles.input}
                            value={tempName}
                            onChangeText={setTempName}
                            placeholder="Nombre"
                            placeholderTextColor="#aaa"
                        />
                        <TextInput
                            style={styles.input}
                            value={tempEmail}
                            onChangeText={setTempEmail}
                            placeholder="Correo"
                            placeholderTextColor="#aaa"
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                        <View style={styles.editActions}>
                            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                                <Text style={styles.saveButtonText}>Guardar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
                                <Text style={styles.cancelButtonText}>Cancelar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : (
                    <View style={styles.userInfo}>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.email}>{email}</Text>
                        <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
                            <Text style={styles.editButtonText}>✏️  Editar perfil</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>

            {/* Datos de la cuenta */}
            <Text style={styles.sectionTitle}>Datos de la cuenta</Text>
            <View style={styles.card}>
                <View style={styles.infoRow}>
                    <Text style={styles.infoIcon}>👤</Text>
                    <View>
                        <Text style={styles.infoLabel}>Tipo de cuenta</Text>
                        <Text style={styles.infoValue}>Cliente Premium</Text>
                    </View>
                </View>
                <View style={styles.divider} />
                <View style={styles.infoRow}>
                    <Text style={styles.infoIcon}>📅</Text>
                    <View>
                        <Text style={styles.infoLabel}>Miembro desde</Text>
                        <Text style={styles.infoValue}>Enero 2025</Text>
                    </View>
                </View>
                <View style={styles.divider} />
                <View style={styles.infoRow}>
                    <Text style={styles.infoIcon}>📍</Text>
                    <View>
                        <Text style={styles.infoLabel}>Dirección</Text>
                        <Text style={styles.infoValue}>Durango, México</Text>
                    </View>
                </View>
                <View style={styles.divider} />
                <View style={styles.infoRow}>
                    <Text style={styles.infoIcon}>📞</Text>
                    <View>
                        <Text style={styles.infoLabel}>Teléfono</Text>
                        <Text style={styles.infoValue}>+52 618 000 0000</Text>
                    </View>
                </View>
            </View>

            {/* Historial de pedidos */}
            <Text style={styles.sectionTitle}>Últimos pedidos</Text>
            <View style={styles.card}>
                {ORDER_HISTORY.map((order, i) => (
                    <View key={order.id}>
                        <View style={styles.orderRow}>
                            <View style={styles.orderIconWrapper}>
                                <Text style={styles.orderIcon}>📦</Text>
                            </View>
                            <View style={styles.orderInfo}>
                                <Text style={styles.orderProduct}>{order.product}</Text>
                                <Text style={styles.orderDate}>{order.date}</Text>
                            </View>
                            <View style={styles.orderRight}>
                                <Text style={styles.orderId}>{order.id}</Text>
                                <Text style={styles.orderPrice}>{order.price}</Text>
                            </View>
                        </View>
                        {i < ORDER_HISTORY.length - 1 && <View style={styles.divider} />}
                    </View>
                ))}
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scroll: {
        flex: 1,
        backgroundColor: '#f4f7fb',
    },
    container: {
        padding: 20,
        paddingBottom: 40,
    },

    // Header
    header: {
        backgroundColor: '#4a6fa5',
        borderRadius: 20,
        padding: 24,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 24,
        elevation: 4,
        shadowColor: '#4a6fa5',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
    },
    avatarWrapper: {
        position: 'relative',
        marginBottom: 14,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#fff',
        resizeMode: 'contain',
        backgroundColor: '#fff',
    },
    avatarEditBadge: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#fff',
        borderRadius: 14,
        width: 28,
        height: 28,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
    },
    avatarEditIcon: { fontSize: 14 },
    userInfo: { alignItems: 'center' },
    name: {
        fontSize: 22,
        fontWeight: '800',
        color: '#fff',
        marginBottom: 4,
    },
    email: {
        fontSize: 14,
        color: 'rgba(255,255,255,0.8)',
        marginBottom: 14,
    },
    editButton: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.4)',
    },
    editButtonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 14,
    },
    editFields: {
        width: '100%',
        alignItems: 'center',
    },
    input: {
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.15)',
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 16,
        color: '#fff',
        fontSize: 15,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.3)',
    },
    editActions: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 4,
    },
    saveButton: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderRadius: 20,
    },
    saveButtonText: {
        color: '#4a6fa5',
        fontWeight: '700',
        fontSize: 14,
    },
    cancelButton: {
        backgroundColor: 'rgba(255,255,255,0.15)',
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.4)',
    },
    cancelButtonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 14,
    },

    // Section title
    sectionTitle: {
        fontSize: 13,
        fontWeight: '700',
        color: '#888',
        letterSpacing: 1,
        textTransform: 'uppercase',
        marginBottom: 10,
        marginLeft: 4,
    },

    // Card
    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        marginBottom: 24,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
        overflow: 'hidden',
        paddingHorizontal: 16,
    },
    divider: {
        height: 1,
        backgroundColor: '#f0f0f0',
    },

    // Info rows
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
        gap: 14,
    },
    infoIcon: { fontSize: 20 },
    infoLabel: {
        fontSize: 12,
        color: '#999',
        marginBottom: 2,
    },
    infoValue: {
        fontSize: 15,
        fontWeight: '600',
        color: '#222',
    },

    // Order rows
    orderRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
        gap: 12,
    },
    orderIconWrapper: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: '#eef2fb',
        alignItems: 'center',
        justifyContent: 'center',
    },
    orderIcon: { fontSize: 18 },
    orderInfo: { flex: 1 },
    orderProduct: {
        fontSize: 15,
        fontWeight: '600',
        color: '#222',
    },
    orderDate: {
        fontSize: 12,
        color: '#999',
        marginTop: 2,
    },
    orderRight: { alignItems: 'flex-end' },
    orderId: {
        fontSize: 12,
        color: '#aaa',
        marginBottom: 2,
    },
    orderPrice: {
        fontSize: 15,
        fontWeight: '700',
        color: '#4a6fa5',
    },
});