import styles from './CardImageAdmin.module.css';
import { getBase64 } from '../../../../../assets/helpers/fileTo64'
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
    updateProduct,
    deleteProduct,
} from '../../../../../redux/productActions';

const CardImageAdmin = ({ productId, image, description, active, shopId }) => {

    const dispatch = useDispatch();

    const [inputsM, setInputsM] = useState({
        id_product: productId,
        name: 'imagen de galería',
        description: '',
        price: 0.00,
        image: '',
        shop_id: shopId,
        active: active,
    });

    const handlerInputsM = (event) => {
        setInputsM({
        ...inputsM,
        [event.target.name]: event.target.value,
        });
    };

    const handlerSubmitModify = (event) => {
        event.preventDefault();

        dispatch(updateProduct(inputsM));

        setInputsM({
            id_product: productId,
            name: 'imagen de galería',
            description: '',
            price: 0.00,
            image: '',
            shop_id: shopId,
            active: active,
        })
    };

    const handlerButtonMod = (event) => {
        setInputsM({
            id_product: productId,
            name: 'imagen de galería',
            description: description,
            price: 0.00,
            image: image,
            shop_id: shopId,
            active: active,
        })
    };

    const handlerFile = async (event) => {
        if (event.target.files[0]) {
        let res = await getBase64(event.target.files[0])
        setInputsM({
            ...inputsM,
            image: res,
        });
        }
    };

    const handlerDelete = (event) => {
        dispatch(deleteProduct(event.target.value))
    };

    return (
        <section>
            <div className={`card mb-3`} style={{ width: '540px' }}>
                <div className={`row g-0`}>
                    <div className={`col-md-4`}>
                        <img
                        src={image}
                        className={`${styles.image} img-fluid rounded-start`}
                        alt={'...'}
                        />
                    </div>
                    <div className={`col-md-8`}>
                        <div className={`card-body`}>
                            <p className={`card-text`}>{description}</p>
                            <div className={styles.divButtons}>
                                <button
                                    className={`btn btn-primary`}
                                    name='id_product'
                                    value={productId}
                                    onClick={handlerButtonMod}
                                >
                                Cargar Datos
                                </button>
                                {active === false && (
                                <button
                                    className={`btn btn-primary`}
                                    name={'imagen de galería'}
                                    value={productId}
                                    onClick={handlerDelete}
                                >
                                    Activar
                                </button>
                                )}

                                {active === true && (
                                <button
                                    className={`btn btn-primary`}
                                    name={'imagen de galería'}
                                    value={productId}
                                    onClick={handlerDelete}
                                >
                                    Eliminar
                                </button>
                                )}
                                {active === true ? (
                                <p className={`${styles.txtButtonG} `}>Active</p>
                                ) : (
                                <p className={`${styles.txtButtonR} `}>Inactive</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='card card-body'>
                <form onSubmit={handlerSubmitModify}>
                <div className='row mb-3'>
                    <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
                    Descripción
                    </label>
                    <div className='col-sm-10'>
                    <input
                        type='text'
                        className='form-control'
                        id='inputEmail3'
                        name='description'
                        value={inputsM.description}
                        onChange={handlerInputsM}
                    />
                    </div>
                </div>
                
                
                <div className='row mb-3'>
                    <label htmlFor='inputPassword3' className='col-sm-2 col-form-label'>
                    Imagen
                    </label>
                    <div className='col-sm-10'>
                    <input
                        type='file'
                        className='form-control'
                        id='inputPassword3'
                        name='image'
                        onChange={handlerFile}
                    />
                    </div>
                </div>

                <button type='submit' className='btn btn-primary'>
                    Modificar
                </button>
                </form>
            </div>
        </section>
    );
};

export default CardImageAdmin;