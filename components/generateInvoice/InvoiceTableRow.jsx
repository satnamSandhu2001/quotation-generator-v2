import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#645eeb';
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderColor: '#645eeb',
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
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
    borderRightColor: borderColor,
    borderRightWidth: 2,
  },

  price: {
    fontSize: 11,
    width: '20%',
    textAlign: 'right',
    paddingVertical: 5,
    paddingHorizontal: 8,
  },

  description: {
    borderRightColor: borderColor,
    borderRightWidth: 2,
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
      <Text style={styles.price}>{item.price} /-</Text>
    </View>
  ));
  return <Fragment>{rows}</Fragment>;
};

export default InvoiceTableRow;
