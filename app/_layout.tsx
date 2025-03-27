import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native";
import AppNavigator from '@/components/menu/Navigation';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
    if (loaded) SplashScreen.hideAsync();
  }, [error, loaded]);

  return loaded ? <RootCustomLayoutNav /> : null;
}

const RootCustomLayoutNav = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationIndependentTree>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </NavigationIndependentTree>
    </GestureHandlerRootView>
  )
}