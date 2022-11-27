<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class CupsController extends Controller
{
    public function index(){

        return Inertia::render('Cups', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'phpVersion' => PHP_VERSION,
        ]);


    }
}
