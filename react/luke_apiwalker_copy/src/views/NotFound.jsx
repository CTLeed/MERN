import { Link } from "react-router-dom"
import obi from "../imgs/obi-wan-kenobi-these-are-not-the-droids.gif"
export const NotFound = () => {
    return (
        <div>
            <h1>These are NOT the droids you're looking for...</h1>
            <img src={obi} alt="Obi Wan" />
            <Link to="/">
                <button>Return to the Jedi</button>
            </Link>
        </div>
    )
}
