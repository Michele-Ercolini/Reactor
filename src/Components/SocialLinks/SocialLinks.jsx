import { FaFacebookF, FaXTwitter, FaInstagram, FaGithub, FaSteam } from "react-icons/fa6";
import classes from './SocialLinks.module.css'

export default function SocialLinks() {
    return (
        <section>
            <ul className={classes.wrapper + ' my-3'}>
                <li className={`${classes.icon} ${classes.facebook}`}>
                    <span className={classes.tooltip}>Facebook</span>
                    <span>
                        <a href="" target="blank">
                            <FaFacebookF size="2rem" color="var(--accent2Color)" />
                        </a>
                    </span>
                </li>
                <li className={`${classes.icon} ${classes.twitter}`}>
                    <span className={classes.tooltip}>Twitter</span>
                    <span>
                        <a href="" target="blank">
                            <FaXTwitter size="2rem" color="var(--accent2Color)" />
                        </a>
                    </span>
                </li>
                <li className={`${classes.icon} ${classes.instagram}`}>
                    <span className={classes.tooltip}>Instagram</span>
                    <span>
                        <a href="" target="blank">
                            <FaInstagram size="2rem" color="var(--accent2Color)" />
                        </a>
                    </span>
                </li>
                <li className={`${classes.icon} ${classes.steam}`}>
                    <span className={classes.tooltip}>Steam</span>
                    <span>
                        <a href="" target="blank">
                            <FaSteam size="2rem" color="var(--accent2Color)" />
                        </a>
                    </span>
                </li>
                <li className={`${classes.icon} ${classes.github}`}>
                    <span className={classes.tooltip}>Github</span>
                    <span>
                        <a href="" target="blank">
                            <FaGithub size="2rem" color="var(--accent2Color)" />
                        </a>
                    </span>
                </li>
            </ul>
        </section>
    )
}