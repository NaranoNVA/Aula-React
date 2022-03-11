import React from 'react';
import Header from './Components/Header';
import Form from './Components/Form';
import Feed from './Components/Feed';
import reducer from './PostReducer';

export const UserContext = React.createContext();
export const PostContext = React.createContext();


function App() {
  const[state, dispatch] = React.useReducer(reducer, { posts: [] });
  const[username, setUsername] = React.useState("");

  return (
    <UserContext.Provider value={[username, setUsername]}>
      <Header/>
      <PostContext.Provider value={dispatch}>
        {username &&
          <Form/>
        }
        <Feed posts={state.posts}/>
      </PostContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
