import CategoryCardList from '@components/customerStore/CategoryCardList';
import ImageSlider from '@components/customerStore/ImageSlider';
import ProductList from '@components/customerStore/ProductList';
import StoreFooter from '@components/customerStore/StoreFooter';
import React from 'react'

const StoreCategories = [
  {
    title: "Zapatos",
    description: "descripcion de la caterogia kjekdjs ajhsjf ajdjasd jsdjasd jasdjasd jasdhas fdd df fjdjsf asjdsd",
    image:
      "https://images.unsplash.com/photo-1577655197620-704858b270ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=144",
      isPrimary:true,
      showOnMainPage:true,
  },
  {
      title: "Vestidos",
      description: "descripcion de la caterogia kjekdjs ajhsjf ajdjasd jsdjasd jasdjasd jasdhas fdd df fjdjsf asjdsd",
      image:
        "https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      isPrimary:false,
      showOnMainPage:true,
    },
    {
      title: "Niños",
      description: "descripcion de la caterogia kjekdjs ajhsjf ajdjasd jsdjasd jasdjasd jasdhas fdd df fjdjsf asjdsd",
      image:
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80",
        isPrimary:false,
        showOnMainPage:true,
    },
    {
      title: "Categoria 2",
      description: "descripcion de la caterogia",
      image:
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80",
        isPrimary:false,
        showOnMainPage:false,
    }]


const StorePreview = ({params}) => {
  return (<>
  <ImageSlider/>
    <CategoryCardList mode="EDIT" store={params.store} categories={StoreCategories}/>
    <ProductList categories={StoreCategories}/>
    <StoreFooter />
    </>
    )
}

export default StorePreview;