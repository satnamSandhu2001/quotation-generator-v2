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
      This quote and these terms & conditions constitute a binding agreement
      upon client acceptance.
    </ListItem>
    <ListItem>
      A deposit of 50% is required to begin work. The remaining balance is due
      upon project final testing.
    </ListItem>
    <ListItem>
      Project scope changes will affect the final cost. I will provide estimates
      for additional work.
    </ListItem>
    <ListItem>
      The source code for the website will be the developer&apos;s property
      untill full payment associated with the project is completed.
    </ListItem>
    <ListItem>
      Changes requested to the project after 3 months of completion will be
      considered additional work and billed accordingly.
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
