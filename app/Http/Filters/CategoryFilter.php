<?php

namespace CodeShopping\Http\Filters;

use Mnabialek\LaravelEloquentFilter\Filters\SimpleQueryFilter;

class CategoryFilter extends SimpleQueryFilter
{
    protected $simpleFilters = ['busca'];
    protected $simpleSorts = ['id','name','created_at'];

    protected function applyBusca($value){
        $this->query->where('name','LIKE',"$value%");
    }

}
