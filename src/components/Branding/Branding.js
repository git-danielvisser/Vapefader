function Branding(props) {
    return (
        <div className="branding">
            <h1 className="branding__name">
                {props.name}
            </h1>
            {props.tagline && <h2 className="branding__tagline">
                {props.tagline}
            </h2>}
        </div>
    )
}

export default Branding;