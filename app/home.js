import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Avatar, Divider, Icon } from "react-native-elements";

export default function App() {
  const userBalance = 1000; // Replace this with the user's actual balance
  const recentTransactions = [
    {
      id: 1,
      description: "Purchase at Store",
      amount: -50,
      date: "2023-01-01",
    },
    { id: 2, description: "Salary Deposit", amount: 1000, date: "2023-01-05" },
    {
      id: 3,
      description: "Purchase at Store",
      amount: -50,
      date: "2023-01-01",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Avatar
            rounded
            size="small"
            source={{ uri: "https://placekitten.com/100/100" }} // Replace with the user's actual avatar
          />
          <Text style={styles.welcomeText}>Welcome, User!</Text>
        </View>
        <Icon name="notifications" size={30} color="#333" />
      </View>

      <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>Your Balance</Text>
        <Text style={styles.balanceAmount}>${userBalance.toFixed(2)}</Text>
      </View>

      <View>
        <Text style={styles.transactionsLabel}>New Investments</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#fff",
              padding: 12,
              borderRadius: 20,
              width: 170,
              marginHorizontal: 6,
              marginBottom: 20,
            }}
          >
            <Avatar
              rounded
              size="medium"
              source={{ uri: "https://placekitten.com/100/100" }} // Replace with the user's actual avatar
            />
            <Text
              style={{
                fontSize: 10,
                color: "#333",
              }}
            >
              50 transports !
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "bold",
                color: "#333",
              }}
            >
              $741
            </Text>
          </View>

          <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#fff",
              padding: 12,
              borderRadius: 20,
              width: 170,
              marginHorizontal: 6,
              marginBottom: 20,
            }}
          >
            <Avatar
              rounded
              size="medium"
              source={{ uri: "https://placekitten.com/100/100" }} // Replace with the user's actual avatar
            />
            <Text
              style={{
                fontSize: 10,
                color: "#333",
              }}
            >
              50 transports !
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "bold",
                color: "#333",
              }}
            >
              $741
            </Text>
          </View>
        </ScrollView>
      </View>

      <View style={styles.transactionsContainer}>
        <Text style={styles.transactionsLabel}>Recent Transactions</Text>
        <View></View>
        <ScrollView>
          {recentTransactions.map((transaction) => (
            <>
              <View key={transaction.id} style={styles.transactionItem}>
                <View style={styles.transactionDetails}>
                  <Icon
                    name="shopping-cart"
                    type="font-awesome"
                    size={20}
                    color="#3498db"
                    style={{ marginRight: 8 }}
                  />
                  <Text style={styles.transactionDescription}>
                    {transaction.description}
                  </Text>
                </View>
                <Text style={styles.transactionAmount}>
                  {transaction.amount > 0 ? "+" : "-"}$
                  {Math.abs(transaction.amount).toFixed(2)}
                </Text>
              </View>
              <View style={styles.transactionInfo}>
                {/* <Icon
                  name="calendar"
                  type="font-awesome-5"
                  size={10}
                  color="#95a5a6"
                  style={{ marginRight: 8 }}
                /> */}
                <Text style={styles.transactionDate}>{transaction.date}</Text>
              </View>
              <Divider />
            </>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    padding: 20,
    paddingTop: 65,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 10,
  },
  balanceContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  balanceLabel: {
    fontSize: 18,
    color: "#333",
    marginBottom: 10,
  },
  balanceAmount: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2ecc71", // Green color for positive balance
  },
  transactionsContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },
  transactionsLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginBottom: 15,
    marginTop: 10,
  },
  transactionInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  transactionDate: {
    fontSize: 14,
    color: "#95a5a6",
    marginBottom: 15,
    marginLeft: 5,
  },
  transactionDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  transactionDescription: {
    fontSize: 16,
    color: "#333",
    marginLeft: 5,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#e74c3c", // Red color for negative amount
  },
});
