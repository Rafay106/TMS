import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import axios from "axios";

const DriverScreen = () => {
  const [student, setStudent] = useState();

  useEffect(() => {
    fetchStudents();
    return () => {};
  }, []);

  const fetchStudents = () => {
    const apiURL = "http://192.168.1.8/tms/fetch_students.php";

    axios
      .get(apiURL)
      .then((response) => {
        setStudent(response.data);
      })
      .catch((error) => console.log(error));
  };

  renderItem = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity>
          <View style={styles.student}>
            <Text style={[styles.sname, styles.sdata]}>{item.name}</Text>
            <Text style={[styles.sdata]}>{item.contact}</Text>
            <Text style={[styles.sdata]}>{item.address}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.driverContainer}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerText}>Driver Name</Text>
          <Text style={styles.headerText}>Bus No</Text>
          <Text style={styles.headerText}>Total No of Students</Text>
        </View>
        <View>
          <Text style={styles.headerText}>Ruchi Sharma</Text>
          <Text style={styles.headerText}>AC-01</Text>
          <Text style={styles.headerText}>4</Text>
        </View>
      </View>
      <FlatList
        data={student}
        renderItem={renderItem}
        keyExtractor={(item) => `key-${item.id}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  driverContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: "blue",
  },
  header: {
    margin: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",

    borderWidth: 5,
    borderColor: "green",
    borderRadius: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "500",
  },
  student: {
    margin: 10,
    padding: 10,

    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
  },
  sname: {
    fontSize: 16,
    fontWeight: "500",
  },
});

export default DriverScreen;
