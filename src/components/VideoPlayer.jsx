import React from "react";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import VideoService from "../services/videos";

export default function VideoPlayer() {
  const [video, SetVideo] = useState([]);

  useEffect(() => {
    VideoService.getVideos()
      .then((res) => {
        const meta = res.data.meta;
        const videos = res.data.data.videos.Response;
        if (meta.status_code === 200) {
          SetVideo(videos);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  if (!video || video.length === 0) {
    return <div><h2>Videos not found</h2></div>
  }

  let splittedOutputDate = video[0]?.OutputDate?.split(" ");

  return (
    <div>
      <Container className="mt">
        {video.length > 0 && (
          <div className="mt">
            <video width="1248" height="500" controls>
              <source src={video[0].VideoUrl} type="video/mp4" />
            </video>
            <div>
              <span style={{ float: "right" }}>{splittedOutputDate[1]}</span>
              <br />
              <span style={{ float: "right" }}>{splittedOutputDate[2]}</span>
              <h2>
                {video[0].TitleShort !== ""
                  ? video[0].TitleShort
                  : video[0].Title}
              </h2>
              <p>{video[0].Spot}</p>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
