import React from 'react';
import styled from 'styled-components';
import { List } from 'react-virtualized';

import VideoItem from './VideoItem';

const StyledList = styled(List)`
  margin-top: 10px;
  border: 1px solid;
`;

const ItemContainer = styled.div`
  text-align: left;
  display: flex;
`;

const VideoList = ({ videos, onDelete }) => {
  const rowRenderer = ({ key, index, style }) => {
    const item = videos[index];
    console.log(item);
    return (
      <ItemContainer key={key} style={style} role="item">
        <VideoItem item={item} onDelete={onDelete} />
      </ItemContainer>
    );
  };

  return (
    <StyledList   
      rowCount={videos.length}
      rowHeight={43}
      rowRenderer={rowRenderer}
      scrollToIndex={0}
      width={440}
      height={320}
    />
  );
};

export default VideoList;