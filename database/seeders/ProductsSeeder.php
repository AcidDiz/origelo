<?php

namespace Database\Seeders;

use App\Models\Admin\Products\Products;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $products = [

            ['product_type_id' => 1,'name_it' => 'Cioccolato','name_en' => 'Chocolate','name_fr' => 'Chocolat','name_de' => 'Schokolade','image' => '','slug' => 'cioccolato'],
            ['product_type_id' => 1,'name_it' => 'Vaniglia','name_en' => 'Vanilla','name_fr' => 'Vanille','name_de' => 'Vanille','image' => '','slug' => 'vaniglia'],
            ['product_type_id' => 1,'name_it' => 'Crema','name_en' => 'Cream','name_fr' => 'Crème','name_de' => 'Creme','image' => '','slug' => 'crema'],
            ['product_type_id' => 1,'name_it' => 'Fragola','name_en' => 'Strawberry','name_fr' => 'Fraise','name_de' => 'Erdbeere','image' => '','slug' => 'fragola'],
            ['product_type_id' => 1,'name_it' => 'Limone','name_en' => 'Lemon','name_fr' => 'Citron','name_de' => 'Zitrone','image' => '','slug' => 'limone'],
            ['product_type_id' => 1,'name_it' => 'Amarena','name_en' => 'Cherry','name_fr' => 'Cerise','name_de' => 'Kirshce','image' => '','slug' => 'amarena'],
            ['product_type_id' => 1,'name_it' => 'Cremino','name_en' => 'Cremino','name_fr' => 'Crèmino','name_de' => 'Cremino','image' => '','slug' => 'cremino'],
            ['product_type_id' => 1,'name_it' => 'Nocciola','name_en' => 'Hazelnut','name_fr' => 'Noisette','name_de' => 'Haselnuss','image' => '','slug' => 'nocciola'],
            ['product_type_id' => 1,'name_it' => 'Fior di Latte','name_en' => 'Milk','name_fr' => 'Lait','name_de' => 'Milch','image' => '','slug' => 'fior-di-latte'],
            ['product_type_id' => 1,'name_it' => 'Melone','name_en' => 'Spaghetti Cup','name_fr' => 'Spaghetti Cup','name_de' => 'Spaghetti Cup','image' => '','slug' => 'coppa-spaghetti'],
        ];


        foreach($products as $p){

            Products::create($p);

        }
    }
}
