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
        alignItems: 'center',
        padding: 15,
    },
    item: {
        flex: 1,
        fontSize: 10,

    },
    card: {
        backgroundColor: "#F5F5F5",
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "#F5F5F5",
        margin: 5,
        width: 250,
        height: 250,
        padding: 5
    },
    image: {

        width: 80, 
        height: 80,
        margin: "auto",
        marginBottom: 10,
        borderRadius: 5,

        
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