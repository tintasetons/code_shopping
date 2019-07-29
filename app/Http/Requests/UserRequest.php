<?php

namespace CodeShopping\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    
    public function authorize()
    {
        return true;
    }
    
    public function rules()
    {
        //         $id = $this->route('user');
        return [
            'name' => 'required|max:191',
          //  'email' => "required|max:191|email|unique:users,email,{$id}",
            'email' => "required|max:191|email|unique:users,email",
            'password' => 'required|min:4|max:16'
        ];
    }
}









