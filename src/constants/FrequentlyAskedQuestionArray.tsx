export const FrequentlyAskedQuestionArray = [
	{
		title: "Is there a minimum BW to get started?",
		description:
			"Yes. 1TB per month. In the case of Simulcasting/Multistreaming only, simply buy stream names and Multistreaming platforms ",
	},
	{
		title: "Do I get alerts before my service gets disabled?",
		description:
			"Yes. We send multiple notifications when the package is about to expire. Alerts at regular intervals are also pushed as a reminder.",
	},
	{
		title: "What happens when my usage hits 100% of BW purchased?",
		description:
			"Under our 'Bandwidth overage protection' feature, the services are disabled once you reach the maximum limit of your particular package.",
	},
	{
		title: "Can I top-up BW at any time?",
		description:
			"Yes. You can simply log in to your 5centsCDN client's account. Go to the dashboard and top up your bandwidth starting from 1 TB.",
	},
	{
		title: "Does my BW roll-over or carry forward to the next month?",
		description:
			"Add-on BW does rollover. However, your base BW expires at the end of the month regardless of how much you have consumed.",
	},
	{
		title: "How much does a TLS certificate cost?",
		description:
			"$0. All supported TLS certificates are offered by 5centsCDN free of cost and there are no hidden charges whatsoever.",
	},
	{
		title: "Is adaptive bitrate included by default?",
		description: "No, you will have to purchase live transcoding.",
	},
	{
		title: "Which payment methods are accepted?",
		description: "We accept credit cards, Paypal, and bank wire transfers.",
	},
	{
		title: "How is traffic calculated?",
		description:
			"For the Standard, Volume & Premium package, outgoing BW from our edge servers is measured in Bytes. For Enterprise, in Bytes + midgress traffic.",
	},
	{
		title: "How is storage billed?",
		description:
			"Pull zone storage has no additional cost and it comes with your package. Push/VOD zone storage, on the other hand, is $0.05 per GB per month.",
	},
];

export const DeliveryAccelerationPlusFrequentlyAskedQuestionArray = [
	{
		title:
			"What are the main factors that affect website load speed and how can they be optimized?",
		description:
			"There are several factors that can affect website load speed, including Large image or video files, Too many HTTP requests, Unoptimized code, Slow server response time, and Lack of caching. With the help of Delivery Acceleration Plus, they can be optimized without a line of code.",
	},
	{
		title: "How important is website security for website load speed, and why?",
		description:
			"Website security measures can add extra steps to the communication process, which can increase load time. However, website security is essential for protecting a website and its users from potential threats. Balancing security with performance is important for a safe and efficient user experience.",
	},
	{
		title:
			"What are the common security risks that can slow down a website and how can they be prevented?",
		description:
			"Common security risks that can slow down a website include DDoS attacks, Malware infections, Brute force attacks, and Vulnerabilities in website software. Delivery Acceleration Plus can help you prevent all of these risks in few clicks.",
	},
	{
		title:
			"How can website owners measure the speed of their website and identify bottlenecks in their load time?",
		description:
			"Website owners can use website speed testing tools to measure their website’s speed and identify bottlenecks in their load time. Popular tools include Google PageSpeed Insights, GTmetrix, and Pingdom. Browser developer tools can also be used to track network activity, examine requests, and identify errors or warnings that may be impacting performance.",
	},
	{
		title:
			"What are the best practices for improving website load speed and security, and how can website owners implement them effectively?",
		description:
			"The best practices for improving website load speed and security include Optimizing images and videos, Minimizing HTTP requests, Using caching, Compressing files, Implementing SSL/TLS encryption, Keeping software up to date, and Regularly backing up website data. With the help of delivery acceleration plus any owner can implement them in no time.",
	},
];

export const CDNDeliveryAccelerationFAQArray = [
	{
		title:
			"Do you charge for the cached content when I am using the pull zone?",
		description:
			"No.",
	},
	{
		title: "Do you charge for using the origin shield?",
		description:
			"No.",
	},
	{
		title:
			"Do you allow adult content?",
		description:
			"Yes, any adult content as long as it is legal excluding Enterprise Network.",
	},
	{
		title:
			"Do you bill traffic from origin servers?",
		description:
			"It is free, we only charge for the outgoing traffic from our edge server excluding Enterprise Network!",
	},
	{
		title:
			"Do you provide phone support, slack, or WhatsApp?",
		description:
			'Yes, they are available on premium support plans. <span class="text-[#4fa83d]"><a href="https://www.5centscdn.net/cdn-support-plans/"> Explore support plans here</a></span>',
	},
	{
		title:
			"How does 5centsCDN speed up my entire website?",
		description:
			"5centsCDN uses cache-control headers that you set on your files in order to identify static as well as dynamic content. 5centsCDN content distribution helps ensure that the performance optimizations are aligned with the entire website or web application.",
	},
];

