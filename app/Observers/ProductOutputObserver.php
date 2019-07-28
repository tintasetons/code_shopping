<?php

namespace CodeShopping\Observers;

use CodeShopping\Models\ProductOutput;

class ProductOutputObserver
{
    /**
     * Handle the product output "created" event.
     *
     * @param  \CodeShopping\Models\ProductOutput  $productOutput
     * @return void
     */
    public function created(ProductOutput $output)
    {
        $product = $output->product;
        $product->stock -= $output->amount;
        if ($product->stock < 0){
            throw new \Exception("Estoque de {$product->name} não pode ser negativo!");
        }
        $product->save();
    }

    /**
     * Handle the product output "updated" event.
     *
     * @param  \CodeShopping\Models\ProductOutput  $productOutput
     * @return void
     */
    public function updated(ProductOutput $productOutput)
    {
        //
    }

    /**
     * Handle the product output "deleted" event.
     *
     * @param  \CodeShopping\Models\ProductOutput  $productOutput
     * @return void
     */
    public function deleted(ProductOutput $productOutput)
    {
        //
    }

    /**
     * Handle the product output "restored" event.
     *
     * @param  \CodeShopping\Models\ProductOutput  $productOutput
     * @return void
     */
    public function restored(ProductOutput $productOutput)
    {
        //
    }

    /**
     * Handle the product output "force deleted" event.
     *
     * @param  \CodeShopping\Models\ProductOutput  $productOutput
     * @return void
     */
    public function forceDeleted(ProductOutput $productOutput)
    {
        //
    }
}
