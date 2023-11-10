import { Paper, Box, Tabs, Tab, Typography, Divider, Button } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";


import { useState } from "react";
import { Link } from "react-router-dom";

import dateTransform from "../utils/dateTransform";
import {modal} from '../utils/modal'
import getData from '../utils/apiRequest'

export function SingleCharacterLayout({info}){

    const [activeTab, setActiveTab] = useState(0);
    const statusColor = {
        alive: "#04ff00",
        dead: "#ff0000",
    };

    function loadEpisodeInfo(url){
        const data = getData({path: url});
        data.then(info => modal.open(info))
    }

    return (
        <Paper
            elevation={20}
            sx={{
                display: "flex",
                flexWrap: "wrap",
                minWidth: "300px",
                maxWidth: { xs: "500px", md: "800px" },
                width: 1,
                alignItems: "stretch",
                p: { xs: 0, sm: 2, md: 3 },
                pr: { md: 0 },
                gap: "20px",
            }}
            xs={{ p: 0 }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: { xs: "100%", md: "45%" },
                }}
            >
                <img
                    src={info.image}
                    alt={info.name}
                    style={{ maxWidth: "100%", objectFit: "contain", m: 3 }}
                />
            </Box>

            <Box sx={{ flexGrow: 1, width: { md: "45%" } }}>
                <h1 style={{ textAlign: "center", marginTop: 0 }}>
                    {info.name}
                </h1>
                <Tabs
                    value={activeTab}
                    onChange={(event, value) => {
                        setActiveTab(value);
                    }}
                >
                    <Tab label="Info" value={0} />
                    <Tab label="Episodes" value={1} />
                </Tabs>
                <TabPanel
                    value={activeTab}
                    index={0}
                    style={{ height: "310px" }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "15px",
                        }}
                    >
                        <CircleIcon
                            sx={{
                                color: `${
                                    statusColor[info.status.toLowerCase()]
                                }`,
                                mr: 1,
                            }}
                            fontSize="small"
                        />
                        <Typography variant="subtitle1">
                            {info.status} - {info.species}
                        </Typography>
                    </Box>
                    <Divider textAlign="left">Gender</Divider>
                    <Typography
                        variant="subtitle1"
                        sx={{ marginBottom: "15px" }}
                    >
                        {info.gender}
                    </Typography>
                    <Divider textAlign="left">Originally from</Divider>
                    <Typography
                        variant="subtitle1"
                        sx={{ marginBottom: "15px" }}
                    >
                        {info.origin.url ? (
                            <Link
                                style={{ color: "#1976d2" }}
                                to={`/locations/${info.origin.url
                                    .split("/")
                                    .at(-1)}`}
                            >
                                {info.origin.name}
                            </Link>
                        ) : (
                            info.origin.name
                        )}
                    </Typography>
                    <Divider textAlign="left">Last known location</Divider>
                    <Typography
                        variant="subtitle1"
                        sx={{ marginBottom: "15px" }}
                    >
                        {info.location.name ? (
                            <Link
                                style={{ color: "#1976d2" }}
                                to={`/locations/${info.location.url.split("/").at(-1)}`}
                            >
                                {info.location.name}
                            </Link>
                        ) : (
                            info.location.name
                        )}
                    </Typography>
                    <Divider textAlign="left">Birthday</Divider>
                    <Typography
                        variant="subtitle1"
                        sx={{ marginBottom: "15px" }}
                    >
                        {dateTransform(info.created)}
                    </Typography>
                </TabPanel>
                <TabPanel
                    value={activeTab}
                    index={1}
                    style={{ textAlign: "center", height: "310px" }}
                >
                    {info.episode.map((episode) => (
                        <Button
                            size="small"
                            variant="outlined"
                            sx={{ borderRadius: "20px", m: "3px" }}
                            onClick={() => {
                                loadEpisodeInfo(
                                    `episode/${episode.split("/").at(-1)}`
                                );
                            }}
                            key={episode.split("/").at(-1)}
                        >
                            {episode.split("/").at(-1)}
                        </Button>
                    ))}
                </TabPanel>
            </Box>
        </Paper>
    );
}

function TabPanel({children, value, index, style}){
    return (
        <div className="tabpanel" hidden={value !== index} style={{...style, overflow: "auto"}}>
            <Box sx={{ p: 2, pb: 0 }}>{children}</Box>
        </div>
    );
}