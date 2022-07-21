import Head from "next/head"
import Styles from "./register.module.css"
import Link from "next/link"
// import { useState } from 'react';
// import { useRouter } from 'next/router'
import { useForm } from "react-hook-form";
<<<<<<< HEAD
import toast, {Toaster} from "react-hot-toast"
import axios from "axios";
=======
import axios from "axios";
import toast, {Toaster} from "react-hot-toast"
>>>>>>> b84d5bb62e3c7323848af43d4b1667d2de820b13

export default function register(){
  const {register, handleSubmit} = useForm()
  const onSubmit = (data) =>{
<<<<<<< HEAD
    axios.post("https://fsw6-group4-staging.herokuapp.com/api/v1/users/add",{
=======
    axios.post("http://localhost:8000/api/v1/users/add",{
>>>>>>> b84d5bb62e3c7323848af43d4b1667d2de820b13
        email :data.email,
        password : data.password,
        username : data.username
    })
    .then((suc)=>{
<<<<<<< HEAD
        toast.success("Register Berhasil", {
=======
        toast.success("Regsiter Berhasil", {
>>>>>>> b84d5bb62e3c7323848af43d4b1667d2de820b13
            duration: 4000,
            position: 'top-center',
        })
        window.setTimeout(function(){
            window.location.href = "/login";
        }, 2000);
        console.log(data);
    })

    .catch ((err)=>{
<<<<<<< HEAD
        toast.error("Register Gagal", {
=======
        toast.error("Regsiter Gagal", {
>>>>>>> b84d5bb62e3c7323848af43d4b1667d2de820b13
            duration: 4000,
            position: 'top-center',
        })
    }
    ) 

  }


 
    return(
        <div className={Styles.container}>
            <Head>
                <title>SecondHand. | Register</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>   
            <Toaster />
                <div className={Styles.card}>
                    <div className={Styles.judul}>
                        <h1>SecondHand.</h1>
                    </div>

                    <div className={Styles.form}>
                        <form action="login.js" onSubmit={handleSubmit(onSubmit)}>
                            <div className={Styles.box}>
                                <div className={Styles.header}>
                                    <h2 align="center">REGISTER</h2>
                                </div>

                                <div className={Styles.username} align="center">
                                    <label  className={Styles.form_label}>Username</label><br></br>
                                    <input type="text"  className={Styles.form_control} name="username" id="username" placeholder="Masukkan Username Anda" required {...register("username")}></input>
                                </div>

                                <br></br>

                                <div className={Styles.email} align="center">
                                    <label  className={Styles.form_label}>E-mail</label><br></br>
                                    <input type="text" className={Styles.form_control} name="Email" id="Email" placeholder="Masukkan Email Anda" required {...register("email")}></input>
                                </div>

                                <br>
                                </br>

                                <div className={Styles.password} align="center">
                                    <label  className={Styles.form_label}>Password</label><br></br>
                                    <input type="password"  className={Styles.form_control} name="password" id="password" placeholder="Masukkan Password Anda" required {...register("password")}></input>
                                </div>
                                <br></br>
                                <div className={Styles.button} align="center">
<<<<<<< HEAD
                                    <input type="submit" className={Styles.button1} name="submit" value="Register"></input>
=======
                                    <input type="submit"  className={Styles.button1} name="submit" value="Masuk"></input>
>>>>>>> b84d5bb62e3c7323848af43d4b1667d2de820b13
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