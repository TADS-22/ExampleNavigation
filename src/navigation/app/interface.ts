import { RouteProp } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { DetailsRouteParams } from "../../screens/Details/interface"

export type AppStackParamList = {
    Home: undefined,
    Details: DetailsRouteParams,
}

export type DetailsRouteProp = RouteProp<AppStackParamList, 'Details'>

export type AppNavigationProps = NativeStackNavigationProp<AppStackParamList>
