export const CDNPricingArray: {
	name: string;
	description?: string;
	min: number;
	max: number;
	afterUnit?: string;
	beforeUnit?: string;
	default?: number;
	rate?: { "standard-network"?: number; "enterprise-network"?: number };
}[] = [
	{
		name: "CDN Bandwidth (TB)",
		min: 0,
		max: 1000,
		// default: 0,
		afterUnit: "TB",
		rate: {
			"standard-network": 2.5,
			"enterprise-network": 15,
		},
	},
	{
		name: "Stream Names / Channels",
		min: 0,
		max: 100,
		rate: {
			"standard-network": 2,
			"enterprise-network": 2,
		},
		// rate: 2.0,
	},
	{
		name: "Multistreaming Platforms",
		min: 0,
		max: 100,
		beforeUnit: "$",
		rate: {
			"standard-network": 1,
			"enterprise-network": 2,
		},
		// rate: 1.0,
	},
	{
		name: "Push/Pull Zones",
		min: 0,
		max: 100,
		beforeUnit: "$",
	},
	{
		name: "Cloud Storage (GB)",
		min: 0,
		max: 10000,
		afterUnit: "GB",
		rate: {
			"standard-network": 0.02,
			"enterprise-network": 0.05,
		},

		// rate: 0.05,
	},
	{
		name: "Parallel File Encoders",
		min: 0,
		max: 100,
		rate: {
			"standard-network": 0.05,
			"enterprise-network": 0.05,
		},
		// rate: 0.05,
	},
	{
		name: "Video Player ",
		description: "(10 Million Hits Free)",
		min: 0,
		max: 100,
		afterUnit: "M",
		rate: {
			"standard-network": 5,
			"enterprise-network": 10,
		},
		// rate: 5.0,
	},
	{
		name: "Video Encoding",
		description: "(Optional SLAB - 1k for $10/m )",
		min: 0,
		max: 10000,
		afterUnit: "mins",
		rate: {
			"standard-network": 0.01,
			"enterprise-network": 0.02,
		},
		// rate: 10,
	},
	{
		name: "Live Recording ",
		description: "(Optional SLAB - 50k for $10/m )",
		min: 0,
		max: 1000000,
		afterUnit: "mins",
		rate: {
			"standard-network": 0.01,
			"enterprise-network": 0.02,
		},
		// rate: 10,
	},
	{
		name: "SimpleDNS Domains",
		description: "(1 Free)",
		min: 0,
		max: 100,
		beforeUnit: "$",
		rate: {
			"standard-network": 1,
			"enterprise-network": 2.5,
		},
		// rate: 1,
	},
	{
		name: "SimpleDNS Records  ",
		description: "(1K Free)",
		min: 0,
		max: 1000,
		afterUnit: "K",
		rate: {
			"standard-network": 1,
			"enterprise-network": 2,
		},
		// rate: 2.5,
	},
	{
		name: "Traffic Director Domain",
		min: 0,
		max: 100,
		rate: {
			"standard-network": 1,
			"enterprise-network": 2.5,
		},
		// rate: 2.0,
	},
	{
		name: "Traffic Director Records",
		description: "(1K Free)",
		min: 0,
		max: 1000,
		afterUnit: "K",
		rate: {
			"standard-network": 1,
			"enterprise-network": 2,
		},
		// rate: 2.5,
	},
	{
		name: "Traffic Director Queries ",
		description: "(1M Free)",
		min: 0,
		max: 100,
		afterUnit: "M",
		rate: {
			"standard-network": 1,
			"enterprise-network": 2,
		},
		// rate: 1,
	},
	{
		name: "Traffic Director Health Check",
		min: 0,
		max: 100,
		rate: {
			"standard-network": 1,
			"enterprise-network": 2,
		},
		// rate: 1,
	},
];
