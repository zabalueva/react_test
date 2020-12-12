import { useState, useEffect } from 'react';

function useUserData() {
    const [name, setName] = useState('');
    /* let [avatar, setAvatar] = useState('');
    let [dateCreate, setDate] = useState('');
    let [days, setDays] = useState(''); */

    async function getDataGit() {
        /*         let response = await fetch('/article/promise-chaining/user.json');
                let user = await response.json(); */
        const githubResponse = await fetch(`https://api.github.com/users/zabalueva`);
        const githubUser = await githubResponse.json();

        setName(githubUser.login);
        /* setAvatar(githubUser.avatar_url);
        setDate(githubUser.created_at); */
        console.log(githubUser)

    }
    useEffect(() => {
        getDataGit();
    }, []);

    return name
}

   /*  function getDateCreate() {
        setDays(() => {
            let currentDate = new Date();
            let formatDate = new Date(Date.parse(dateCreate));
            days = ((currentDate - formatDate) / 1000 / 60 / 60 / 24);
            console.log(days.toFixed(0));
        })
    } */

function App() {
    const name = useUserData();

    return (
        <div>
            Имя: {name}
            {/* <img src={avatar} alt={name}></img>
            <button onClick={getDateCreate}>
                Получить подарочную информацию!
            </button> */}
            {/* <p>{calcutDate.toFixed(0)} дней вы на гитхабе!</p> */}
        </div>
    );
}
export default App;