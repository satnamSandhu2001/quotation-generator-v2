import React from 'react';
import { Page, Document, StyleSheet, Image } from '@react-pdf/renderer';
import logo from '@/public/assets/images/logo.png';
import InvoiceTitle from './InvoiceTitle';
import BillTo from './BillTo';
import InvoiceItemsTable from './InvoiceItemsTable';
import InvoiceTerms from './InvoiceTerms';

const styles = StyleSheet.create({
  page: {
    fontWeight: 400,
    backgroundColor: '#fff',
    fontSize: 11,
    paddingTop: 50,
    paddingLeft: 70,
    paddingRight: 70,
    flexDirection: 'column',
  },
  logo: {
    width: '50%',
    height: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

const Invoice = (props) => {
  return (
    <>
      <Document>
        <Page size="A4" style={styles.page}>
          <Image style={styles.logo} src={logo.src} alt="" />
          <InvoiceTitle />

          <BillTo firm_name={props.firm_name} />
          <InvoiceItemsTable
            particulars={props.particulars}
            total={props.total}
            currency={props.currency}
          />
          <InvoiceTerms
            date={props.date}
            termsConditions={props.termsConditions}
          />
        </Page>
      </Document>
    </>
  );
};

export default Invoice;
