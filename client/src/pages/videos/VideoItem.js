import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import 'moment-duration-format';

import { IconButton } from '../../components';

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
  width: 330px;
`;

const getYoutubeUrl = (videoId) => {
  return `https://www.youtube.com/watch?v=${videoId}`;
};

const VideoItem = ({ item, onDelete }) => {
  if (item.title && item.duration) {
    const duration = moment.duration(item.duration);
    return (
      <Item>
        <Description title={item.title}>
          {item.title}
        </Description>
        <span>{duration.format('HH:mm:ss', { trim: false })}</span>
        <IconButton type="button" icon={faTrash} onClick={() => onDelete(item.id)} />
      </Item>
    )
  }

  return (
    <Item>
      <span>{getYoutubeUrl(item.videoId)}</span>
      <IconButton type="button" icon={faTrash} onClick={() => onDelete(item.id)} />
    </Item>
  );
};

export default VideoItem;
