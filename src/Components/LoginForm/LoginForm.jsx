import classes from './LoginForm.module.css'
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DarkContext, UserContext } from '../../Contexts/Contexts';
import routes from '../../routes';



export default function LoginForm() {

    const { dark } = useContext(DarkContext);

    const { login } = useContext(UserContext);

    const navigate = useNavigate();

    const [form, setForm] = useState(
        {
            email: '',
            password: ''
        }
    )

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(form);
        navigate(routes.home)
    }

    return (
        <form className={classes.wrapper} onSubmit={handleSubmit}>
            <h1 className='text-center'>Login</h1>
            <div className={classes.inputBox}>
                <input className={(dark ? ' text-secondaryColor' : ' text-primaryColor')} type="email" required placeholder='Email' name='email' onChange={handleChange} />
            </div>
            <div className={classes.inputBox}>
                <input className={(dark ? ' text-secondaryColor' : ' text-primaryColor')} type="password" required placeholder='Password' name='password' onChange={handleChange} />
            </div>
            <div className="d-flex justify-content-center justify-content-md-end my-5">
                <button className={classes.fancy + (dark ? ' bg-primaryColor' : ' bg-secondaryColor')}>
                    <span className={classes.top_key + (dark ? ' bg-primaryColor' : ' bg-secondaryColor')}></span>
                    <span className={classes.text}>Entra!</span>
                    <span className={classes.bottom_key_1 + (dark ? ' bg-primaryColor' : ' bg-secondaryColor')}></span>
                    <span className={classes.bottom_key_2 + (dark ? ' bg-primaryColor' : ' bg-secondaryColor')}></span>
                </button>
            </div>
            <div className={classes.auth}>
                <p className='text-center'>Not registered yet?<Link className={classes.link} to={routes.signup}>SignUp</Link></p>
            </div>
        </form>
    )
}