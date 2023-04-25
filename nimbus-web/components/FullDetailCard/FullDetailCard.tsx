import React from "react";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Button, Divider, Stack, Typography } from "@mui/material";
import Stars from "../Stars";
import Review from "../MapPageComponents/Popups/Review";
import useMediaQuery from "@/hooks/useMediaQuery";
import ImagePagination from "./ImagePagination";
import { ThemeProvider } from "@mui/material";
import { nimbusTheme } from "@/styles/NimbusMuiTheme";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
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

interface SelectButtonProps {
    onClick: () => void;
}

const lightSx = {
    fontWeight: 300,
    fontFamily: "Montserrat",
};
const baseSx = {
    fontWeight: 400,
    fontFamily: "Montserrat",
};
const boldSx = {
    fontWeight: 800,
    fontFamily: "Montserrat",
};

const SelectButton = ({ onClick }: SelectButtonProps) => {
    return (
        <ThemeProvider theme={nimbusTheme}>
            <Button
                onClick={onClick}
                variant="contained"
                style={{
                    backgroundColor: "#00c4cc",
                    borderRadius: "0.5rem",
                }}
            >
                <div className="font-bold text-white text-lg font-montserrat">
                    SELECT AS DESTINATION
                </div>
            </Button>
        </ThemeProvider>
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

    const router = useRouter();
    const isLargerThanMedium = useMediaQuery("(min-width: 768px)");
    const isLargerThanLarge = useMediaQuery("(min-width: 1024px)");
    const handleSelectDestination = () => {
        Cookies.set("location_info", `${loc_id.toString()}|${loc_name}`);
        router.push("/plan");
    };

    return (
        <div className="relative text-black mx-auto p-5 md:p-12 w-full max-w-screen-xl">
            <Stack spacing={3} pb={2}>
                <Stack
                    direction={isLargerThanLarge ? "row" : "column"}
                    justifyContent="center"
                    alignItems="center"
                >
                    <ImagePagination
                        loc_name={location.loc_name}
                        url={location.url}
                        isLargerThanMedium={isLargerThanMedium}
                    />
                    <Stack
                        width={isLargerThanLarge ? "40%" : "100%"}
                        paddingX={isLargerThanLarge ? 4 : 0}
                        marginY={isLargerThanLarge ? 0 : "1rem"}
                        spacing={1}
                    >
                        {isLargerThanMedium ? (
                            <div className="absolute top-2 right-5 text-right text-neutral-400">
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
                            sx={{
                                ...baseSx,
                                fontWeight: 500,
                                color: "#666666",
                            }}
                            variant={
                                isLargerThanMedium ? "subtitle1" : "subtitle2"
                            }
                        >
                            {province}
                        </Typography>
                        <Stack
                            direction="row"
                            spacing={1}
                            pt={isLargerThanMedium ? 0 : 1}
                            justifyContent="flex-start"
                        >
                            <LocationOnIcon fontSize="large" />
                            <Stack spacing={1}>
                                <Typography
                                    sx={{ ...baseSx, marginY: "auto" }}
                                    variant="body2"
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
                        <div className="flex w-full py-1">
                            <div
                                className={
                                    isLargerThanMedium ? "mx-auto" : "p-2"
                                }
                            >
                                <Stars
                                    size={20}
                                    rating={Number(location_rating)}
                                />
                            </div>
                        </div>
                        <SelectButton onClick={handleSelectDestination} />
                    </Stack>
                </Stack>
                {isLargerThanMedium ? (
                    <Typography variant="subtitle2" sx={baseSx}>
                        {description}
                    </Typography>
                ) : (
                    <>
                        <Divider />
                        <Stack px={3}>
                            <Typography variant="subtitle2" sx={baseSx}>
                                {description}
                            </Typography>
                        </Stack>
                    </>
                )}
            </Stack>
            <div className="text-xl my-5 font-semibold text-neutral-700 border-b-[1px] border-neutral-400">
                GOOGLE REVIEWS
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
