import 'react-native-gesture-handler';
import React from 'react';
import * as Updates from 'expo-updates';
import * as SplashScreen from 'expo-splash-screen';
import * as Sentry from 'sentry-expo';

import Application from './src';
import { View } from 'react-native';

SplashScreen.preventAutoHideAsync();

function App() {
  const [appIsReady, setAppIsReady] = React.useState(false);
  React.useLayoutEffect(() => {
    async function updateApp() {
      try {
        if (process.env.NODE_ENV === 'development') {
          return;
        }

        const { isAvailable } = await Updates.checkForUpdateAsync();
        if (isAvailable) {
          await Updates.fetchUpdateAsync();
          await Updates.reloadAsync();
        }
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    updateApp();
  }, []);
  const onLayoutRootView = React.useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);
  if (!appIsReady) {
    return null;
  }
  return (
    <View onLayout={onLayoutRootView}>
      <Application />
    </View>
  );
}

export default Sentry.Native.wrap(App);
