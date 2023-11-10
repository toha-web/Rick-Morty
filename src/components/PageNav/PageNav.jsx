import { Pagination, PaginationItem } from "@mui/material";
import { useSearchParams } from "react-router-dom";

export default function PageNav({ info={}, page }) {
    
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <Pagination
            count={info.pages}
            page={page}
            variant="outlined"
            size="large"
            showFirstButton
            showLastButton
            boundaryCount={2}
            siblingCount={2}
            renderItem={(item) => {
                return (
                    <PaginationItem
                        sx={{ my: 0.3 }}
                        {...item}
                    />
                );
            }}
            onChange={(e, page) => {
                searchParams.set("page", `${page}`);
                setSearchParams(searchParams)
            }}
            sx={{marginBottom: 4.5}}
        />
    );
}