export const CDNVideoStreamingFAQArray = [
	{
		title:
			"Do I get free storage for my videos?",
		description:
			"No. However, you can use our cloud storage on a pay-as-you-go pricing for $0.05 per GB",
	},
	{
		title:
			"Can I get the HLS or DASH URL for my videos?",
		description:
			"Yes.",
	},
	{
		title:
			"Can I encode my video files?",
		description:
			"Yes, video encoding is available on both a la carte and PAYG plans. 50k mins at 20 USD per month or $0.005 per minute under the pay-as-you-go pricing model.",
	},
	{
		title:
			"I can secure my videos?",
		description:
			"Yes, use our domain locking, geo-blocking, or token security to protect your content.",
	},
	{
		title:
			"Can I host my video on third-party cloud and delivery using 5centsCDN?",
		description:
			"Yes. Use our VOD or HTTP Pull zone!.",
	},
	{
		title:
			"Can I create a live stream by combining video files I uploaded to 5centsCDN?",
		description:
			"Yes, use our scheduler for this purpose.",
	},
];

export const CDNLiveStreamingFAQArray = [
	{
		title:
			'Is there any limit on "concurrent viewers"?',
		description:
			"No. However, if you have 10 million concurrent viewers we recommend you to reach out to us for managed live event services.",
	},
	{
		title:
			"Can I see concurrent or real-time viewers?",
		description:
			"Yes.",
	},
	{
		title:
			"Can I use the live stream URL on my own OTT platform or mobile apps?",
		description:
			"Yes.",
	},
	{
		title:
			"Can I customize the live stream URL?",
		description:
			"Yes, you can use custom CNAMEs.",
	},
	{
		title:
			"What happens if the origin server to which my encoder is connected fails?",
		description:
			"Your encoder will fail over to the next available origin server, so you are covered.",
	},
	{
		title:
			"Do you provide an RTMP stream?",
		description:
			"Yes. However, concurrent connections are limited to 3. Contact support for more connections.",
	},
	{
		title:
			"Do you offer managed live event streaming?",
		description:
			'Yes, contact sales at <span class="text-[#4fa83d]"><a href="mailto:buy@5centscdn.com"> buy@5centscdn.com</a></span> or live chat with us now.',
	},
];

export const CDNFAQArray = [
	{
		title:
			'How does a CDN work?',
		description:
			"A cached version of the content is stored in the CDN in multiple geographical locations through Point of presence (POP). There are a number of caching servers on each POP that store, secures, and deliver the content within its proximity. These servers help POPs in enhancing the speed and connectivity to keep the quality as high as always despite an influx of requests coming in at the same time. It can be done efficiently because the content is transmitted through local servers",
	},
	{
		title:
			"What is a CNAME?",
		description:
			"CNAME means Canonical Name used to alias one name to another. A CNAME record always points to another domain name, instead of directly to an IP address.",
	},
	{
		title:
			"How is 5centsCDN different from traditional content delivery solutions?",
		description:
			"Yes, we offer a video CDN solution by optimizing your HLS streams. ",
	},
	{
		title:
			"Can 5centsCDN be used in a multi-CDN strategy?",
		description:
			"Yes, our network can be combined with existing CDN infrastructures, like Akamai, Gcore, or a private CDN.",
	},
	{
		title:
			"How does 5centsCDN speed up my entire website?",
		description:
			"5centsCDN uses cache-control headers that you set on your files in order to identify static as well as dynamic content. 5centsCDN content distribution helps ensure that the performance optimizations are aligned with the entire website or web application.",
	},
];

export const CDNLiveTranscodingFAQArray = [
	{
		title:
			'Do you provide a custom live transcoding cluster?',
		description:
			"Yes, dedicated cluster and resources can be allocated on a custom solution.",
	},
	{
		title:
			"Can I set custom values such as bitrates and resolution?",
		description:
			"Yes, you can also set audio settings and more.",
	},
	{
		title:
			"Do you provide an API for live transcoding?",
		description:
			"Yes.",
	},
	{
		title:
			"Do you support H.265?",
		description:
			"Yes.",
	},
	{
		title:
			"Do you support watermarking and logo insertion?",
		description:
			"Yes.",
	},
	{
		title:
			"Is there any limit for transcoding time?",
		description:
			"No, you can transcode the live stream 24×7.",
	},
];

