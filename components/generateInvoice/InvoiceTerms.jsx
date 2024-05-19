import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 3,
  },
  bullet: {
    height: '100%',
  },
  titleContainer: {
    marginTop: 12,
    color: '#202020',
  },
  reportTitle: {
    marginBottom: 7,
    fontSize: 12,
    fontWeight: 'extrabold',
  },
});

const InvoiceTerms = () => (
  <View style={styles.titleContainer}>
    <Text style={styles.reportTitle}>Terms & Conditions:</Text>
    <ListItem>
      Acceptance signifies agreement with these terms & customer will be billed
      after indicating acceptance of this quote.
    </ListItem>
    <ListItem>
      A deposit of 50% is required to begin work. The remaining balance is due
      upon project completion.
    </ListItem>
    <ListItem>
      Project scope changes may affect the final cost. I will provide estimates
      for additional work.
    </ListItem>
    <ListItem>
      This quote includes third-party costs like domain registration or hosting
      fees.
    </ListItem>
  </View>
);

const ListItem = ({ children }) => {
  return (
    <View style={styles.row}>
      <View style={styles.bullet}>
        <Text>{'\u2022' + ' ' + ' '}</Text>
      </View>
      <Text>{children}</Text>
    </View>
  );
};

export default InvoiceTerms;
