import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import useCurrentLoggedInUser from "../hooks/useCurrentLoggedInUser";
import { useRouter } from "expo-router";
const DashboardScreen = () => {
  // Animation for the header
  const headerOpacity = new Animated.Value(0);
  const router = useRouter();
  const currentLoggedInUser = useCurrentLoggedInUser();

  React.useEffect(() => {
    Animated.timing(headerOpacity, {
      toValue: 1,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.header, { opacity: headerOpacity }]}>
        <Text style={styles.headerText}>
          Welcome, {currentLoggedInUser.name}
        </Text>
        <TouchableOpacity>
          <Ionicons name="ios-settings" size={24} color="#007bff" />
        </TouchableOpacity>
      </Animated.View>

      <LinearGradient
        colors={["#ffffff", "#f0f0f0"]}
        style={styles.gradient}
        start={[0, 0]}
        end={[1, 1]}
      >
        {/* Account Overview */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Account Overview</Text>
          <View style={styles.cardContent}>
            <View style={styles.accountItem}>
              <Text style={styles.accountLabel}>Username:</Text>
              <Text style={styles.accountValue}>
                {currentLoggedInUser.name}
              </Text>
            </View>
            <View style={styles.accountItem}>
              <Text style={styles.accountLabel}>Email:</Text>
              <Text style={styles.accountValue}>
                {currentLoggedInUser.email}
              </Text>
            </View>
            {/* Add more account details as needed */}
          </View>
        </View>

        {/* Recent Activity */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Recent Activity</Text>
          <View style={styles.cardContent}>
            <TouchableOpacity style={styles.activityItem}>
              <Ionicons name="ios-albums" size={24} color="#007bff" />
              <Text style={styles.activityText}>Pending Posts: 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.activityItem}>
              <Ionicons name="ios-checkmark-circle" size={24} color="#28a745" />
              <Text style={styles.activityText}>Published Posts: 10</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.activityItem}>
              <Ionicons name="ios-cash" size={24} color="#ffc107" />
              <Text style={styles.activityText}>Payment History</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>

      {/* Navigation */}
      <View style={styles.navigation}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => router.push("PostCreationScreen")}
        >
          <Text style={styles.navButtonText}>Create Post</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => router.push("profile")}
        >
          <Text style={styles.navButtonText}>Profile Settings</Text>
        </TouchableOpacity>
        {/* Add more navigation options */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  gradient: {
    flex: 1,
    borderRadius: 10,
    marginBottom: 20,
    // padding: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
    marginBottom: 20,
    padding: 20,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardContent: {
    flexDirection: "column",
  },
  accountItem: {
    flexDirection: "row",
    marginBottom: 10,
  },
  accountLabel: {
    fontWeight: "bold",
    marginRight: 5,
  },
  accountValue: {
    flex: 1,
  },
  activityItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  activityText: {
    fontSize: 16,
    marginLeft: 10,
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  navButton: {
    backgroundColor: "#007bff",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "48%",
    alignItems: "center",
  },
  navButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default DashboardScreen;
