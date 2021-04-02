import Recipe from '../Recipe/Recipe'
import './RecipeList.css'
import { Component } from 'react';
import * as recipeService from '../../../services/recipeService';

class RecipeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
        }
    }
    componentDidMount() {
        recipeService.getAll().then(res => this.setState({ recipes: res }));
    }


    render() {
        return (
            <ul className="recipe-list">
                {this.state.recipes.map(x =>
                    <Recipe
                        key={x.id}
                        {...x}
                    />
                )
                }
            </ul>
        );

    };
};

export default RecipeList;