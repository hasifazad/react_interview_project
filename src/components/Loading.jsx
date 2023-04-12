import React from 'react'

function Loading() {
    const loadStyle = { display: 'flex', justifyContent: "center", padding: "10px 0", backgroundColor: "antiquewhite" }

    return (
        <div style={loadStyle}>
            <h1>Loading...</h1>
        </div>
    )
}

export default Loading