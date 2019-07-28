<?php

namespace CodeShopping\Providers;

use CodeShopping\Models\ProductInput;
use CodeShopping\Models\ProductOutput;
use CodeShopping\Observers\ProductInputObserver;
use CodeShopping\Observers\ProductOutputObserver;
use Faker\Generator as FakerGenerator;
use Faker\Factory as FakerFactory;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        \Schema::defaultStringLength(191);

        ProductInput::observe(ProductInputObserver::class);
        ProductOutput::observe(ProductOutputObserver::class);

//        ProductInput::created(function ($input) {
//            $product = $input->product;
//            $product->stock += $input->amount;
//            $product->save();
//        });

//        ProductOutput::created(function ($output) {
//            $product = $output->product;
//            $product->stock -= $output->amount;
//            if ($product->stock < 0){
//                throw new \Exception("Estoque de {$product->name} não pode ser negativo!");
//            }
//            $product->save();
//        });

    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {

    }
}
