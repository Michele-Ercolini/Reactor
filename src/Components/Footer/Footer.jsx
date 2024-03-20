import { useContext } from "react"
import { DarkContext } from "../../Contexts/Contexts"

import SocialLinks from "../SocialLinks/SocialLinks";
import FooterLinks from "../FooterLinks/FooterLinks";

import classes from './Footer.module.css'

export default function Footer() {

    const { dark } = useContext(DarkContext);

    return (
        <footer className="container-fluid my-5 text-center">
            <div className={`${classes.space} ${classes.border}`}></div>
            <SocialLinks />
            {/* Newsletter */}
            <section>
                <p className='lead fw-semibold fs-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                    repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                    eum harum corrupti dicta, aliquam sequi voluptate quas.
                </p>
            </section>
            <FooterLinks />
        </footer>
    )
}