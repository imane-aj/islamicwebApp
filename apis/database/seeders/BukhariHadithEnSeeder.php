<?php

namespace Database\Seeders;

use App\Models\BukhariHadithEn;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class BukhariHadithEnSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $jsonEn = Storage::disk('local')->get('/json/bukhari/bukhariHadithEn.json');
        $hadith = json_decode($jsonEn, true);

        foreach ($hadith as $items) {
            foreach($items as $value){
                BukhariHadithEn::query()->updateOrCreate([
                    'hadithnumber' => $value['hadithnumber'],
                    'textEn' => $value['text'],
                    'hadith' => $value['reference']['hadith'],
                    'book' => $value['reference']['book'],
                ]);
            }
        }
    }
}
