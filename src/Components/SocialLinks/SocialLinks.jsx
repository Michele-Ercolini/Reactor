import { FaFacebookF, FaXTwitter, FaInstagram, FaGithub, FaTwitch, FaDiscord } from "react-icons/fa6";
import classes from './SocialLinks.module.css'
import { useContext } from "react";
import { DarkContext } from "../../Contexts/Contexts";

export default function SocialLinks() {

    const { dark } = useContext(DarkContext);

    return (
        <section className={classes.border + " row " + (dark ? "dark" : "light")}>
            <div className="col-12 col-xxl-10 offset-xxl-2">
                <ul className={classes.wrapper + ' my-3'}>
                    <li className={`${classes.icon} ${classes.facebook}`}>
                        <span className={classes.tooltip}>Facebook</span>
                        <span>
                            <a href="https://www.facebook.com/" target="blank">
                                <FaFacebookF size="2rem" color="var(--accent2Color)" />
                            </a>
                        </span>
                    </li>
                    <li className={`${classes.icon} ${classes.twitter}`}>
                        <span className={classes.tooltip}>Twitter</span>
                        <span>
                            <a href="https://twitter.com/" target="blank">
                                <FaXTwitter size="2rem" color="var(--accent2Color)" />
                            </a>
                        </span>
                    </li>
                    <li className={`${classes.icon} ${classes.instagram}`}>
                        <span className={classes.tooltip}>Instagram</span>
                        <span>
                            <a href="https://www.instagram.com/" target="blank">
                                <FaInstagram size="2rem" color="var(--accent2Color)" />
                            </a>
                        </span>
                    </li>
                    <li className={`${classes.icon} ${classes.twitch}`}>
                        <span className={classes.tooltip}>Twitch</span>
                        <span>
                            <a href="https://www.twitch.tv/" target="blank">
                                <FaTwitch size="2rem" color="var(--accent2Color)" />
                            </a>
                        </span>
                    </li>
                    <li className={`${classes.icon} ${classes.discord}`}>
                        <span className={classes.tooltip}>Discord</span>
                        <span>
                            <a href="https://discord.com/" target="blank">
                                <FaDiscord size="2rem" color="var(--accent2Color)" />
                            </a>
                        </span>
                    </li>
                    <li className={`${classes.icon} ${classes.github}`}>
                        <span className={classes.tooltip}>Github</span>
                        <span>
                            <a href="https://github.com/" target="blank">
                                <FaGithub size="2rem" color="var(--accent2Color)" />
                            </a>
                        </span>
                    </li>
                </ul>
            </div>
        </section>
    )
}