// import React from "react";
// import { NavigationContainer } from '@react-navigation/native';
// //import { HomeScreen } from "./screens/HomeScreen";
// import { RegisterScreen } from "./screens/RegisterScreen";
// import { TitheOffertsScreen } from "./screens/TitheOffertsScreen";
// import { NoticesEventsScreen } from "./screens/NoticesEventsScreen";



// export default function App() {
  //   return (
    //     <NavigationContainer>
    //       <Stack.Navigator initialRouteName="HomeScreen">
    //         <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
    //         <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
    //         <Stack.Screen name="TitheOffertsScreen" component={TitheOffertsScreen} options={{ headerShown: false }} />
    //         <Stack.Screen name="NoticesEventsScreen" component={NoticesEventsScreen} options={{ headerShown: false }} />
    //       </Stack.Navigator>
    //     </NavigationContainer>
    //   );
    // }
    
    import React from 'react';
    import { Routes } from './src/routes';


export default function App() {


  return (
      <Routes />
  );
}