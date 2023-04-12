import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'
import Loading from './Loading'

function ItemSection() {

    let [product, setProduct] = useState([])


    // this requestis not working properly**
    useEffect(() => {
        axios.post('https://admin.gifinfinity.com/products/api/client/v1/products-list/')
            .then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);

            })
    }, [])


    return (
        <div>
            {product.length === 0 ? <Loading /> : <Card />}
        </div>
    )
}

export default ItemSection