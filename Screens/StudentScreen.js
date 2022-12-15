import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button, StatusBar } from "react-native";
import axios from "axios";

const StudentScreen = () => {
  const [student, setStudent] = useState();

  useEffect(() => {
    fetchStudent();
    return () => {};
  }, []);

  const fetchStudent = () => {
    const apiURL = "http://192.168.1.8/tms/fetch_student.php";
    axios
      .get(apiURL)
      .then((response) => {
        console.log(response.data);
        setStudent(response.data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <View style={styles.studentContainer}>
      <View>
        <View style={styles.container5}>
          <Text>{student && student.name ? student.name : ""}</Text>

          <Text style={styles.container2}>
            {student && student.address ? student.address : ""}
          </Text>

          <Text style={styles.container2}>
            {student && student.contact ? student.contact : ""}
          </Text>

          <Text style={styles.container2}>
            {student && student.boarding ? "YES" : "NO"}
          </Text>
        </View>
        {/* view for button */}
        <View style={styles.container2}>
          <Button
            style={styles.container4}
            title="LET'S CHAT WITH BUS DRIVER"
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  studentContainer: {
    borderWidth: 1,
    borderColor: "blue",

    alignItems: "center",
    padding: 10,
  },
});

export default StudentScreen;
