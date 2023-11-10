import { useEffect, useState } from "react";

import getData from "../utils/apiRequest";

export function ModalEpisodeLayout({ info, style }) {
    const [characters, setCharacters] = useState([]);

    function getCharacters() {
        if (info.characters.length === 0) {
            setCharacters([{ id: 0, name: "No One" }]);
            return;
        }
        let time = 0;
        info.characters.forEach((charLink) => {
            setTimeout(() => {
                const data = getData({ url: charLink });
                data.then((character) =>
                    setCharacters((characters) => [...characters, character])
                );
            }, time);
            time += 50;
        });
    }

    useEffect(() => {
        getCharacters();
    }, []);

    return (
        <div className={`${style.info} ${style["episode-info"]}`}>
            <h3>{info.name}</h3>
            <div>
                <span className={style["info-title"]}>Episode: </span>
                {info.episode}
            </div>
            <div>
                <span className={style["info-title"]}>Air Date: </span>
                {info.air_date}
            </div>
            <div>
                <span className={style["info-title"]}>Characters: </span>
                <select autoComplete="off">
                    {characters.length > 0 ? (
                        characters.map((character) => (
                            <option
                                key={character.id}
                                onClick={() => window.location.replace(`/characters/${character.id}`)}
                            >
                                {character.name}
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
