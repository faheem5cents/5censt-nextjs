import RTMPIngest from "/public/assets/RestreamMultistreamingStreaming/RTMPIngest.png";
import Restream from "/public/assets/RestreamMultistreamingStreaming/Re-stream.png";
import MultiPublishing from "/public/assets/RestreamMultistreamingStreaming/MultiPublishing.png";
import GeobasedOrigin from "/public/assets/RestreamMultistreamingStreaming/GeobasedOrigin.png";
import oAuth from "/public/assets/RestreamMultistreamingStreaming/oAuth.png";
import Transcoding from "/public/assets/RestreamMultistreamingStreaming/Transcoding.png";
import NoBitrateLimit from "/public/assets/RestreamMultistreamingStreaming/NoBitrateLimit.png";
import NoDurationLimit from "/public/assets/RestreamMultistreamingStreaming/NoDurationLimit.png";
import PublishScheduler from "/public/assets/RestreamMultistreamingStreaming/PublishScheduler.png";
import PublishingStatus from "/public/assets/RestreamMultistreamingStreaming/PublishingStatus.png";
import FlatPricing from "/public/assets/RestreamMultistreamingStreaming/FlatPricing.png";
import EncoderLog from "/public/assets/RestreamMultistreamingStreaming/EncoderLog.png";
import { transcode } from "buffer";

export const RMStreamingFeaturesArray = [
    {
        img: RTMPIngest,
        heading: "RTMP Ingest",
        description: "When wanting to stream in order to push/restream any content, you can use the encoder or multiple other hardware or software solutions to publish streams to our media server.",
    },
    {
        img: Restream,
        heading: "Re-stream",
        description: "Restreaming will support restream and publish to all streaming platforms and RTMP media servers. We support live restreaming from HLS, HTTP, MPEG-TS, RTSP & RTMP Data sources.",
    },
    {
        img: MultiPublishing,
        heading: "Multi Publishing",
        description: "You need to set up an account and simply stream to our media server using any broadcast software of your choice. We will duplicate that stream and send it to all specified locations.",
    },
    {
        img: GeobasedOrigin,
        heading: "Geobased Origin",
        description: "Our origin servers are highly redundant and scalable clusters that are positioned in more than 40 locations. They will reduce the latency between your source and 5centsCDN encoders.",
    },
    {
        img: oAuth,
        heading: "oAuth",
        description: "There is no need to manually enter the encoding settings in the control panel. 5centsCDN will fetch the publishing details from streaming platforms i.e. Facebook live, Youtube live, Vimeo, etc via API.",
    },
    {
        img: Transcoding,
        heading: "Transcoding",
        description: "Experience the seamless and most effective content delivery because 5centsCDN enables you to refine your live encoding and streaming workflow with the advanced transcoding feature.",
    },
    {
        img: NoBitrateLimit,
        heading: "No Bitrate Limit",
        description: "Limited streams? Not anymore. There is simply no limit on streams within the 5centsCDN encoder. You need the required bandwidth throughput to publish streams to our origin server.",
    },
    {
        img: NoDurationLimit,
        heading: "No Duration Limit",
        description: "No limits to enjoy your favorite TV shows as we offer unlimited recording without any interruptions for a user’s media. All you need is to subscribe to the plan and be ready to binge.",
    },
    {
        img: PublishScheduler,
        heading: "Publish Scheduler",
        description: "You are free to choose a time, date, social platform, or an external RTMP server to publish your live stream with this modern feature offered by 5centsCDN.",
    },
    {
        img: PublishingStatus,
        heading: "Publishing Status",
        description: "Publishing status will give you the Information about the original incoming stream before it is transcoded. You will get information about video codec, fps, bitrate, profile, Audio codec, etc.",
    },
    {
        img: FlatPricing,
        heading: "Flat Pricing",
        description: "Enjoy the flat pricing structure for individuals as well as enterprise customers who require bulk storage space and prefer a stable contract. No request cost or any other hidden charges.",
    },
    {
        img: EncoderLog,
        heading: "Encoder Log",
        description: "Get a realtime encoder log for debugging and troubleshooting any publishing or encoder level issues.",
    },
]