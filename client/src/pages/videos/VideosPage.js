import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import VideoList from './VideoList';
import { VideoPlayer } from '../../components'
import AddVideo from './AddVideo';
import * as service from '../../services/firestore';

const Container = styled.div`
  display: flex;
  padding: 40px;
  height: 400px;

  margin: 0;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  padding: 24px;
  width: 400px;
`;

const RightContainer = styled.div`
  margin-left: 24px;
  width: 700px;
`;

const opts = {
  height: '400px',
  width: '700px',
  playerVars: {
    autoplay: 1,
    origin: window.origin,
    mute: 1,
  },
};

const VideosPage = () => {
  const [videos, setVideos] = useState([]);
  const [removedVideos, setRemovedVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState();

  useEffect(() => {
    service.getVideos().then(list => {
      setVideos(list);
    })
  }, []);

  useEffect(() => {
    const unsubscribe = service.streamVideos((querySnapshot) => {
      const updatedItems = querySnapshot.docs.map(doc => doc.data());
      const changedItems = updatedItems.filter(x => !removedVideos.includes(x.videoId));
      setVideos(changedItems);
    },
    (error) => console.error(error)
    );
    return unsubscribe;
  }, [setVideos, removedVideos]);

  useEffect(() => {
    if (videos?.length && !selectedVideo) {
      setSelectedVideo(videos[0]);
    }
  }, [videos, selectedVideo])

  const addVideoHandle = (videoId) => {
    service.createVideo(videoId);
  };

  const removeCurrentVideo = () => {
    const current = selectedVideo.videoId;
    setRemovedVideos([...removedVideos, current]);
    const list = videos.filter(x => x.videoId !== selectedVideo.videoId);
    setVideos(list);
    setSelectedVideo(list?.length ? list[0] : null);
  };

  const onEnd = () => {
    removeCurrentVideo();
  };

  const onError = () => {
    removeCurrentVideo();
  };

  return (
    <Container>
      <LeftContainer>
        <AddVideo addVideoHandler={addVideoHandle} />
        <VideoList videos={videos} />
      </LeftContainer>
      <RightContainer>
        <VideoPlayer videoId={selectedVideo?.videoId}  options={opts} onEnd={onEnd} onError={onError} />
      </RightContainer>
    </Container>
  )
}

export default VideosPage;