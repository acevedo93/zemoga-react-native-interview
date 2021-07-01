import React, {useContext, useEffect} from 'react';
import {View, Text} from 'react-native';

import {UserContext} from '../context/users/UsersContext';
import {Loader} from './Loader';
import {globalStyles} from '../styles/globalStyles';

interface Props {
  userId: string | undefined;
}

export const UserDetail = ({userId}: Props) => {
  const {user, getUserById, error, loading} = useContext(UserContext);

  useEffect(() => {
    getUserById(userId);
  }, []);

  return (
    <Loader flex={false} loading={loading} error={error}>
      <View>
        <Text style={[globalStyles.title, globalStyles.verticalSpaces]}>
          User
        </Text>
        <Text style={[globalStyles.subtitle]}>
          Name:
          <Text style={[globalStyles.p]}>{user?.name}</Text>
        </Text>
        <Text style={[globalStyles.subtitle]}>
          Phone:
          <Text style={[globalStyles.p]}>{user?.phone}</Text>
        </Text>
        <Text style={[globalStyles.subtitle]}>
          Email:
          <Text style={[globalStyles.p]}>{user?.email}</Text>
        </Text>
        <Text style={[globalStyles.subtitle]}>
          Website:
          <Text style={[globalStyles.p]}>{user?.website}</Text>
        </Text>
      </View>
    </Loader>
  );
};
