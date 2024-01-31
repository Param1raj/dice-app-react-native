import React, {useState, SetStateAction} from 'react';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import {
  Dimensions,
  ImageSourcePropType,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import DiceOne from '../assets/Dices1.jpg';
import DiceTwo from '../assets/Dices2.jpg';
import DiceThree from '../assets/Dices3.jpg';
import DiceFour from '../assets/Dices4.jpg';
import DiceFive from '../assets/Dices5.jpg';
import DiceSix from '../assets/Dices6.jpg';
import Dice from './components/Dice';
import BackgroundImage from './components/Background';
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

function App(): React.JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);
  const [secondDiceImage, setSecondDiceImage] =
    useState<ImageSourcePropType>(DiceTwo);
  const [diceNumber, setDiceNumber] = useState(1);
  const [secondDiceNumber, setSecondDiceNumber] = useState(1);

  const rollDice = (
    setNumber: (value: React.SetStateAction<number>) => void,
    setDice: (value: React.SetStateAction<ImageSourcePropType>) => void,
  ) => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber) {
      case 1:
        setNumber(1);
        setDice(DiceOne);
        break;
      case 2:
        setNumber(2);
        setDice(DiceTwo);
        break;
      case 3:
        setNumber(3);
        setDice(DiceThree);
        break;
      case 4:
        setNumber(4);
        setDice(DiceFour);
        break;
      case 5:
        setNumber(5);
        setDice(DiceFive);
        break;
      case 6:
        setNumber(6);
        setDice(DiceSix);
        break;
      default:
        setNumber(1);
        setDice(DiceOne);
        break;
    }
  };

  const rollTheDice = () => {
    rollDice(setDiceNumber, setDiceImage);
    rollDice(setSecondDiceNumber, setSecondDiceImage);
    ReactNativeHapticFeedback.trigger('impactHeavy', options);
  };

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{borderWidth: 0, borderColor: 'red'}}>
        <BackgroundImage diceOne={diceNumber} diceTwo={secondDiceNumber}>
          <View style={styles.container}>
            <View style={styles.innerContainer}>
              <View>
                <Text style={{color: 'black', fontSize: 23}}>
                  Dice One : {diceNumber}
                </Text>
                <Text style={{color: 'black', fontSize: 23}}>
                  Dice Two : {secondDiceNumber}
                </Text>
              </View>
              <View style={styles.diceWrapper}>
                <Dice imageUrl={diceImage} />
                <Dice imageUrl={secondDiceImage} />
              </View>
              <Pressable onPress={rollTheDice}>
                <Text style={styles.buttonText}>Tap To Roll</Text>
              </Pressable>
            </View>
          </View>
        </BackgroundImage>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 10,
    // backgroundColor: '#000',
  },
  buttonText: {
    color: '#fff',
    // borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
    // borderColor: '#EFC2C9',
    borderRadius: 10,
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#EFC2C9',
  },
  innerContainer: {
    // borderWidth: 1,
    borderColor: 'red',
    width: '80%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    zIndex: 100,
    padding: 10,
  },
  diceWrapper: {
    borderColor: 'red',
    width: '100%',
    flexDirection: 'row',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 15,
  },
  // }
});

export default App;
