import CentsCDN from "@/assets/GlobalImages/CentsCDN.svg";
import Caret from "@/assets/header-icons/caret.svg";
import DNSSub from "@/assets/header-icons/dns-sub.svg";
import down from "@/assets/header-icons/down.svg";
import EdgeSec from "@/assets/header-icons/edgesec-delivery.svg";
import MenuAutomatic from "@/assets/header-icons/menu-automatic.svg";
import MenuCDN from "@/assets/header-icons/menu-cdn.svg";
import MenuRouting from "@/assets/header-icons/menu-routing.svg";
import MenuStorage from "@/assets/header-icons/menu-storage.svg";
import MenuVideoService from "@/assets/header-icons/menu-videoService.svg";
import ProductsubEncoding from "@/assets/header-icons/product-sub-encoding.svg";
import ProductsubMonitoring from "@/assets/header-icons/product-sub-monitoring.svg";
import ProductsubOptimization from "@/assets/header-icons/product-sub-optimization.svg";
import ProductsubPlayer from "@/assets/header-icons/product-sub-player.svg";
import ProductsubRealtime from "@/assets/header-icons/product-sub-realtime.svg";
import ProductsubStorage from "@/assets/header-icons/product-sub-storage.svg";
import ProductsubStream from "@/assets/header-icons/product-sub-stream.svg";
import ProductsubDNS from "@/assets/header-icons/product-sub-dns.svg";
import RightArrows from "@/assets/header-icons/right-arrows.svg";
import Right from "@/assets/header-icons/right.svg";
import AngleRight from "@/assets/header-icons/AngleRight.svg";
import RightActive from "@/assets/header-icons/right-active.svg";
import SolutionsSubByIndustry from "@/assets/header-icons/solutions-sub-byIndustry.svg";
import SolutionsSubByNeed from "@/assets/header-icons/solutions-sub-byNeed.svg";
import SolutionsSubEcommerce from "@/assets/header-icons/solutions-sub-ecommerce.svg";
import SolutionsSubFinancial from "@/assets/header-icons/solutions-sub-financial.svg";
import SolutionsSubGaming from "@/assets/header-icons/solutions-sub-gaming.svg";
import SolutionsSubIT from "@/assets/header-icons/solutions-sub-it.svg";
import SolutionsSubMedia from "@/assets/header-icons/solutions-sub-media.svg";
import SolutionsSubSaas from "@/assets/header-icons/solutions-sub-saas.svg";
import SolutionsSubSecurity from "@/assets/header-icons/solutions-sub-security.svg";
import SolutionsSubStorage from "@/assets/header-icons/solutions-sub-storage.svg";
import SolutionsSubStreaming from "@/assets/header-icons/solutions-sub-video-streaming.svg";
import SolutionsSubAcceleration from "@/assets/header-icons/solutions-sub-webAcceleration.svg";
import VideoDelivery from "@/assets/header-icons/video-delivery.svg";
import Whatsapp from "@/assets/header-icons/whatsapp-icon.svg";
import MobileAssetOptimization from "@/assets/header-icons/mobileAssetOptimization.svg";
import MobileCDNForEcommerce from "@/assets/header-icons/mobileCDNForEcommerce.svg";
import MobileCDNForFinancial from "@/assets/header-icons/mobileCDNForFinancial.svg";
import MobileCDNForGaming from "@/assets/header-icons/mobileCDNForGaming.svg";
import MobileCDNForSaas from "@/assets/header-icons/mobileCDNForSaas.svg";
import MobileGameServer from "@/assets/header-icons/mobileGameServer.svg";
import MobileImageOptimization from "@/assets/header-icons/mobileImageOptimization.svg";
import MobileIPCamera from "@/assets/header-icons/mobileIPCamera.svg";
import MobileLiveStreaming from "@/assets/header-icons/mobileLiveStreaming-1.svg";
import MobileLiveStreamingEvents from "@/assets/header-icons/mobileLiveStreamingEvents.svg";
import MobileSatellite from "@/assets/header-icons/mobileSatellite.svg";
import MobileOTT from "@/assets/header-icons/mobileOTT.svg";
import MobileSoftware from "@/assets/header-icons/mobileSoftware.svg";
import MobileVideoHosting from "@/assets/header-icons/mobileVideoHosting.svg";
import MobileWebsiteAcceleration from "@/assets/header-icons/mobileWebsiteAcceleration.svg";
import MobileWordPressCDN from "@/assets/header-icons/mobileWordPressCDN.svg";
import HamburgerMenu from "@/assets/header-icons/HamburgerMenu.png";
import Cross from "@/assets/header-icons/Cross.svg";
import ByNeedAssetOptimization from "@/assets/header-icons/ByNeedAssetOptimization.svg";
import ByNeedBotProtection from "@/assets/header-icons/ByNeedBotProtection.svg";
import ByNeedDDos from "@/assets/header-icons/ByNeedDDos.svg";
import ByNeedGameServer from "@/assets/header-icons/ByNeedGameServer.svg";
import ByNeedImageOptimization from "@/assets/header-icons/ByNeedImageOptimization.svg";
import ByNeedIP from "@/assets/header-icons/ByNeedIP.svg";
import ByNeedLiveStreaming from "@/assets/header-icons/ByNeedLiveStreaming.svg";
import ByNeedLiveStreamingEvents from "@/assets/header-icons/ByNeedLiveStreamingEvents.svg";
import ByNeedOTT from "@/assets/header-icons/ByNeedOTT.svg";
import ByNeedSaas from "@/assets/header-icons/ByNeedSaas.svg";
import ByNeedSatellite from "@/assets/header-icons/ByNeedSatellite.svg";
import ByNeedSoftwareDist from "@/assets/header-icons/ByNeedSoftwareDist.svg";
import ByNeedVideoHosting from "@/assets/header-icons/ByNeedVideoHosting.svg";
import ByNeedWordpressCDN from "@/assets/header-icons/ByNeedWordpressCDN.svg";

