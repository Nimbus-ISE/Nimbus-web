import React from "react";
import { Divider } from "@material-ui/core";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Stack, Typography } from "@mui/material";

import useMediaQuery from "@/hooks/useMediaQuery";

import Review from "../MapPageComponents/Popups/Review";
import Stars from "../Stars";

import ImagePagination from "./ImagePagination";

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

// interface DotPaginationProps {
//     show: boolean;
//     index: number;
// }

interface SelectButtonProps {
    onClick: () => void;
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

const SelectButton = ({ onClick }: SelectButtonProps) => {
    return (
        <button onClick={onClick} className={styles.button}>
            <div className="font-bold text-white text-lg">
                SELECT AS DESTINATION
            </div>
        </button>
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
    
    const isLargerThanMedium = useMediaQuery("(min-width: 768px)");
    const handleSelectDestination = () => {};

    return (
        <div className="text-black mx-auto p-12 w-full  bg-white">
            <Stack spacing={3} pb={2}>
                <Stack
                    direction={isLargerThanMedium ? "row" : "column"}
                    justifyContent="center"
                    alignItems="center"
                >
                    <ImagePagination
                        loc_name={location.loc_name}
                        url={location.url}
                        isLargerThanMedium={isLargerThanMedium}
                    />
                    <Stack
                        width={isLargerThanMedium ? "40%" : "100%"}
                        p={isLargerThanMedium ? 0 : 3}
                        pl={isLargerThanMedium ? 4 : 0}
                        py={isLargerThanMedium ? 0 : 1}
                    >
                        {isLargerThanMedium ? (
                            <div className="text-right text-neutral-400">
                                <Typography sx={baseSx} variant="subtitle2">
                                    {Number(lat).toFixed(4)},{" "}
                                    {Number(lng).toFixed(4)}
                                </Typography>
                            </div>
                        ) : (
                            <></>
                        )}
                        <Typography sx={boldSx} variant="h4">
                            {loc_name}
                        </Typography>
                        <Typography
                            sx={baseSx}
                            variant={isLargerThanMedium ? "h6" : "subtitle2"}
                        >
                            {province}
                        </Typography>
                        <Stack
                            direction="row"
                            spacing={1}
                            py={isLargerThanMedium ? 3 : 0}
                            pt={isLargerThanMedium ? 0 : 1}
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
                        <Stack
                            direction="row"
                            spacing={1}
                            justifyContent="flex-start"
                            pl={1}
                        >
                            <LocalOfferIcon
                                className="w-8 h-8"
                                sx={{ color: "#6A6261" }}
                            />
                            <Typography
                                variant="body2"
                                color="#6A6261"
                                sx={{ ...baseSx, marginY: "auto" }}
                            >
                                {tags}
                            </Typography>
                        </Stack>
                        <div className={isLargerThanMedium ? "mx-auto" : "p-2"}>
                            <Stars size={20} rating={Number(location_rating)} />
                        </div>
                        <SelectButton onClick={handleSelectDestination} />
                    </Stack>
                </Stack>
                {isLargerThanMedium ? (
                    <Typography sx={lightSx}>{description}</Typography>
                ) : (
                    <>
                        <Divider />
                        <Stack px={3}>
                            <Typography sx={lightSx}>{description}</Typography>
                        </Stack>
                    </>
                )}
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
