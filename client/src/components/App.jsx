import React from 'react';
import Auth from './Auth';
import Portal from './Portal';
import Header from './Header';

const App = () => {
  // CHANGE THIS LATER
  const [isLogged, setIsLogged] = React.useState(false);
  const [user, setUser] = React.useState('');
  const changeLog = (info) => {
    setIsLogged(!isLogged);
    setUser(info.email);
    // console.log(name);
  }

  if (!isLogged) {
    return (<Auth changeLog={changeLog}/> )
  } else {
    return (
      <div>
        <Header changeLog={changeLog} user={user}/>
        <Portal user={user}/>
      </div>
    );
  }
}

export default App;
