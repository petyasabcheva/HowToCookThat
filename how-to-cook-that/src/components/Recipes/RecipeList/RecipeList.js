import RecipeCard from '../RecipeCard/RecipeCard'
import './RecipeList.css'
import { Component } from 'react';
import * as recipeService from '../../../services/recipeService';

class RecipeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
            currentCategory: 'all',

        }
    }
    componentDidMount() {
        recipeService.getAll().then(res => this.setState({ recipes: res }));
    }

    componentDidUpdate(prevProps) {
        const category = this.props.currentCategory;

        if (prevProps.currentCategory == category) {
            return;
        }

        recipeService.getAll(category)
            .then(res => {

                this.setState({ recipes: res, currentCategory: category })
            })
    }

    render() {
        return (
            <ul className="recipe-list">
                {this.state.recipes.map(x =>
                    <RecipeCard
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