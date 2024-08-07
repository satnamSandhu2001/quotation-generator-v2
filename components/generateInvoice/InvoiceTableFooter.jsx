import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { TABLE_COLOR } from '@/lib/constants';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderColor: TABLE_COLOR,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    alignItems: 'center',
    fontSize: 11,
    fontStyle: 'bold',
  },
  description: {
    width: '80%',
    textAlign: 'left',
    borderRightColor: TABLE_COLOR,
    borderRightWidth: 1,
    fontSize: 11,
    paddingVertical: 5,
    fontWeight: 'extrabold',
    paddingHorizontal: 8,
  },
  total: {
    width: '20%',
    textAlign: 'right',
    fontSize: 11,
    paddingVertical: 5,
    paddingHorizontal: 8,
    fontWeight: 'extrabold',
  },
});

const InvoiceTableFooter = (props) => {
  return (
    <View style={styles.row}>
      <Text style={styles.description}>Total </Text>
      <Text style={styles.total}>
        {props.currency}
        {props.total}
      </Text>
    </View>
  );
};

export default InvoiceTableFooter;
