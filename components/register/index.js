import Head from "next/head"
import Styles from "./register.module.css"
import Link from "next/link"
import { useState } from 'react';
import { useRouter } from 'next/router'
import axios from "axios";

export default function register(){
    // function doLogin({ email, password, username }) {
    //     // Gunakan endpoint-mu sendiri
    //     const registData = {
    //       email : email,
    //       password : password,
    //       username : username
    //     }   
    //     axios.post("https://fsw6-group4-staging.herokuapp.com/api/v1/users/add",registData)
    //     };
      
      
const [usernameData, setUsername] = useState('');
  const [emailData, setEmail] = useState('');
  const [passwordData, setPassword] = useState('');
 const router = useRouter()
  // States for checking the errors

 
  // Handling the name change
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
 
  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
 
  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
 
  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (usernameData === '' || emailData === '' || passwordData === '') {
      setError(true);
    } else {
         const registData = {
          email : emailData,
          password : passwordData,
          username : usernameData
        }   
      axios.post("https://fsw6-group4-staging.herokuapp.com/api/v1/users/add",registData)
      router.push('/login')
    }
  };
 
 
    return(
        <div className={Styles.container}>
            <Head>
                <title>SecondHand. | Register</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>   
                <div className={Styles.card}>
                    <div className={Styles.judul}>
                        <h1>SecondHand.</h1>
                    </div>

                    <div className={Styles.form}>
                        <form action="login.js">
                            <div className={Styles.box}>
                                <div className={Styles.header}>
                                    <h2 align="center">REGISTER</h2>
                                </div>

                                <div className={Styles.username} align="center">
                                    <label  className={Styles.form_label}>Username</label><br></br>
                                    <input type="text" value={usernameData} onChange={handleUsername} className={Styles.form_control} name="username" id="username" placeholder="Masukkan Username Anda" required></input>
                                </div>

                                <br></br>

                                <div className={Styles.email} align="center">
                                    <label  className={Styles.form_label}>E-mail</label><br></br>
                                    <input type="text" value={emailData} onChange={handleEmail}className={Styles.form_control} name="Email" id="Email" placeholder="Masukkan Email Anda" required></input>
                                </div>

                                <br>
                                </br>

                                <div className={Styles.password} align="center">
                                    <label  className={Styles.form_label}>Password</label><br></br>
                                    <input type="password" value={passwordData} onChange={handlePassword} className={Styles.form_control} name="password" id="password" placeholder="Masukkan Password Anda" required></input>
                                </div>
                                <br></br>
                                <div className={Styles.button} align="center">
                                    <input type="submit" onClick={handleSubmit} className={Styles.button1} name="submit" value="Masuk"></input>
                                </div>
                                    
                                <div className={Styles.page} align="center">
                                    <p>Sudah Memiliki Akun?</p>
                                    <div className={Styles.link}>
                                        <Link href="/login"><a>Login Disini</a></Link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
                    
    )
}