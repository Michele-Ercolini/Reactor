import { FaFacebookF, FaXTwitter, FaInstagram, FaGithub, FaSteam } from "react-icons/fa6";

export default function SocialLinks() {
    return (
        <section className="mt-5 ">
            <ul className="wrapper my-5">
                <li className="icon facebook">
                    <span className="tooltip">Facebook</span>
                    <span>
                        <a href="" target="blank">
                            <FaFacebookF size="2rem" color="var(--accent2Color)"/>
                            </a>
                            </span>
                </li>
                <li className="icon twitter">
                    <span className="tooltip">Twitter</span>
                    <span>
                        <a href="" target="blank">
                            <FaXTwitter size="2rem" color="var(--accent2Color)" />
                        </a>
                        </span>
                </li>
                <li className="icon instagram">
                    <span className="tooltip">Instagram</span>
                    <span>
                        <a href="" target="blank">
                        <FaInstagram size="2rem" color="var(--accent2Color)"/>
                        </a>
                        </span>
                </li>
                <li className="icon steam">
                    <span className="tooltip">Steam</span>
                    <span>
                        <a href="" target="blank">
                            <FaSteam size="2rem" color="var(--accent2Color)"/>
                            </a>
                            </span>
                </li>
                <li className="icon github">
                    <span className="tooltip">Github</span>
                    <span>
                        <a href="" target="blank">
                        <FaGithub size="2rem" color="var(--accent2Color)"/>
                    </a>
                    </span>
                </li>
            </ul>
        </section>
    )
}