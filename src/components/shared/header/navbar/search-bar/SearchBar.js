import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SearchBar.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchActions } from "../../../../../store/search";

const SearchBar = (props) => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    
    const dispatch = useDispatch();
    const search = (event) => {
        event.preventDefault();
        dispatch(searchActions.updateSearch(searchTerm));
        navigate("/search");
    };

    return (
        <form className="d-flex flex-column my-0 mx-5 flex-1" onSubmit={search}>
            <div className="position-relative d-flex align-items-center">
                <input className="form-control me-2 p-2" type="text"
                       placeholder="Săn voucher hoàn 1 triệu xu" onChange={(e) => setSearchTerm(e.target.value)}/>
                <button className="btn bg-primary search-btn" type="submit">
                    <FontAwesomeIcon icon="fa-magnifying-glass"/>
                </button>
            </div>
            {props.children}
        </form>
    );
};

export default SearchBar;
