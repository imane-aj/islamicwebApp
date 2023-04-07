<?php

namespace Database\Seeders;

use App\Models\BukhariHadithAr;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class BukhariHadithArSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $jsonEn = Storage::disk('local')->get('/json/bukhari/bukhariHadithAr.json');
        $hadith = json_decode($jsonEn, true);

        foreach ($hadith as $items) {
            foreach($items as $value){
                BukhariHadithAr::query()->updateOrCreate([
                    'hadithnumber' => $value['hadithnumber'],
                    'textAr' => $value['text'],
                    'hadith' => $value['reference']['hadith'],
                    'book' => $value['reference']['book'],
                ]);
            }
        }
    }
    
    
}
