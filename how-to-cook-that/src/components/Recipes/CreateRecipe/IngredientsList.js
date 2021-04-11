import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";

// Here is an example of a form with an editable list.
// Next to each input are buttons for insert and remove.
// If the list is empty, there is a button to add an item.
const IngredientsList = () => (
  <div>
    <h1>Ingredients List</h1>
    <Formik
      initialValues={{ ingredients: ["", "", ""] }}
    //   onSubmit={values =>
    //     setTimeout(() => {
    //       alert(JSON.stringify(values, null, 2));
    //     }, 500)
    //   }
      render={({ values }) => (
          <FieldArray
            name="ingredients"
            render={arrayHelpers => (
              <div>
                {values.ingredients && values.ingredients.length > 0 ? (
                  values.ingredients.map((friend, index) => (
                    <div key={index}>
                      <Field name={`ingredients.${index}`} />
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                      >
                        -
                      </button>
                      <button
                        type="button"
                        onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                      >
                        +
                      </button>
                    </div>
                  ))
                ) : (
                  <button type="button" onClick={() => arrayHelpers.push("")}>
                    {/* show this when user has removed all ingredients from the list */}
                    Add a friend
                  </button>
                )}
              </div>
            )}
          />
      )}
    />
  </div>
);

export default IngredientsList;