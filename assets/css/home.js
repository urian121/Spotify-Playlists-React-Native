import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    card: {
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'flex-start',
    },
    image: {
        width: 64,
        height: 64,
        borderRadius: 4,
        marginRight: 12,
    },
    info: {
        flex: 1,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 2,
    },
    author: {
        color: '#555',
        fontSize: 14,
        marginBottom: 4,
    },
    description: {
        color: '#333',
        fontSize: 14,
    },
});
