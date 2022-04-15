import React, { Component } from 'react';
import styles from './loginPage.module.scss';
import Logo from '../../assets/company_logo.svg'
import LoginImage from '../../assets/main_image_desktop.svg'
import LoginFooterOverlayImage from '../../assets/login_footer_overlay.svg'
import FacebookIcon from '../../assets/facebook_icon.svg'
import InstagramIcon from '../../assets/instagram_icon.svg'
import EmailIcon from '../../assets/email_icon.svg'


class LoginPage extends Component {
    render(){
        return(
            <div className={styles.container}>
                {/* MOBILE NAVIGATION */}
                <div className={`mobile_only ${styles.logo_wrapper}`}>
                    <img className={styles.main_logo} src={Logo} alt='' />
                    <h1>MEALPOOL</h1>
                </div>

                {/* DESKTOP NAVIGATION  */}
                <div className={`desktop_only ${styles.logo_wrapper}`}>
                    <div className={styles.navigation_wrapper}>
                        <ul >
                            <li>About</li>
                            <li>How it works;</li>
                            <li>Meals</li>
                            <li>                    
                                <img className={styles.main_logo} src={Logo} alt='' />
                            </li>
                            <li>Cooks</li>
                            <li>Share meal</li>
                            <li>Sign up</li>
                        </ul>
                    </div>
                    <h1>MEALPOOL</h1>
                   
                </div>
                
                <div className={styles.content_wrapper}>
                    <div className={styles.form_content}>
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
                    <div className={`desktop_only ${styles.image_content}`} >
                        <img src={LoginImage} alt="" />
                    </div>
                </div>
                <div className={`desktop_only ${styles.footer}`}>
                    <div className={styles.footer_image_wrapper}>
                        <img src={LoginFooterOverlayImage} alt="" />
                        <div className={styles.icon_wrapper}>
                            <img src={FacebookIcon} alt="" />
                            <img src={InstagramIcon} alt="" />
                            <img src={EmailIcon} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage;