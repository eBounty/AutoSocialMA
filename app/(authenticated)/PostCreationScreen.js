import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { auth, db, firebase } from "../../firebase";
import { useRouter } from "expo-router";
import Colors from "../../constants/Colors";
import { theme } from "../../core/theme";
import DateTimePicker from "@react-native-community/datetimepicker";
import Slider from "@react-native-community/slider";

const PostCreationScreen = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [platform, setPlatform] = useState("");
  const [budget, setBudget] = useState("");
  const [duration, setDuration] = useState("");

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [mentions, setMentions] = useState("");

  const router = useRouter();

  const handleSubmit = async () => {
    if (!text || !targetAudience || !platform) {
      Alert.alert("Error", "Please fill in all required fields.");
      return;
    }

    try {
      // Create a new document in Firestore
      const docRef = await db.collection("posts").add({
        text,
        image,
        link,
        targetAudience,
        platform,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(), // Use server timestamp for creation time
      });

      console.log("Post created with ID:", docRef.id);

      // Redirect to payment screen using navigation (replace with your navigation logic)
      router.navigate("PaymentScreen", { postId: docRef.id }); // Pass post ID for payment processing
      // router.navigate("PaymentScreen", { postId: "3636" }); // Pass post ID for payment processing
      Alert.alert(
        "Success",
        "Your post has been created. Please proceed to payment."
      );
    } catch (error) {
      console.error("Error adding document:", error);
      Alert.alert("Error", "Failed to create post. Please try again.");
    }
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create New Post</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter post text"
        onChangeText={(text) => setText(text)}
        value={text}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Enter image URL"
        onChangeText={(image) => setImage(image)}
        value={image}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter link URL"
        onChangeText={(link) => setLink(link)}
        value={link}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter target audience"
        onChangeText={(audience) => setTargetAudience(audience)}
        value={targetAudience}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter preferred platforms"
        onChangeText={(platform) => setPlatform(platform)}
        value={platform}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter hashtags"
        onChangeText={(platform) => setPlatform(platform)}
        value={platform}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter mentions"
        onChangeText={(mentions) => setMentions(mentions)}
        value={mentions}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Budget"
        onChangeText={(budget) => setBudget(budget)}
        value={budget}
      />
      <Button
        onPress={showDatepicker}
        title="Schedule Date"
        color={theme.colors.secondary}
      />
      <Button
        onPress={showTimepicker}
        title="Schedule Time"
        color={theme.colors.secondary}
      />
      <Text>selected: {date.toLocaleString()}</Text>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={(date) => setDate(date)}
        />
      )}
      <Text>Duration: {duration}</Text>
      <Slider
        style={{ width: 300, height: 40 }}
        minimumValue={1}
        maximumValue={100}
        step={1}
        minimumTrackTintColor="green"
        maximumTrackTintColor="#000000"
        value={duration}
        onValueChange={(duration) => setDuration(duration)}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit Post</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333333",
  },
  input: {
    height: 50,
    borderColor: "#cccccc",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    fontSize: 16,
    color: "#555555",
  },
  button: {
    backgroundColor: theme.colors.secondary,
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default PostCreationScreen;
