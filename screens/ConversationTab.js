import React from 'react'
import{
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
} from 'react-native';
function ConversationTab() {
  
  const convcards=[
    {require:'../Loginimage.jpg',name:'Surya S',relation:'Friend',Date:'[19-01-23]consume tablets on time'},
    {require:'../Loginimage.jpg',name:'Surya S',relation:'Friend',Date:'[19-01-23]consume tablets on time'},
    {require:'../Loginimage.jpg',name:'Surya S',relation:'Friend',Date:'[19-01-23]consume tablets on time'},
    {require:'../Loginimage.jpg',name:'Surya S',relation:'Friend',Date:'[19-01-23]consume tablets on time'},
    {require:'../Loginimage.jpg',name:'Surya S',relation:'Friend',Date:'[19-01-23]consume tablets on time'},
  ]



  return (
  <ScrollView>
    <View style={styles.usercontainer}>
      <Text style={styles.welcometext}>Conversation Tab</Text>
      {
        convcards.map(cards=>
        <View style={styles.carddesign}>
          <Image
          // source={cards.require}
          style={styles.cardimage}
          resizeMode='stretch'
          />
          <View 
          style={styles.carddetails}
          >
           <Text>Name:{cards.name}</Text>
           <Text>Relation:{cards.relation}</Text>
           <Text>Recordings:{cards.Date}</Text>
          </View>
        </View>
      )
    }
    </View>
    </ScrollView>
  );
}

export default ConversationTab;

const styles=StyleSheet.create({
    usercontainer:{
        flex:1,
        backgroundColor:'#86c4b5',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:30,
    },
    welcometext:{
        textAlign:'center',
        fontSize:25,
        color:'black',
    },
   
    carddesign:{
      display:'flex',
      width:'85%',
      borderRadius:5,
      backgroundColor:'grey',
      padding:10,
      margin:10,
    },
    cardimage:{
       width:150,
       height:150,
    },
})