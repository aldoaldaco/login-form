(function(doc,win){
    'use strict';
    //Div to load
    let i = 0, random = 0, hour = new Date();
    let div = document.getElementById('loader');

    function fastLoad(){
        if(i<=90){
            i += 10;
            div.style.width = (i) + "%";
            setTimeout(fastLoad(),100);
        } else {
            console.log("Termino el proceso");
        }
    }

    let loginModal = document.getElementById('loginForm');
    let signModal = document.getElementById('signForm');
    let loginBtn = document.getElementById('loginBtn');
    let signBtn = document.getElementById('signBtn');
    let submitLoginBtn = document.getElementById('submitLoginBtn');
    let submitSignBtn = document.getElementById('submitSignBtn');
    let cancelLoginBtn = document.getElementById('cancelLoginBtn');
    let cancelSignBtn = document.getElementById('cancelSignBtn');
    let backBtn = document.getElementById('backBtn');

    class User{
        constructor(name,mail,password,confirm) {
            this.name = name;
            this.mail = mail;
            this.password = password;
            this.confirm = confirm;
        }

        validateName(){
            if(String(this.name).length <= 8){
                console.log("Invalid Name");
                return false;
            } else {
                console.log("Valid Name");
                return true;
            }
        }

        validateMail(){
            let validMail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if(!(validMail.test(this.mail))){
                console.log("Invalid Mail");
                return false;
            } else {
                console.log("Valid Mail");
                return true;
            }
        }

        validatePasswords(){
            if(this.password != this.confirm){
                console.log("The Password & Confirm are not the same");
                return false;
            } else {
                console.log("The Password & Confirm are correct");
                return true;
            }
        }

        validatePassword(){
            if(String(this.password).length < 8 ){
                console.log("Password must be at least 8 characters");
                return false;
            } else {
                return true;
            }
            if(String(this.password).charAt(" ")) {
                console.log("Password must no have empty spaces");
                return false;
            } else {
                return true;
            }
            if (String(this.password).search(/[a-z]/i) < 0) {
                console.log("Password must contain at least one letter");
                return false;
            } else {
                return true;
            }
            if (String(this.password).search(/[0-9]/) < 0) {
                console.log("Password must contain at least one digit");
                return false;
            } else {
                return true;
            }
        }

        signup(name,mail,password,confirm){
            if(validateMail() && validatePasswords() && validatePassword() ){
                if(this.name==name && this.password==password){
                    console.log("Good work dude");
                } else {
                    console.log("User or Password incorrect");
                }
            }
        }

        login(name,password){
            if(validateMail() && validatePasswords()){
                if(this.name==name && this.password==password){
                    console.log("Good work dude");
                } else {
                    console.log("User or Password incorrect");
                }
            }
        }
    }

    User.prototype.setName = function (name) {
        this.name = name;
    };
    User.prototype.getName = function (name) {
        return this.name;
    };

    User.prototype.setMail = function (mail) {
        this.mail = mail;
    };
    User.prototype.getMail = function (name) {
        return this.mail;
    };

    User.prototype.setPassword = function (password) {
        this.password = password;
    };
    User.prototype.getPassword = function (password) {
        return this.password;
    };

    User.prototype.setConfirm = function (confirm) {
        this.confirm = confirm;
    };
    User.prototype.etConfirm = function (confirm) {
        return this.confirm;
    };

    const user = new User("","","","");
    const user1 = new User("aldo1","aldo1_aldaco@hotmail.con","abcd1","abcd1");
    const user2 = new User("aldo2","aldo2_aldaco@hotmail.con","abcd2","abcd2");
    const user3 = new User("aldo3","aldo3_aldaco@hotmail.con","abcd3","abcd3");
    const user4 = new User("aldo4","aldo4_aldaco@hotmail.con","abcd4","abcd4");
    const user5 = new User("aldo5","aldo5_aldaco@hotmail.con","abcd5","abcd5");
    const users = Array.of(user1,user2,user3,user4,user5);

    //LoginUP
    if(submitLoginBtn != "undefined"){
        submitLoginBtn.onclick = function(){
            let n = document.getElementById('nameLog').value;
            let p = document.getElementById('pswLog').value;
            user.setName(n);user.setPassword(p);
            let validator = (n.length > 0 && p.length > 0)?true:false;
            if(validator==false){
                alert("There are some errors");
            } else {
                alert("You are not register, go to signup");
                setTimeout(fastLoad(),300);
                for (let i of users) {
                    console.log(i.getName() == user.getName());
                    if((i.getName() == user.getName()) && (i.getPassword() == user.getPassword())){
                        console.log("Welcome");
                        window.location = "welcome.html";
                    } else {
                        console.log("This account is not register");
                        loginModal.style.display = "none";
                        signModal.style.display = "block";
                    }
                }
            }
        }
    }

    //SignUP
    if(submitSignBtn != "undefined"){
        submitSignBtn.onclick = function(){
            let n = document.getElementById('nameSign').value;
            let m = document.getElementById('mailSign').value;
            let p = document.getElementById('pswSign').value;
            let c = document.getElementById('repswSign').value;
            user.setName(n);user.setMail(m);user.setPassword(p);user.setConfirm(c);
            let validator = user.validateName() && user.validateMail() && user.validatePassword() && user.validatePasswords();
            if(validator==false){
                alert("There are some errors");
            } else {
                setTimeout(fastLoad(),300);
                for (let i of users) {
                    if((i.getName() == user.getName()) || (i.getMail() == user.getMail())){
                        console.log("Username or Mail not available");
                    } else {
                        console.log("Sign & Login succesfull");
                        users.push(user);
                        window.location = "welcome.html";
                    }
                }
            }
        }
    }


    //Open Modal
    signBtn.onclick = function(){
        signModal.style.display='block'
    }
    loginBtn.onclick = function(){
        loginModal.style.display='block'
    }

    //Close Modal
    cancelLoginBtn.onclick = function(){
        if(loginModal.style.display == "block"){
            loginModal.style.display = "none";
        }
    }
    cancelSignBtn.onclick = function(){
        if(signModal.style.display == "block"){
            signModal.style.display = "none";
        }
    }
    window.onclick = function(event) {
        if (event.target == loginModal) {
            loginModal.style.display = "none";
        }
        if (event.target == signModal) {
            signModal.style.display = "none";
        }
    }
})(document,window);
