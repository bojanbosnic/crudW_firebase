import styles from "../styles/Home.module.css";
import { app } from "../firebase";
import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/router";


export default function Register() {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log(response.user);
        sessionStorage.setItem("Token", response.user.accessToken);
        router.push("/home");
      })
      .catch((err) => {
        alert("Cannot Log in");
      });
  };

  const signUpWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then((response) => {
      sessionStorage.setItem("Token", response.user.accessToken);
      console.log(response.user);
      router.push("/home");
    });
  };


  useEffect(() => {
    let token = sessionStorage.getItem("Token");

    if (token) {
      router.push("/home");
    }
  }, []);

  return (
    <div className={styles.container}>
     
      <main className={styles.main}>
        <h1>Register</h1>

        <input
          placeholder="Email"
          className={styles.inputBox}
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          type="email"
        />
        <input
          placeholder="Password"
          className={styles.inputBox}
          onChange={(event) => setPassword(event.target.value)}
          value={password}
          type="password"
        />

        <button className={styles.button} onClick={signUp}>
          Sign Up
        </button>
        <hr />
        <button className={styles.googleAlt} onClick={signUpWithGoogle}>
          Sign Up with Google
        </button>
        <hr />
      </main>
    </div>
  );
}
