const password = ['123' ,'444','555','387','999'];
pass = prompt('please enter password');

for (let i = 0; i < password.length; i++){
    if (pass == password [i]){
        console.log('yes yes');
        break;
    }else if (pass != passwora[i] && i == password.length-1 ){
        console.log('no no');
    }
}
