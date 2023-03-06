<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\BukhariHadithAr;
use App\Models\BukhariHadithEn;
use Illuminate\Database\Seeder;
use Database\Seeders\BukhariBookSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        $this->call([
            BukhariBookSeeder::class,
            BukhariHadithArSeeder::class,
            BukhariHadithEnSeeder::class
        ]);
    }
}