export const CDNVideoEncodingFAQArray = [
	{
		title:
			'Is there any limitation for number when encoding profile?',
		description:
			"No, you can create any number of transcoding profiles!",
	},
	{
		title:
			"Is there any limit for file size?",
		description:
			"No",
	},
	{
		title:
			"Can I upload any file formats?",
		description:
			"Yes, we pretty much support all formats, and if you face any issues contact support!",
	},
	{
		title:
			"Do you provide an API for the encoding process?",
		description:
			"Yes, you can use our extensive API to integrate encoding workflow into your platform or app",
	},
	{
		title:
			"Do you charge for failed or error encoding jobs?",
		description:
			"If the job fails, we DO NOT charge you!",
	},
	{
		title:
			"Do you support watermarking and logo insertion?",
		description:
			"Yes.",
	},
	{
		title:
			"Do you support WebM?",
		description:
			"Yes.",
	},
	{
		title:
			"Do you support thumbnail creation?",
		description:
			"Yes.",
	},
	{
		title:
			"Do you provide a webhook option?",
		description:
			"Yes.",
	},
	{
		title:
			"How does VOD Transcoding billing work?",
		description:
			`If your source file is 10 mins and quality is 1080p, and you want to create 3 output profiles like 720p, 480p, and 360p. In this use case, total transcoding minutes will be 30 mins for 3 profiles:<br>
			720p: 10 mins<br>
			480p: 10 mins<br>
			360p: 10 mins`,
	},
	{
		title:
			"Do you have an auto encoding function?",
		description:
			"Yes, you can enable upload files to a specific folder and we can encode the preset profiles you have selected.",
	},
];

export const CloudStorageFAQArray = [
	{
		title:
			'How much does cloud storage cost?',
		description:
			"We have a pay-go pricing model and pricing is $0.05 per GB flat each month",
	},
	{
		title:
			'Does cloud storage have a minimum monthly storage charge?',
		description:
			"No.",
	},
	{
		title:
			'Is the cloud storage ingress traffic free or uploading data traffic free?',
		description:
			"Yes.",
	},
	{
		title:
			'How reliable is Amazon S3?',
		description:
			"We have global replication as well as we 3x copy of your data in 3 different data centers at any given point in time!",
	},
	{
		title:
			'How much data can I store in Amazon S3?',
		description:
			"You can store unlimited data no limit or cap.",
	},
	{
		title:
			'What is the maximum file size I can upload?',
		description:
			"There is no limit, you can upload any size file!",
	},
	{
		title:
			'Do you offer an API for cloud storage so that I can integrate it with my web or mobile application or OTT platforms?',
		description:
			"Yes, by default we support Swift API (S3 compatibility) & S3 API.",
	},
	{
		title:
			'Does cloud storage offer a 100% Service Level Agreement (SLA)?',
		description:
			"The data resilience rate is 100%. For further information, please refer to the SLA.",
	},
]

export const SimpleDNSFAQArray = [
	{
		title:
			'Do I get free domains with a la carte plan?',
		description:
			"Yes, a la carte plan includes 1 free domain.",
	},
	{
		title:
			'What are 5centsCDN DNS limitations on the number of requests?',
		description:
			"No, SimpleDNS requests are unlimited.",
	},
	{
		title:
			'What kind of information does DNS statistics contain?',
		description:
			"The DNS statistics provide information on the number of requests our DNS servers receive for your domain.",
	},
	{
		title:
			'Do you offer dynamic DNS and how to use it?',
		description:
			"On every A & AAAA record, you will see an icon with two arrows. On clicking them, you will see the Dynamic URL for this record. Every time you open this URL the record will be changed to the IP address of the computer the URL is opened from. On this window, there will be options to open this URL with wget, php & perl scripts automatically.",
	},
	{
		title:
			'Is it possible to forward mail to multiple recipients?',
		description:
			"Yes, it’s possible. Just add two or more mail forwards for the same mailbox pointed to different recipients.",
	},
	{
		title:
			'Some of my mails sent to Gmail accounts are blocked by Gmail and some are not. What should I do?',
		description:
			"Google recommends creating an SPF/TXT record pointing to <span class='primary-text'>“v=spf1 include:_spf.google.com ~all”.</span>",
	},
	{
		title:
			'Do you support DNSSEC?',
		description:
			"Yes, we support it.",
	},
	{
		title:
			'What is ALIAS record?',
		description:
			"ALIAS is an internal record type for our system, which needs to be pointed to a hostname, it works like the CNAME record, but can be created for the root domain as well.",
	},
]

