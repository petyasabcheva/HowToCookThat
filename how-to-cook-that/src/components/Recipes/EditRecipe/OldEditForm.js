import * as recipeService from '../../../services/recipeService';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const EditRecipe = ({
  match
}) => {
  let [recipe, setRecipe] = useState({});



  useEffect(() => {
    recipeService.getOne(match.params.id)
      .then(res => setRecipe(res));
  }, []);

  // const onEditRecipeSubmit = (e) =>{
  //     e.preventDefault();
  //     console.log(e.target.instructions.value);
  // }

  // const onTextChangeHanldler=(e)=>{
  //     if (e.target.value.length<3) {
  //         setErrorMessage(`${e.target.name.charAt(0).toUpperCase() + e.target.name.slice(1)} is too short`)
  //     }
  //     else{
  //         setErrorMessage('');
  //     }
  // }

const initialValues={
  name: 'petya',
  category: '',
  imageUrl: 'url',
  prepTime: 10,
  cookTime:10,
  portions: 10,
}

const onSubmit= values=>{
  console.log(values);
}

// const validate= values=>{
//   let errors={};
//   if(!values.name){
//     errors.name='Required'
//   }
//   if(!values.imageUrl){
//     errors.imageUrl='Required'
//   }
//   return errors
// }

const validationSchema= Yup.object({
  name: Yup.string().required('Required'),
  imageUrl: Yup.string().required('Required'),
})

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    // validate
  })


  return (
    <section className="edit-recipe-section">
      <form onSubmit={formik.handleSubmit}>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
          {formik.touched.name&&formik.errors.name? <div className='error'>{formik.errors.name}</div>:null}
        </div>
        <div className="field">
          <label htmlFor="imageUrl">Image URL</label>
          <input type="text" name="imageUrl" id="imageUrl"onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.imageUrl}/>
          {formik.touched.imageUrl&&formik.errors.imageUrl? <div className='error'>{formik.errors.imageUrl}</div>:null}
        </div>
        <div className="field">
          <label htmlFor="prepTime">Preparation time /min/</label>
          <input type="number" name="prepTime" id="prepTime" />
          {formik.touched.prepTime&&formik.errors.prepTime? <div className='error'>{formik.errors.prepTime}</div>:null}
        </div>
        <div className="field">
          <label htmlFor="cookTime">Cooking time /min/</label>
          <input type="number" name="cookTime" id="cookTime"  />
          {formik.touched.cookTime&&formik.errors.cookTime? <div className='error'>{formik.errors.cookTime}</div>:null}
        </div>
        <div className="field">
          <label htmlFor="portions">Portions count</label>
          <input type="number" name="portions" id="portions"/>
          {formik.touched.portions&&formik.errors.portions? <div className='error'>{formik.errors.portions}</div>:null}
        </div>
        <div className="field">
          <label htmlFor="instructions">Instructions</label>
          <input type="textarea" name="instructions" id="instructions"/>
          {formik.touched.instructions&&formik.errors.instructions? <div className='error'>{formik.errors.instructions}</div>:null}
        </div>

        <input className="submit-button" type="submit" value="Edit Recipe" />
      </form>
    </section>
  )
}

export default EditRecipe;