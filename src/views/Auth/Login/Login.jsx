import { useContext, useState } from 'react'
import classes from './Login.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { DarkContext, UserContext } from '../../../Contexts/Contexts'
import routes from '../../../routes'

export default function Login() {

    const { dark } = useContext(DarkContext);

    const {login} = useContext(UserContext);

    const navigate = useNavigate();

    const [form, setForm] = useState(
        {
            email: '',
            password: ''
        }
    )

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name] : e.target.value }));
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        await login(form);
        navigate(routes.home)
    }

    return (
        <form className={classes.wrapper} onSubmit={handleSubmit}>
            <h1 className='text-center'>Login</h1>
            <div className={classes.inputBox}>
                <input className={(dark ? ' text-secondaryColor' : ' text-primaryColor')} type="email" required placeholder='Email' name='email' onChange={handleChange}/>
            </div>
            <div className={classes.inputBox}>
                <input className={(dark ? ' text-secondaryColor' : ' text-primaryColor')} type="password" required placeholder='Password' name='password' onChange={handleChange}/>
            </div>
            <button className={classes.btn_custom + (dark ? ' text-secondaryColor' : ' text-primaryColor')}>Entra</button>
            <div className={classes.auth}>
                <p className='text-center'>Non sei ancora registrato?<Link className={classes.link} to={routes.signup}>SignUp</Link></p>
            </div>
        </form>
    )
}