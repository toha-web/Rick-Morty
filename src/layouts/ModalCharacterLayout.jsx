import dateTransform from "../utils/dateTransform";

export function ModalCharacterLayout({ info, style }) {
    return (
        <>
            <div className={style.avatar}>
                <img src={info.image} alt={info.name} />
                <h3>{info.name}</h3>
            </div>
            <div className={style.info}>
                <div>
                    <span className={style["info-title"]}>Created: </span>
                    <span style={{ textTransform: "capitalize" }}>
                        {dateTransform(info.created)}
                    </span>
                </div>
                <div>
                    <span className={style["info-title"]}>Species: </span>
                    {info.species}
                </div>
                <div>
                    <span className={style["info-title"]}>Status: </span>
                    {info.status}
                </div>
                <div>
                    <span className={style["info-title"]}>Gender: </span>
                    {info.gender}
                </div>
                <div>
                    <span className={style["info-title"]}>Origin: </span>
                    <button
                        className={style.origin}
                        onClick={() => info.origin.url && window.location.replace(`/locations/${info.origin.url.split("/").at(-1)}`)}
                    >
                        {info.origin.name}
                    </button>
                </div>
                <div>
                    <span className={style["info-title"]}>Location: </span>
                    <button
                        className={style.location}
                        onClick={() => info.location.url && window.location.replace(`/locations/${info.location.url.split("/").at(-1)}`)}
                    >
                        {info.location.name}
                    </button>
                </div>
                <div>
                    <span className={style["info-title"]}>Episode: </span>
                    <select autoComplete="off">
                        {info.episode.map((el, i) => (
                            <option
                                key={i}
                                onClick={() => window.location.replace(`/episodes/${el.split("/").at(-1)}`)}
                            >{`Episode: ${el.split("/").at(-1)}`}</option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    );
}