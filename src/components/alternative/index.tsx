interface AlternativeProps {
    isSelected: boolean;
}

function Alternative({ isSelected }: AlternativeProps) {
    return (
        <div className={ `${isSelected ? "bg-slate-100" : "bg-white"} flex mt-8 items-center cursor-pointer p-2 rounded-md hover:bg-slate-100`}>
            <div className=" bg-red-100 w-10 h-10 rounded-full flex items-center justify-center">
                A
            </div>
            <span className="ml-5">
                Alternativa A
            </span>
        </div>
    )
}

export { Alternative }