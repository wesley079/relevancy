<?php

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

Route::get('/', function () {
    return view('welcome');
});


Route::get('/music', function () {
    return view('welcome');
});

route::get('/getRelevancy', 'DataController@getRelevancy');
route::get('/postRelevancy', 'DataController@postRelevancy');


Auth::routes();

Route::get('/home', 'HomeController@index');
