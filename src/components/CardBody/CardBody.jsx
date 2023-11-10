import { Card, CardMedia, CardContent, CardActionArea, Typography } from '@mui/material';

import { modal } from '../../utils/modal';

const title = {
    fontSize: 20,
    letterSpacing: 0,
};
const content = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: 1 / 1,
};

function CardBody({ info }) {

    return (
        <Card sx={{width: 220, minHeight: 120, borderRadius: 4, textAlign: "center", height: "100%"}}>
            <CardActionArea onClick={() => {modal.open(info)}} sx={content}>
                {info.image ? <CardMedia component="img" image={info.image} alt={info.name}/> : null}
                <CardContent sx={{...content, gap: 2, py: 1.5}}>
                    <Typography component="h2" sx={title}>
                        {info.name}
                    </Typography>
                    {info.species ? <Typography>{info.species}</Typography> : info.episode ? <Typography>{info.episode}</Typography> : null}
                    {info.species ? null : info.type ? <Typography>{info.type}</Typography> : <Typography>{info.air_date}</Typography>}
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default CardBody;