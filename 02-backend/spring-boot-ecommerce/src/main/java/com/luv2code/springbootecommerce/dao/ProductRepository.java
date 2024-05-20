package com.luv2code.springbootecommerce.dao;

import com.luv2code.springbootecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
