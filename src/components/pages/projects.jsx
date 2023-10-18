import { Box, Divider, Grid, Slide, Typography, Zoom } from "@mui/material";
import Card from '@mui/material/Card';
import { CardContent, CardMedia, CardActions, Button } from '@mui/material';
import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import Data from "./ProjectsData/data";
import EllipsisText from "react-ellipsis-text";

const Projects = () => {

    const [load, setload] = useState(false);
    useEffect(() => {
        setload(true);      //Mount
        return () => {
            setload(false); //unMount
        }
    }, []);


    return (
        <>
            <Helmet>
                <title> بیوگرافی من |  نمونه کار ها  </title>
            </Helmet>
            <Box sx={{ p: 3 }}>
                <Divider variant="middle" textAlign="right" sx={{ mt: 2, mb: 1, "&::before,&::after": { borderColor: "black" } }}><Slide direction="down" in={load} style={{ transitionDelay: load ? '1000ms' : '0ms' }}><Typography sx={{ color: "black" }}>نمونه کار ها</Typography></Slide></Divider>
            </Box>
            <Box sx={{ height: "55%", width: "90%", borderRadius: "0.5rem", margin: " 0 auto", display: "flex", justifyContent: "center", flexDirection: "row-reverse", alignItems: "center", flexWrap: "wrap" }}>
                {Data.map((item, index) => (
                    <Slide direction="left" in={load} style={{ transitionDelay: load ? `${item.Slideload}` : '0ms' }}>
                        <Card sx={{ width: 280, height: 400, mx: 4, my: 4 }} key={index}>
                            <CardMedia
                                component="img"
                                alt={item.Tittle}
                                height="140"
                                image={item.Img}
                                sx={{ height: 200 }}
                            />
                            <CardContent sx={{ backgroundColor: "silver", height: 150 }}>
                                <Divider variant="middle" textAlign="center" sx={{ mt: 1, mb: 1, "&::before,&::after": { borderColor: "black" } }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.Tittle}
                                    </Typography>
                                </Divider>
                                <Typography sx={{direction:"ltr"}} variant="body2" color="text.secondary">
                                    <EllipsisText   text={item.Info} length={"70"}/>
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ backgroundColor: "silver" }}>
                                <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "row-reverse", backgroundColor: "silver" }}>
                                    <Button size="small">مشاهده</Button>
                                    <Button target="blank" href={item.LinkGithub} size="small">{item.Icongithub}</Button>
                                </Box>
                            </CardActions>
                        </Card>
                    </Slide>
                ))}
            </Box>
        </>
    )
}
export default Projects;