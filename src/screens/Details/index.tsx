import { useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { DetailsRouteProp } from '../../navigation/app/interface'

const Details = () => {
    const navigation = useNavigation()
    const route = useRoute<DetailsRouteProp>()
    
    const goBack = () => {
        navigation.goBack()
    }

    return (
        <View>
            <Text>Esta é a tela de detalhes!</Text>
            <Text>{route.params.message}</Text>
            <Button title='Voltar' onPress={goBack} />
        </View>
    )
}

export default Details