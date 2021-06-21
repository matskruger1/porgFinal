import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    layout: {
        flex: 3
    }
})

const card = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    item: {
        flex: 1,
        fontSize: 10,
    },
    card: {
        backgroundColor: "lightgray",
        borderWidth: 1,
        borderRadius: 20,
        margin: 5,
        width: 250,
        height: 250,
        padding: 5
    },
    image: {
        width: 50, 
        height: 50,
    }
})

const header = StyleSheet.create({
    contentStyle: {
        backgroundColor: "lightgray",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 35, 
        padding: 30,
    },
})

const footer = StyleSheet.create({
    contentStyle: {
        backgroundColor: "lightgray",
        justifyContent: "center",
        alignItems: "center", 
        fontSize: 35, 
        padding: 30,
    },
})

export { styles, header, footer, card }