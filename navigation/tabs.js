import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddPeopleTab from '../screens/AddPeopleTab';
import CameraTab from '../screens/CameraTab';
import ConversationTab from '../screens/ConversationTab';
import UserPage from '../screens/UserPage';
import UserProfileTab from '../screens/UserProfileTab';
import { StyleSheet,Text,View,Image,TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
    <TouchableOpacity
    style={{
        top:-30,
        justifyContent:'center',
        alignItems:'center',
        ...styles.shadow
    }}
    onPress={onPress}
    >
        <View style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            //backgroundColor:'#d9d9d9',
            backgroundColor:'#ffffff',
            opacity:9,
        }}>
            {children}
        </View>
    </TouchableOpacity>
);

const Tabs =() => {
    return(
        <Tab.Navigator screenOptions={{tabBarShowLabel:false, 
            tabBarStyle:{position:"absolute", 
            bottom:15,
            left:5,
            right:5,
            elevation:0,
            backgroundColor:'#041f60',
            borderRadius:15,
            height:90,
             },
            //tabBarIconStyle:{display:"none"},
            headerShown:false,
            ...styles.shadow,
        }}
        >
            <Tab.Screen name="Home" component={UserPage} options={{
                tabBarIcon:({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top:7}}>
                        <Image 
                            source={require('./home.png')}  
                            resizeMode='contain'
                            style ={{
                                width:25,
                                height:25,
                                tintColor:focused ? '#ffffff' : '#d9d9d9',
                            }}
                        />
                        <Text style={{color:focused ? '#ffffff' : '#d9d9d9', fontSize: 11}}>Home</Text>
                    </View>
                ),
            }} />
            <Tab.Screen name="Conversation" component={ConversationTab} options={{
                tabBarIcon:({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top:7}}>
                        <Image 
                            source={require('./conversation.png')}  
                            resizeMode='contain'
                            style ={{
                                width:25,
                                height:25,
                                tintColor:focused ? '#ffffff' : '#d9d9d9',
                            }}
                        />
                        <Text style={{color:focused ? '#ffffff' : '#d9d9d9', fontSize: 11}}>Conversation</Text>
                    </View>
                ),
            }}/>

            <Tab.Screen name="Camera" component={CameraTab} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={require('./camera.png')}
                            resizeMode="contain"
                            style={{
                                width:30,
                                height:30,
                                tintColor:'#041f60'
                            }}
                            />
                    ),
                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props} />
                    )
                }}
            />

            <Tab.Screen name="Add People" component={AddPeopleTab} options={{
                tabBarIcon:({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top:7}}>
                        <Image 
                            source={require('./AddUser.png')}  
                            resizeMode='contain'
                            style ={{
                                width:25,
                                height:25,
                                tintColor:focused ? '#ffffff' : '#d9d9d9',
                            }}
                        />
                        <Text style={{color:focused ? '#ffffff' : '#d9d9d9', fontSize: 11}}>Add People</Text>
                    </View>
                ),
            }}/>
            <Tab.Screen name="User Profile" component={UserProfileTab} options={{
                tabBarIcon:({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top:7}}>
                        <Image 
                            source={require('./user.png')}  
                            resizeMode='contain'
                            style ={{
                                width:25,
                                height:25,
                                tintColor:focused ? '#ffffff' : '#d9d9d9',
                            }}
                        />
                        <Text style={{color:focused ? '#ffffff' : '#d9d9d9', fontSize: 11}}>Account</Text>
                    </View>
                ),
            }}/>
        </Tab.Navigator>

    );
}

const styles = StyleSheet.create({
    shadow:{
        shadowOffset:{
            width:0,
            height:10,
        },
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5
    }
});

export default Tabs;