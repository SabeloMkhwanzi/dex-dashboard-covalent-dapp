import { configureStore } from '@reduxjs/toolkit'
import { ecosystemApi } from '../services/ecosystemCovalentApi';
import { healthApi } from '../services/healthCovalentApi';
import { poolsApi } from '../services/poolsCovalentApi';
import { tokensApi } from '../services/tokensCovalentApi';
 
export default configureStore({
    reducer: {
        [ecosystemApi.reducerPath]: ecosystemApi.reducer,
        [healthApi.reducerPath]: healthApi.reducer,
        [poolsApi.reducerPath]: poolsApi.reducer,
        [tokensApi.reducerPath]: tokensApi.reducer,
    },
});