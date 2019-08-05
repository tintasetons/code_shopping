<?php

namespace CodeShopping\Http\Middleware;

use Closure;

class CorsMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
//        if ($request->is('api/*') && $request->method() == 'OPTIONS'){
        if ($request->is('api/*')) {
            header('Access-Control-Allow-Origin: http://localhost:4200');
            //            header('Access-Control-Allow-Origin: http://localhost:8000');
            header('Access-Control-Allow-Headers: X-Requested-With,Content-Type, Authorization ');
            header('Access-Control-Allow-Methods: GET, POST, DELETE, PUT, PATCH, OPTIONS');
            header('Access-Control-Expose-Headers: Authorization');

        }
        return $next($request);
    }
}
