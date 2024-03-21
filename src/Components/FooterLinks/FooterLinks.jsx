import classes from './FooterLinks.module.css'
export default function FooterLinks() {
    return (
        <>
            <div className="col-6 col-md-2 text-center mb-2">
                <h5 className={"text-uppercase mb-3 " + classes.text_accent2Color}>Links</h5>
                <ul className="list-unstyled">
                    <li>
                        <a href="#!" className={'text-decoration-none ' + classes.text_accent2Color}>Link 1</a>
                    </li>
                    <li>
                        <a href="#!" className={'text-decoration-none ' + classes.text_accent2Color}>Link 2</a>
                    </li>
                </ul>
            </div>
            <div className="col-6 col-md-2 text-center">
                <h5 className={"text-uppercase mb-3 " + classes.text_accent2Color}>Links</h5>
                <ul className="list-unstyled mb-0">
                    <li>
                        <a href="#!" className={'text-decoration-none ' + classes.text_accent2Color}>Link 1</a>
                    </li>
                    <li>
                        <a href="#!" className={'text-decoration-none ' + classes.text_accent2Color}>Link 2</a>
                    </li>
                </ul>
            </div>
        </>
    )
}