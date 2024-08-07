import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#fff';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#645eeb',
    borderColor: '#645eeb',
    color: '#fff',
    alignItems: 'center',
    textAlign: 'center',
    flexGrow: 1,
  },

  particulars: {
    fontSize: 12,
    fontWeight: 'semibold',
    paddingVertical: 8,
    paddingHorizontal: 8,
    width: '30%',
    borderRightColor: borderColor,
    borderRightWidth: 2,
  },

  price: {
    fontWeight: 'semibold',
    fontSize: 12,
    width: '20%',
    paddingVertical: 8,
    paddingHorizontal: 8,
  },

  description: {
    fontWeight: 'semibold',
    borderRightWidth: 2,
    borderRightColor: borderColor,
    fontSize: 12,
    paddingVertical: 8,
    paddingHorizontal: 8,
    width: '50%',
  },
});

const InvoiceTableHeader = () => (
  <View style={styles.container}>
    <Text style={styles.particulars}>Particulars</Text>
    <Text style={styles.description}>Description</Text>
    <Text style={styles.price}>Price</Text>
  </View>
);

export default InvoiceTableHeader;
