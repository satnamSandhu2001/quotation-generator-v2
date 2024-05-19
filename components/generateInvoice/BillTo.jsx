import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 20,
    justifyContent: 'flex-start',
  },
  billTo: {
    fontSize: 16,
    fontWeight: 'extrabold',
  },
});

const BillTo = (props) => (
  <View style={styles.headerContainer}>
    <Text style={styles.billTo}>{props.firm_name}</Text>
  </View>
);

export default BillTo;
