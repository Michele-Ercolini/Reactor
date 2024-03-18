import { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

export default function Searchbar() {

    const [isOpenSearchBtn, setIsOpenSearchBtn] = useState(false);

    return (
        <div className={"searchBox d-flex justify-content-center align-items-center " + (isOpenSearchBtn ? 'active' : '')}>
            <input className={(isOpenSearchBtn ? 'active' : '')} id="searchInput" type="text" placeholder="Search" />
            <div className={"searchBtn" + (isOpenSearchBtn ? ' active' : '')} onClick={!isOpenSearchBtn ? () => setIsOpenSearchBtn(true) : undefined}>
                <FaSearch />
            </div>
            <div className={"cancelBtn" + (isOpenSearchBtn ? ' active' : '')}  onClick={() => setIsOpenSearchBtn(false)} >
                <FaTimes/>
            </div>
        </div>
    )
}