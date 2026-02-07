import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function AlbumDetails({ route, navigation }: any) {
    // Отримуємо дані, які передали при кліку
    const { item } = route.params;

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backText}>← Назад</Text>
            </TouchableOpacity>

            <Image source={item.image} style={styles.cover} />

            <View style={styles.info}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.artist}>{item.artist}</Text>
                <Text style={styles.price}>{item.price}</Text>

                <Text style={styles.description}>
                    Це класичне видання на вінілі. Справжній маст-хев для поціновувачів олдскульного металу.
                    Обмежений тираж.
                </Text>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Додати в кошик</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'black' },
    backButton: { paddingTop: 50, paddingLeft: 20, marginBottom: 10 },
    backText: { color: '#ac04ff', fontSize: 18, fontWeight: 'bold' },
    cover: { width: '100%', height: 400, resizeMode: 'cover' },
    info: { padding: 20 },
    title: { fontSize: 28, fontWeight: 'bold', color: 'white' },
    artist: { fontSize: 20, color: '#aaa', marginVertical: 5 },
    price: { fontSize: 24, fontWeight: 'bold', color: '#ac04ff', marginVertical: 10 },
    description: { color: '#eee', lineHeight: 22, marginTop: 10 },
    button: { backgroundColor: '#ac04ff', padding: 18, borderRadius: 12, marginTop: 30, alignItems: 'center' },
    buttonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
});