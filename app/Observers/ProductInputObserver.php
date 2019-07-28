<?php

namespace CodeShopping\Observers;

use CodeShopping\Models\ProductInput;

class ProductInputObserver
{
    /**
     * Handle the product input "created" event.
     *
     * @param  \CodeShopping\ProductInput  $productInput
     * @return void
     */
    public function created(ProductInput $input)
    {
            $product = $input->product;
            $product->stock += $input->amount;
            $product->save();
    }

    /**
     * Handle the product input "updated" event.
     *
     * @param  \CodeShopping\ProductInput  $productInput
     * @return void
     */
    public function updated(ProductInput $productInput)
    {
        //
    }

    /**
     * Handle the product input "deleted" event.
     *
     * @param  \CodeShopping\ProductInput  $productInput
     * @return void
     */
    public function deleted(ProductInput $input)
    {

    }

    /**
     * Handle the product input "restored" event.
     *
     * @param  \CodeShopping\ProductInput  $productInput
     * @return void
     */
    public function restored(ProductInput $productInput)
    {
        //
    }

    /**
     * Handle the product input "force deleted" event.
     *
     * @param  \CodeShopping\ProductInput  $productInput
     * @return void
     */
    public function forceDeleted(ProductInput $productInput)
    {
        //
    }
}
