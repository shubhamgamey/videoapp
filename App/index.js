import 'react-native-gesture-handler';

import {QueryClient, QueryClientProvider} from 'react-query';
import React, {useEffect, useState} from 'react';

import {AppContextProvider} from './Context';
import CommonStyle from './Theme/CommonStyle';
import NetInfo from '@react-native-community/netinfo';
import {NoConnection} from './Component';
import Routes from './Routes';
import {View} from 'react-native';

const queryClient = new QueryClient();

const App = props => {
  const [isConnected, setIsConnected] = useState(true);
  let netInfoSubscription = null;

  useEffect(() => {
    manageConnection();
    return () => {
      if (netInfoSubscription) {
        netInfoSubscription();
      }
    };
  }, []);

  const manageConnection = () => {
    retryConnection();
    netInfoSubscription = NetInfo.addEventListener(handleConnectivityChange);
  };

  // Managed internet connection
  const handleConnectivityChange = info => {
    if (info.type === 'none' || !info.isConnected) {
      setIsConnected(false);
    } else {
      setIsConnected(true);
    }
  };

  // Check network connection
  const retryConnection = () => {
    NetInfo.fetch().then(handleConnectivityChange);
  };

  return (
    <AppContextProvider>
      <QueryClientProvider client={queryClient}>
        <View style={CommonStyle.flexContainer}>
          <Routes />
          {(!isConnected && (
            <NoConnection retryConnection={retryConnection} />
          )) ||
            null}
        </View>
      </QueryClientProvider>
    </AppContextProvider>
  );
};

export default App;
