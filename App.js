import React from 'react';
import { useKeepAwake } from 'expo-keep-awake';
import { Provider } from 'react-redux';
import store from './src/redux/store/index';
import Main from './src/components/Main';

function App() {
  useKeepAwake();

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
