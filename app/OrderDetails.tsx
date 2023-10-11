import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

const OrderDetails = () => {
  const [order] = useState([
    {
      id: 1,
      date: "October 13,2023",
      time: "7:33 pm",
      canceldate: "October 14,2022",
      canceltime: "3:53 pm",
      cancelcause: "Customer changed/cancelled order",
      paymentStatus: 'Voided',
      fulfilledStatus: 'Fulfilled',
      // total: 100,
      product: "Feel Elite Squad - Gold MemberShip",
      productdetails: "Full name: Elie testing....",
      sku: "123423523516235",
      price: "$10,000.00",
      quantity: "2",
      total: "$20,000.00",
      subtotal: "$20,000.00",
      shipping: "$0.00",
      tax: "$3.00",
      grandTotal: "$20,000.00",
    },
  ]);

  const orderData = order[0]; // Access the order data

  interface RowItemProps2 {
    label: string;
    value: string | number;
    value2: string | number;
  }

  interface RowItemProps {
    label: string;
    value: string | number;
  }

  const RowItem: React.FC<RowItemProps> = ({ label, value }) => (
    <View style={styles.row}>
      <View style={styles.smallContainer}>
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={styles.bigContainer}>
        <Text style={styles.value}>{String(value)}</Text>
      </View>
    </View>
  );
  const RowItem1: React.FC<RowItemProps2> = ({ label, value, value2 }) => (
    <View style={styles.row}>
      <View style={styles.smallContainer}>
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={styles.bigContainer}>
        <Text style={styles.value2}>{String(value2)}</Text>
        <Text style={styles.value}>{String(value)}</Text>
      </View>
    </View>
  );
  const RowItem2: React.FC<RowItemProps> = ({ label, value }) => (
    <View style={styles.row}>
      <View style={styles.bigContainer}>
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={styles.smallContainer}>
        <Text style={styles.value}>{String(value)}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.maincontainer}>
      <Text style={styles.order}>Order #{orderData.id}</Text>
      <Text style={styles.data}>
        Placed on {orderData.date} at {orderData.time}
      </Text>
      <Text style={styles.data}>
        Cancelled on {orderData.canceldate} at {orderData.canceltime}
      </Text>
      <Text style={styles.data}>Reason: {orderData.cancelcause}</Text>

      <View style={styles.horizontalLine} />
            {/*
      <Text style={styles.data}>Total: ${orderData.total}</Text> */}
      <View style={styles.section}>
        <RowItem1
          label="Product"
          value={orderData.productdetails}
          value2={orderData.product}
        />
        <RowItem label="SKU" value={orderData.sku} />
        <RowItem label="Price" value={orderData.price} />
        <RowItem label="Quantity" value={orderData.quantity} />
        <RowItem label="Total" value={orderData.total} />
      </View>

      <View style={styles.section}>
      <RowItem label="Subtotal" value={orderData.subtotal} />
      <RowItem2
        label="Shipping (Standard Delivery time is 2-4 working days | Join the Elite Squad to get free delivery on all orders)"
        value={orderData.shipping}
      />
      <RowItem label="Tax (VAT 11.0%)" value={orderData.tax} />
      <View style={styles.row}>
        <View style={styles.smallContainer}>
          <Text style={styles.totallabel}>Total</Text>
        </View>
        <View style={styles.bigContainer}>
          <Text style={styles.totalvalue}>$20,000.00</Text>
        </View>
        </View>
        </View>
        <View style={styles.horizontalLine} />

          <Text style={styles.title}>Billing Address</Text>
          <View style={styles.rownospace}>
          <Text style={styles.status}>Payment Status: </Text><Text style={styles.data}>{orderData.paymentStatus}</Text>
          </View>
          <Text style={styles.smallmb}>Elie TestingElie Testing</Text>
          <Text style={styles.smallmb}>Elie Testing</Text>
          <Text style={styles.smallmb}>Lebanon</Text>


          <Text style={styles.title}>Shipping Address</Text>
          <View style={styles.rownospace}>
          <Text style={styles.status}>Shipping Status: </Text><Text style={styles.data}>{orderData.fulfilledStatus}</Text>
          </View>
          <Text style={styles.smallmb}>Elie TestingElie Testing</Text>
          <Text style={styles.smallmb}>Elie Testing</Text>
          <Text style={styles.smallmb}>Lebanon</Text>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#FFFBFB",
  },
  container: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom:20,
  },
  order: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  rownospace: {
    flexDirection: "row",
  },
  bigContainer: {
    flex: 2,
  },
  smallContainer: {
    flex: 1,
  },
  label: {
    marginBottom: 15,
  },
  smallmb: {
    marginBottom: 5,
  },
  value: {
    textAlign: "right",
    marginBottom: 15,
  },
  value2: {
    textAlign: "right",
    color: "#9c9c9c",
  },
  data: {
    marginBottom: 20,
  },
  horizontalLine: {
    height: 0.5,
    backgroundColor: "#9c9c9c",
    marginBottom: 35,
    opacity: 0.3,
  },
  totallabel: {
    marginBottom: 15,
    color: "#9c9c9c",
  },
  totalvalue: {
    textAlign: "right",
    color: "#9c9c9c",
    fontSize: 20,
    fontWeight: "500",
  },
  title:{
    fontWeight: "500",
    fontSize: 22,
    marginBottom: 20,
    marginTop:40,
  },
  status:{
    fontWeight: "500",
    marginBottom: 20,
  }
});

export default OrderDetails;
