function clickElement() {
   const element = document.evaluate(
       '/html/body/div[1]/div[2]/main/div[2]/div/div/div[1]/div[2]/div/div/canvas',
       document,
       null,
       XPathResult.FIRST_ORDERED_NODE_TYPE,
       null
   ).singleNodeValue;
   
   if (element) {
       element.click();
       console.log('Клик выполнен');
   } else {
       console.log('Элемент не найден');
   }
   
   // Generate random delay between 500-2000 milliseconds
   const randomDelay = Math.floor(Math.random() * 1500) + 500;
   setTimeout(clickElement, randomDelay);
}

// Start the first click
clickElement();

// To stop the clicking, you can reload the page or use this in console:
// location.reload();
