import React, { useState } from "react";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";
import { Box, Button, Pagination, Stack, Typography } from "@mui/material";

interface FullDetailCardProps {
    data: {
        title: string;
        image: string[];
        address: string;
        openTime: string;
        tag: string;
        rate: number;
        info: string;
    };
}

const FullDetailCard = ({ data }: FullDetailCardProps) => {
    const [page, setPage] = useState(1);
    const [imageList, setImageList] = useState(data.image[0]);
    const count = data.image.length;
    const handleSelectDestination = () => {};
    const handlePages = (
        event: React.ChangeEvent<unknown>,
        updatePage: number
    ) => {
        setImageList(data.image[updatePage - 1]);
        setPage(updatePage);
    };
    return (
        <div className="bg-white text-black">
            <Stack spacing={3}>
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Stack width="60%">
                        <Box
                            component="img"
                            sx={{
                                borderRadius: "8px 8px 0px 0px",
                                width: "100%",
                                height: "280px",
                            }}
                            src={imageList}
                        />
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            sx={{
                                backgroundColor: "#D9D9D9",
                                borderRadius: "0px 0px 8px 8px",
                                width: "100%",
                                height: "35px",
                            }}
                        >
                            <Pagination
                                count={count}
                                page={page}
                                size="small"
                                onChange={handlePages}
                            />
                        </Box>
                    </Stack>
                    <Stack width="40%" pl={3}>
                        <Typography variant="h4">{data.title}</Typography>
                        <Stack
                            direction="row"
                            spacing={1}
                            py={3}
                            justifyContent="flex-start"
                        >
                            <LocationOnIcon fontSize="large" />
                            <Stack spacing={1}>
                                <Typography variant="body1">
                                    {data.address}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ fontStyle: "italic" }}
                                >
                                    {data.openTime}
                                </Typography>
                            </Stack>
                        </Stack>
                        <Stack
                            direction="row"
                            pl={1}
                            pb={3}
                            spacing={1}
                            alignItems="center"
                            justifyContent="flex-start"
                        >
                            <LocalOfferIcon
                                fontSize="medium"
                                sx={{ color: "#D9D9D9" }}
                            />
                            <Typography
                                variant="body2"
                                sx={{ color: "#D9D9D9" }}
                            >
                                {data.tag}
                            </Typography>
                        </Stack>
                        <Stack direction="row" justifyContent="center" pb={1.5}>
                            <StarIcon sx={{ color: "#F4C01E" }} />
                            <StarIcon sx={{ color: "#F4C01E" }} />
                            <StarIcon sx={{ color: "#F4C01E" }} />
                            <StarIcon sx={{ color: "#F4C01E" }} />
                            <StarIcon sx={{ color: "#F4C01E" }} />
                        </Stack>
                        <Button
                            sx={{
                                backgroundColor: "#45D8D0",
                                borderRadius: "18px",
                            }}
                            onClick={handleSelectDestination}
                        >
                            <Typography
                                variant="body2"
                                sx={{ color: "#FFFFFF", fontWeight: "bold" }}
                            >
                                SELECT AS DESTINATION
                            </Typography>
                        </Button>
                    </Stack>
                </Stack>
                <Typography>{data.info}</Typography>
            </Stack>
        </div>
    );
};

export default FullDetailCard;
