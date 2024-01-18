import CloudStorage from "@/assets/FeatureBox/CloudStorage.svg";
import ContentDeliveryNetwork from "@/assets/FeatureBox/ContentDeliveryNetwork.svg";
import DNS from "@/assets/FeatureBox/DNS.svg";
import Encoding from "@/assets/FeatureBox/Encoding.svg";
import ImageOptimizer from "@/assets/FeatureBox/ImageOptimizer.svg";
import MultiStreaming from "@/assets/FeatureBox/MultiStreaming.svg";
import YoutubeSync from "@/assets/FeatureBox/YoutubeSync.svg";
import LiveStreaming from "@/assets/Icons/LiveStreaming.svg";
import LiveTranscoding from "@/assets/Icons/LiveTranscoding.svg";
import DeliveryAcceleration from "@/assets/Icons/DeliveryAcceleration.svg";
import DeliveryAccelerationPlus from "@/assets/Icons/DeliveryAccelerationPlus.svg";
import SimpleDNS from "@/assets/Icons/SimpleDNS.svg";
import TrafficDirector from "@/assets/Icons/TrafficDirector.svg";
import VideoEncoding from "@/assets/Icons/VideoEncoding.svg";
import VideoStreaming from "@/assets/Icons/VideoStreaming.svg";

import DropRightArrow from "@/assets/GlobalImages/DropRightArrow.svg";
import { link } from "fs";

export const FeatureBoxArray = [
	{
		img: ContentDeliveryNetwork,
		heading: "Content Delivery Network",
		subheading: "Secured, adaptive, and optimized content delivery experience",
		description:
			"Redefined content delivery network with a multitude of products built to deliver your content across the globe.",
		subfeatures: [
			{
				icon: LiveStreaming,
				name: "Live Streaming",
				description:
					"Stream your live event or schedule files to play as a live stream on our platform with ease and so much more.",
			},
			{
				icon: VideoStreaming,
				name: "Video Streaming",
				description:
					"Stream your live event or schedule files to play as a live stream on our platform with ease and so much more.",
			},
			{
				icon: DeliveryAcceleration,
				name: "Delivery Acceleration",
				description:
					"Supercharge your website loading speed by accelerating static and dynamic assets and let your audience experience the fastest browsing.",
			},
			{
				icon: DeliveryAccelerationPlus,
				name: "Delivery AccelerationPlus",
				description:
					"Content delivery with maximum security, adaptive performance, and real-time optimization for every user across different device types and network conditions, however, they choose to connect with little or NO CODE change.",
			},
		],
		buttonType: {
			text: "Learn More",
			link: "/learn",
		},
	},
	{
		img: Encoding,
		heading: "Encoding",
		subheading:
			"Take complete control of your video optimization and end-user experience.",
		description:
			"5centsCDN enhances and provides complete control of your video content to deliver with the correct bit-rates, resolutions, and formats based on the user’s device.",
		subfeatures: [
			{
				icon: LiveTranscoding,
				name: "Live Transcoding",
				description:
					"5centsCDN Live Transcoding allows you to deliver a live stream in multiple bitrates to match the viewer’s connection speed for high-quality content.",
			},
			{
				icon: VideoEncoding,
				name: "Video Encoding",
				description:
					"Our encoding service allows you to convert your media files to MP4 format in high resolution to broadcast across multiple platforms and devices.",
			},
		],
		buttonType: {
			text: "Learn More",
			link: "/learn",
		},
	},
	{
		img: MultiStreaming,
		heading: "Multistreaming",
		subheading:
			"Grow your audience by multistreaming live event on multiple platforms",
		description:
			"Multistream your live event on multiple social media platforms or custom RTMP servers with few clicks.",
		buttonType: {
			text: "Learn More",
			link: "/learn",
		},
	},
	{
		img: CloudStorage,
		heading: "Cloud Storage",
		subheading:
			"3x global replicated cloud storage with guaranteed data security",
		description:
			"Upload your files to 5centsCDN cloud storage and access via HTTPS using the OpenStack Swift API, the S3 API, File Manager or Horizon Dashboard. You can build a custom application by integrating with our API that lets you store data on our highly scalable cloud storage and deliver content with CDN.",
		buttonType: {
			text: "Learn More",
			link: "/learn",
		},
	},
	{
		img: DNS,
		heading: "DNS",
		subheading: "Fast and secure DNS hosting",
		description:
			"Enable yourself with complete control of your content delivery based on your business logic and ensure up to the mark service for your customers.",
		subfeatures: [
			{
				icon: SimpleDNS,
				name: "SimpleDNS",
				description:
					"5centsCDN DNS is the most cost-effective way to manage your domain names along with CDN. Enabling CDN is just one button away. Our Simple DNS service provides a 100% uptime Service Level Agreement (SLA).",
			},
			{
				icon: TrafficDirector,
				name: "Traffic Director",
				description:
					"Our intelligent traffic management service makes it easy to implement a multi-CDN infrastructure that puts you in control of performance and cost. You can simply start with a strategy that directs traffic to the preferred CDN based on the country, state, or ASN (autonomous system number) of your users.",
			},
		],
		buttonType: {
			text: "Learn More",
			link: "/learn",
		},
	},
	{
		img: ImageOptimizer,
		heading: "Image Optimizer",
		subheading: "The right format and size without compromising the quality",
		description:
			"Minimize latency and deliver high-quality, compressed images in the right format, dimension, size, and resolution to the right device hence saving your bandwidth.",
		buttonType: {
			text: "Learn More",
			link: "/learn",
		},
	},
	{
		img: YoutubeSync,
		heading: "Youtube Sync",
		subheading: "Foolproof data backup of your youtube channel",
		description:
			"No need to worry about your creative content being lost due to a youtube policy change. We understand that you spend hours and hours shooting and editing the content hence we offer to keep a full data backup for you!",
		buttonType: {
			text: "Coming Soon",
			link: "/",
		},
	},
];
