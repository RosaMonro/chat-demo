import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { FirebaseAppProvider } from 'reactfire';

const config = {
	apiKey: "AIzaSyCdkzCyOsr8g4Bg7QMy5r8VzKrG9amxHCg",
	authDomain: "chat-51232.firebaseapp.com",
	projectId: "chat-51232",
	storageBucket: "chat-51232.appspot.com",
	messagingSenderId: "387415261017",
	appId: "1:387415261017:web:aa05ab251cb4ec1c2b9648"
};

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
		<FirebaseAppProvider firebaseConfig={config}>
			<App />
		</FirebaseAppProvider>
		</BrowserRouter>
	</React.StrictMode>,
);
