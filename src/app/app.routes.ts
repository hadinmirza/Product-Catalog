import { Routes } from '@angular/router';
import { Home } from './Pages/home/home';
import { Products } from './Pages/products/products';
import { ProductDetails } from './Pages/product-details/product-details';
import { About } from './Pages/about/about';
import { Error } from './Pages/error/error';
import { Component } from '@angular/core';

export const routes: Routes = [
    {
        path: "",
        component: Home,
    },
    {
        path: "products",
        component: Products,
    },
    {
        path: "products/:id",
        component: ProductDetails,
    },
    {
        path: 'about',
        component: About,
    },
    {
    path:'**',
    component: Error,
    }

];
