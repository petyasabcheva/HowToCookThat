import * as articlesService from '../../../services/articlesService';
import { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './EditArticle.css'

const EditArticle = ({
    history, match,
}) => {

    let [article, setArticle] = useState({});

    useEffect(() => {
        articlesService.getOne(match.params.id)
            .then(res => setArticle(res)).catch(error => console.log(error));;
    }, []);


    const initialValues = {
        title: article.title,
        imageUrl: article.imageUrl,
        content: article.content
    }


    const onSubmit = values => {
        let updatedArticle = {
            id: article.id,
            title: values.title,
            imageUrl: values.imageUrl,
            content: values.content,
            userEmail:article.userEmail
        };

        articlesService.update(updatedArticle).then(() => {
            history.push('/');
        })
    }


    const validationSchema = Yup.object({
        title: Yup.string().required('Required').min(3, 'Title must be at least 3 characters long'),
        imageUrl: Yup.string().required('Required').url(),
        content: Yup.string().required('Required').min(20, 'Content must be at least 20 characters long'),
    })

    return (
        <section className="edit-article-section">
            <div className="edit-article-header">
                <h1>Update your Article</h1>
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

export default EditArticle;