import React from 'react';
import { ImageBackground } from 'react-native';

import backgroundImg from '../../assets/background-galaxy.png';

import { styles } from './styles';

interface Props {
    chilren: React.ReactNode;
}

export function Background({ children }: Props.children) {
  return (
    <ImageBackground
        source={backgroundImg}
        style={styles.container}
        defaultSource={backgroundImg}
    >
        {children}
    </ImageBackground>
  );
}