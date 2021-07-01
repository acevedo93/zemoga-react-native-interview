import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './src/navigator/Navigator';
import {LogBox} from 'react-native';
import {PostProvider} from './src/context/posts/PostsContext';
import {UserProvider} from './src/context/users/UsersContext';
import {CommentsProvider} from './src/context/comments/CommentsContext';
LogBox.ignoreLogs(['Reanimated 2']);
LogBox.ignoreLogs([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);

const App = () => {
  return (
    <PostProvider>
      <UserProvider>
        <CommentsProvider>
          <NavigationContainer>
            <Navigator />
          </NavigationContainer>
        </CommentsProvider>
      </UserProvider>
    </PostProvider>
  );
};

export default App;
