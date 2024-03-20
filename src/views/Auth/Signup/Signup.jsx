import { useContext } from 'react'
import classes from './Signup.module.css'
import { Link } from 'react-router-dom'
import { DarkContext } from '../../../Context/Context'
import routes from '../../../routes'

export default function Signup() {

    const { dark } = useContext(DarkContext)

    return (
        <form className={classes.wrapper}>
            <h1 className='text-center'>Registrati</h1>
            <div className={classes.inputBox}>
                <input className={(dark ? ' text-secondaryColor' : ' text-primaryColor')} type="text" required placeholder='Nome' />
            </div>
            <div className={classes.inputBox}>
                <input className={(dark ? ' text-secondaryColor' : ' text-primaryColor')} type="text" required placeholder='Cognome' />
            </div>
            <div className={classes.inputBox}>
                <input className={(dark ? ' text-secondaryColor' : ' text-primaryColor')} type="text" required placeholder='Username' />
            </div>
            <div className={classes.inputBox}>
                <input className={(dark ? ' text-secondaryColor' : ' text-primaryColor')} type="email" required placeholder='Email' />
            </div>
            <div className={classes.inputBox}>
                <input className={(dark ? ' text-secondaryColor' : ' text-primaryColor')} type="password" required placeholder='Password' />
            </div>
            <Link className={classes.btn_custom + (dark ? ' text-secondaryColor' : ' text-primaryColor')}>Register!</Link>
            <div className={classes.auth}>
                <p className='text-center'>Sei già registrato?<Link className={classes.link} to={routes.login}>Login</Link></p>
            </div>
        </form>
    )
}