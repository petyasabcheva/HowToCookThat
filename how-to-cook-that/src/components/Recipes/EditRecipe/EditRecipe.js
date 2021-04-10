import * as recipeService from '../../../services/recipeService';
import * as categoriesService from '../../../services/categoriesService';
import { useEffect, useState } from 'react';
import { Formik, Form, Field,ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './EditRecipe.css'

const EditRecipe = ({
  history, match,
}) => {

  let [recipe, setRecipe] = useState({});
  let [categories, setCategories] = useState([]);

  useEffect(() => {
    recipeService.getOne(match.params.id)
      .then(res => setRecipe(res));
    categoriesService.getAll()
      .then(res => setCategories(res))
  }, []);


  const initialValues = {
    name: `${recipe.name}`,
    category: 'soups',
    imageUrl: `${recipe.imageUrl}`,
    prepTime: `${recipe.preparationTime}`,
    cookTime: `${recipe.cookingTime}`,
    portions: `${recipe.portionsCount}`,
    instructions: `${recipe.instructions}`
  }

  const onSubmit = values => {
    let updatedRecipe = {
      id: recipe.id,
      name: values.name,
      categoryId: categories.find(c => c.name == values.category).id,
      imageUrl: values.imageUrl,
      preparationTime: values.prepTime,
      cookingTime: values.cookTime,
      portionsCount: values.portions,
      instructions: values.instructions
    };

    recipeService.update(updatedRecipe).then(() => {
      history.push('/');
    })
  }


  const validationSchema = Yup.object({
    name: Yup.string().required('Required').min(3, 'Name must be at least 3 characters long'),
    imageUrl: Yup.string().required('Required').url(),
    prepTime: Yup.number().required('Required').positive('Preparation time can not be negative'),
    cookTime: Yup.number().required('Required').positive('Cooking time can not be negative'),
    portions: Yup.number().required('Required').positive('Portions count can not be negative'),
    instructions: Yup.string().required('Required').min(20, 'Instructions must be at least 20 characters long'),
  })

  return (
    <section className="edit-recipe-section">
      <div className="edit-recipe-header">
        <h1>Update your recipe</h1>
      </div>
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        <Form>
          <div className="field">
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" id="name" />
            <div className="error-message"> <ErrorMessage name='name' /></div>
          </div>
          <div className="field">
            <label htmlFor="category">Category</label>
            <span className="input">
              <Field as='select' id='category' name='category' type="text" >
                {categories.map(x =>
                  <option
                    key={x.id}
                    value={x.name}>{x.name} </option>)}
              </Field>
            </span>
          </div>
          <div className="field">
            <label htmlFor="imageUrl">Image URL</label>
            <Field type="text" name="imageUrl" id="imageUrl" />
            <div className="error-message"> <ErrorMessage name='imageUrl' /></div>
          </div>
          <div className="field">
            <label htmlFor="prepTime">Preparation time /min/</label>
            <Field type="number" name="prepTime" id="prepTime" />
            <div className="error-message"> <ErrorMessage name='prepTime' /></div>
          </div>
          <div className="field">
            <label htmlFor="cookTime">Cooking time /min/</label>
            <Field type="number" name="cookTime" id="cookTime" />
            <div className="error-message"> <ErrorMessage name='cookTime' /></div>
          </div>
          <div className="field">
            <label htmlFor="portions">Portions count</label>
            <Field type="number" name="portions" id="portions" />
            <div className="error-message"> <ErrorMessage name='portions' /></div>
          </div>
          <div className="field">
            <label htmlFor="instructions">Instructions</label>
            <Field as="textarea" rows="7" name="instructions" id="instructions" />
            <div className="error-message"> <ErrorMessage name='instructions' /></div>
          </div>
          <input className="submit-button" type="submit" value="Edit Recipe" />
        </Form>
      </Formik>
    </section>
  )
}

export default EditRecipe;