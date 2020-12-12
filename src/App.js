import { useState, useEffect } from 'react';

function App() {
  let [name, setName] = useState('');
  let [avatar, setAvatar] = useState('');
  let [days, setDays] = useState('');


  useEffect(() => {
    fetch(`https://api.github.com/users/zabalueva`)
      .then(response => response.json())
      .then(githubUserData => new Promise((resolve, reject) => {
        setName(githubUserData.login);
        setAvatar(githubUserData.avatar_url); 

        let currentDate = new Date();
        let formatDate = new Date(Date.parse(githubUserData.created_at));
        const calc = ((currentDate - formatDate) / 1000 / 60 / 60 / 24);
        setDays(calc.toFixed(0));
      }))
  }, [])
  
  /* function getDateCreate() {
    setDays(() => { 
      let currentDate = new Date();
      let formatDate = new Date(Date.parse(dateCreate));
      days = ((currentDate - formatDate) / 1000 / 60 / 60 / 24);
      console.log(`${days.toFixed(0)} дня вы на GitHub!`);
  })}  */ 


  return (   
    <div className="App">     
      <p> Имя: {name} </p>
      <p> Вы на github уже {days}! </p>
      <img src={avatar} alt={name} className='avatar'></img>
      {/* <button onClick={getDateCreate}>
        Получить подарочную информацию!
      </button> */}
      {/* <p>{calcutDate.toFixed(0)} дней вы на гитхабе!</p> */}
    
    </div>
  );
}

export default App;
