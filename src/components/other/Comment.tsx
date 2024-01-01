import React, {FC, ReactNode} from "react";

interface CommentProps {
    icon: ReactNode,
    name:string,
    content:string
}

const Comment: FC<CommentProps> = ({icon, name, content}) => {

    return (

        <div className="flex justify-center">
            <div className="w-full">
                <div
                    className="rounded-lg p-6">
                    <div className="grid grid-cols-12">
                        <div
                            className=" relative mb-6 col-span-12 flex items-end justify-end ">
                            {icon}
                        </div>
                        <div className="md:ml-6 col-span-12">
                            <p
                                className="mb-2 text-xl font-semibold text-center">
                                {name}
                            </p>
                            <p
                                className="mb-6 font-light text-center">
                                {content}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Comment;
