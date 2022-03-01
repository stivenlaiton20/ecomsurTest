import React, {useState, useEffect} from 'react'

import Section, {SectionBody, SectionTitle} from '../components/section/Section'



import ProductView from '../components/product-view/ProductView'
import productsApi from '../api/productsApi'

import Helmet from '../components/helmet/Helmet'





const Producto = props => {
    const [product, setProduct] = useState(undefined)


    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await productsApi.getOne(props.match.params.id)
                setProduct(res.data)
                
            } catch(err) {
                console.log(err)
            }
        }
        getProduct()
     
      
    }, [product])
   
    return (
        <Helmet>
            <Section>
            <SectionBody>
              {
                !product ? 'cargando....' :
                
                <ProductView product={product}/>
            
              }
              </SectionBody>
            </Section>
            <Section>
                <SectionTitle>
                    ver mas 
                </SectionTitle>
                <SectionBody>

                </SectionBody>
            </Section>
        </Helmet>
    )
}

export default Producto