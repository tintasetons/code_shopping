<?php

namespace CodeShopping\Models;

use CodeShopping\Common\OnlyTrashed;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;


class User extends Authenticatable implements JWTSubject
{
    use Notifiable, SoftDeletes, OnlyTrashed;

    protected $dates = ['deleted_at'];

    protected $fillable = ['name', 'email', 'password',];


    protected $hidden = [
        'password', 'remember_token',
    ];


    public function fill(array $attributes)
    {
        !isset($attributes['password']) ?: $attributes['password'] = bcrypt($attributes['password']);
        return parent::fill($attributes);
    }


    public function getJWTIdentifier()
    {
        return $this->id;
    }


    public function getJWTCustomClaims()
    {
        return [
            'email' => $this->email,
            'name' => $this->name
        ];
    }
}
