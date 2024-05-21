# Spring-Boot-Ecommerce Backend  

- Dependencies  
  - Spring Data JPA  
  - Rest Repositories  
  - MySQL Driver  
  - Lombok  

## Features  
- Override Lombok Getter and Setters
  - Disable PUT, POST, and DELETE in MyDataClassConfig.java  
```java
@Configuration
public class MyDataClassConfig implements RepositoryRestConfigurer {
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        RepositoryRestConfigurer.super.configureRepositoryRestConfiguration(config, cors);

        HttpMethod[] theUnsuportedMethods = { HttpMethod.PUT, HttpMethod.DELETE, HttpMethod.POST };

        // Disable HTTP methods for Product: PUT, POST, and DELETE
        config.getExposureConfiguration()
                .forDomainType(Product.class)
                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(theUnsuportedMethods))
                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(theUnsuportedMethods));

        // Disable HTTP methods for ProductCategory: PUT, POST, and DELETE
        config.getExposureConfiguration()
                .forDomainType(ProductCategory.class)
                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(theUnsuportedMethods))
                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(theUnsuportedMethods));
    }
}
```

- CrossOrigin Support  
  - Know that *Origin* means the same protocol, hostname, and port. 
```java
@CrossOrigin({"http://localhost:4200", "http://www.mydoolapp.com"})
public interface ProductRepository extends JpaRepository<Product, Long> {

}
```

