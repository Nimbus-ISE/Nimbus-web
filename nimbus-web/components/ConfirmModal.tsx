import React, { SetStateAction } from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Button } from "@mui/material";

interface IProps {
    confirmActive: boolean;
    setIsConfirmActive: React.Dispatch<SetStateAction<boolean>>;
    onAcceptCallback: () => any;
    onDeclineCallback: () => any;
    header: string;
    sub: string;
}

export default function ConfirmModal({
    confirmActive,
    setIsConfirmActive,
    onAcceptCallback,
    onDeclineCallback,
    header,
    sub,
}: IProps) {
    const handleClose = () => setIsConfirmActive(false);
    return (
        <div>
            <Modal
                open={confirmActive}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={confirmActive}>
                    <div
                        className="absolute flex flex-col top-0 bottom-0 left-0 right-0 m-auto max-w-[30rem] w-[90%] shadow-md rounded-xl
                        bg-white text-neutral-800 h-[15rem] overflow-hidden"
                    >
                        <div className="flex font-bold text-2xl text-center bg-red-100 h-24">
                            <div className="m-auto text-red-400 drop-shadow-sm">
                                {header}
                            </div>
                        </div>
                        <div className="flex text-center text-sm">
                            <div className="m-auto w-[80%] py-5">{sub}</div>
                        </div>
                        <div className="grid grid-cols-2 gap-5 mx-5 mb-5">
                            <Button
                                onMouseDown={() => {
                                    handleClose();
                                    onAcceptCallback();
                                }}
                                variant="outlined"
                                color="primary"
                                sx={{
                                    textTransform: "none",
                                }}
                            >
                                <div className="m-auto font-montserrat">
                                    Confirm
                                </div>
                            </Button>
                            <Button
                                onMouseDown={() => {
                                    handleClose();
                                    onDeclineCallback();
                                }}
                                variant="outlined"
                                color="primary"
                                sx={{
                                    borderColor: "black",
                                    color: "#222222",
                                    textTransform: "none",
                                    "&:hover": {
                                        color: "#222222",
                                        backgroundColor: "Gainsboro",
                                        borderColor: "gray",
                                    },
                                }}
                            >
                                <div className="m-auto font-montserrat">
                                    Cancel
                                </div>
                            </Button>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
