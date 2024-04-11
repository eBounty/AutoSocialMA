import Dropdown from "../../../components/Dropdown";
import RoundBtn from "../../../components/RoundBtn";
// import WidgetList from "../components/SortableList/WidgetList";
import Colors from "../../../constants/Colors";
import { defaultStyles } from "../../../constants/Styles";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Button,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { useRouter } from "expo-router";

const Page = () => {
  const router = useRouter();
  const { balance, runTransaction, transactions, createPost } = {
    transactions: [],
    runTransaction: null,
    balance: () => 100,
    createPost: () => router.push("/PostCreationScreen"),
  };
  const headerHeight =
    Platform.OS === "android" || Platform.OS === "ios" ? useHeaderHeight() : 0;

  const onAddMoney = () => router.push("/payment");

  const transactions1 = [
    {
      id: 1, // Unique identifier for each transaction
      title: "Salary Post",
      amount: 2000, // Positive for income
      date: new Date(2024, 3, 9), // April 9, 2024 (adjust as needed)
    },
    {
      id: 2,
      title: "Grocery Shopping",
      amount: -50.75, // Negative for expense
      date: new Date(2024, 3, 8), // April 8, 2024
    },
    {
      id: 3,
      title: "Movie Ticket",
      amount: -12.5, // Negative for expense
      date: new Date(2024, 3, 6), // April 6, 2024
    },
    {
      id: 1, // Unique identifier for each transaction
      title: "Salary Post",
      amount: 2000, // Positive for income
      date: new Date(2024, 3, 9), // April 9, 2024 (adjust as needed)
    },
    {
      id: 2,
      title: "Grocery Shopping Post",
      amount: -50.75, // Negative for expense
      date: new Date(2024, 3, 8), // April 8, 2024
    },
    {
      id: 3,
      title: "Movie Ticket",
      amount: -12.5, // Negative for expense
      date: new Date(2024, 3, 6), // April 6, 2024
    },
    // Add more transactions as needed
  ];

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView
        style={{ backgroundColor: Colors.background }}
        contentContainerStyle={{
          paddingTop: headerHeight,
        }}
      >
        <View style={styles.account}>
          <View style={styles.row}>
            <Text style={styles.balance}>{balance()}</Text>
            <Text style={styles.currency}>$</Text>
          </View>
          <TouchableOpacity
            style={[
              defaultStyles.pillButtonSmall,
              { backgroundColor: Colors.lightGray, marginVertical: 20 },
            ]}
          >
            <Text
              style={[defaultStyles.buttonTextSmall, { color: Colors.dark }]}
            >
              Accounts
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.actionRow}>
          <RoundBtn icon={"add"} text={"Add money"} onPress={onAddMoney} />
          <RoundBtn
            icon={"create-outline"}
            text={"Post"}
            onPress={createPost}
          />
          <RoundBtn icon={"list"} text={"Post History"} />
          {/* <Dropdown /> */}
        </View>

        <Text style={defaultStyles.sectionHeader}>Transactions</Text>
        <View style={styles.transactions}>
          {transactions1.length === 0 && (
            <Text style={{ padding: 14, color: Colors.gray }}>
              No transactions yet
            </Text>
          )}
          {transactions1.map((transaction) => (
            <View
              key={transaction.id}
              style={{ flexDirection: "row", alignItems: "center", gap: 16 }}
            >
              <View style={styles.circle}>
                <Ionicons
                  name={transaction.amount > 0 ? "add" : "remove"}
                  size={24}
                  color={Colors.dark}
                />
              </View>

              <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: "400" }}>{transaction.title}</Text>
                <Text style={{ color: Colors.gray, fontSize: 12 }}>
                  {transaction.date.toLocaleString()}
                </Text>
              </View>
              <Text>{transaction.amount}$</Text>
            </View>
          ))}
        </View>
        <Text style={defaultStyles.sectionHeader}>Widgets</Text>
        {/* <WidgetList /> */}
      </ScrollView>
    </GestureHandlerRootView>
  );
};
const styles = StyleSheet.create({
  account: {
    margin: 80,
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    gap: 10,
  },
  balance: {
    fontSize: 50,
    fontWeight: "bold",
  },
  currency: {
    fontSize: 20,
    fontWeight: "500",
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  transactions: {
    marginHorizontal: 20,
    padding: 14,
    backgroundColor: "#fff",
    borderRadius: 16,
    gap: 20,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.lightGray,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Page;
