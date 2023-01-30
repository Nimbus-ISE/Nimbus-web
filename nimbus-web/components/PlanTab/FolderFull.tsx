const FolderFull = (props: any) => {
    return (
        <div className="flex flex-col  h-full w-[100%] col-span-12 mt-8 ">
            <div className="col-span-12 h-[95%] w-full bg-white animate-move-in  rounded-b-xl">
                {props.children}
            </div>
        </div>
    );
};
export default FolderFull;
