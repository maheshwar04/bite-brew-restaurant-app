package com.bite_brew.product_service.Entity;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.bite_brew.product_service.Enum.ProductType;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;

public class Product {
    private Long productId;
    private String name;
    private String description;
    private Double price;
    private String brand;
    private String category;
    private String imageUrl;
    private Integer stockQuantity;
    private Boolean isAvailable;
    
    @Enumerated(EnumType.STRING)
    private ProductType productType;

    @CreationTimestamp
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;
}

