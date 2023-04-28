import styles from './CardImageAdmin.module.css';
import { getBase64 } from '../../../../../assets/helpers/fileTo64'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    updateProduct,
    //clean update falta
    deleteProduct,
    //cleandelete falta 
} from '../../../../../redux/productActions';

const CardImageAdmin = ({ key, image, description, active, shop_id }) => {


    const dispatch = useDispatch();
    const { resUpPost } = useSelector((state) => state.post);
    const { resDel } = useSelector((state) => state.post);

    const [inputsM, setInputsM] = useState({
        name: 'imagen de galería',
        description: '',
        price: 0.00,
        image: '',
        shop_id: shop_id,
        active: active,
    });

    useEffect(() => {
        if (Object.keys(resUpPost).length) {
        //dispatch(clnUpPost());
        }

        if (Object.keys(resDel).length) {
        //dispatch(clnDel());
        }
    }, [resUpPost, resDel]);

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
            name: 'imagen de galería',
            description: '',
            price: 0.00,
            image: '',
            shop_id: shop_id,
            active: active,
        })
    };

    const handlerButtonMod = (event) => {
        setInputsM({
            name: 'imagen de galería',
            description: description,
            price: 0.00,
            image: image,
            shop_id: shop_id,
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
                                    value={key}
                                    onClick={handlerButtonMod}
                                >
                                Cargar Datos
                                </button>
                                {active === false && (
                                <button
                                    className={`btn btn-primary`}
                                    value={key}
                                    onClick={handlerDelete}
                                >
                                    Activar
                                </button>
                                )}

                                {active === true && (
                                <button
                                    className={`btn btn-primary`}
                                    value={key}
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
                    <label for='inputEmail3' className='col-sm-2 col-form-label'>
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
                    <label for='inputPassword3' className='col-sm-2 col-form-label'>
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