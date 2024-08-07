import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 5,
    lineHeight: 1.25,
  },
  bullet: {
    height: '100%',
    fontWeight: 600,
  },
  titleContainer: {
    marginTop: 12,
  },
  reportTitle: {
    marginBottom: 7,
    fontSize: '12px',
    fontWeight: 600,
  },
  date: {
    marginTop: 8,
    textAlign: 'right',
    fontSize: '12px',
  },
});

const InvoiceTerms = (props) => (
  <View style={styles.titleContainer}>
    <Text style={styles.reportTitle}>Terms & Conditions:</Text>
    {props.termsConditions?.length > 0 &&
      props.termsConditions.map((t, i) => <ListItem key={i}>{t}</ListItem>)}

    <Text style={styles.date}>
      Date:{' '}
      {new Date(props.date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })}
    </Text>
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
