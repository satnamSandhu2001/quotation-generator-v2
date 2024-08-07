import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { TABLE_COLOR } from '@/lib/constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: TABLE_COLOR,
    borderColor: TABLE_COLOR,
    color: '#fff',
    alignItems: 'center',
    flexGrow: 1,
    fontWeight: 600,
  },

  particulars: {
    fontSize: '12px',
    paddingVertical: 8,
    paddingHorizontal: 8,
    width: '30%',
    borderRightColor: TABLE_COLOR,
    borderRightWidth: 1,
  },

  price: {
    fontSize: '12px',
    width: '20%',
    paddingVertical: 8,
    paddingHorizontal: 8,
    textAlign: 'right',
  },

  description: {
    borderRightWidth: 1,
    borderRightColor: TABLE_COLOR,
    fontSize: '12px',
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
