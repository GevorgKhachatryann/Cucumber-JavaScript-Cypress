class  FormsPage{

    elements = {
        formsBtn:() => cy.get('#app > div > div > div.home-body > div > div:nth-child(2) > div > div.card-up'),
        practice:() => cy.get(':nth-child(2) > .element-list > .menu-list > #item-0')
    }

    clickFormsBtn(){
        this.elements.formsBtn().click();
    }
    clickPracticeFormBtn(){
        this.elements.practice().click();
    }

}
module.exports = new FormsPage();