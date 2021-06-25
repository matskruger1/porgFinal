import { auto } from 'async';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    layout: {
        flex: 3,
        backgroundColor:"white"
    }
})

const card = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        padding: 15,
        backgroundColor:"white"
    },
    item: {
        flex: 1,
        fontSize: 10,
        backgroundColor:"white"

    },
    card: {
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "black",
        margin: 5,
        padding: 5,
        borderStyle:"solid",
      
    },
    image: {
        width: 80, 
        height: 80,
        margin: "auto",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
        borderRadius: 5,
    },
    boton: {
        marginLeft: 150,
        marginTop: 20,
        width: 80,
        backgroundColor: "#FFE4DB",
        borderRadius: 8,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",

        
    },
    screenBotones :{
        backgroundColor:"white"
        
    },

    title:{
        alignItems:"center",
        fontSize:20,
        justifyContent:"center",
        marginLeft:150,
        borderColor:"black",
        borderWidth: 1,
        borderRadius: 10,
        width: 100,

       
    },
    burguerBotton:{
        width:60,
        height:60,
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center",


    },

    burguerText:{
        fontSize:30,
        color:"white"
    },
    burguerContainer:{
        position:"absolute",
        left:5,
        top:10,

    }
})

const header = StyleSheet.create({
    contentStyle: {
        justifyContent: "center",
        alignItems: "center",
        fontSize: 50, 
        padding: 30,
        
       

        
    },
})

const footer = StyleSheet.create({
    contentStyle: {
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center", 
        fontSize: 35, 
        padding: 30,
    },







})

export { styles, header, footer, card }