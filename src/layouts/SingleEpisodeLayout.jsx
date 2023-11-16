import { Paper, Box, Tabs, Tab, Typography, Divider, Button } from "@mui/material";
import NoAccountsIcon from "@mui/icons-material/NoAccounts";


import { useState } from "react";

import {modal} from '../utils/modal'
import getData from '../utils/apiRequest'
import placeholder from "../img/episode_placeholder.webp";

export function SingleEpisodeLayout({info}){

    const [activeTab, setActiveTab] = useState(0);

    function loadCharacterInfo(url){
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
                    src={placeholder}
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
                    <Tab label="Characters" value={1} />
                </Tabs>
                <TabPanel
                    value={activeTab}
                    index={0}
                    style={{ height: "290px" }}
                >
                    <Divider textAlign="left">Air Date</Divider>
                    <Typography
                        variant="subtitle1"
                        sx={{ marginBottom: "15px" }}
                    >
                        {info.air_date}
                    </Typography>
                    <Divider textAlign="left">Episode</Divider>
                    <Typography
                        variant="subtitle1"
                        sx={{ marginBottom: "15px" }}
                    >
                        {info.episode}
                    </Typography>
                </TabPanel>
                <TabPanel
                    value={activeTab}
                    index={1}
                    style={{ textAlign: "center", height: "290px" }}
                >
                    {info.characters.length > 0 ? (info.characters.map((character) => (
                        <Button
                            size="small"
                            variant="outlined"
                            sx={{ borderRadius: "20px", m: "3px" }}
                            onClick={() => {
                                loadCharacterInfo(
                                    `/character/${character.split("/").at(-1)}`
                                );
                            }}
                            key={character.split("/").at(-1)}
                        >
                            {character.split("/").at(-1)}
                        </Button>
                    ))) : (<Typography variant="h5" sx={{display: "flex", alignItems: "center", justifyContent: "center", gap: "10px"}}>
                            <NoAccountsIcon fontSize="large" sx={{color: "red"}}/>
                            No One
                        </Typography>)}
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