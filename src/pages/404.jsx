import { Link } from "react-router-dom"

import "../404.css"

export default function NotFound() {
    return (
        <div className="background-img">
            <div className="space"></div>
            <div className="wrapper">
                <div className="img-wrapper">
                    <span>44</span>
                </div>
                <p>
                    The page you are trying to search has been <br /> moved to
                    another universe.
                </p>
                <button type="button">
                    <Link to="/">GET ME HOME</Link>
                </button>
            </div>
        </div>
    )
}
