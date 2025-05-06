package com.bite_brew.product_service.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bite_brew.product_service.Entity.Product;
import com.bite_brew.product_service.Enum.ProductType;
import com.bite_brew.product_service.Repository.ProductRepository;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }

    public Product saveProduct(Product product){
        return productRepository.save(product);
    }

    public Optional<Product> getProductById(Long id){
       return productRepository.findById(id);
    }

    public Optional<Product> updateProduct(Long id, Product updatedProduct) {
        return productRepository.findById(id).map(existingProduct -> {
            if (updatedProduct.getName() != null) existingProduct.setName(updatedProduct.getName());
            if (updatedProduct.getDescription() != null) existingProduct.setDescription(updatedProduct.getDescription());
            if (updatedProduct.getPrice() != null) existingProduct.setPrice(updatedProduct.getPrice());
            if (updatedProduct.getProductType() != null) existingProduct.setProductType(updatedProduct.getProductType());
            if (updatedProduct.getImageUrl() != null) existingProduct.setImageUrl(updatedProduct.getImageUrl());
            if (updatedProduct.getStockQuantity() != null) existingProduct.setStockQuantity(updatedProduct.getStockQuantity());
            if (updatedProduct.getIsAvailable() != null) existingProduct.setIsAvailable(updatedProduct.getIsAvailable());
            return productRepository.save(existingProduct);
        });
    }

    public void deleteProduct(Long id){
        productRepository.deleteById(id);
    }

    public List<Product> filterProducts(ProductType type, Double maxPrice) {
        if(type!=null && maxPrice!=null){
            return productRepository.findByProductTypeAndPriceLessThanEqual(type,maxPrice);
        }else if(type!=null){
            return productRepository.findByProductType(type);
        }else if(maxPrice!=null){
            return productRepository.findByPriceLessThanEqual(maxPrice);
        }else{
            return productRepository.findAll();
        }
    }
}
