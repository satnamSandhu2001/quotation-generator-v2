import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { TABLE_COLOR } from '@/lib/constants';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderColor: TABLE_COLOR,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    alignItems: 'stretch',
    fontStyle: 'bold',
    color: '#202020',
    lineHeight: 1.5,
  },
  title: {
    fontSize: 11,
    paddingVertical: 5,
    paddingHorizontal: 8,
    width: '30%',
    borderRightColor: TABLE_COLOR,
    borderRightWidth: 1,
  },

  price: {
    fontSize: 11,
    width: '20%',
    textAlign: 'right',
    paddingVertical: 5,
    paddingHorizontal: 8,
  },

  description: {
    borderRightColor: TABLE_COLOR,
    borderRightWidth: 1,
    fontSize: 11,
    paddingVertical: 5,
    paddingHorizontal: 8,
    width: '50%',
  },
});

const InvoiceTableRow = ({ items }) => {
  const rows = items.map((item) => (
    <View style={styles.row} key={Math.random().toString()}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  ));
  return <Fragment>{rows}</Fragment>;
};

export default InvoiceTableRow;
