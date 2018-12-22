import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form, Modal, Button} from 'semantic-ui-react'
import './Form.css'

let ContactForm = props => {
  const { handleSubmit, handleOpen, modalOpen } = props

  return (<Modal  open={modalOpen} trigger={<Button positive onClick={handleOpen}>Add New Film</Button>} size='tiny' closeIcon>
    <Form onSubmit={handleSubmit} className='form'> 
              <h3>Add Information About Film</h3>
              <Form.Field> 
                <Field className='input' name="title" component="input" type="text" placeholder="Title" required/>
              </Form.Field>
              <Form.Field> 
                <Field className='input' name="actors" component="input" type="text" placeholder="Actors" required/>
              </Form.Field>     
              <Form.Field> 
                <Field className='input' name="budget" component="input" type="text" placeholder="Budget" required/>
              </Form.Field>  
              <Form.Field> 
                <Field className='input' name="description" component="input" type="text" placeholder="Description" required/>
              </Form.Field>  
              <Form.Field> 
                <Field className='input' name="genres" component="input" type="text" placeholder="Genres" required/>
              </Form.Field>  
              <Form.Field> 
                <Field className='input' name="year" component="input" type="text" placeholder="Year" required/>
              </Form.Field>  
              <Form.Button className='form-btn'>Submit</Form.Button>
          </Form>
      </Modal> )
}

ContactForm = reduxForm({
  form: 'films'
})(ContactForm)

export default ContactForm