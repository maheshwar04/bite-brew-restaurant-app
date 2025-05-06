package com.bite_brew.product_service.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bite_brew.product_service.Entity.Product;
import com.bite_brew.product_service.Enum.ProductType;

public interface ProductRepository extends JpaRepository<Product,Long>{

    List<Product> findByProductTypeAndPriceLessThanEqual(ProductType type, Double maxPrice);

    List<Product> findByProductType(ProductType type);

    List<Product> findByPriceLessThanEqual(Double maxPrice);
    
}
