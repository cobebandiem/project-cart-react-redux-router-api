import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProdcutActionPage from './pages/ProdcutActionPage/ProdcutActionPage';

const routes=[
  {
    path:'/',
    exact:true,
    main:()=> <HomePage/>
  },
  {
    path:'/product-list',
    exact:false,
    main:()=><ProductListPage/>
  },
  {
    path:'/product/add',
    exact:false,
    main:({history})=><ProdcutActionPage history={ history }/>
  },
  {
    path:'/product/:id/edit',
    exact:false,
    main:({match,history})=><ProdcutActionPage history={history} match={match}/>
  },
  {
    path:'',
    exact:false,
    main:()=> <NotFoundPage/>
  }
];

export default routes;
