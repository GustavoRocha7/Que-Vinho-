import { Box, NativeBaseProvider } from 'native-base';
import { theme } from './src/styles/theme'
import { Home } from './src/Page/Home';


import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './src/routes/app.routes'


const navigationTheme = DefaultTheme
navigationTheme.colors.background = theme.colors.primary[100]

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Box flex='1' safeAreaTop bg={theme.colors.primary[100]}>
        <NavigationContainer theme={navigationTheme}>
          <AppRoutes />
        </NavigationContainer>
      </Box>
    </NativeBaseProvider>
  );
}


