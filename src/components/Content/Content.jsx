import React from "react";


function Content(props) {
    const { records } = props;

    return (
        <div>
            {records && records.map((record) => {
                    return (
                        <h1>{record.name}</h1>
                    )
                }
            )}
        </div>
    );
}

export default Content;
