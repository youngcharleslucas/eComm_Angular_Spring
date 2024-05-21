# Angular Frontend  

- Start new project with `ng new --no-standalone angular-ecommerce`  
- Add Bootstrap link to index.html  
- Run the project with `ng serve --open`  

## Tips and Tricks  

- Generate a component eample: `ng generate component components/product-list`   
- Generate a class example: `ng generate class common/product`  
- Generate a service example: `ng generate service services/product`  
- Add `HttpClientModule` to app.module.ts under imports  
    - Add import 
    `import { HttpClientModule } from '@angular/common/http';`  
- Add ProductService in providers, located in app.modules.ts  
    - This is for injection  



