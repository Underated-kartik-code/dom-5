
let user = document.querySelector('#user');
let pass = document.querySelector('#pass');
let btn = document.querySelector('button');

let Accounts = [
    {user : 'durgesh',pass : 1234},
    {user : 'kartik',pass : 1234},
    {user : 'pranav',pass : 1234},
    {user : 'utkarsh',pass : 1234},
    {user : 'arpita',pass : 1234},
    {user : 'sandhya',pass : 1234},
]

btn.addEventListener('click',function(event){
    event.preventDefault();

    let username = user.value;
    let password = pass.value;

    for(let i=0;i<Accounts.length;i++){
        if(username == Accounts[i].user && 
        password == Accounts[i].pass){
            window.location.replace("home.html");
            return;
        }
    }
    console.log("imperfect")


    let form = document.querySelector('form');
    form.reset();
})
