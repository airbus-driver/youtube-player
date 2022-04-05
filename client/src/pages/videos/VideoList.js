import React from 'react';
import styled from 'styled-components';
import { List } from 'react-virtualized';
import moment from 'moment';
import 'moment-duration-format';

const StyledList = styled(List)`
  margin-top: 10px;
  border: 1px solid;
`;

const ItemContainer = styled.div`
  text-align: left;
  display: flex;
`;

const Item = styled.div`
  padding: 10px;
  border-bottom: 1px solid;
  width: 100%;
  margin: 0;
  border-right: 1px solid;
  display: flex;
  justify-content: space-between;
`;

const Description = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 300px;
`;

const getYoutubeUrl = (videoId) => {
  return `https://www.youtube.com/watch?v=${videoId}`;
};

const VideoItem = ({ item }) => {
  if (item.title && item.duration) {
    const duration = moment.duration(item.duration);
    return (
      <Item>
        <Description title={item.title}>
          {item.title}
        </Description>
        <span>{duration.format('HH:mm:ss', { trim: false })}</span>
      </Item>
    )
  }

  return (
    <Item>{getYoutubeUrl(item.videoId)}</Item>
  );
};

const VideoList = ({ videos }) => {
  const rowRenderer = ({ key, index, style }) => {
    const item = videos[index];
    return (
      <ItemContainer key={key} style={style} role="item">
        <VideoItem item={item} />
      </ItemContainer>
    );
  };

  return (
    <StyledList   
      rowCount={videos.length}
      rowHeight={43}
      rowRenderer={rowRenderer}
      scrollToIndex={0}
      width={400}
      height={320}
    />
  );
};

export default VideoList;