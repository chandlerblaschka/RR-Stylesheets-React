const styledText = {
    display: "flex",
    justifyContent: "center",
    fontSize: "25px",
    textAlign: "center",
    margin: "auto",
    width: "66%",
    border: "1px solid green"
};

export default function Example() {
    return (
        <div style={styledText}>
            <p>Customized Text</p>
        </div>
    );
}