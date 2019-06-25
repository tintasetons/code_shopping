<?php

use Illuminate\Http\Request;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::group(['namespace' => 'Api', 'as' => 'api.'], function () {

    Route::resource('categories', 'CategoryController', ['except' => ['create', 'edit']]);

    Route::resource('products', 'ProductController', ['except' => ['create', 'edit']]);

    Route::resource('products.categories', 'ProductCategoryController', ['only' => ['index', 'store', 'destroy']]);

    Route::resource('inputs', 'ProductInputController', ['only' => ['index', 'store', 'show']]);

    Route::resource('outputs', 'ProductOutputController', ['only' => ['index', 'store', 'show']]);

    Route::resource('products.photos', 'ProductPhotoController',['except' => ['create', 'edit']]);

});



//
//
//Route::group(['namespace' => 'Api', 'as' => 'api.'], function () {
//
//    Route::post('login', 'AuthController@login')->name('login');
//
//    Route::post('login_vendor', 'AuthController@loginFirebase')->name('login_vendor');
//
//    Route::post('refresh', 'AuthController@refresh')->name('refresh');
//
//    Route::post('customers/phone_numbers', 'CustomerController@requestPhoneNumberUpdate');
//
//    Route::patch('customers/phone_numbers/{token}', 'CustomerController@updatePhoneNumber');
//
//    Route::resource('customers', 'CustomerController', ['only' => ['store']]);
//
//    //'jwt.refresh'
//    Route::group(['middleware' => ['auth:api']], function () {
//
//        Route::post('logout', 'AuthController@logout')->name('logout');
//
//        Route::patch('profile', 'UserProfileController@update');
//
//        Route::name('chat_groups.messages')->post('chat_groups/{chat_group}/messages', 'ChatMessageFbController@store');
//
//        Route::resource('chat_groups.messages', 'ChatMessageFbController',
//            ['only' => ['store']]);
//
//
//        //IS SELLER
//        Route::group(['middleware' => ['can:is_seller']], function () {
//
//            Route::get('me', 'AuthController@me')->name('me');
//
//            Route::patch('products/{product}/restore', 'ProductController@restore');
//

//
//
//
//            Route::resource('products.categories', 'ProductCategoryController',
//                ['only' => ['index', 'store', 'destroy']]);
//
//

//

//
//            Route::resource('users', 'UserController',
//                ['except' => ['create', 'edit']]);
//
//            Route::resource('chat_groups', 'ChatGroupController', [
//                'except' => ['create', 'edit']
//            ]);
//
//            Route::resource('chat_groups.users', 'ChatGroupUserController', [
//                'only' => ['index', 'store', 'destroy']
//            ]);
//        });
//
//    });