export const DNSFAQArray = [
	{
		title:
			'Is the DNS server managed?',
		description:
			"Yes, you can reach out to support anytime.",
	},
	{
		title:
			'Does 5centsCDN provide domain registration services?',
		description:
			"No.",
	},
	{
		title:
			'Is the DNS secured against DDoS?',
		description:
			"Yes, our DNS infrastructure is completely secured.",
	},
	{
		title:
			'Can I enable CDN when using 5centsCDN DNS?',
		description:
			"Yes, you can enable CDN for your Hostname with the click of a button.",
	},
	{
		title:
			'Does 5centsCDN support EDNS0 (extension mechanisms for DNS)?',
		description:
			"Yes, we do support EDNS for both SimpleDNS as well Traffic Director.",
	},
	{
		title:
			'Is 5centsCDN a free DNS (domain nameserver) provider?',
		description:
			"No, with SimpleDNS we charge $1 per domain, however, the first domain is on us.",
	},
	{
		title:
			'Is there any limit on the number of domains that I can add to SimpleDNS?',
		description:
			"No, 1st domains are free, consecutive domains are $1 per domain per month.",
	},
	{
		title:
			'Where can I find my 5centsCDN name servers?',
		description:
			"You can find the NS details in the control panel under the manage page of each domain.",
	},
	{
		title:
			'Does 5centsCDN offer domain masking?',
		description:
			"Yes.",
	},
	{
		title:
			'How long does it take for a DNS change to push out?',
		description:
			"It happens instantly.",
	},
	{
		title:
			'Does 5centsCDN charge for or limit DNS queries?',
		description:
			"SimpleDNS queries are unlimited. However, Traffic Director has flat pricing.",
	},
	{
		title:
			'Does 5centsCDN limit the number of DNS records a domain can have?',
		description:
			"No, there’s no limit. You can add X number of domains at $1/month per domain",
	},
]

export const TrafficDirectorFAQArray = [
	{
		title:
			'Do I get free domains with monthly plan?',
		description: "Yes, Monthly plan include 1 free domain. Add-on domains can be added at a cost of $1 per domain per month",
	},
	{
		title:
			'Are the queries unlimited?',
		description: "No, a million queries cost you $5 flat per month.",
	},
	{
		title:
			'Does 5centsCDN limit the number of DNS records a domain can have?',
		description: "No, 1st 1000 records are included and add-on records can be purchased at $ 2.5 per 1k records per month!",
	},
	{
		title:
			'Does 5centsCDN traffic director support Weighted Round Robin (WRR)?',
		description: "Yes",
	},
	{
		title:
			'What is the price per month for the traffic director routing feature?',
		description: "You can start as low as 8 USD per month, which will include 1 x domain, 1 x health check and 1 million queries!",
	},
	{
		title:
			'Does 5centsCDN traffic director offer Geo loadbalcing DNS feature?',
		description: "Yes, you can route traffic based on countries",
	},
	{
		title:
			'Does the traffic director support multiple values in response to DNS queries?',
		description: "Yes",
	},
]

export const LiveEventStreamingFAQArray = [
	{
		title:
			'What is Live Streaming Latency?',
		description: "Live streaming latency is 30-the 40s",
	},
	{
		title:
			'How many channels can I Integrate with my Live streaming?',
		description: "Clients can configure the channel integration in their accounts.",
	},
	{
		title:
			'What happens when my Bandwidth video limit is exceeded?',
		description: "Bandwidth overage protection will be enabled i.e 120% of available bandwidth",
	},
	{
		title:
			'What is Video Frame Rate?',
		description: "Video Frame Rate is the number of frames per second.",
	},
	{
		title:
			'Is it possible to rewind the content of a live stream?',
		description: "Yes, the client needs to enable NDVR",
	},
]

export const BandwidthRolloverFAQArray = [
	{
		title:
			'Is there a minimum BW to get started?',
		description: "Yes, 1TB per month and that too, in the case of Multistreaming only. Simply buy stream names and multistreaming platforms.",
	},
	{
		title:
			'What happens when my usage hits 100% of BW purchased?',
		description: `Under our <a href="#" class='primary-text'>‘Bandwidth overage protection’</a> feature, the services are disabled once you reach the maximum limit of your particular package.`,
	},
	{
		title:
			'Can I top-up BW at any time?',
		description: "Yes. You can simply log in to your 5centsCDN client’s account. Go to the dashboard and top up your bandwidth starting from 1 TB.",
	},
	{
		title:
			'Does my BW rollover or carry forward to the next month?',
		description: "Add-on BW does rollover. However, your base BW expires at the end of the month regardless of how much you have consumed.",
	},
	{
		title:
			'What is base BW?',
		description: "Base BW is the minimum bandwidth that is purchased per month and it starts from 1TB. It expires at the end of each month no matter how much you have consumed.",
	},
]