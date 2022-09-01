import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import Details from "../../screens/Details"
import Home from "../../screens/Home"
import { AppStackParamList } from "./interface"

const Stack = createNativeStackNavigator<AppStackParamList>()

const AppNavigator = () => {
    return (
        <Stack.Navigator screenOptions={
            {
                headerStyle: {
                    backgroundColor: 'blue',
                },
                headerTintColor: 'white',
            }
        }>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details}
                options={
                    {
                        headerStyle: {
                            backgroundColor: 'red',
                        },
                        headerTintColor: 'white',
                        title: "Detalhes da Home",
                    }
                } />
        </Stack.Navigator>
    )
}

export default AppNavigator