import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import { NoticesEventsScreen } from "../screens/NoticesEventsScreen";
import { RegisterScreen } from "../screens/RegisterScreen";
import { TitheOffertsScreen} from "../screens/TitheOffertsScreen";


const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Screen
        name="NoticesEventsScreen"
        component={NoticesEventsScreen}
        options={{ headerShown: false }}
      />
      <Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Screen
        name="TitheOffertsScreen"
        component={TitheOffertsScreen}
        options={{ headerShown: false }}
      />
    </Navigator>
  )
}