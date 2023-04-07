<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('muslim_hadith_ars', function (Blueprint $table) {
            $table->id();
            $table->integer('hadithnumber');
            $table->text('textAr');
            $table->integer('book');
            $table->integer('hadith');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('muslim_hadith_ars');
    }
};