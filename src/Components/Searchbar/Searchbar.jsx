import { useContext, useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { DarkContext } from "../../Contexts/Contexts";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

export default function Searchbar() {

    const { dark } = useContext(DarkContext);
    const [isOpenSearchBtn, setIsOpenSearchBtn] = useState(false);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const openSearchBtn = () => {
        setIsOpenSearchBtn(() => true)
    }

    const closeSearchBtn = () => {
        setIsOpenSearchBtn(() => false);
    }

    const handleChange = (e) => {
        setSearch(() => e.target.value);
    }

    const handleClick = async () => {

        const promise = await fetch(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&search=${search}&page_size=21`);
        const json = await promise.json();
        console.log(json);
        navigate('/search', { state: { games: json } });
    }



    return (
        <div className={"searchBox d-flex justify-content-center align-items-center " + (isOpenSearchBtn ? 'active' : '')}>
            <input className={(isOpenSearchBtn ? 'active' : '')} type="text" placeholder="Search" onChange={handleChange} />
            <div className={"searchBtn" + (isOpenSearchBtn ? ' active' : (dark ? ' bg-primaryColor' : ' bg-secondaryColor'))} onClick={!isOpenSearchBtn ? openSearchBtn : handleClick}>
                <FaSearch />
            </div>
            <div className={"cancelBtn" + (isOpenSearchBtn ? ' active' : '')} onClick={closeSearchBtn} >
                <FaTimes />
            </div>
        </div>
    )
}