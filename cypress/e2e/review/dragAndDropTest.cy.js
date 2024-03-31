describe("Testing Drag and Drop action in cypress", () => {

    xit('verify drag and drop with cypress plugin', () => {
       // if your web element has event listeners as: dragstart, dragover, dragleave
       // install drag and drop plugin : npm i cypress-drag-drop
       // insert import 'cypress-drag-drop'; statement to commands.js 
        cy.visit('/drag_and_drop');
        // locate box A and B, so I can drag A to B
        cy.get('#column-a').drag('#column-b');
    })

    xit('verify drag and drop with cypress plugin', () => {
        // if your web element has event listeners as: dragstart, dragover, dragleave
        // install drag and drop plugin : npm i cypress-drag-drop
        // insert import 'cypress-drag-drop'; statement to commands.js 
         cy.visit('/drag_and_drop_circles');
         // locate box A and B, so I can drag A to B
         cy.get('#draggable').drag('#droptarget');
     })

     it('With data transfer', () => {
        cy.visit('/drag_and_drop');

        const dataTransfer = new DataTransfer();

        cy.get('#column-a').trigger('dragstart', {
            dataTransfer,
        });
        // provide target locator
        cy.get('#column-b').trigger('drop', {
            dataTransfer,
        })
     })
})
