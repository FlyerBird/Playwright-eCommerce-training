import { Locator, Page } from "@playwright/test";

export class Locators {
    readonly page: Page;
    readonly inventoryItemsLocator: Locator;
    readonly addToCartLocator: Locator;
    readonly productNameLocator: Locator;
    
    constructor(page: Page) {
        this.page = page;

        // Define el locator para los elementos de la tienda
        this.inventoryItemsLocator = page.locator('.inventory_item ');
        // Define el locator para el botón "Agregar al Carrito"
        this.addToCartLocator= page.locator('div.pricebar > button.btn.btn_primary.btn_small.btn_inventory');
        //Obtener el nombre del producto
        this.productNameLocator = page.locator('div.inventory_item_name');
      
    }
}



 