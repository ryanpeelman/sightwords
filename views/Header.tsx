import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from '../styles/styles.css';
import {Pages} from '../enums';

type HeaderProps = {
  setCurrentPage: (page: Pages) => void;
};

export default function Header(props: HeaderProps): JSX.Element {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.setCurrentPage(Pages.Words)}>
        <Text style={styles.buttonText}>Words</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.setCurrentPage(Pages.Letter)}>
        <Text style={styles.buttonText}>By Letter</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.setCurrentPage(Pages.Count)}>
        <Text style={styles.buttonText}>By Count</Text>
      </TouchableOpacity>
    </View>
  );
}
