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
                
                <form action="">
                    <div className={styles.form_wrapper}>
                        <h4>Sign In</h4>
                        <div className={styles.Row}>
                            <input type="email" id="email" name="email" placeholder="Email account"/>
                        </div>
                        <div className={styles.Row}>
                            <input type="password" id="password" name="password" placeholder="Password"/>
                        </div>
                        <div className={styles.rememberMeInput}>
                            <input type="checkbox" id="rememberMeInput" name="rememberMeInput" value="Bike"/>
                            <label htmlFor="rememberMeInput"> Remember me? </label>
                        </div>
                        <div className={styles.Row}>
                            <input className={styles.submit_input} type="submit" value="Sign In"/>
                        </div>
                    </div>
                </form>

                    <div className={styles.alternative_login_section}>
                        <div className={styles.line_decorated_text}>
                            <hr /> 
                            <span>
                                OR
                            </span>
                            <hr />
                        </div>
                        <div className={styles.new_account_link}>
                            <a href='#'>Create a new account</a>
                        </div>
                    </div>
            </div>
        )
    }
}

export default LoginPage;