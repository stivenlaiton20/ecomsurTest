import React from 'react'
import productsApi from '../api/productsApi'
import { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import Section, { SectionTitle, SectionBody } from '../components/section/Section'
import ProductCard from '../components/product-card/ProductCard'
import Grid from '../components/grid/Grid'

const Home = () => {
    const [products, setProducts] = useState()
    const getProduct = async () => {
        try {
            const res = await productsApi.getAll()
            setProducts(res.data)
            
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        
        getProduct()
        
    }, [])
    
  return (
    <div>
 
        {/*  section */}
        <Section>
            <SectionTitle>

            </SectionTitle>
                <SectionBody>
                   <Grid
                        col={3}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    > 
                    
                    {
                        !products ? 'cargandooo...' : 
                        products.map((product) => (
                            
                            <ProductCard
                                
                                key={product._id}
                                _id={Number(product._id)}
                                countInStock={Number(product.countInStock)}
                                brand={product.brand}
                                category={product.category}
                                image={product.image}
                                name={product.name}
                                description={product.description}
                                price={Number(product.price)}
                                            
                            />
                        ))
                    }
                    </Grid>

                    
            </SectionBody>

        </Section>

        
    </div>
  )
}

export default Home