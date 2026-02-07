import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';

const DATA = [
    { id: '1', title: 'Bathory', artist: 'Bathory', price: '$35', image: require('../../assets/popularnow/1.png') },
    { id: '2', title: 'dont break the oath', artist: 'Mercyful fate', price: '$30', image: require('../../assets/popularnow/2.png') },
    { id: '3', title: 'peace sells but whos buying', artist: 'Megadeth', price: '$45', image: require('../../assets/popularnow/3.png') },
    { id: '4', title: 'Blizzard of Ozz', artist: 'Ozzy Osbourne', price: '$45', image: require('../../assets/popularnow/4.png') },
];

export default function HomeScreen({ navigation }: any) {
    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.logo}>Vintage metal Shop</Text>
                <Text style={styles.subtitle}>Знайди свою улюблену метал платівку</Text>
            </View>

            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Пошук артиста або альбому..."
                    placeholderTextColor='#515151'
                />
            </View>

            {/* Hero Section / Promotion */}
            <View style={styles.hero}>
                <Image
                    source={require('../../assets/promo/bathory.png')}
                    style={styles.heroImage}
                />
                <View style={styles.heroOverlay}>
                    <Text style={styles.heroText}>Знижка -20% на весь дез метал</Text>
                </View>
            </View>

            {/* Section Title */}
            <Text style={styles.sectionTitle}>Популярне зараз</Text>

            {/* Horizontal List */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                {DATA.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        style={styles.card}
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate('Details', { item })} // Передаємо об'єкт альбому
                    >
                        <Image source={item.image} style={styles.cardImage} />
                        <Text style={styles.cardTitle} numberOfLines={1}>{item.title}</Text>
                        <Text style={styles.cardArtist}>{item.artist}</Text>
                        <Text style={styles.cardPrice}>{item.price}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'black', paddingTop: 60 },
    header: { paddingHorizontal: 20, marginBottom: 20 },
    logo: { fontSize: 32, fontWeight: 'bold', color: '#ffffff' },
    subtitle: { fontSize: 16, color: '#ffffff' },
    searchContainer: { paddingHorizontal: 20, marginBottom: 20 },
    searchInput: {
        backgroundColor: '#1e1e1e',
        padding: 15,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#131313',
        fontSize: 16,
        height: 60,
        color: 'white',
    },
    hero: { marginHorizontal: 20, height: 180, borderRadius: 15, overflow: 'hidden', marginBottom: 25 },
    heroImage: { width: '100%', height: '100%' },
    heroOverlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(55,55,55,0.4)',
        padding: 10
    },
    heroText: { color: '#d5d5d5', fontSize: 18, fontWeight: '600' },
    sectionTitle: { fontSize: 22, fontWeight: 'bold', marginHorizontal: 20, marginBottom: 15, color: '#ffffff' },
    horizontalScroll: { paddingLeft: 20 },
    card: { width: 150, marginRight: 15, backgroundColor: '#ffffff', padding: 10, borderRadius: 12, marginBottom: 20 },
    cardImage: { width: 130, height: 130, borderRadius: 8, marginBottom: 10 },
    cardTitle: { fontSize: 16, fontWeight: 'bold' },
    cardArtist: { fontSize: 14, color: '#000000', marginVertical: 2 },
    cardPrice: { fontSize: 16, fontWeight: '700', color: '#ac04ff' },
});