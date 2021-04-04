import './Recipe.css'
const Recipe = (
    { id,
        name,
        imageUrl, }
) => {
    return (
        <li className="recipe-wrapper">
            <img src={imageUrl} alt="" />
            <h3 className="recipe-name">
                {name}
            </h3>
        </li>
    )
}

export default Recipe;