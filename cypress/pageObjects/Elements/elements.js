class  ElementsPage{

    elements = {
        elementsBtn:() => cy.get(':nth-child(1) > :nth-child(1) > .card-body > h5'),
        textBox:() => cy.get(':nth-child(1) > .element-list > .menu-list > #item-0'),
        checkbox:() => cy.get('[class="rct-checkbox"]'),
        notSelected:() =>  cy.get('#result > span:nth-child(1)'),
    }

    clickElementBtn(){
        this.elements.elementsBtn().click();
    }
    clickTextBtn(){
        this.elements.textBox().click();
    }
    clickCheckBoxBtn(){
        this.elements.checkbox().click();
    }
    notSelected(){
        this.elements.notSelected().should('not.exist');
    }

}
module.exports = new ElementsPage();