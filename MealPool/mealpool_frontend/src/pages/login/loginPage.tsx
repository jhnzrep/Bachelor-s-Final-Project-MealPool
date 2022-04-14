import React, { Component } from 'react';
import styles from './loginPage.module.scss';
import Logo from '../../assets/company_logo.svg'

class LoginPage extends Component {
    render(){
        return(
            <div className={styles.container}>
                <div className={styles.logo_wrapper}>
                    <img className={styles.main_logo} src={Logo} alt='' />
                    <h1>MEALPOOL</h1>
                </div>
            </div>
        )
    }
}

export default LoginPage;