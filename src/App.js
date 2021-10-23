import React from 'react';
import Profile from './Profile/Profile';
import './App.css';

const bio = "Eum voluptas fuga 33 alias architecto non aspernatur aliquid eum dolores enim aut pariatur dolore" +
 "Et unde sunt aut eligendi molestiae et commodi eius ab dolore corporis in eveniet quisquam qui eaque reiciendis aut molestiae quis."

 const styleObject = {
   textAlign: 'center',
   color: 'red'
 }

 function handleName(name){
  return alert(name);
 }
 
 Profile.defaultProps = {
   name : "martine"
 }

function App() {
  return (
    <Profile style={styleObject} name="7souna" bio={bio} job="developer" func={handleName} />
  );
}

export default App;
