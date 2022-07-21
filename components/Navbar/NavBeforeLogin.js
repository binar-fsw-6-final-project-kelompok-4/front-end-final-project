
import React from "react";

import {
  Button,
  Container,
  Navbar,
} from "react-bootstrap";

import { FiLogIn } from "react-icons/fi";
import styles from "../../styles/NavBeforeLogin.module.css";

export const NavBeforeLogin = () => {
  return (
    <>
      <Navbar className={styles.header} expand="lg">
        <Container className={styles.container}>
          <div className={styles.box1}>
            <Navbar.Brand
              href="#"
              className={styles.brand}
            ></Navbar.Brand>

          </div>
          <div>
            <Button href="/login" className={styles.btn}>
              <FiLogIn className={styles.filogin} />
              <p className={styles.txt}>Masuk</p>
            </Button>
          </div>
        </Container>
      </Navbar>
    </>
  );
};
