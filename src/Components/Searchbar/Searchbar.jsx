import { useContext, useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { DarkContext } from "../../Context/Context";

export default function Searchbar() {

    const [isOpenSearchBtn, setIsOpenSearchBtn] = useState(false);

    const { dark } = useContext(DarkContext);

    return (
        <div className={"searchBox d-flex justify-content-center align-items-center " + (isOpenSearchBtn ? 'active' : '')}>
            <input className={(isOpenSearchBtn ? 'active' : '')} id="searchInput" type="text" placeholder="Search" />
            <div className={"searchBtn" + (isOpenSearchBtn ? ' active' : (dark ? ' bg-primaryColor' : ' bg-secondaryColor'))} onClick={!isOpenSearchBtn ? () => setIsOpenSearchBtn(true) : undefined}>
                <FaSearch />
            </div>
            <div className={"cancelBtn" + (isOpenSearchBtn ? ' active' : '')} onClick={() => setIsOpenSearchBtn(false)} >
                <FaTimes />
            </div>
        </div>
    )
}