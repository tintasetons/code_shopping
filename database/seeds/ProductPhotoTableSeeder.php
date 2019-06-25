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
            $self->createPhotoDir($product);
            $self->createPhotosModels($product);
        });
    }

    private function deleteAllPhotosInProductsPath()
    {
        $path = ProductPhoto::PRODUCTS_PATH;
        \File::deleteDirectory(storage_path($path), true);
    }

    private function createPhotoDir(Product $product)
    {
        $path = ProductPhoto::photosPath($product->id);
        \File::makeDirectory($path, 0777, true);
    }


    private function createPhotosModels(Product $product)
    {
        foreach (range(1, 5) as $v) {
            $this->createPhotoModel($product);
        }
    }

    private function createPhotoModel(Product $product)
    {
        $photo = ProductPhoto::create([
            'product_id' => $product->id,
            'file_name' => 'image.jpg'
        ]);
//        $this->generatePhoto($photo);
    }

//    private function generatePhoto(ProductPhoto $photo)
//    {
//        $photo->file_name = $this->uploadPhoto($photo->product_id);
//        $photo->save();
//    }


}
