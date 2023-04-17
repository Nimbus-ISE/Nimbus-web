import React, { useState } from "react";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";
import CircleIcon from "@mui/icons-material/Circle";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import Stars from "../Stars";
import Review from "../MapPageComponents/Popups/Review";
import styles from "./Button.module.css";

interface FullDetailCardProps {
    location: {
        loc_id: number;
        loc_name: string;
        address: string;
        lat: number;
        lng: number;
        description: string;
        province: string;
        location_rating: string;
        tags: string;
        url: string[];
        reviews: Array<IReview>;
    };
}

interface DotPaginationProps {
    show: boolean;
    index: number;
}

const lightSx = {
    fontWeight: 400,
    fontFamily: "Montserrat",
};
const baseSx = {
    fontWeight: 500,
    fontFamily: "Montserrat",
};
const boldSx = {
    fontWeight: 800,
    fontFamily: "Montserrat",
};

const DotPagination = ({ show, index }: DotPaginationProps) => {
    return (
        <>
            {show ? (
                <CircleIcon sx={{ color: "#45D8D0", fontSize: 8 }} />
            ) : (
                <CircleIcon sx={{ color: "#A6A6A6", fontSize: 8 }} />
            )}
        </>
    );
};

const FullDetailCard = ({ location }: FullDetailCardProps) => {
    const {
        loc_id,
        loc_name,
        address,
        lat,
        lng,
        description,
        province,
        location_rating,
        url,
        tags,
        reviews,
    } = location;
    const [imageList, setImageList] = useState(url[0]);
    const [currentPage, setCurrentPage] = useState(0);
    const pageNumbers = [];

    for (let i = 0; i < url.length; i++) {
        pageNumbers.push(i);
    }
    const handleNext = () => {
        setCurrentPage(currentPage + 1);
        setImageList(url[currentPage + 1]);
    };
    const handleBack = () => {
        setCurrentPage(currentPage - 1);
        setImageList(url[currentPage - 1]);
    };
    const handleSelectDestination = () => {};

    return (
        <div className="text-black mx-auto p-12 w-full">
            <Stack spacing={3}>
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Stack width="60%">
                        <img
                            className="h-72 shadow-md aspect-video object-cover rounded-t-xl"
                            src={imageList}
                            alt={loc_name}
                        />
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            className="shadow-md"
                            sx={{
                                backgroundColor: "#e9e9e9",
                                borderRadius: "0px 0px 8px 8px",
                                width: "100%",
                                height: "35px",
                            }}
                            px={6}
                        >
                            <IconButton
                                disabled={currentPage == 0 ? true : false}
                                onClick={handleBack}
                            >
                                <ArrowBackIosIcon sx={{ fontSize: 15 }} />
                            </IconButton>
                            <Stack spacing={1} direction="row">
                                {pageNumbers.map((number) => {
                                    return (
                                        <DotPagination
                                            key={number}
                                            show={currentPage == number}
                                            index={number}
                                        />
                                    );
                                })}
                            </Stack>
                            <IconButton
                                disabled={
                                    currentPage == url.length - 1 ? true : false
                                }
                                onClick={handleNext}
                            >
                                <ArrowForwardIosIcon sx={{ fontSize: 15 }} />
                            </IconButton>
                        </Box>
                    </Stack>
                    <Stack width="40%" pl={4}>
                        <div className="text-right text-neutral-400">
                            <Typography sx={baseSx} variant="body2">
                                {Number(lat).toFixed(4)},{" "}
                                {Number(lng).toFixed(4)}
                            </Typography>
                        </div>
                        <Typography sx={boldSx} variant="h4">
                            {loc_name}
                        </Typography>
                        <Typography sx={baseSx} variant="h6">
                            {province}
                        </Typography>
                        <Stack
                            direction="row"
                            spacing={1}
                            py={3}
                            justifyContent="flex-start"
                        >
                            <LocationOnIcon fontSize="large" />
                            <Stack spacing={1}>
                                <Typography
                                    sx={{ ...baseSx, marginY: "auto" }}
                                    variant="body1"
                                >
                                    {address}
                                </Typography>
                                {/*<Typography
                                    variant="body2"
                                    sx={{ fontStyle: "italic" }}
                                >
						{data.openTime}
						</Typography>*/}
                            </Stack>
                        </Stack>
                        <div className="flex gap-2 pb-5 pl-1 text-neutral-500">
                            <LocalOfferIcon className="w-8 h-8" />
                            <Typography
                                variant="body2"
                                sx={{ ...baseSx, marginY: "auto" }}
                            >
                                {tags}
                            </Typography>
                        </div>
                        <div className="mx-auto">
                            <Stars size={20} rating={Number(location_rating)} />
                        </div>
                        <button
                            onClick={handleSelectDestination}
                            className={styles.button}
                        >
                            <div className="font-bold text-white text-lg">
                                SELECT AS DESTINATION
                            </div>
                        </button>
                    </Stack>
                </Stack>
                <Typography sx={lightSx}>{description}</Typography>
            </Stack>
            <div className="text-xl my-5 font-semibold text-neutral-700 border-b-[1px] border-neutral-400">
                USER REVIEWS
            </div>
            <div className="grid grid-cols-1 gap-2">
                {reviews.map((review) => {
                    return <Review review={review} />;
                })}
            </div>
        </div>
    );
};

export default FullDetailCard;
