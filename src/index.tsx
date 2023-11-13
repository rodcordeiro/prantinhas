import { StatusBar } from 'expo-status-bar';
import { CustomTheme } from './hooks/theme';
import { Routes } from './navigation';

export default function Application() {
  return (
    <CustomTheme>
      <StatusBar style="auto" />
      <Routes />
    </CustomTheme>
  );
}
