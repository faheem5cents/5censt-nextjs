import {
	EnterpriseServers,
	ModularDeployment,
	NetworkScalability
} from "@/assets/RobustNetwork/index";

export const RobustNetworkHeading ={
	title: "Robust Network",
	description: "We have a robust network infrastructure that can handle any traffic volume.",
}

export const RobustNetworkArray = [
	{
		img: ModularDeployment,
		title: "Modular Deployment",
		description:
			"Efficiently handles your CDN traffic in a dedicated infrastruture hence a single point of failure has been eliminated.",
	},
	{
		img: NetworkScalability,
		title: "Network Scalability",
		description:
			"With our multi CDN infrastructure, we can handle any traffic volume not limited 2+ Tbps, give us a heads up!",
	},
	{
		img: EnterpriseServers,
		title: "Enterprise Servers",
		description:
			"Each edge server has at least 40 Gbps uplinks with private networking enabled for efficient content replication.",
	},
];
