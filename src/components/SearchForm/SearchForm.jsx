import { useEffect, useState } from "react";
import {
    FormControl,
    FormControlLabel,
    RadioGroup,
    Radio,
    TextField,
    InputAdornment,
    Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";

function SearchForm() {

    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const location = useLocation();

    const [searchCategory, setSearchCategory] = useState("");
    const [searchName, setSearchName] = useState("");

    function handleForm(e){
        e.preventDefault();
        setSearchParams({
            name: searchName,
        });
    }

    useEffect(() => {
        if(searchParams.size > 0){
            navigate(`${searchCategory}s${location.search}`);
        }
    }, [searchParams]);

    return (
        <form onSubmit={(e) => {handleForm(e)}} autoComplete="off">
            <FormControl sx={{ width: {xs: "auto", sm: 500}, gap: "1rem" }}>
                <RadioGroup
                    name="searchCategory"
                    row
                    value={searchCategory}
                    onChange={(e) => {
                        setSearchCategory(e.target.value);
                        setSearchName("");
                    }}
                    sx={{ justifyContent: "center" }}
                >
                    <FormControlLabel
                        value="character"
                        control={<Radio />}
                        label="Character"
                    />
                    <FormControlLabel
                        value="location"
                        control={<Radio />}
                        label="Location"
                    />
                    <FormControlLabel
                        value="episode"
                        control={<Radio />}
                        label="Episode"
                    />
                </RadioGroup>
                <TextField
                    variant="outlined"
                    value={searchName}
                    id="search"
                    type="search"
                    label="Name"
                    disabled={!searchCategory}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                        sx: {borderRadius: "8px"},
                    }}
                    InputLabelProps={{ sx: { color: "rgba(0, 0, 0, 0.7)"} }}
                    onChange={(e) => {
                        setSearchName(e.target.value);
                    }}
                />
                <Button
                    disabled={!searchName}
                    size="large"
                    variant="contained"
                    sx={{ fontSize: "1.2rem", borderRadius: "8px"}}
                    type="submit"
                >
                    Search
                </Button>
            </FormControl>
        </form>
    );
}

export default SearchForm;
