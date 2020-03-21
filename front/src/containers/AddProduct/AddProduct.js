import React, {useState} from 'react';
import {Button, Col, Container, Form, FormGroup, Input, Label} from "reactstrap";
import FormElement from "../../components/UI/Form/FormElement";
import {AxiosInstance as axiosApi} from "axios";
import {useSelector} from "react-redux";

const AddProduct = (props) => {
    const user = useSelector(state => state.users.user);
    const [formInputs, setFormInputs] = useState({title: '', description: '', image: '', price: '', category: ''});
    const onInputChange = e => {
        setFormInputs({...formInputs, [e.target.name]: e.target.value});
    };
    const onFileChange = e => {
        setFormInputs({...formInputs, [e.target.name]: e.target.files[0]});
    };
    const formSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(formInputs).forEach(key => {
            formData.append(key, formInputs[key]);
        });
        await axiosApi.post('/products', formData, {headers: {"Authorization": "Token " + user.token}});
        props.history.push('/');
    };
    return (
        <Container>
            <Form onSubmit={formSubmit}>
                <FormElement
                    propertyName='title'
                    title='Title'
                    value={formInputs.title}
                    onChange={onInputChange}
                    type='text'
                    placeholder='Enter the product title'
                    required={true}
                />
                <FormElement
                    propertyName='description'
                    title='Description'
                    value={formInputs.description}
                    onChange={onInputChange}
                    type='textarea'
                    placeholder='Enter the product description'
                    required={true}
                />
                <FormElement
                    propertyName='image'
                    title='Description'
                    value={formInputs.description}
                    onChange={onInputChange}
                    type='textarea'
                    placeholder='Enter the product description'
                    required={true}
                />
                <FormGroup>
                    <Label sm={2} for="image">Image</Label>
                    <Col sm={10}>
                        <Input
                            type="file"
                            name="image" id="image"
                            onChange={onFileChange}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={{offset:2, size: 10}}>
                        <Button type="submit" color="primary">Send Post</Button>
                    </Col>
                </FormGroup>
            </Form>
        </Container>

    );
};

export default AddProduct;
