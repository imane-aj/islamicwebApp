<?php

namespace Database\Seeders;

use App\Models\BukhariBook;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class BukhariBookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $json = Storage::disk('local')->get('/json/bukhari/bukhariBook.json');
        $books = json_decode($json, true);
        
        $booksAr = $books['books']['booksAr'];
        $booksEn = $books['books']['booksEn'];
        
        $books = $booksAr + $booksEn;
        ksort($books);
        
        foreach ($books as $bookNumber => $bookName) {
                BukhariBook::query()->updateOrCreate([
                    'nameAr' => $booksAr[$bookNumber] ?? null,
                    'nameEn' => $booksEn[$bookNumber] ?? null,
                ]);
        }
    }
}
