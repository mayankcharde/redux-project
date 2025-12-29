import { configureStore } from "@reduxjs/toolkit";
//  YAHA HUMNE SARE SLICES STORE ME SAVE KR DIYA YA JAMA KR DIYA 
import searchReducer from "./features/searchSlice";
import collectionReducer from "./features/collectionSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    collection: collectionReducer,
  },
});
