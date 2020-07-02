import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { addition, subtraction } from './store/action';

const Counter = (props) => {
  const data = useSelector((state) => state)
  const { counter, name } = data
  const dispatch = useDispatch();

  // const [counter, setCounter] = useState(0)

  // const additionHandler = () => {
  //   setCounter(counter + 1);
  // }

  // const subtracttionHandler = () => {
  //   setCounter(counter -1)
  // }



  return (
    <View style={styles.container}>
      <Button
        title="Add"
        // onPress={() => additionHandler() }
        onPress={() => dispatch(addition()) }
        />
  <Text>{counter}</Text>
  <Text>{name}</Text>
      <Button
        title="Subtract"
        onPress={() => dispatch(subtraction()) }
        // onPress={() => subtracttionHandler()}
      />
    </View>
  );
}
export default Counter

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
