import "./Moviecard.css";

function Moviecard(props) {
    // console.log(props);
    return (
        <article className="m-card">
            <p>{props.title}</p>
            <p>{props.year}</p>
            <p>{props.director}</p>
            <p>{props.duration}</p>
            <p>{props.rate}</p>
            <p>{props.genre}</p>
            {props.genre.map((item, index) => {
                return (<p key={index}>{item}</p>);
            })}
        </article >
    );
}

export default Moviecard;