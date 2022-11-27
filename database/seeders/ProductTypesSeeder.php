<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductTypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $product_types = [

            ['name_it' =>'Gelato','name_en' =>'Ice Cream','name_fr' =>'','name_de' =>'','slug' =>'gelato'],
            ['name_it' =>'Coppa Gourmet','name_en' =>'Goumet Cup','name_fr' =>'','name_de' =>'','slug' =>'coppa-gourmet'],


        ];
    }
}
