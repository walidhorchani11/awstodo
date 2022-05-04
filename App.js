import React, {useEffect, useState} from 'react';
import {Todo} from './src/models';
import {DataStore} from '@aws-amplify/datastore';

import {StyleSheet, Text, View, Pressable} from 'react-native';

import {withAuthenticator} from 'aws-amplify-react-native';
import {Auth} from 'aws-amplify';
import {Storage} from '@aws-amplify/storage';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const sub = DataStore.observeQuery(Todo).subscribe(snapshot => {
      const {items, isSynced} = snapshot;
      setItems(items);
    });

    return () => {
      console.log('clean useEffect on unmount and update -re-render-');
      sub.unsubscribe();
    };
  }, []);

  return (
    <View>
      <Text>hello walidososososossoo</Text>
      <Pressable
        onPress={() => {
          Auth.signOut();
        }}>
        <Text>disconnect</Text>
      </Pressable>
      <Pressable
        onPress={async () => {
          try {
            await DataStore.save(
              new Todo({
                title: 'Lorem ipsum dolor sit amet',
                description: 'Lorem ipsum dolor sit amet',
                status: 'DRAFT',
              }),
            );
          } catch (error) {
            console.log('App -> error', error);
          }
        }}>
        <Text>add</Text>
      </Pressable>
      <Pressable
        onPress={async () => {
          console.log('begin -------');

          await Storage.put('test.txt', 'Hello');
          console.log('uploaded succc');
        }}>
        <Text>upload file</Text>
      </Pressable>
      <Text>{JSON.stringify(items)}</Text>
    </View>
  );
};

export default withAuthenticator(App);
