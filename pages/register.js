import Head from "next/head"
import Styles from "./register.module.css"
import Link from "next/link"

export default function register(){
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
                                    <label for="username" className={Styles.form_label}>Username</label><br></br>
                                    <input type="text" className={Styles.form_control} name="username" id="username" placeholder="Masukkan Username Anda" required></input>
                                </div>

                                <br></br>

                                <div className={Styles.email} align="center">
                                    <label for="Email" className={Styles.form_label}>E-mail</label><br></br>
                                    <input type="text" className={Styles.form_control} name="Email" id="Email" placeholder="Masukkan Email Anda" required></input>
                                </div>

                                <br>
                                </br>

                                <div className={Styles.password} align="center">
                                    <label for="password" className={Styles.form_label}>Password</label><br></br>
                                    <input type="password" className={Styles.form_control} name="password" id="password" placeholder="Masukkan Password Anda" required></input>
                                </div>
                                <br></br>
                                <div className={Styles.button} align="center">
                                    <input type="submit" className={Styles.button1} name="submit" value="Masuk"></input>
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