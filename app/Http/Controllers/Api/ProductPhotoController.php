<?php

namespace CodeShopping\Http\Controllers\Api;

use CodeShopping\Http\Controllers\Controller;
use CodeShopping\Http\Resources\ProductPhotoResource;
use CodeShopping\Models\Product;
use CodeShopping\Models\ProductPhoto;
use Illuminate\Http\Request;

class ProductPhotoController extends Controller
{

    public function index(Product $product)
    {
        return ProductPhotoResource::collection($product->photos);
       // return new ProductPhotoCollection($product->photos, $product);
    }

    public function store(Request $request)
    {

    }

    
    public function show(Product $product, ProductPhoto $photo)
    {
        $this->assertProductPhoto($product, $photo);
        return new ProductPhotoResource($photo);
    }

    
    public function update(Request $request, ProductPhoto $photo)
    {
        //
    }

    
    public function destroy(ProductPhoto $photo)
    {
        //
    }

    private function assertProductPhoto(Product $product, ProductPhoto $photo): void
    {
        if ($photo->product_id != $product->id) {
            abort(404);
        }
    }
}
