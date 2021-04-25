<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', function () {
    return view('lp.mainContent');
});

// Route::get('/main', function () {
//     return view('layouts.main');
// });

// Route::get('/main/{any}', function () {
//     return view('layouts.main');
// })->where('any','.*');

Route::get('/main/home', function () {
    return view('layouts.main');
});

Route::get('/main/mycoord', function () {
    return view('layouts.main');
});

Route::get('/main/mycoord/select', function () {
    return view('layouts.main');
});

Auth::routes();

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
