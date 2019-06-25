<?php

use CodeShopping\Models\Product;
use CodeShopping\Models\ProductPhoto;
use Illuminate\Database\Seeder;

class ProductPhotoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->allFakerPhotos = $this->getFakerPhotos();
        /** @var \Illuminate\Database\Eloquent\Collection $products */
        $products = Product::all();
        $this->deleteAllPhotosInProductsPath();
        $self = $this;
        $products->each(function ($product) use ($self) {
//            $self->createPhotoDir($product);
//            $self->createPhotosModels($product);
        });
    }

    private function deleteAllPhotosInProductsPath()
    {
        $path = ProductPhoto::PRODUCTS_PATH;
        \File::deleteDirectory(storage_path($path), true);
    }








}
