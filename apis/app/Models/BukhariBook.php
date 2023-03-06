<?php

namespace App\Models;

use App\Models\BukhariHadith;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class BukhariBook extends Model
{
    use HasFactory;

    protected $fillable = ['nameAr', 'nameEn'];

    public function bukhariHadith(){
        return $this->hasMany(BukhariHadithAr::class);
    }
}
