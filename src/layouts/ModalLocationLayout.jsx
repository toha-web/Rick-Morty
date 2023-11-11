import { useEffect, useState } from "react";
import dateTransform from "../utils/dateTransform";
import getData from "../utils/apiRequest";

export function ModalLocationLayout({ info, style }) {
    const [residents, setResidents] = useState([]);

    function getResidents() {
        if (info.residents.length === 0) {
            setResidents([{ id: 0, name: "No One" }]);
            return;
        }
        let time = 0;
        info.residents.forEach((resLink) => {
            setTimeout(() => {
                const data = getData({ url: resLink });
                data.then((resident) =>
                    setResidents((residents) => [...residents, resident])
                );
            }, time);
            time += 50;
        });
    }

    useEffect(() => {
        getResidents();
    }, []);

    return (
        <div className={`${style.info} ${style["location-info"]}`}>
            <h3>{info.name}</h3>
            <div>
                <span className={style["info-title"]}>Type: </span>
                {info.type}
            </div>
            <div>
                <span className={style["info-title"]}>Created: </span>
                <span style={{ textTransform: "capitalize" }}>
                    {dateTransform(info.created)}
                </span>
            </div>
            <div>
                <span className={style["info-title"]}>Dimension: </span>
                {info.dimension}
            </div>
            <div>
                <span className={style["info-title"]}>Residents: </span>
                <select autoComplete="off">
                    {residents.length > 0 ? (
                        residents.map((res) => (
                            <option
                                key={res.id}
                                onClick={() => window.location.replace(`characters/${res.id}`)}
                            >
                                {res.name}
                            </option>
                        ))
                    ) : (
                        <option>Loading...</option>
                    )}
                </select>
            </div>
        </div>
    );
}