

import HomePage from '../../../support/pageObjects/HomePage'; 

const homePage = new HomePage(); // Initialize the homePage object



const { Given, Then, And } = require("@badeball/cypress-cucumber-preprocessor");



Given('user opens "one-webshop-home" page', ()=> 
{

 cy.visit("https://one-webshop.test.dogado.net/")
})

Then ('header contains "the brand Icon"', ()=>
{

    homePage.getLogo().should('be.visible')
    
})

Then ('header contains "the cart Icon"', ()=>
{

    homePage.getcartIcon().should('be.visible')
})  

Then ('"banner text" is displayed on the page', ()=>
{

    homePage.getBanner().should('be.visible')   
})

Then ('"Search field" is displayed on the page', ()=>
{

    homePage.getSearchField().should('be.visible')
})     

Then ('"Webhosting Cards" are displayed on the page', ()=>
{

    homePage.getCardsGrid().should('be.visible')
})