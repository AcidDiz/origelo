<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Admin\Products\Products;
use App\Models\Admin\Products\FlavourStatistics;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class IceCreamsController extends Controller
{

    private $routeName = 'icecreams';


    public function index(){

        return Inertia::render('IceCreams', [
            'items' => Products::where('product_type_id', 1)->get(),
            'routeName' => $this->routeName,
        ]);


    }


    public function store(Request $request){

        $item = $request->checkboxItems;

        if(empty($item)){
            return redirect()->route('icecreams');
        }

        for($i = 0; $i < count($item); $i++){

            $product = Products::find($item);

            FlavourStatistics::create([
                'product_id' => $product[$i]->id,
            ]);

        }


        return redirect()->route('icecreams.statistics');

    }


    public function statistics(){


        return Inertia::render('Statistics', [
            'items' => Products::where('product_type_id', 1)->get(),
            'routeName' => $this->routeName,
            'chocolate' => FlavourStatistics::where('product_id', 1)->count(),
            'vanilla' => FlavourStatistics::where('product_id', 2)->count(),
            'cream' => FlavourStatistics::where('product_id', 3)->count(),
            'strawberry' => FlavourStatistics::where('product_id', 4)->count(),
            'lemon' => FlavourStatistics::where('product_id', 5)->count(),
            'cherry' => FlavourStatistics::where('product_id', 6)->count(),
            'cremino' => FlavourStatistics::where('product_id', 7)->count(),
            'nuts' => FlavourStatistics::where('product_id', 8)->count(),
            'milk' => FlavourStatistics::where('product_id', 9)->count(),
            'melon' => FlavourStatistics::where('product_id', 10)->count(),

        ]);

    }


}
