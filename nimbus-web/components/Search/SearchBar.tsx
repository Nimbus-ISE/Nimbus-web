import useElementSize from "@/hooks/useElementSize";
import { useRouter } from "next/router";
import React from "react";

interface IProps {
    valueCallback?: (value: string, id: number) => void;
    className?: string;
    inputClassName?: string;
    disableNavigate?: boolean;
    value?: string;
}

const SearchBar = ({
    className,
    inputClassName,
    valueCallback,
    disableNavigate,
    value,
}: IProps) => {
    const router = useRouter();
    const [items, setItems] = React.useState<Array<any>>([]);
    const [listIsShowing, setListIsShowing] = React.useState<boolean>(false);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const timeoutRef = React.useRef<number | null>(null);
    const containerSize = useElementSize(`searchbar-container-${className}`);
    const handleOnChange = () => {
        //sends value out if user manually typed without autocomplete
        if (
            valueCallback &&
            items.length !== 0 &&
            inputRef.current &&
            inputRef.current.value.toLowerCase() ===
                items[0].loc_name.toLowerCase()
        )
            valueCallback(items[0].loc_name, items[0].loc_id);
        // Clear any previous timeout
        if (inputRef.current?.value.length === 0) {
            setListIsShowing(false);
            setItems([]);
        } else {
            setListIsShowing(true);
        }
        if (timeoutRef.current) {
            window.clearTimeout(timeoutRef.current);
        }
        // Set a new timeout to trigger the query function after 300ms
        timeoutRef.current = window.setTimeout(searchQuery, 300);
    };
    const handleAutocomplete = (loc_id: number, loc_name: string) => {
        console.log("going to loc_id", loc_id);
        if (inputRef.current) inputRef.current.value = loc_name;
        searchQuery();
        setListIsShowing(false);
        if (!disableNavigate) router.push(`/location/${loc_id}`);
    };
    const searchQuery = async () => {
        if (inputRef.current && inputRef.current.value.length !== 0) {
            const res = await fetch(
                `/api/search/${inputRef.current.value.toUpperCase()}`
            );
            const locationList = await res.json();
            console.log(locationList);
            setItems(locationList);
        }
    };
    React.useEffect(() => {
        if (inputRef.current && value) inputRef.current.value = value;
    }, [value]);
    return (
        <div
            id={`searchbar-container-${className}`}
            onFocus={() => {
                setListIsShowing(true);
            }}
            onBlur={() => {
                setListIsShowing(false);
            }}
            className={
                className
                    ? className
                    : `relative flex justify-between text-neutral-800 my-auto w-56 xl:w-72 h-8 text-sm z-10`
            }
        >
            <input
                ref={inputRef}
                onChange={() => handleOnChange()}
                placeholder="Search Location"
                className={
                    inputClassName
                        ? inputClassName
                        : `bg-neutral-100 md:border-[1px] md:shadow-sm rounded-lg 
                w-full h-full my-auto px-8 shadow-md`
                }
            />
            <svg
                className="absolute left-2 top-0 bottom-0 w-4 h-4 m-auto fill-neutral-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
            >
                {`<!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->`}
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    if (inputRef.current) {
                        inputRef.current.value = "";
                        setItems([]);
                    }
                }}
            >
                <svg
                    className="absolute right-2 top-0 bottom-0 w-4 h-4 m-auto fill-neutral-500 hover:fill-neutral-600 cursor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                >
                    {`<!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->`}
                    <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                </svg>
            </button>
            {listIsShowing && items.length !== 0 ? (
                <div
                    style={{
                        paddingTop: `${containerSize.height / 2}px`,
                        top: `${containerSize.height / 2}px`,
                    }}
                    className="absolute flex flex-col w-full left-0 bg-neutral-100 -z-[5] rounded-xl shadow-md"
                >
                    {items.map((item) => {
                        return (
                            <button
                                key={item}
                                style={{
                                    paddingTop: `${containerSize.height / 4}px`,
                                    paddingBottom: `${
                                        containerSize.height / 4
                                    }px`,
                                }}
                                className="relative flex text-left px-2 hover:bg-neutral-200 rounded-xl transition duration-[200ms] pl-8"
                                onMouseDown={() => {
                                    handleAutocomplete(
                                        item.loc_id,
                                        item.loc_name
                                    );
                                    if (valueCallback)
                                        valueCallback(
                                            item.loc_name,
                                            item.loc_id
                                        );
                                }}
                            >
                                <svg
                                    className="absolute left-2 top-0 bottom-0 w-4 h-4 m-auto fill-neutral-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    {`<!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->`}
                                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                                </svg>
                                {item.loc_name}
                            </button>
                        );
                    })}
                </div>
            ) : null}
        </div>
    );
};

export default SearchBar;
