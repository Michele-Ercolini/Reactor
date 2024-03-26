import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DarkContext, UserContext } from '../../Contexts/Contexts'
import routes from '../../routes'

export default function SignUpForm() {

    const { dark } = useContext(DarkContext);

    const { signUp } = useContext(UserContext);

    const navigate = useNavigate();

    const [form, setForm] = useState(
        {
            email: '',
            password: '',
            options: {
                data: {
                    first_name: '',
                    last_name: '',
                    username: ''
                }
            }
        }
    )

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const profileHandleChange = (e) => {
        setForm((prev) => (
            {
                ...prev,
                options: {
                    data: { ...prev.options.data, [e.target.name]: e.target.value }
                }
            }
        ))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signUp(form);
        navigate(routes.home);
    }

    return (
        <form className="wrapper" onSubmit={handleSubmit}>
            <h1 className='text-center'>SignUp</h1>
            <div className="inputBox">
                <input className={(dark ? ' text-secondaryColor' : ' text-primaryColor')} type="text" placeholder='Nome' name='first_name' onChange={profileHandleChange} />
            </div>
            <div className="inputBox">
                <input className={(dark ? ' text-secondaryColor' : ' text-primaryColor')} type="text" placeholder='Cognome' name='last_name' onChange={profileHandleChange} />
            </div>
            <div className="inputBox">
                <input className={(dark ? ' text-secondaryColor' : ' text-primaryColor')} type="text" placeholder='Username' name='username' onChange={profileHandleChange} />
            </div>
            <div className="inputBox">
                <input className={(dark ? ' text-secondaryColor' : ' text-primaryColor')} type="email" required placeholder='Email' name='email' onChange={handleChange} />
            </div>
            <div className="inputBox">
                <input className={(dark ? ' text-secondaryColor' : ' text-primaryColor')} type="password" required placeholder='Password' name='password' onChange={handleChange} />
            </div>
            <div className="d-flex justify-content-center justify-content-md-end my-5">
                <button className={"fancy" + (dark ? ' bg-primaryColor' : ' bg-secondaryColor')}>
                    <span className={"top_key" + (dark ? ' bg-primaryColor' : ' bg-secondaryColor')}></span>
                    <span className="text">Registrati!</span>
                    <span className={"bottom_key_1" + (dark ? ' bg-primaryColor' : ' bg-secondaryColor')}></span>
                    <span className={"bottom_key_2" + (dark ? ' bg-primaryColor' : ' bg-secondaryColor')}></span>
                </button>
            </div>
            <div className="auth">
                <p className='text-center'>Are you already registered?<Link className="link" to={routes.login}>Login</Link></p>
            </div>
        </form>
    )
}