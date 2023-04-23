import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CircleIcon from "@mui/icons-material/Circle";
import { Box, IconButton, Stack } from "@mui/material";

interface ImagePaginationProps {
    loc_name: string;
    url: string[];
    isLargerThanMedium: boolean | undefined;
}

interface DotPaginationProps {
    show: boolean;
}

const DotPagination = ({ show }: DotPaginationProps) => {
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

const ImagePagination = ({
    url,
    loc_name,
    isLargerThanMedium,
}: ImagePaginationProps) => {
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
    return (
        <Stack width={isLargerThanMedium ? "60%" : "100%"}>
            {isLargerThanMedium ? (
                <img
                    // className="h-72 shadow-md aspect-video object-cover rounded-t-xl"
                    className="h-72 rounded-t-xl"
                    src={imageList}
                    alt={loc_name}
                />
            ) : (
                <img
                    // className="h-52 w-100 shadow-md aspect-video object-cover "
                    src={imageList}
                    alt={loc_name}
                />
            )}
            <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                className="shadow-md"
                sx={{
                    backgroundColor: "#e9e9e9",
                    borderRadius: isLargerThanMedium
                        ? "0px 0px 8px 8px"
                        : "0px 0px 0px 0 px",
                    width: "100%",
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
                            />
                        );
                    })}
                </Stack>
                <IconButton
                    disabled={currentPage == url.length - 1 ? true : false}
                    onClick={handleNext}
                >
                    <ArrowForwardIosIcon sx={{ fontSize: 15 }} />
                </IconButton>
            </Box>
        </Stack>
    );
};

export default ImagePagination;
