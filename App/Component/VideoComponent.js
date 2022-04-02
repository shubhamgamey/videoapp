import React, {useContext, useEffect, useRef} from 'react';
import {StyleSheet, View} from 'react-native';

import {AppContext} from '../Context';
import CommonStyle from '../Theme/CommonStyle';
import Video from 'react-native-video';
import {VolumeButton} from './AppButton';
import {width} from '../Utils/Constant';

const styles = StyleSheet.create({
  videoView: {
    width,
    opacity: 1,
  },
  videoOuter: {
    width,
    ...CommonStyle.center,
  },
});

const VideoComponent = ({post, isVisible, isNext}) => {
  const {displayHeight} = useContext(AppContext);
  const {isMute} = useContext(AppContext);
  const videoRef = useRef(null);
  const {url} = post;
  const {videoOuter, videoView} = styles;

  useEffect(() => {
    if (!isVisible && isNext && videoRef) {
      // videoRef.current.seek(0);
    }
  }, [isVisible, isNext]);

  const videoError = error => {
    // Manage error here
  };

  return (
    <View style={[videoOuter, {height: displayHeight}]}>
      <Video
        ref={videoRef}
        fullscreenAutorotate={true}
        source={{
          uri: 'https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.xhP3ExfcX8ON.m3u8',
        }}
        autoPlay={true}
        repeat={true}
        onError={videoError}
        resizeMode={'cover'}
        muted={(!isVisible && true) || isMute}
        style={[videoView, {height: displayHeight}]}
        playInBackground={false}
        paused={!isVisible}
        ignoreSilentSwitch={'ignore'}
        onTimedMetadata={a => {
          console.log(a);
        }}
      />
      <VolumeButton />
    </View>
  );
};

export {VideoComponent};
