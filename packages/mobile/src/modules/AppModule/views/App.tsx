import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';

import {store} from '@wbt/core/dist/modules/AppModule/store/Store';

import {FPUView} from '../../CalculatorModule/views/FPUView';

const App = () => {
  return (
    <SafeAreaView>
      <Provider store={store}>
        <FPUView />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
