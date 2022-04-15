import React, { Component } from 'react';
import '../../App.css';
import styles from './registerPage.module.scss';

class RegisterPage extends Component {
    render(){
        return(
            <div className={styles.container}>
                
                <form action="">
                    <div className={styles.form_wrapper}>
                        <h4>Sign Up</h4>
                        <div className={styles.Row}>
                            <input type="text" id="fname" name="fname" placeholder="First Name"/>
                        </div>
                        <div className={styles.Row}>
                            <input type="text" id="lname" name="lname" placeholder="Last Name"/>
                        </div>
                        <div className={styles.Row}>
                            <input type="email" id="email" name="email" placeholder="Email account"/>
                        </div> 
                        <div className={styles.Row}>
                            <input type="text" id="dob" name="dob" placeholder="Date of Birth"/>
                        </div> 
                        <div className={styles.Row}>
                            <input type="text" id="address" name="address" placeholder="Address"/>
                        </div> 
                        <div className={styles.Row}>
                            <input type="text" id="city" name="city" placeholder="City"/>
                        </div> 
                        <div className={styles.Row}>
                            <input type="text" id="zCode" name="zCode" placeholder="Zip code"/>
                        </div>
                        <div className={styles.Row}>
                            <input type="password" id="password" name="password" placeholder="Password"/>
                        </div>
                        <div className={styles.Row}>
                            <input type="password" id="rpassword" name="rpassword" placeholder="Reapeat Password"/>
                        </div>
                        
                        
                        
                        
                        <div className={styles.Row}>
                            <input className={styles.submit_input} type="submit" value="Sign Up"/>
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
                            <a href='#'>Sign In</a>
                        </div>
                    </div>
            </div>
        )
    }
}

export default RegisterPage;