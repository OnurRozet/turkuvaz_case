import { GetVideo } from "./serviceCaller"


const VideoService={
    getVideos:()=>{
        return GetVideo()
    },

}

export default VideoService;