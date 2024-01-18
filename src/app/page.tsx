import { Metadata } from "next";
import HomePage from "@/pages/HomePage";

export const metadata: Metadata = {
	title: "Home Page",
	description: "Starting Page",
};

const Home = () => {
	return (
		<div>
			<HomePage />
		</div>
	);
};

export default Home;
