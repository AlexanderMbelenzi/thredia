import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/theme-utils";
import { ColorModeScript } from "@chakra-ui/color-mode";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { SocketContextProvider } from "./context/SocketContext.jsx";

const styles = {
	global: (props) => ({
		body: {
			color: mode("gray.900", "white")(props),
			bg: mode("white", "#000000")(props),
		},
	}),
};

const config = {
	initialColorMode: "dark",
	useSystemColorMode: true,
};

const colors = {
	gray: {
		light: "#F8F9FA",
		dark: "#15202B",
	},
};

const theme = extendTheme({ config, styles, colors });

ReactDOM.createRoot(document.getElementById("root")).render(
	// React.StrictMode renders every component twice (in the initial render), only in development.
	<React.StrictMode>
		<RecoilRoot>
			<BrowserRouter>
				<ChakraProvider theme={theme}>
					<ColorModeScript initialColorMode={theme.config.initialColorMode} />
					<SocketContextProvider>
						<App />
					</SocketContextProvider>
				</ChakraProvider>
			</BrowserRouter>
		</RecoilRoot>
	</React.StrictMode>
);
