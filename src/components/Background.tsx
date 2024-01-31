import {ImageBackground, ImageSourcePropType, StyleSheet} from 'react-native';
import React, {PropsWithChildren, useEffect, useState} from 'react';
import BackgroundOne from '../../assets/DiceAppBackgroundOne.jpg';
import BackgroundTwo from '../../assets/DiceAppBackgroundTwo.jpg';
import BackgroundThree from '../../assets/DiceAppBackgroundThree.jpg';
type BackgroundImageProps = PropsWithChildren<{
  //   imageUrl: ImageSourcePropType;
  diceOne: number;
  diceTwo: number;
}>;

export default function BackgroundImage({
  children,
  diceOne,
  diceTwo,
}: BackgroundImageProps): JSX.Element {
  const [bg, setBg] = useState<ImageSourcePropType>(BackgroundOne);

  const generateBackground = () => {
    const total = diceOne + diceTwo;
    if (total < 6) {
      setBg(BackgroundThree);
    } else if (total > 10) {
      setBg(BackgroundTwo);
    } else {
      setBg(BackgroundOne);
    }
  };
  useEffect(() => {
    generateBackground();
  }, [diceOne, diceTwo]);
  return (
    <ImageBackground source={bg} style={{width: '100%', height: '100%'}}>
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({});
