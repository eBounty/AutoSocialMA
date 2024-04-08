import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const PaymentScreen = () => {
  const handlePaymentOption = (option) => {
    console.log(`Selected payment option: ${option}`);
    // Implement payment logic based on the selected option
  };

  return (
    <ImageBackground
      source={{ uri: "https://cdn.wallpapersafari.com/96/74/AJ8k4h.jpg" }} // Replace with your own background image
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Choose a Payment Option</Text>
          </View>

          <TouchableOpacity
            style={styles.paymentOption}
            onPress={() => handlePaymentOption("Credit Card")}
          >
            <Icon
              name="credit-card"
              size={24}
              color="#3498db"
              style={styles.icon}
            />
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>Credit Card</Text>
              <Text style={styles.optionSubtitle}>Safe and secure payment</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.paymentOption}
            onPress={() => handlePaymentOption("PayPal")}
          >
            <Icon name="paypal" size={24} color="#3498db" style={styles.icon} />
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>PayPal</Text>
              <Text style={styles.optionSubtitle}>
                Pay with your PayPal account
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.paymentOption}
            onPress={() => handlePaymentOption("Google Pay")}
          >
            <Icon
              name="google-pay"
              size={24}
              color="#3498db"
              style={styles.icon}
            />
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>Google Pay</Text>
              <Text style={styles.optionSubtitle}>Fast and convenient</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    backgroundColor: "transparent",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  paymentOption: {
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    padding: 20,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  icon: {
    marginRight: 15,
  },
  optionTextContainer: {
    flex: 1,
  },
  optionTitle: {
    color: "#3498db",
    fontSize: 18,
    fontWeight: "bold",
  },
  optionSubtitle: {
    color: "#555",
    fontSize: 14,
  },
});

export default PaymentScreen;
