import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const PostApprovalScreen = () => {
  const router = useRouter();
  // Dummy data for pending posts
  const [pendingPosts, setPendingPosts] = useState([
    { id: 1, text: "Check out our latest product!" },
    { id: 2, text: "Exciting news coming soon!" },
  ]);

  const handleApprove = (postId) => {
    // Logic to approve the post
    console.log("Post approved:", postId);
    // Update the state to remove the approved post from the list
    setPendingPosts(pendingPosts.filter((post) => post.id !== postId));
    // Show an alert or notification confirming the approval
    Alert.alert("Post Approved", "The post has been successfully approved.");
  };

  const handleReject = (postId) => {
    // Logic to reject the post
    console.log("Post rejected:", postId);
    // Update the state to remove the rejected post from the list
    setPendingPosts(pendingPosts.filter((post) => post.id !== postId));
    // Show an alert or notification confirming the rejection
    Alert.alert("Post Rejected", "The post has been rejected.");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Pending Posts</Text>
      {pendingPosts.map((post) => (
        <TouchableOpacity onPress={() => router.push("admin/ViewPostScreen")}>
          <View key={post.id} style={styles.postContainer}>
            <Text style={styles.postText}>{post.text}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.approveButton]}
                onPress={() => handleApprove(post.id)}
              >
                <Ionicons name="checkmark" size={24} color="#fff" />
                <Text style={styles.buttonText}>Approve</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.rejectButton]}
                onPress={() => handleReject(post.id)}
              >
                <Ionicons name="close" size={24} color="#fff" />
                <Text style={styles.buttonText}>Reject</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f9f9f9",
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  postContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    elevation: 2,
  },
  postText: {
    fontSize: 16,
    marginBottom: 10,
    color: "#333",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5,
    color: "#fff",
  },
  approveButton: {
    backgroundColor: "#28a745",
  },
  rejectButton: {
    backgroundColor: "#dc3545",
  },
});

export default PostApprovalScreen;
