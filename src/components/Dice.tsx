import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';

type DicePropsType = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

export default function Dice({imageUrl}: DicePropsType): JSX.Element {
  return (
    <View style={styles.imageWrapper}>
      <Image style={styles.imageStyle} source={imageUrl} />
    </View>
  );
}

const styles = StyleSheet.create({
  imageWrapper: {
    shadowColor: '#000',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 0.5,
    elevation: 10,
    shadowRadius: 15,
    borderColor: 'red',
    // borderWidth: 1,
    borderRadius: 17,
  },
  imageStyle: {
    width: 130,
    height: 130,
    borderRadius: 17,
    // borderColor: 'red',
    // backgroundColor: 'black',
  },
});
