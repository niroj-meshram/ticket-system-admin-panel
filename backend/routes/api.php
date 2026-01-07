<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\auth\UserController;



Route::post('register', [UserController::class,'register']);
Route::post('login', [UserController::class,'login']);
Route::post('logout', [UserController::class,'logout'])->middleware('auth:sanctum');
Route::get('me', [UserController::class,'user'])->middleware('auth:sanctum');