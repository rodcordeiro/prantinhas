import { useState, useLayoutEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Response<T> = [T, (value: T) => void];

function usePersistedState<T>(key: string, initialState: T): Response<T> {
  const [state, setState] = useState<T>(initialState);

  useLayoutEffect(() => {
    const getTheme = async () => {
      const t = await AsyncStorage.getItem(key);
      setState(t ? JSON.parse(String(t)) : initialState);
      AsyncStorage.setItem(key, JSON.stringify(state));
    };
    getTheme();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const updateState = useCallback(
    (value: T) => {
      setState(value);
      AsyncStorage.setItem(key, JSON.stringify(value));
    },
    [key],
  );
  return [state, updateState];
}

export default usePersistedState;
