import DNSSECIcon from "@/assets/DNS/DNSSECIcon.svg";
import TTLManagementIcon from "@/assets/DNS/TTLManagementIcon.svg";
import RecordsWeSupportIcon from "@/assets/DNS/RecordsWeSupportIcon.svg";
import EverythingUnlimitedIcon from "@/assets/DNS/EverythingUnlimitedIcon.svg";
import DNSstatisticsIcon from "@/assets/DNS/DNSstatisticsIcon.svg";
import APIIcon from "@/assets/DNS/APIIcon.svg";

export const SimpleDNSDocsArray = [ 
    {
        heading: "DNSSEC",
        subheading: "By adding an additional layer of security at every level, DNSSEC protects your users from on-path attacks that can spoof or hijack your DNS records.",
        icon: DNSSECIcon,
    },
    {
        heading: "TTL Management",
        subheading: "Set TTL to 1 min. TTL management is one of the most practical and widely supported ways to cache dynamic content.",
        icon: TTLManagementIcon,
    },
    {
        heading: "Records We Support",
        subheading: "It’s the information about a domain including what IP address is associated with that domain and how to handle requests for it.",
        icon: RecordsWeSupportIcon,
        keypoints: [
            {
                title: "A",
                description: "The most fundamental type of DNS record: it indicates the IP address of a given domain.",
            },
            {
                title: "AAAA",
                description: "Used for finding the IP address of a computer connected to the internet from a name.",
            },
            {
                title: "MX",
                description: "Indicates how email messages should be routed in accordance with the Simple Mail Transfer Protocol.",
            },
            {
                title: "CNAME",
                description: " Maps an alias name to a true or canonical domain name.",
            },
            {
                title: "TXT",
                description: " Contains text information for sources outside of your domain.",
            },
            {
                title: "SPF",
                description: "Contains a list of all the IP addresses that are permitted to send an email on behalf of your domain.",
            },
            {
                title: "NS",
                description: "Tells the Internet where to go to find out a domain’s IP address.",
            },
            {
                title: "SRV",
                description: "Specifies a host and port for specific services such as voice over IP.",
            },
            {
                title: "Web Redirect",
                description: "Helps make a web page available under more than one URL address.",
            },
            {
                title: "ALIAS",
                description: "Points your domain name to a hostname instead of an IP address.",
            },
            {
                title: "RP",
                description: "Specifies the mailbox of the person responsible for a host",
            },
            {
                title: "SSHFP",
                description: "Identifies SSH keys that are associated with a hostname.",
            },
            {
                title: "NAPTR",
                description: "Used in the mapping of servers and user addresses in the Session Initiation Protocol.",
            },
            {
                title: "CAA",
                description: "Specifies which certificate authorities (CAs) are allowed to issue certificates.",
            },
            {
                title: "TLSA",
                description: "Helps store the fingerprint of a TLS/SSL certificate in the DNS of your domain.",
            },
            {
                title: "DS",
                description: "Used to secure delegations (DNSSEC)",
            },
            {
                title: "CERT",
                description: " Provides a space in the DNS for certificates and related certificate revocation lists",
            },
            {
                title: "OPENPGPKEY",
                description: "OpenPGP public keys are used to encrypt or sign email messages and files.",
            },
            {
                title: "HINFO",
                description: "The HINFO record allows you to define the hardware type and Operating System (OS) in use for a host.",
            },
            {
                title: "LOC",
                description: " LOC records allow you to specify a physical location for a domain name.",
            },
            {
                title: "SMIMEA",
                description: " SMIMEA messages often contain a certificate (some messages contain more than one certificate).",
            },
            {
                title: "DNAME",
                description: " The DNAME record provides redirection from a part of the DNS name tree to another part of the DNS name tree.",
            },
        ]
    },
    {
        heading: "Everything Unlimited",
        subheading: "We don’t believe in setting limits to the best quality advanced features.",
        icon: EverythingUnlimitedIcon,
        keypoints: [
            {
                title: "Records",
                description: "There is simply no limit on the number of DNS lookups",
            },
            {
                title: "Queries",
                description: "There is no monthly query limit on your DNS records",
            },
        ]
    },
    {
        heading: "DNS statistics",
        subheading: "Monitor and track your internet usage with real-time data reporting and keep a check on your DNS.",
        icon: DNSstatisticsIcon,
    },
    {
        heading: "API",
        subheading: "Automate the configuration of email records, web hosting, and other services related to your domain.",
        icon: APIIcon,
    },
]