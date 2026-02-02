<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\auth\UserController;
use App\Http\Controllers\api\TicketController;



Route::post('register', [UserController::class,'register']);
Route::post('login', [UserController::class,'login']);
Route::post('logout', [UserController::class,'logout'])->middleware('auth:sanctum');
Route::get('me', [UserController::class,'user'])->middleware('auth:sanctum');

Route::get('tickets',[TicketController::class, 'index']);
Route::post('create-ticket',[TicketController::class, 'store']);
Route::delete('ticket/{id}',[TicketController::class, 'deleteTicket']);