export const HeaderMobileArray = [
	{
		headerName: "Products",
		elementList: [
			{
				name: "CDN",
				Icon: MenuCDN,
				SubMenu: [
					{
						Icon: DNSSub,
						Title: "Edge Delivery",
						link: [
							{
								name: "Delivery Acceleration",
								link: "/",
							},
						],
					},
					{
						Icon: EdgeSec,
						Title: "EdgeSec Delivery",
						link: [
							{
								name: "Delivery Acceleration Plus",
								link: "/",
							},
						],
					},
					{
						Icon: VideoDelivery,
						Title: "Video Delivery",
						link: [
							{
								name: "Live Streaming",
								link: "/",
							},
							{
								name: "Video Streaming",
								link: "/",
							},
						],
					},
				],
			},
			{
				name: "Video Service",
				Icon: MenuVideoService,
				SubMenu: [
					{
						Icon: ProductsubEncoding,
						Title: "Encoding",
						link: [
							{
								name: "Video Encoding",
								link: "/",
							},
							{
								name: "Live Transcoding",
								link: "/",
							},
						],
					},
					{
						Icon: ProductsubStream,
						Title: "Stream",
						link: [
							{
								name: "Multistreaming",
								link: "/",
							},
							{
								name: "Scheduler",
								link: "/",
							},
							{
								name: "Video Manager",
								link: "/",
							},
						],
					},
					{
						Icon: VideoDelivery,
						Title: "Video Delivery",
						link: [
							{
								name: "Live Streaming",
								link: "/",
							},
							{
								name: "Video Streaming",
								link: "/",
							},
						],
					},
					{
						Icon: ProductsubPlayer,
						Title: "Player",
						link: [
							{
								name: "Video Player",
								link: "/",
							},
							{
								name: "Video Player Analytics",
								link: "/",
							},
							{
								name: "Video Player SDKs (Coming Soon)",
								link: "/",
							},
						],
					},
				],
			},
			{
				name: "Automatic Optimization",
				Icon: MenuAutomatic,
				SubMenu: [
					{
						Icon: ProductsubOptimization,
						Title: "optimization",
						link: [
							{
								name: "Asset Optimization",
								link: "/",
							},
							{
								name: "Image Optimization",
								link: "/",
							},
						],
					},
				],
			},
			{
				name: "Storage",
				Icon: MenuStorage,
				SubMenu: [
					{
						Icon: ProductsubStorage,
						Title: "optimization",
						link: [
							{
								name: "Cloud Storage",
								link: "/",
							},
							{
								name: "Critical Backup (Coming Soon)",
								link: "/",
							},
							{
								name: "Youtube Sync (Coming Soon)",
								link: "/",
							},
						],
					},
				],
			},
			{
				name: "Routing and Monitoring",
				Icon: MenuRouting,
				SubMenu: [
					{
						Icon: ProductsubDNS,
						Title: "optimization",
						link: [
							{
								name: "SimpleDNS",
								link: "/",
							},
							{
								name: "Traffic Director",
								link: "/",
							},
						],
					},
					{
						Icon: ProductsubRealtime,
						Title: "Realtime User Monitoring",
						link: [
							{
								name: "Web RUM (Coming Soon)",
								link: "/",
							},
							{
								name: "DNS RUM (Coming Soon)",
								link: "/",
							},
						],
					},
					{
						Icon: ProductsubMonitoring,
						Title: "Monitoring ",
						link: [
							{
								name: "Website (Coming Soon)",
								link: "/",
							},
							{
								name: "Server (Coming Soon)",
								link: "/",
							},
						],
					},
				],
			},
		],
	},
	{
		headerName: "solutions",
		elementList: [
			{
				name: "By Industry",
				Icon: SolutionsSubByIndustry,
				SubMenu: [
					{
						Title: "Gaming",
						SubInner: [
							{
								Icon: MobileCDNForGaming,
								name: "CDN For Gaming",
								link: "/",
							},
							{
								Icon: MobileGameServer,
								name: "Game Server Protection",
								link: "/",
							},
							{
								Icon: MobileSoftware,
								name: "Software Distribution",
								link: "/",
							},
						],
					},
					{
						Title: "IT & Technology",
						SubInner: [
							{
								Icon: MobileImageOptimization,
								name: "Image Optimizer",
								link: "/",
							},
							{
								Icon: MobileWebsiteAcceleration,
								name: "Website Acceleration",
								link: "/",
							},
							{
								Icon: MobileAssetOptimization,
								name: "Asset Optimizer",
								link: "/",
							},
							{
								Icon: MobileWordPressCDN,
								name: "WordPress CDN",
								link: "/",
							},
						],
					},
					{
						Title: "E-commerce",
						SubInner: [
							{
								Icon: MobileCDNForGaming,
								name: "CDN for E-commerce",
								link: "/",
							},
						],
					},
					{
						Title: "Media & Entertainment",
						SubInner: [
							{
								Icon: MobileVideoHosting,
								name: "Video Hosting",
								link: "/",
							},
							{
								Icon: MobileLiveStreaming,
								name: "Live Streaming",
								link: "/",
							},
							{
								Icon: MobileIPCamera,
								name: "IP Camera Streaming",
								link: "/",
							},
							{
								Icon: MobileLiveStreamingEvents,
								name: "Live Streaming Events",
								link: "/",
							},
							{
								Icon: MobileOTT,
								name: "OTT Streaming",
								link: "/",
							},
							{
								Icon: MobileSatellite,
								name: "Satellite Downlink",
								link: "/",
							},
						],
					},
					{
						Title: "Financial Services",
						SubInner: [
							{
								Icon: MobileCDNForFinancial,
								name: "CDN For Financial Services",
								link: "/",
							},
						],
					},
					{
						Title: "SaaS",
						SubInner: [
							{
								Icon: MobileCDNForSaas,
								name: "CDN for SaaS",
								link: "/",
							},
						],
					},
				],
			},
			{
				name: "By Need",
				Icon: SolutionsSubByNeed,
				SubMenu: [
					{
						Title: "Web Acceleration",
						SubInner: [
							{
								Icon: ByNeedWordpressCDN,
								name: "CDN for SaaS",
								link: "/",
							},
							{
								Icon: ByNeedImageOptimization,
								name: "Image Optimization",
								link: "/",
							},
							{
								Icon: ByNeedAssetOptimization,
								name: "Asset Optimization",
								link: "/",
							},
							{
								Icon: ByNeedSaas,
								name: "SaaS Delivery",
								link: "/",
							},
						],
					},
					{
						Title: "Video Streaming",
						SubInner: [
							{
								Icon: ByNeedVideoHosting,
								name: "Video Hosting",
								link: "/",
							},
							{
								Icon: ByNeedLiveStreaming,
								name: "Live Streaming",
								link: "/",
							},
							{
								Icon: ByNeedIP,
								name: "IP Camera Streaming",
								link: "/",
							},
							{
								Icon: ByNeedLiveStreamingEvents,
								name: "Live Streaming Events",
								link: "/",
							},
							{
								Icon: ByNeedOTT,
								name: "OTT Streaming",
								link: "/",
							},
							{
								Icon: ByNeedSatellite,
								name: "Satellite Downlink",
								link: "/",
							},
						],
					},
					{
						Title: "Security And Protection",
						SubInner: [
							{
								Icon: ByNeedBotProtection,
								name: "Bot Protection And Management",
								link: "/",
							},
							{
								Icon: ByNeedDDos,
								name: "DDoS Protection",
								link: "/",
							},
							{
								Icon: ByNeedGameServer,
								name: "Game Server Security",
								link: "/",
							},
						],
					},
					{
						Title: "Storage & Cloud",
						SubInner: [
							{
								Icon: ByNeedSoftwareDist,
								name: "Software Distribution",
								link: "/",
							},
						],
					},
				],
			},
			{
				name: "Automatic Optimization",
				Icon: MenuAutomatic,
				SubMenu: [
					{
						Icon: ProductsubOptimization,
						Title: "optimization",
						link: [
							{
								name: "Asset Optimization",
								link: "/",
							},
							{
								name: "Image Optimization",
								link: "/",
							},
						],
					},
				],
			},
			{
				name: "Storage",
				Icon: MenuStorage,
				SubMenu: [
					{
						Icon: ProductsubStorage,
						Title: "optimization",
						link: [
							{
								name: "Cloud Storage",
								link: "/",
							},
							{
								name: "Critical Backup (Coming Soon)",
								link: "/",
							},
							{
								name: "Youtube Sync (Coming Soon)",
								link: "/",
							},
						],
					},
				],
			},
			{
				name: "Routing and Monitoring",
				Icon: MenuRouting,
				SubMenu: [
					{
						Icon: ProductsubDNS,
						Title: "optimization",
						link: [
							{
								name: "SimpleDNS",
								link: "/",
							},
							{
								name: "Traffic Director",
								link: "/",
							},
						],
					},
				],
			},
		],
	},
	{
		headerName: "Networks",
		Link: "/",
	},
	{
		headerName: "Pricing",
		Link: "/",
	},
	{
		headerName: "Login",
		Link: "/",
	},
	{
		headerName: "Delivery Acceleration Plus",
		buttonNew: {
			buttonName: "New",
			Link: "/",
		},
		Link: "/",
	},
	{
		headerName: "Solutions",
		Link: "/",
		quickLink: [
			{
				name: "Image Optimization",
				Link: "/",
			},
			{
				name: "Asset Optimization",
				Link: "/",
			},
		],
	},
	{
		headerName: "Talk to an expert",
		Link: "/",
	},
	{
		headerTryNow: "Try Now",
		Link: "/",
	},
	{
		headerUnderAttack: "Under Attack?",
		Link: "/",
	},
];
