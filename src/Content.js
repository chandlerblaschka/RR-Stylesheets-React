const styleContent = {
    fontSize: "30px",
    display: "flex",
    alignContent: "center",
    justifyContent: "space-evenly",
    textAlign: "center",
    flexDirection: "row"
}

const styleSubContent = {
    border: "1px solid black",
    minWidth: "fit-content",
    width: "20%",
    marginTop: "20px"
}


export default function Content() {
    return (
        <div style={styleContent}>
            <div style={styleSubContent}>
                <h3>
                    Header
                </h3>
                <p>Test 1</p>
            </div>
            <div style={styleSubContent}>
                <h3>
                    Header
                </h3>
                <p>Test 2</p>
            </div>
            <div style={styleSubContent}>
                <h3>
                    Header
                </h3>
                <p>Test 3</p>
            </div>
        </div>
    )
}