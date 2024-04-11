import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../core/theme";
import { useLocalSearchParams, useRouter } from "expo-router";
import { db } from "../../firebase";

const PaymentScreen = () => {
  const { postId } = useLocalSearchParams();
  const router = useRouter();
  const [postDetails, setPostDetails] = useState({
    text: "Check out our latest product!",
    image: "https://example.com/image.jpg",
    link: "https://example.com/product",
    targetAudience: "Social media enthusiasts",
    platforms: ["Facebook", "Twitter", "Instagram"],
    hashtags: ["newproduct", "socialmedia", "promotion"],
    mentions: ["@examplecompany"],
    scheduleDate: "2024-04-01",
    scheduleTime: "10:00 AM",
    budget: 1000, // Amount in USD
    duration: "3 days",
  });

  useEffect(() => {
    try {
      const data = db.collection("posts").doc(postId).get();
      setPostDetails(data);
    } catch (error) {
      console.log(error);
    }
  }, [postDetails]);

  const handlePayment = () => {
    router.push("/payment");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Post Details</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Information</Text>
        <View style={styles.postDetails}>
          <Text style={styles.detailLabel}>Text:</Text>
          <Text style={styles.detailValue}>{postDetails.text}</Text>

          <Text style={styles.detailLabel}>Image:</Text>
          <Text style={styles.detailValue}>{postDetails.image}</Text>

          <Text style={styles.detailLabel}>Link:</Text>
          <Text style={styles.detailValue}>{postDetails.link}</Text>

          <Text style={styles.detailLabel}>Target Audience:</Text>
          <Text style={styles.detailValue}>{postDetails.targetAudience}</Text>

          <Text style={styles.detailLabel}>Platforms:</Text>
          <Text style={styles.detailValue}>
            {postDetails.platforms.join(", ")}
          </Text>

          <Text style={styles.detailLabel}>Hashtags:</Text>
          <Text style={styles.detailValue}>
            {postDetails.hashtags.join(", ")}
          </Text>

          <Text style={styles.detailLabel}>Mentions:</Text>
          <Text style={styles.detailValue}>
            {postDetails.mentions.join(", ")}
          </Text>

          <Text style={styles.detailLabel}>Schedule Date:</Text>
          <Text style={styles.detailValue}>{postDetails.scheduleDate}</Text>

          <Text style={styles.detailLabel}>Schedule Time:</Text>
          <Text style={styles.detailValue}>{postDetails.scheduleTime}</Text>

          <Text style={styles.detailLabel}>Budget:</Text>
          <Text style={styles.detailValue}>
            ${postDetails.budget.toFixed(2)}
          </Text>

          <Text style={styles.detailLabel}>Duration:</Text>
          <Text style={styles.detailValue}>{postDetails.duration}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handlePayment}>
        <Text style={styles.buttonText}>Proceed to Payment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  postDetails: {
    marginBottom: 10,
  },
  detailLabel: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  detailValue: {
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  inlineInputs: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfInput: {
    flex: 1,
    marginRight: 10,
  },
  button: {
    backgroundColor: theme.colors.secondary,
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});

export default PaymentScreen;
