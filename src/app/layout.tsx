"use client";
import Footer from "@/components/desktop/Footer/Footer";
import "./globals.css";
import HeaderNew from "@/components/desktop/Header/HeaderNew";
import { Roboto } from "next/font/google";
// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const roboto = Roboto({
	weight: ["400", "700"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "swap",
});

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en">
			<body className={`${roboto.className} bg-[--background-color]`}>
				<HeaderNew />
				<NextUIProvider>{children}</NextUIProvider>
				<Footer />
			</body>
		</html>
	);
};

export default RootLayout;
