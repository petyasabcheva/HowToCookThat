import './CreateArticle.css'
import AuthContext from '../../../contexts/AuthContext';
import * as articlesService from '../../../services/articlesService'
import { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const CreateArticle = ({
    history,
}) => {
    const { isAuthenticated, email } = useContext(AuthContext);


    const initialValues = {
        title: '',
        imageUrl: '',
        content: ''
    }

    const onSubmit = values => {
        let article = {
            title: values.title,
            imageUrl: values.imageUrl,
            content: values.content,
            userEmail: email,
        }
        console.log(article);
        articlesService.create(article).then(() => {
            history.push('/');
        }).catch(error => console.log(error));
    }


    const validationSchema = Yup.object({
        title: Yup.string().required('Required').min(3, 'Title must be at least 3 characters long'),
        imageUrl: Yup.string().required('Required').url(),
        content: Yup.string().required('Required').min(20, 'Content must be at least 20 characters long'),
    })

    return (
        <section className="create-article-section">
            <div className="create-article-header">
                <h1>Add a new article</h1>
            </div>
            <Formik
                enableReinitialize={true}
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                <Form>
                    <div className="field">
                        <label htmlFor="title">Title</label>
                        <Field type="text" name="title" id="title" />
                        <span className='error-message'><ErrorMessage name='title' /></span>
                    </div>
                    <div className="field">
                        <label htmlFor="imageUrl">Image URL</label>
                        <Field type="text" name="imageUrl" id="imageUrl" />
                        <span className='error-message'><ErrorMessage name='imageUrl' /></span>
                    </div>
                    <div className="field">
                        <label htmlFor="content">Content</label>
                        <Field as="textarea" rows='7' name="content" id="content" />
                        <span className='error-message'><ErrorMessage name='content' /></span>
                    </div>
                    <input className="submit-button" type="submit" value="Post the article" />
                </Form>
            </Formik>
        </section>
    )
}
export default CreateArticle;