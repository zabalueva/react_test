import { useState, useEffect } from 'react';



function App() {
  let [name, setName] = useState('');
  let [avatar, setAvatar] = useState('');
  let [dateCreate, setDate] = useState('');
  let [days, setDays] = useState('');


  useEffect(() => {
    fetch(`https://api.github.com/users/zabalueva`)
      .then(response => response.json())
      .then(githubUserData => new Promise((resolve, reject) => {
        setName(githubUserData.name);
        setAvatar(githubUserData.avatar_url);
        setDate(githubUserData.created_at); 
      }))
  }, [])
  
  function getDateCreate() {
    setDays(() => { 
      let currentDate = new Date();
      let formatDate = new Date(Date.parse(dateCreate));
      days = ((currentDate - formatDate) / 1000 / 60 / 60 / 24);
      console.log(days.toFixed(0));
  })}  



  return (
    <div className="App">
      <p> Имяf: {name} </p>
      <img src={avatar} alt={name}></img>
      <button onClick={getDateCreate}>
        Двигать вниз
      </button>
      {/* <p>{calcutDate.toFixed(0)} дней вы на гитхабе!</p> */}
     
    </div>
  );
}

export default App;
