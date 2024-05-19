import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 18,
  },
  reportTitle: {
    color: '#000',
    fontWeight: 'extrabold',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 1.5,
  },
});

const InvoiceTitle = () => (
  <View style={styles.titleContainer}>
    <Text style={styles.reportTitle}>[contact@satnamsandhu.com]</Text>
    <Text style={styles.reportTitle}>[+91 9814185039]</Text>
  </View>
);

export default InvoiceTitle;
