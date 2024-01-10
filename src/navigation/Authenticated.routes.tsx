import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';

import { DrawerIcon } from '@/components/layout/Drawer';
import { HomeScreen } from '@/features';
import { useTheme } from '@/hooks/theme';

const Drawer = createDrawerNavigator<RootStackParamList>();

export const AuthenticatedRoutes = () => {
  const { theme } = useTheme();
  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({ navigation }) => ({
        drawerStatusBarAnimation: 'slide',
        drawerActiveBackgroundColor: theme.colors.secondary,
        headerTransparent: true,
        headerLeft: (_props) => (
          <DrawerIcon onPress={navigation.toggleDrawer} />
        ),
        drawerType: 'slide',
        swipeEnabled: true,
        swipeEdgeWidth: 50,
      })}
    >
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: '',
          drawerIcon: ({ size, color }) => (
            <Feather name="home" color={color} size={size * 0.8} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
