import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AdminDashboardScreen = () => {
  // Dummy data for pending posts and payment status
  const pendingPosts = [
    { id: 1, text: "Check out our latest product!" },
    { id: 2, text: "Exciting news coming soon!" },
  ];
  const paymentStatus = [
    { id: 1, user: "John Doe", amount: 50.0, status: "Paid" },
    { id: 2, user: "Jane Smith", amount: 30.0, status: "Pending" },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Admin Dashboard</Text>
        <Ionicons name="ios-settings" size={24} color="black" />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pending Posts</Text>
        {pendingPosts.map((post) => (
          <TouchableOpacity key={post.id} style={styles.item}>
            <Text style={styles.itemText}>{post.text}</Text>
            <Ionicons
              name="ios-checkmark-circle-outline"
              size={24}
              color="#007bff"
            />
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment Status</Text>
        {paymentStatus.map((payment) => (
          <View key={payment.id} style={styles.item}>
            <Text style={styles.itemText}>
              {payment.user} - ${payment.amount.toFixed(2)} ({payment.status})
            </Text>
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Manage Users</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>View Payment History</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  itemText: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});

export default AdminDashboardScreen;
