import { useContext } from "react"
import { DarkContext } from "../../Contexts/Contexts"

import SocialLinks from "../SocialLinks/SocialLinks";
import FooterLinks from "../FooterLinks/FooterLinks";

import classes from './Footer.module.css'

export default function Footer() {

    const { dark } = useContext(DarkContext);

    return (
        <>
            <div className={classes.space}></div>
            <footer className={classes.border + " container-fluid"}>
                <SocialLinks />
                {/* Newsletter */}
                <section className={"row pt-3 " + (dark ? "dark" : "light")}>
                    <div className="col-12 col-md-6 offset-md-2">
                        <p className='lead ps-5'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                            repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                            eum harum corrupti dicta, aliquam sequi voluptate quas.
                        </p>
                    </div>
                    <FooterLinks />
                    <div className="col-12 col-md-10 offset-md-2 text-center">
                        <h5>© 2024 Copyright:  <a className={"lead text-decoration-none fst-italic fw-semibold " + (dark ? "dark" : "light")} href="https://github.com/Michele-Ercolini">Michele Ercolini</a></h5>
                    </div>
                </section>
            </footer>
        </>
    )
}