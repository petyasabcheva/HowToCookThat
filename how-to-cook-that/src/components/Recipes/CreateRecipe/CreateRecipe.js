import './CreateRecipe.css'
import AuthContext from '../../../contexts/AuthContext';
import * as recipeService from '../../../services/recipeService';
import * as categoriesService from '../../../services/categoriesService';
import { useEffect, useState,useContext} from 'react';
import { Formik, Form, Field,ErrorMessage } from 'formik';
import * as Yup from 'yup';


const CreateRecipe = ({
    history,
}) => {
    const { isAuthenticated, email } = useContext(AuthContext);
    let [categories, setCategories] = useState([]);

    useEffect(() => {
        categoriesService.getAll()
        .then(res=>setCategories(res)).catch(error => console.log(error));;
    }, []);

    const initialValues = {
        name: '',
        category: 'soups',
        imageUrl: '',
        prepTime: '',
        cookTime: '',
        portions: '',
        instructions: ''
      }
    
      const onSubmit = values => {
        let recipe={
            name:values.name,
            category:values.category,
            imageUrl:values.imageUrl,
            prepTime:values.prepTime,
            cookTime:values.cookTime,
            portions:values.portions,
            instructions:values.instructions,
            userEmail:email,
        }
        console.log(recipe);
        recipeService.create(recipe).then(()=>{
            history.push('/');
        })
      }
    
    
      const validationSchema = Yup.object({
        name: Yup.string().required('Required').min(3,'Name must be at least 3 characters long'),
        imageUrl: Yup.string().required('Required').url(),
        prepTime: Yup.number().required('Required').positive('Preparation time can not be negative'),
        cookTime: Yup.number().required('Required').positive('Cooking time can not be negative'),
        portions: Yup.number().required('Required').positive('Portions count can not be negative'),
        instructions: Yup.string().required('Required').min(20,'Instructions must be at least 20 characters long'),
      })
    
      return (
        <section className="create-recipe-section">
          <div className="create-recipe-header">
          <h1>Add a new recipe</h1>
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
                <span className='error-message'><ErrorMessage name='name' /></span>
              </div>
              <div className="field">
                        <label htmlFor="category">Category</label>
                        <span className="input">
                            <Field as='select' id='category' name='category' type="text" >
                                {categories.map(x=>
                                   <option
                                   key={x.id}
                                   value={x.name}>{x.name} </option> )}
                            </Field>
                        </span>
                    </div>
              <div className="field">
                <label htmlFor="imageUrl">Image URL</label>
                <Field type="text" name="imageUrl" id="imageUrl" />
                <span className='error-message'><ErrorMessage name='imageUrl' /></span>
              </div>
              <div className="field">
                <label htmlFor="prepTime">Preparation time /min/</label>
                <Field type="number" name="prepTime" id="prepTime" />
                <span className='error-message'><ErrorMessage name='prepTime' /></span>
              </div>
              <div className="field">
                <label htmlFor="cookTime">Cooking time /min/</label>
                <Field type="number" name="cookTime" id="cookTime" />
                <span className='error-message'><ErrorMessage name='cookTime' /></span>
              </div>
              <div className="field">
                <label htmlFor="portions">Portions count</label>
                <Field type="number" name="portions" id="portions" />
                <span className='error-message'><ErrorMessage name='portions' /></span>
              </div>
              {/* <div className="field" id='field-with-ingredients'>
              <IngredientsList />
              </div> */}
              <div className="field">
                <label htmlFor="instructions">Instructions</label>
                <Field as="textarea" rows='7' name="instructions" id="instructions" />
                <span className='error-message'><ErrorMessage name='instructions' /></span>
              </div>
              <input className="submit-button" type="submit" value="Post the recipe" />
            </Form>
          </Formik>
        </section>
      )
    }
export default CreateRecipe;