<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::get('/api/main/home', function () {
//     return view('layouts.main');
// });

// Route::get('/api/main/mycoord', function () {
//     return view('lp.mainContent');
// });

Route::get( '/main/mycoord/wear/Caps', function ( Request $request ) {

    $pitchers = collect([
        [
            'key'  => 'saito',
            'name' => '斎藤',
            'era'  => 1.62,
            'win'  => 20,
        ],
        [
            'key'  => 'makihara',
            'name' => '槇原',
            'era'  => 2.29,
            'win'  => 12,
        ],
        [
            'key'  => 'kuwata',
            'name' => '桑田',
            'era'  => 2.60,
            'win'  => 17,
        ],
    ]);

    return response()->json( $pitchers );
} );
