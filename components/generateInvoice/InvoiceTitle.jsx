import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 18,
  },
  reportTitle: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 1.5,
  },
});

const InvoiceTitle = () => (
  <View style={styles.titleContainer}>
    <Text style={styles.reportTitle}>[satnamsandhu70002@gmail.com]</Text>
    <Text style={styles.reportTitle}>[www.satnamsandhu.com]</Text>
    <Text style={styles.reportTitle}>[+91 98141-85039]</Text>
  </View>
);

export default InvoiceTitle;
