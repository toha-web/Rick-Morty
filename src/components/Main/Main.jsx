import { useState, useEffect } from "react";
import {
    useLocation,
    useNavigate,
    useParams,
    useSearchParams,
} from "react-router-dom";

import PageNav from "../PageNav";
import Cards from "../Cards";
import * as Layouts from "../../layouts";

import getData from "../../utils/apiRequest";

function Main() {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();

    const [searchParams, setSearchParams] = useSearchParams();

    const [cards, setCards] = useState([]);
    const [info, setInfo] = useState({});
    const [page, setPage] = useState(+searchParams.get("page") || 1);
    const [name, setName] = useState(searchParams.get("name") || "");
    const [category, setCategory] = useState(location.pathname.split("/")[1].slice(0, -1));
    const [singleInfo, setSingleInfo] = useState(null);

    useEffect(() => {
        setSingleInfo(null);
        setCategory(location.pathname.split("/")[1].slice(0, -1));
        setPage(+searchParams.get("page") || 1);
        setName(searchParams.get("name") || "");
    }, [location.pathname, location.search]);

    useEffect(() => {
        if (params.id > 0){
            setPage(0);
            const data = getData({ path: `${category}/${params.id}` });
            data.then((data) => {
                if (data instanceof Object) {
                    setSingleInfo(data);
                } else if (data === 404) {
                    navigate("/PageNotFound");
                }
            });
        }
        else {
            const data = getData({
                path: `${category}?page=${page}${name ? `&name=${name}` : ""}`,
            });
            data.then((data) => {
                if (data instanceof Object) {
                    setCards(data.results);
                    setInfo(data.info);
                } else if (data === 404) {
                    navigate("/PageNotFound");
                }
            });
        }
    }, [category, page, name]);

    return (
        <>
            {singleInfo ? (
                category === "character" ? (
                    <Layouts.SingleCharacterLayout info={singleInfo} />
                ) : category === "location" ? (
                    <Layouts.SingleLocationLayout info={singleInfo} />
                ) : (
                    <Layouts.SingleEpisodeLayout info={singleInfo} />
                )
            ) : (
                <>
                    <PageNav info={info} page={page} />
                    <Cards cards={cards} />
                </>
            )}
        </>
    );
}

export default Main;
