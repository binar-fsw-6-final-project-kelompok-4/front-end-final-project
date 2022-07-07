import Head from "next/head"
import Styles from "./login.module.css"
import Link from "next/link"

export default function Login(){
    return(
        <div className={Styles.container}>
            <Head>
                <title>SecondHand. | Login</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>                    
                <div className={Styles.card}>
                    <div className={Styles.judul}>
                        <h1>SecondHand.</h1>
                    </div>

                    <div className={Styles.form}>
                        <form action="/login" method="POST">
                            <div className={Styles.box}>
                                <div className={Styles.header}>
                                    <Link href="/login">
                                        <h2 align="center">LOGIN</h2>
                                    </Link>
                                </div>

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
                                    <p>Belum Memiliki Akun?</p>
                                    <div className={Styles.link}>
                                        <Link href="/register"><a>Register Disini</a></Link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>    
        </div>
    )
}