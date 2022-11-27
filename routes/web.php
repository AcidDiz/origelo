<?php

use App\Http\Controllers\Frontend\CupsController;
use App\Http\Controllers\Frontend\IceCreamsController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;

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

Route::group([
    'prefix' => LaravelLocalization::setLocale(),
    'middleware' => ['web', 'localeSessionRedirect', 'localizationRedirect', 'localeViewPath']
], function () {

Route::get('/', function () {
    return Inertia::render('Homepage',[
        'routeName' => 'homepage',
    ]);
})->name('homepage');

Route::get(LaravelLocalization::transRoute('routes.icecreams'), [IceCreamsController::class, 'index'])->name('icecreams');
Route::post(LaravelLocalization::transRoute('routes.icecreams-create'), [IceCreamsController::class, 'store'])->name('icecreams.store');
Route::get(LaravelLocalization::transRoute('routes.icecreams-statistics'), [IceCreamsController::class, 'statistics'])->name('icecreams.statistics');



Route::get(LaravelLocalization::transRoute('routes.cups'), [CupsController::class, 'index'])->name('cups');

Route::get('/test', function (Request $request) {

    dd($request->quantity);


})->name('test');



});




Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
require __DIR__.'/admin.php';
