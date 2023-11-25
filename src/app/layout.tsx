import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReduxProvider from "@/redux/Provider";
import "./globals.css";
import STRINGS from "@/utils/string";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: `${STRINGS.metadata.home.title}`,
	description: "",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<ReduxProvider>{children}</ReduxProvider>
			</body>
		</html>
	);
}
