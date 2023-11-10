import img from "../img/rick&morty.png";
import SearchForm from "../components/SearchForm";

function Default() {
    return (
        <>
            <div className="banner">
                <img src={img} alt="rick-and-morty" />
            </div>
            <SearchForm />
        </>
    );
}

export default Default;
