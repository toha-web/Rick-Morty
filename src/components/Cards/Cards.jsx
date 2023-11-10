import { Grid } from '@mui/material';

import CardBody from "../CardBody";

function Cards({cards = []}) {

    return (
        <Grid container justifyContent={"space-evenly"} rowGap={"1rem"} columnGap={"0.8rem"}>
            {cards.length > 0 ? (
                cards.map((card) => (
                        <Grid item flexGrow={"0"} key={card.id}>
                            <CardBody info={card} />
                        </Grid>
                    ))
            ) : (
                <h1>Loading...</h1>
            )}
        </Grid>
    );
}

export default Cards;