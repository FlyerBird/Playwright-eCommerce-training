import { test, expect, Page } from '@playwright/test';
import { LoginActions } from '../src/utils/login-action';
import { Locators } from '../src/common-page/locators';

test('add items into the Carrito', async ({ page }) => {
    const login = new LoginActions(page);
    const locators = new Locators(page);
    await login.performLogin();

    // Obtener una lista de todos los productos en la tienda
    const productElements = (await locators.inventoryItemsLocator.all()).slice(0, 3);;
    console.log(productElements.length);
    
    //Contador para llevar un registro de los elementos añadidos al carrito
    let itemsAddedToCart = 0;

    // Iterar sobre cada elemento que representa un producto y agregarlo al carrito
    for (const product of productElements) {
    // Encontrar el botón "Agregar al Carrito" dentro del elemento del producto
    const addToCartButton = product.locator(locators.addToCartLocator);

    //Obtener el nombre del producto
    const productName = await product.locator(locators.productNameLocator).innerText();
    console.log("Product added:", productName);
    
    // Hacer clic en él button para añadir al carrito
    await addToCartButton.click();
    
     //Incrementar el contador de productos añadidos al carrito
    itemsAddedToCart++;
    console.log(itemsAddedToCart)

      }

    // Realizar la aserción para verificar el número de elementos añadidos al carrito
    expect(itemsAddedToCart).toBe(productElements.length); // Verifica si todos los productos han sido añadidos al carrito
  });

  
  
  
