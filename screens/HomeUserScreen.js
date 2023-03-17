import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImportantConversationCards from './ImportantConversationCards'

export default function HomeUserScreen() {
  return (
    <View style={styles.homecontainer}>
        <ImportantConversationCards/>
    </View>
  )
}

const styles = StyleSheet.create({
    homecontainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})