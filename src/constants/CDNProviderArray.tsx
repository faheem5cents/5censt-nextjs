export const CDNProviderArray = [
	"Pay close attention to all the details because each CDN is different when it comes to default cache, Gzip, or Query strings.",
	"To avoid any kind of unpleasant surprises, it’s better to test the new CDN before moving to full production.",
	"You may have to provide an SSL certificate, CA bundle, and private key.",
	"In some cases, you will have to approve adding your hostnames to an existing CDN-managed SAN certificate.",
	"For easy and effective rollbacks, reduce the DNS TTL to a few minutes.",
	"The new CDN origin may see a traffic spike hence be prepared.",
	"Be vigilant for 4xx errors or even 5xx errors that could mean that the content is misconfigured or something’s wrong with the origin.",
];
