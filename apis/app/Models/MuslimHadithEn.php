<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MuslimHadithEn extends Model
{
    use HasFactory;
    protected $fillable = ['hadithnumber', 'textEn', 'book', 'hadith'];
}
