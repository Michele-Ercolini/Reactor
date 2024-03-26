import { useContext, useEffect, useState } from 'react'
import classes from './../Detail/Detail.module.css'
import { DarkContext, UserContext } from '../../Contexts/Contexts'
import supabase from '../../database/supabase';
export default function LiveChat({ game }) {

    const {dark} =useContext(DarkContext);
    const { profile } = useContext(UserContext);

    const [userMessage, setUserMessage] = useState();
    const [messages, setMessages] = useState();

    const handleChange = (e) => {
        setUserMessage(e.target.value);
    }

    const handleClick = async () => {
        const { data, error } = await supabase
            .from('messages')
            .insert([
                { profile_id: profile.id, game_id: game.id, message: userMessage }
            ])
            .select()

        setUserMessage('');
    }

    const getMessages = async () => {

        let { data: messages, error } = await supabase
            .from('messages')
            .select('*, profile: profiles(username, avatar_url)')
            .eq('game_id', game.id)

        setMessages(() => messages)
    }

    useEffect(
        () => {
            getMessages();


            const channels = supabase.channel('custom-all-channel')
                .on(
                    'postgres_changes',
                    { event: '*', schema: 'public', table: 'messages' },
                    (payload) => {
                        getMessages();
                    }
                )
                .subscribe()

            return () => {
                supabase.removeChannel(channels);
            }
        }
    )

    return (
        <div className={"col-12 " + classes.chat_height}>
            <div className={classes.chat_shadow}>
                <div className={classes.chat_section}>
                    <h2 className='text-center'>Live Chat</h2>
                    {messages && messages.map(message => {
                        return (
                            <div key={message.id}>
                                <p>{message.message}</p>
                                <div className="d-flex justify-content-end">
                                    <p className='my-auto'>{message.profile.username}</p>
                                    <img src={profile && profile.avatar_url ? `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/avatars/${message.profile.avatar_url}` : Sora} className={classes.chat_img + ' rounded-circle'} alt="immagine profilo" />
                                </div>
                                <hr />
                            </div>
                        )
                    })
                    }
                </div>
            </div>
            <div className="d-flex justify-content-between">
                <input type="text" className={classes.chat_input + (dark ? ' dark' : ' light')} placeholder='Messaggio' value={userMessage} onChange={handleChange} />
                <button className={classes.chat_btn} onClick={handleClick}>Invia</button>
            </div>
        </div>
    )
}