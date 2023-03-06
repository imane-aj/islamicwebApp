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
        Schema::create('bukhari_hadith_ens', function (Blueprint $table) {
            $table->id();
            $table->integer('hadithnumber');
            $table->text('textEn');
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
        Schema::dropIfExists('bukhari_hadith_ens');
    }
};
