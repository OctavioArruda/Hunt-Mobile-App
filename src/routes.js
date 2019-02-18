import { createStackNavigator } from 'react-navigation'; // Dá acesso a uma navegação de stack
// Navegação feita geralmente por cliques em botões

import Main from './pages/main';
import Product from './pages/product';

export default createStackNavigator({ 
    Main,
    Product
 }, {
     navigationOptions: {
         headerStyle: {
             backgroundColor: '#DA552F'
         },
         headerTintColor: '#FFF'
     },
 });

