import PropTypes from "prop-types";

import Item from "./Item"

function List () {
    return (
        <>
        <h1>
            <ul>
                <Item marca="ferrari" ano_lançamento={2021} />
                <Item marca="lamborghini" ano_lançamento={2021} />
            </ul>
        </h1>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string,
    ano_lançamento: PropTypes.number
}

Item.defaultProps = {
    marca: "faltou marca",
    ano_lançamento: 0
}

export default List