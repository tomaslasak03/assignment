import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactPlayer from 'react-youtube';
import { ModalLoadingComponentS, ModalPlayerS, ModalTitleS } from './style';

interface ContentProps {
  data: {
    id: string;
    mission_name: string;
    links: {
      video_link: string;
      article_link: string | null;
    };
  };
}

const Content: React.FC<ContentProps> = ({ data }) => {
  const video = data.links.video_link.includes('https://youtu.be/')
    ? data.links.video_link.split('https://youtu.be/')[1]
    : data.links.video_link.split('https://www.youtube.com/watch?v=')[1] || null;

  return (
    <>
      <ModalTitleS>{data.mission_name}</ModalTitleS>
      <VideoPlayer video={video} mission_name={data.mission_name} />
    </>
  );
};

const VideoPlayer = ({ video, mission_name }: { video: string | null; mission_name: string }) => {
  return (
    <ModalPlayerS>
      {typeof video === 'string' && (
        <ReactPlayer
          loading={'lazy'}
          className={'videoPlayer'}
          iframeClassName={'videoPlayerFrame'}
          title={mission_name}
          videoId={video}
        />
      )}
      {typeof video !== 'string' && <Error />}
    </ModalPlayerS>
  );
};

const Error = () => {
  const { t } = useTranslation();
  return (
    <ModalLoadingComponentS>
      <h1>{t('error')}</h1>
    </ModalLoadingComponentS>
  );
};

export default Content;
