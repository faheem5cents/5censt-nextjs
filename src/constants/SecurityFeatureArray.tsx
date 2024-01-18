import {
	API,
	AUTO,
	DDOS,
	Layer7,
	OWASP,
	RateControl,
	WAF,
} from "@/assets/SecurityFeature/index";
import { title } from "process";

export const SecurityFeatureArray = [
	{
		icon: DDOS,
		title: "DDOS Migration",
		description:
			"Our multi-layered cloud service inspects and deflects attacks to keep your system safe",
		buttonType: {
			text: "Learn More",
			link: "/security-feature",
		},
	},
	{
		icon: AUTO,
		title: "Auto WAF Rule Update",
		description:
			"With automated updates by Akamai's threat researchers, stay ahead of the game.",
		buttonType: {
			text: "Learn More",
			link: "/security-feature",
		},
	},
	{
		icon: Layer7,
		title: "Layer 7 Behavioral DDoS",
		description:
			"Our multi-layered cloud service inspects and deflects attacks to keep your system safe.",
		buttonType: {
			text: "Learn More",
			link: "/security-feature",
		},
	},
	{
		icon: WAF,
		title: "WAF Accuracy with Pattern Matching",
		description:
			"Enjoy low false-positive and false-negative rates with our anomaly scoring.",
		buttonType: {
			text: "Learn More",
			link: "/security-feature",
		},
	},
	{
		icon: RateControl,
		title: "Rate Controls",
		description:
			"Our monitoring and controlling system ensures smooth operations by avoiding clogged systems.",
		buttonType: {
			text: "Learn More",
			link: "/security-feature",
		},
	},
	{
		icon: OWASP,
		title: "OWASP Top 10",
		description:
			"Stay ahead of the most critical security risks to web applications.",
		buttonType: {
			text: "Learn More",
			link: "/security-feature",
		},
	},
	{
		icon: API,
		title: "API Protection",
		description:
			"Strengthen your API security with trusted identities, encryption, and authentication",
		buttonType: {
			text: "Learn More",
			link: "/security-feature",
		},
	},
];
