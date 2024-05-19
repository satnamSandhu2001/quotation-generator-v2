import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#645eeb';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderColor: '#645eeb',
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    alignItems: 'center',
    fontSize: 12,
    fontStyle: 'bold',
  },
  description: {
    width: '80%',
    textAlign: 'left',
    borderRightColor: borderColor,
    borderRightWidth: 2,
    fontSize: 12,
    paddingVertical: 5,
    fontWeight: 'extrabold',
    paddingHorizontal: 8,
  },
  total: {
    width: '20%',
    textAlign: 'right',
    fontSize: 12,
    paddingVertical: 5,
    paddingHorizontal: 8,
    fontWeight: 'extrabold',
  },
});

const InvoiceTableFooter = (props) => {
  return (
    <View style={styles.row}>
      <Text style={styles.description}>Total </Text>
      <Text style={styles.total}>Rs. {props.total} /-</Text>
    </View>
  );
};

export default InvoiceTableFooter;
