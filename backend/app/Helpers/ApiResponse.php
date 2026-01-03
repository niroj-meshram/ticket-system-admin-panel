<?php

namespace App\Helpers;

class ApiResponse
{
    public static function success($message = 'Success', $data = null, $code = 200)
    {
        return response()->json([
            'status'  => 'success',
            'message' => $message,
            'data'    => $data,
            'errors'  => null
        ], $code);
    }

    public static function error($message = 'Error', $errors = null, $code = 400)
    {
        return response()->json([
            'status'  => 'error',
            'message' => $message,
            'data'    => null,
            'errors'  => $errors
        ], $code);
    }
}
