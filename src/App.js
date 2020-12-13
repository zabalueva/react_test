import { useState, useEffect } from 'react';

  function App() {
    let [name, setName] = useState('');
    let [avatar, setAvatar] = useState('');
    let [days, setDays] = useState('');

    function nameInput() {
      const nameInputed = prompt('Введите ваше имя на github', "username");
      return nameInputed;
    }

    function GetInfo() {
      const element = (<div><p> Имя: {name} </p>
        <p> Вы на github уже {days} дня! Это точно повод для праздника!</p>
        <img src={avatar} alt={name} className='avatar'></img></div>);
      return element;
    }

  useEffect(() => {   
    let user = nameInput();
    fetch(`https://api.github.com/users/${user}`)
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
    

  return (   
    <div className="App">  
      <button onClick={nameInput}>
        Получить подарочную информацию!
      </button>  
      <GetInfo
        />
    </div>
  );
}

export default App;
