/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {Video} from 'expo-av';
import MonkeyVideo from './assets/monkey.mp4';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [isStreamingVideo, setIsStreamingVideo] = React.useState(true);
  const monkeyRemoteVideoSource = {
    uri: 'https://www.shutterstock.com/shutterstock/videos/6908191/preview/stock-footage-chimpanzee-eating-banana.mp4',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Video
        source={isStreamingVideo ? monkeyRemoteVideoSource : MonkeyVideo}
        isLooping
        shouldPlay
        style={{width: 300, height: 300}}
      />

      <TouchableOpacity
        style={{width: 300, height: 30, backgroundColor: 'red'}}
        onPress={() => setIsStreamingVideo(!isStreamingVideo)}>
        <Text>
          Toggle Video source : {isStreamingVideo ? 'Remote' : 'Bundled'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default App;
