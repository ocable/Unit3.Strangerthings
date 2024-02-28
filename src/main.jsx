import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import store from './store/store.js';
import router from "";



  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  );
