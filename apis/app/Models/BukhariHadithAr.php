<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BukhariHadithAr extends Model
{
    use HasFactory;

    protected $fillable = ['hadithnumber', 'textAr', 'book', 'hadith'];
}
