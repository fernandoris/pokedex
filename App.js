import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
    
  );
}