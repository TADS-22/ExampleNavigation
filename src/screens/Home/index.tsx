import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { AppNavigationProps } from '../../navigation/app/interface'

const Home = () => {
    const navigation = useNavigation<AppNavigationProps>()

    const goToDetails = () => {
        navigation.navigate("Details", { message: 'Mensagem da Home!' })
    }

    return (
        <View>
            <Text>Esta é a tela inicial!</Text>
            <Button title='Ir para Details' onPress={goToDetails} />
        </View>
    )
}

export default Home