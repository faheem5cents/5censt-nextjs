import DAEdgeRules from "@/assets/CDN/DAEdgeRules.png";
import DAGeoblocking from "@/assets/CDN/DAGeoblocking.png";
import DAHTTPLiveStream from "@/assets/CDN/DAHTTPLiveStream.png";
import DAOriginShield from "@/assets/CDN/DAOriginShield.png";
import DAPurge from "@/assets/CDN/DAPurge.png";
import DARawLogs from "@/assets/CDN/DARawLogs.png";
import DAReferrerAccessControl from "@/assets/CDN/DAReferrerAccessControl.png";
import DASSL from "@/assets/CDN/DASSL.png";
import DATokenSecurity from "@/assets/CDN/DATokenSecurity.png";

export const CDNDeliveryAccelerationArray = [
    {
        img: DAPurge,
        heading: "Purge",
        description:
            "Purge allows you to manage the content which is being served through our platform at 5centsCDN. Using this advanced feature you can delete a single file or multiple files from the edge servers.",
    },
    {
        img: DAOriginShield,
        heading: "Origin Shield",
        description:
            "We ensure that your stream is protected from external attacks. Ensure stability and foolproof security as we troubleshoot any issue within a very minimum resolution time.",
    },
    {
        img: DAEdgeRules,
        heading: "Edge Rules",
        description:
            "Be in charge of your services. Edge Rules gives you instant control over how your content is delivered. You can customize your asset delivery, security measures, SEO, and mobile experience.",
    },
    {
        img: DASSL,
        heading: "SSL",
        description:
            "5centsCDN provides an optimized secure socket layer stack, and always-on intelligent provisioning thereby making our SSL fast, extremely efficient, and cost-effective.",
    },
    {
        img: DAReferrerAccessControl,
        heading: "Referrer Access Control",
        description:
            "Steer clear of any vulnerability found in web applications. 5centsCDN allows you to have complete control over which referrers are allowed or disallowed to access your CDN assets.",
    },
    {
        img: DAGeoblocking,
        heading: "Geoblocking",
        description:
            "You can decide which countries the stream should be allowed or blocked in. Be in control of your content as we put in place certain measures to limit the access of the user to the content in some locations. It ensures the integrity of a content provider by securing the services.",
    },
    {
        img: DAHTTPLiveStream,
        heading: "HTTP Live Stream",
        description:
            "If you have an origin media server like Flussonic or Wowza, then it is possible to deliver your HTTP live streams (HLS/DASH) via 5centsCDN using Pull Zone.",
    },
    {
        img: DARawLogs,
        heading: "Raw Logs",
        description:
            "Not a big fan of graphic presentations, tables, and charts? Well, Raw Logs allow you to see who has visited your website in simple figures. They are generated & delivered after they are packaged by the server",
    },
    {
        img: DATokenSecurity,
        heading: "Token Security",
        description:
            "Security comes first hence we provide an authentication token for protecting your content that prevents access to unauthorized users. You can generate a unique URL that expires from minutes to days hence nobody can copy it.",
    },
]