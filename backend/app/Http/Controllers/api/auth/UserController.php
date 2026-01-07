<?php

namespace App\Http\Controllers\api\auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\Helpers\ApiResponse;
use Illuminate\Validation\ValidationException;


class UserController extends Controller
{
    public function index() {

    }

    public function register(Request $request) {
        $validator = Validator::make($request->all(), [
            'firstName' => 'required|string|max:255',
            'lastName'  => 'required|string|max:255',
            'email'      => 'required|email|unique:users,email',
            'password'   => 'required|min:6|confirmed',
        ]);
 
        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'errors' => $validator->errors()
            ],422);
        }
        
        $user = new User();
        $user->first_name = $request->firstName;
        $user->last_name = $request->lastName;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();
        return ApiResponse::success(
            'User registered successfully',
            $user,
            201
        );

    }

    public function login(Request $request)
    {
        
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        $token = $user->createToken('api-token')->plainTextToken;

        return ApiResponse::success(
            'User Logged in successfully',
             ['token'=> $token, 'user'=>$user]
        );
        
    }

    public function user( Request $request ){
        return ApiResponse::success(
            'User fetched successfully',
             ['user'=> $request->user]
        );
    }

    public function logout(Request $request)
    {
        
        $request->user()->currentAccessToken()->delete();
         return ApiResponse::success(
            'User logged out successfully',
        );
    }
}
