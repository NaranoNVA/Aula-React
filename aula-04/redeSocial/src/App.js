import React from 'react';
import Header from './Components/Header';
import Form from './Components/Form';
import Feed from './Components/Feed';

function App() {
  const[user, setUser] = React.useState("");
  const[posts, setPosts] = React.useState([]);

  return (
    <>
      <Header setUsername={setUser} username={user}/>
      {user &&
        <Form username={user} setPosts={setPosts} posts={posts}/>
      }
      <Feed posts={posts}/>
    </>
  );
}

export default App;
