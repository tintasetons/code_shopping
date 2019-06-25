<?php

namespace CodeShopping\Http\Controllers\Api;

use CodeShopping\Http\Controllers\Controller;
use CodeShopping\Http\Requests\ProductInputRequest;
use CodeShopping\Http\Resources\ProductInputResource;
use CodeShopping\Models\ProductInput;

class ProductInputController extends Controller
{

    public function index()
    {
        return  ProductInputResource::collection(ProductInput::with('product')->paginate());
    }

    public function store(ProductInputRequest $request)
    {
        $input = ProductInput::create($request->all());
        $product = $input->product;
        $product->stock -= $input->amount;
        $product->save();
        return new ProductInputResource($input);
    }


    public function show(ProductInput $input)
    {
        return new ProductInputResource($input);
    }
}
