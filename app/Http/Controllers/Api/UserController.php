<?php

namespace CodeShopping\Http\Controllers\Api;

use CodeShopping\Http\Requests\UserRequest;
use CodeShopping\Http\Resources\UserResource;
use CodeShopping\Http\Controllers\Controller;
use CodeShopping\Models\User;
use Illuminate\Http\Request;
use phpDocumentor\Reflection\Types\Parent_;

class UserController extends Controller
{
    public function index()
    {
        return UserResource::collection(User::paginate(100));
    }

    public function store(UserRequest $request)
    {
        User::createCustom($request->all());
    }

    public function show(User $user)
    {
        return new UserResource($user);
    }

    public function update(User $user)
    {
        //
    }

    public function destroy($id)
    {
        //
    }

}
