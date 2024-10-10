class HomePage
{

getLogo()
{
    return cy.xpath('//gv-logo')
}

getcartIcon()
{
    return cy.get('[data-testid="basket-icon-link"]')

}
getBanner()
{
  return  cy.xpath('//div[@class="banner"][1]')
}

getCardsGrid()
{
   return cy.xpath('//div[@class="gv-grid-container Container___htGCM"]')
}

getSearchField()
{
   return cy.xpath('//input[@placeholder="Find your domain name..."]')
}


}

export default HomePage;


