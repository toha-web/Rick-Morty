import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";

function Footer(){
    return (
        <AppBar
            component="footer"
            position="static"
            color="inherit"
            sx={{
                bottom: 0,
                alignItems: "center",
                marginTop: "35px",
                padding: { xs: "10px 30px", sm: "0 30px" },
            }}
        >
            <Toolbar
                sx={{
                    justifyContent: "space-between",
                    // height: 70,
                    fontFamily: "Karla, sans-serif",
                    width: { xs: "100%", md: "75%", xl: "50%" },
                    alignItems: "center",
                    flexWrap: "wrap",
                    columnGap: "20px",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        width: 70,
                        justifyContent: "space-between",
                        margin: "0 auto",
                    }}
                >
                    <CopyrightIcon />
                    {new Date().getFullYear()}
                </Box>
                <Typography sx={{ margin: "0 auto" }}>
                    Development by{" "}
                    <a href="mailto:t.info@ukr.net">Anton Biletskyi</a>
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Footer;
