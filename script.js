(function(doc,win){
    'use strict';
    let loginModal = document.getElementById('loginForm');
    let signModal = document.getElementById('signForm');
    let loginBtn = document.getElementById('loginBtn');
    let signBtn = document.getElementById('signBtn');
    let submitLoginBtn = document.getElementById('submitLoginBtn');
    let submitSignBtn = document.getElementById('submitSignBtn');
    let cancelLoginBtn = document.getElementById('cancelLoginBtn');
    let cancelSignBtn = document.getElementById('cancelSignBtn');

    class User{
        constructor(name,email,password,confirm) {
            this.name = name;
            this.email = email;
            this.password = password;
            this.confirm = confirm;
        }

        validateName(){
            if(String(this.name).length <= 3){
                console.log("Name must be longer then 3 characters");
                return false;
            } else {
                console.log("Valid Name");
                return true;
            }
        }

        validatEmail(){
            let validemail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if(!(validemail.test(this.email))){
                console.log("Invalid email");
                return false;
            } else {
                console.log("Valid email");
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
    }

    User.prototype.setName = function (name) {
        this.name = name;
    };
    User.prototype.getName = function () {
        return this.name;
    };

    User.prototype.setEmail = function (email) {
        this.email = email;
    };
    User.prototype.getEmail = function () {
        return this.email;
    };

    User.prototype.setPassword = function (password) {
        this.password = password;
    };
    User.prototype.getPassword = function () {
        return this.password;
    };

    User.prototype.setConfirm = function (confirm) {
        this.confirm = confirm;
    };
    User.prototype.etConfirm = function () {
        return this.confirm;
    };

    const user = new User("","","","");
    const user1 = new User("aldo1","aldo1_aldaco@gmail.com","12345678","12345678");
    const user2 = new User("aldo2","aldo2_aldaco@gmail.com","12345678","12345678");
    const user3 = new User("aldo3","aldo3_aldaco@gmail.com","12345678","12345678");
    const user4 = new User("aldo4","aldo4_aldaco@gmail.com","12345678","12345678");
    const user5 = new User("aldo5","aldo5_aldaco@gmail.com","12345678","12345678");
    const users = Array.of(user1,user2,user3,user4,user5);

    //Login
    if(submitLoginBtn != "undefined"){
        submitLoginBtn.onclick = function(){
            let n = document.getElementById('nameLog').value;
            let p = document.getElementById('pswLog').value;
            let validator = (n.length > 0 && p.length > 0) ? true : false;
            user.setName(n);user.setPassword(p);
            if(validator==false){
                alert("There are some errors");
            } else {
                for (let i of users) {
                    if((i.getName() == user.getName()) && (i.getPassword() == user.getPassword())){
                        console.log("Welcome again");
                        window.location = "welcome.html";
                    } else {
                        console.log("This account is not register, go to Signup view");
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
            let m = document.getElementById('emailSign').value;
            let p = document.getElementById('pswSign').value;
            let c = document.getElementById('repswSign').value;
            let flag = false;
            user.setName(n);user.setEmail(m);user.setPassword(p);user.setConfirm(c);
            let validator = user.validateName() && user.validatEmail() && user.validatePassword() && user.validatePasswords();
            if(validator==false){
                alert("There are some errors");
            } else {
                for (let i of users) {
                    if(i.getEmail() == user.getEmail()){
                        console.log("The account is already exist");
                        flag = true;
                    }
                }
                if(flag){
                    console.log("The account is already in use");
                } else {
                    console.log("Welcome");
                    window.location = "welcome.html";
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
