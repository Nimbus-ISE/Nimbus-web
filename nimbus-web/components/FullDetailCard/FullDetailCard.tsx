import React, { useState } from "react";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";
import { Box, Button, Pagination, Stack, Typography } from "@mui/material";
import Stars from "../Stars";
import Review from "../PlanTab/Popups/Review";

interface FullDetailCardProps {
    location: {
        loc_id: number;
        loc_name: string;
        description: string;
        province: string;
        location_rating: string;
        url: string;
        reviews: Array<IReview>;
    };
}

const FullDetailCard = ({ location }: FullDetailCardProps) => {
    const {
        loc_id,
        loc_name,
        description,
        province,
        location_rating,
        url,
        reviews,
    } = location;
    //const [page, setPage] = useState(1);
    //const [imageList, setImageList] = useState(data.image[0]);
    //const count = data.image.length;
    const handleSelectDestination = () => {};
    const handlePages = (
        event: React.ChangeEvent<unknown>,
        updatePage: number
    ) => {
        //setImageList(data.image[updatePage - 1]);
        //setPage(updatePage);
    };
    return (
        <div className="text-black">
            <Stack spacing={3}>
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Stack width="60%">
                        <Box
                            component="img"
                            className="shadow-md"
                            sx={{
                                borderRadius: "8px 8px 0px 0px",
                                width: "100%",
                                height: "280px",
                            }}
                            src={url}
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
                                count={1}
                                page={1}
                                size="small"
                                onChange={handlePages}
                            />
                        </Box>
                    </Stack>
                    <Stack width="40%" pl={3}>
                        <Typography
                            sx={{
                                fontWeight: 600,
                            }}
                            variant="h4"
                        >
                            {loc_name}
                        </Typography>
                        <Stack
                            direction="row"
                            spacing={1}
                            py={3}
                            justifyContent="flex-start"
                        >
                            <LocationOnIcon fontSize="large" />
                            <Stack spacing={1}>
                                <Typography variant="body1">
                                    {province}
                                </Typography>
                                {/*<Typography
                                    variant="body2"
                                    sx={{ fontStyle: "italic" }}
                                >
						{data.openTime}
						</Typography>*/}
                            </Stack>
                        </Stack>
                        {/*<Stack
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
                        </Stack>*/}
                        <div className="mx-auto">
                            <Stars size={20} rating={Number(location_rating)} />
                        </div>
                        <Button
                            sx={{
                                backgroundColor: "#45D8D0",
                                borderRadius: "18px",
                                marginY: "2rem",
                            }}
                            onClick={handleSelectDestination}
                        >
                            <Typography
                                variant="body2"
                                sx={{
                                    color: "#FFFFFF",
                                    fontWeight: "bold",
                                }}
                            >
                                SELECT AS DESTINATION
                            </Typography>
                        </Button>
                    </Stack>
                </Stack>
                <Typography>{description}</Typography>
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
