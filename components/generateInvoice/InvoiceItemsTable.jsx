import React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import InvoiceTableHeader from './InvoiceTableHeader';
import InvoiceTableRow from './InvoiceTableRow';
import InvoiceTableFooter from './InvoiceTableFooter';

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
    lineHeight: 1.25,
  },
});

const InvoiceItemsTable = (props) => {
  return (
    <View style={styles.tableContainer}>
      <InvoiceTableHeader />
      <InvoiceTableRow items={props.particulars} />

      <InvoiceTableFooter total={props.total} currency={props.currency} />
    </View>
  );
};

export default InvoiceItemsTable;
