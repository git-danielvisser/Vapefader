import './Branding.scss';

function Branding(props) {
    return (
        <div className="c-branding">
            <h1 className="c-branding__name">
                {props.name}
            </h1>
            {props.tagline && <h2 className="c-branding__tagline">
                {props.tagline}
            </h2>}
        </div>
    )
}

export default Branding;