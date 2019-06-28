<?php

Route::get('/', function () {
    $chave = 'Walter';// JWTAuth::attempt(['email' => 'admin@user.com', 'password' => 'secret']);

    return view('welcome', compact($chave));
});

\Auth::routes();
//
//Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
//Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
//Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
//Route::post('password/reset', 'Auth\ResetPasswordController@reset');

Route::get('/home', 'HomeController@index')->name('home');
