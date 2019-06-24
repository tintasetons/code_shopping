<?php

namespace CodeShopping\Http\Controllers\Api;

use CodeShopping\Http\Controllers\Controller;
use CodeShopping\Http\Resources\ProductInputResource;
use CodeShopping\Models\ProductInput;
use Illuminate\Http\Request;

class ProductInputController extends Controller
{

    public function index()
    {
        return  ProductInputResource::collection(ProductInput::with('product')->paginate());


    }

    public function store(Request $request)
    {
        //
    }


    public function show(ProductInput $productInput)
    {
        //
    }
}
