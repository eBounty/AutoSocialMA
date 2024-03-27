import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import {
  AntDesign,
  MaterialIcons,
  FontAwesome,
  Entypo,
} from "@expo/vector-icons"; // Import icons

const UserProfileScreen = ({ navigation }) => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    profileImage: "https://placekitten.com/150/150", // Replace with the user's actual profile image
    bio: "Passionate explorer of new technologies and avid learner.",
    membershipLevel: "Gold", // Example membership level
    followers: 1200,
    following: 800,
    twitter: "https://twitter.com/johndoe",
    linkedin: "https://www.linkedin.com/in/johndoe",
  };

  const handleLogout = () => {
    // Implement your logout logic here
    navigation.navigate("Login"); // Navigate to the login screen after logout
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: user.profileImage }}
          style={styles.profileImage}
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
        </View>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statsItem}>
          <Text style={styles.statsNumber}>{user.followers}</Text>
          <Text style={styles.statsLabel}>Followers</Text>
        </View>
        <View style={styles.statsItem}>
          <Text style={styles.statsNumber}>{user.following}</Text>
          <Text style={styles.statsLabel}>Following</Text>
        </View>
      </View>

      <View style={styles.membershipContainer}>
        <Text style={styles.membershipLabel}>Membership Level</Text>
        <View style={styles.membershipInfo}>
          <MaterialIcons name="star" size={24} color="#f39c12" />
          <Text style={styles.membershipLevel}>{user.membershipLevel}</Text>
        </View>
      </View>

      <View style={styles.bioContainer}>
        <Text style={styles.bioLabel}>Bio</Text>
        <Text style={styles.userBio}>{user.bio}</Text>
      </View>

      <View style={styles.socialContainer}>
        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => window.open(user.twitter, "_blank")}
        >
          <FontAwesome
            name="twitter"
            size={24}
            color="#1da1f2"
            style={styles.socialIcon}
          />
          <Text style={styles.socialText}>Twitter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => window.open(user.linkedin, "_blank")}
        >
          <FontAwesome
            name="linkedin"
            size={24}
            color="#0077b5"
            style={styles.socialIcon}
          />
          <Text style={styles.socialText}>LinkedIn</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.settingsButton}>
        <Entypo
          name="cog"
          size={24}
          color="#3498db"
          style={styles.settingsIcon}
        />
        <Text style={styles.settingsText}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <AntDesign
          name="logout"
          size={24}
          color="#e74c3c"
          style={styles.logoutIcon}
        />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    padding: 20,
    paddingTop: 30,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  userEmail: {
    fontSize: 16,
    color: "#777",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  statsItem: {
    alignItems: "center",
  },
  statsNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  statsLabel: {
    fontSize: 14,
    color: "#777",
  },
  membershipContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  membershipLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  membershipInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  membershipLevel: {
    fontSize: 16,
    marginLeft: 10,
    color: "#f39c12",
  },
  bioContainer: {
    marginBottom: 20,
  },
  bioLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  userBio: {
    fontSize: 14,
    color: "#555",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    padding: 15,
    flex: 1,
    marginRight: 10,
  },
  socialIcon: {
    marginRight: 10,
  },
  socialText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3498db",
  },
  settingsButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    padding: 15,
    marginBottom: 10,
  },
  settingsIcon: {
    marginRight: 10,
  },
  settingsText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3498db",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    padding: 15,
  },
  logoutIcon: {
    marginRight: 10,
  },
  logoutText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#e74c3c",
  },
});

export default UserProfileScreen;
