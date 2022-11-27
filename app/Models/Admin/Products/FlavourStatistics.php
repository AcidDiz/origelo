<?php

namespace App\Models\Admin\Products;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FlavourStatistics extends Model
{
    use HasFactory;

    protected $fillable = ['product_id'];


    public function product(){

        return $this->belongsTo(Products::class);

    }

}
