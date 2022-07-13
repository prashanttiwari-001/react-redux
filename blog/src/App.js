import logo from './logo.svg';
import './App.css';
import HooksCakeConatiner from './HooksCakeContainer';

import { Provider } from 'react-redux'
import store from './redux/store';
import CakeContainer from './CakeContainer';
import IceCreamContainer from './IceCreamContainer';
import NewCakeContainer from './NewCakeContainer';
import ItemConatainer from './ItemConatainer';
import UserConatiner from './UserConatiner';
function App() {
  return (
    <Provider store ={store}>
    <div className="App">
      <UserConatiner/>
      {/* <HooksCakeConatiner/> */}
     {/* <ItemConatainer cake/>
     <ItemConatainer/>
      <CakeContainer/>
      <IceCreamContainer/>
      <NewCakeContainer/> */}
    </div>
    </Provider>
  );
}

export default App;
