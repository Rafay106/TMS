import { StyleSheet, View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  const pressHandlerDS = () => {
    navigation.navigate("DriverScreen");
  };
  const pressHandlerSS = () => {
    navigation.navigate("StudentScreen");
  };

  return (
    <View style={styles.homeContainer}>
      <Text style={{ fontSize: 26, fontWeight: "500", alignSelf: "center" }}>
        Welcome To TMS
      </Text>
      <View style={styles.btn}>
        <Button
          style={styles.btn}
          title="Driver Panel"
          onPress={pressHandlerDS}
        />

        <Button
          style={styles.btn}
          title="Student Panel"
          onPress={pressHandlerSS}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: "blue",
  },
  btn: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 10,
  },
});

export default HomeScreen;
