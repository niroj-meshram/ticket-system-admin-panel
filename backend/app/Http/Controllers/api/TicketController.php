<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Ticket;
use App\Helpers\ApiResponse;
use Illuminate\Support\Facades\Validator;


class TicketController extends Controller
{
  
    public function index() {
        $ticket = Ticket::all();
        dd($ticket);
    }

    public function store(Request $request) 
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'description'  => 'required|string|max:255',
        ]);
 
        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'errors' => $validator->errors()
            ],422);
        }

        $ticket = new Ticket();
        $ticket->title = $request->title;
        $ticket->description = $request->description;
        $ticket->save();

         return ApiResponse::success(
            'Ticket created successfully',
            $ticket,
            201
        );
    }
}
