import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const OzzyScreen: React.FC = () => {
    return (
        <ScrollView style={styles.container} bounces={false}>
            <Image
                source={require('../../assets/ozzy/ozzy.jpg')}
                style={styles.image}
            />
            <View style={styles.content}>
                <Text style={styles.title}>The Prince of Darkness</Text>
                <View style={styles.divider} />

                <Text style={styles.bio}>
                    Оззі Осборн — британський рок-музикант, чий голос став фундаментом для хеві-металу.
                    Від божевільних виступів з Black Sabbath до успішної сольної кар'єри, він залишається
                    іконою темної сцени.
                </Text>

                <View style={styles.factCard}>
                    <Text style={styles.factTitle}>Легендарний статус</Text>
                    <Text style={styles.factText}>
                        Його альбом "Blizzard of Ozz" став 5-кратно платиновим, а сам Оззі введений
                        у Залу слави рок-н-ролу.
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'black' },
    image: { width: width, height: width, resizeMode: 'cover' },
    content: { padding: 25, marginTop: -20, backgroundColor: 'black', borderTopLeftRadius: 25, borderTopRightRadius: 25 },
    title: { fontSize: 28, fontWeight: 'bold', color: '#ac04ff', marginBottom: 10 },
    divider: { height: 2, width: 50, backgroundColor: '#ac04ff', marginBottom: 20 },
    bio: { color: 'white', fontSize: 16, lineHeight: 26, opacity: 0.9 },
    factCard: { backgroundColor: '#1a1a1a', padding: 20, borderRadius: 15, marginTop: 30, borderWidth: 1, borderColor: '#333' },
    factTitle: { color: '#ac04ff', fontWeight: 'bold', fontSize: 18, marginBottom: 8 },
    factText: { color: '#ccc', lineHeight: 20 }
});

export default OzzyScreen;