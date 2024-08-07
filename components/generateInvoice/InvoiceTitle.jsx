import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 15,
  },
  title: {
    fontSize: '12px',
    textAlign: 'center',
    lineHeight: 2,
  },
});

const InvoiceTitle = () => (
  <View style={styles.titleContainer}>
    <Text style={styles.title}>[satnamsandhu70002@gmail.com]</Text>
    <Text style={styles.title}>[www.satnamsandhu.com]</Text>
    <Text style={styles.title}>[+91 98141-85039]</Text>
  </View>
);

export default InvoiceTitle;
