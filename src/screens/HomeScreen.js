import {View, Text, Image, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';

export default function HomeScreen({navigation}) {
    return (
        <ScrollView style={styles.container}>
            <Image 
                source={require('../../assets/logo.png')}
                style={styles.logo} 
            />

            <View style={styles.bannerContainer}>
                <Image
                    source={require('../../assets/banner.jpg')}
                    style={styles.banner}
                    resizeMode='cover'
                />
                <View style={styles.bannerOverlay}>
                    <Text style={styles.bannerText}>Bienvenido a PRIMETWIST</Text>
                </View>
            </View>

            <Text style={styles.title}>
                Productos Destacados
            </Text>

            <View style={styles.productsPreview}>
                <View style={styles.productCard}>
                    <Image
                        source={require('../../assets/cubo1.jpg')}
                        style={{width: '100%', height: '100%', borderRadius: 12}}
                        resizeMode="cover"
                    />
                    </View>

                    <View style={styles.productCard}>
                    <Image
                        source={require('../../assets/cubo2.jpg')}
                        style={{width: '100%', height: '100%', borderRadius: 12}}
                        resizeMode="cover"
                    />
                    </View>

            </View>

            <View style={styles.bannerContainer}>
                <Image
                    source={require('../../assets/banner2.jpg')}
                    style={styles.banner}
                    resizeMode='cover'
                />
            </View>

            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('ProductList')}>
                <Text style={styles.buttonText}>Ver catálogo</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Carrito')}
            >
                <Text style={styles.buttonText}>Ver carrito</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}      

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f4f7fb',
    },
    logo: {
        width: 120,
        height: 120,
        alignSelf: 'center',
        marginTop: 20,
        resizeMode: 'contain',
    },
    bannerContainer: {
        position: 'relative',
        width: '95%',
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 16,
        overflow: 'hidden',
        elevation: 6,
    },
    banner: {
        width: '100%',
        height: 180,
    },
    bannerOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.35)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bannerText: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
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
    productsPreview: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#e3edf7',
        padding: 15,
        borderRadius: 12,
        marginBottom: 20,
    },
    productCard: {
        width: '45%',
        height: 150,
        backgroundColor: '#fff',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
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