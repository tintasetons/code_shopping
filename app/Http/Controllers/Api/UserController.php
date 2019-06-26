<?php

namespace CodeShopping\Http\Controllers\Api;

use CodeShopping\Http\Resources\UserResource;
use CodeShopping\Http\Controllers\Controller;
use CodeShopping\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        return UserResource::collection(User::paginate());
    }

    public function store(Request $request)
    {
        //
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
