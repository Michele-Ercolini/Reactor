import classes from './FooterLinks.module.css'
export default function FooterLinks() {
    return (
        <div className="row">
            <div className="col-4">
                <h5 className={"text-uppercase " + classes.text_accent2Color}>Links</h5>
                <ul className="list-unstyled mb-0">
                    <li>
                        <a href="#!" className={'text-decoration-none ' + classes.text_accent2Color}>Link 1</a>
                    </li>
                    <li>
                        <a href="#!" className={'text-decoration-none ' + classes.text_accent2Color}>Link 2</a>
                    </li>
                </ul>
            </div>
            <div className="col-4">
                <h5 className={"text-uppercase " + classes.text_accent2Color}>Links</h5>
                <ul className="list-unstyled mb-0">
                    <li>
                        <a href="#!" className={'text-decoration-none ' + classes.text_accent2Color}>Link 1</a>
                    </li>
                    <li>
                        <a href="#!" className={'text-decoration-none ' + classes.text_accent2Color}>Link 2</a>
                    </li>
                </ul>
            </div>
            <div className="col-4">
                <h5 className={"text-uppercase " + classes.text_accent2Color}>Links</h5>
                <ul className="list-unstyled mb-0">
                    <li>
                        <a href="#!" className={'text-decoration-none ' + classes.text_accent2Color}>Link 1</a>
                    </li>
                    <li>
                        <a href="#!" className={'text-decoration-none ' + classes.text_accent2Color}>Link 2</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}