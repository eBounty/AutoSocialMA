import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Animated,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // Import MaterialIcons

const NotificationScreen = () => {
  const notifications = [
    {
      id: 1,
      title: "New Message",
      message: "You have a new message from John Doe.",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      title: "Payment Received",
      message: "You received a payment of $50 from Jane Smith.",
      timestamp: "1 day ago",
    },
    {
      id: 3,
      title: "Meeting Reminder",
      message: "Reminder: Team meeting at 3:00 PM today.",
      timestamp: "3 days ago",
    },
    // Add more notifications as needed
  ];

  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
  const scrollY = new Animated.Value(0);

  const renderNotificationItem = ({ item, index }) => {
    const translateY = scrollY.interpolate({
      inputRange: [0, 100],
      outputRange: [0, index % 2 === 0 ? -10 : 10],
    });

    return (
      <Animated.View
        style={{
          ...styles.notificationItem,
          transform: [{ translateY }],
        }}
      >
        <MaterialIcons
          name="notifications"
          size={24}
          color="#3498db"
          style={styles.icon}
        />
        <View style={styles.notificationTextContainer}>
          <Text style={styles.notificationTitle}>{item.title}</Text>
          <Text style={styles.notificationMessage}>{item.message}</Text>
          <Text style={styles.notificationTimestamp}>{item.timestamp}</Text>
        </View>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      <AnimatedFlatList
        data={notifications}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderNotificationItem}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          {
            useNativeDriver: false,
          }
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  notificationItem: {
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    padding: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  icon: {
    marginRight: 15,
  },
  notificationTextContainer: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  notificationMessage: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
  notificationTimestamp: {
    fontSize: 12,
    color: "#777",
    marginTop: 5,
  },
});

export default NotificationScreen;
