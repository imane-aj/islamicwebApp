<?php

namespace App\Http\Controllers;

use App\Models\BukhariBook;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\BukhariHadithAr;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\RedirectResponse;

use function PHPSTORM_META\map;

class BukhariHadith extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $hadiths = DB::table('bukhari_hadith_ens')
        ->join('bukhari_hadith_ars', 'bukhari_hadith_ens.hadithnumber', '=', 'bukhari_hadith_ars.hadithnumber')
        ->join('bukhari_books', 'bukhari_hadith_ens.book', '=', 'bukhari_books.id')
        ->select('bukhari_hadith_ens.*', 'bukhari_hadith_ars.*', 'bukhari_books.*')
        ->get();

        $books = BukhariBook::all();
        
        return view("welcome",["hadiths"=>$hadiths, "books" =>$books]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $hadiths = DB::table('bukhari_hadith_ens')
        ->join('bukhari_hadith_ars', 'bukhari_hadith_ens.hadithnumber', '=', 'bukhari_hadith_ars.hadithnumber')
        ->join('bukhari_books', 'bukhari_hadith_ens.book', '=', 'bukhari_books.id')
        ->select('bukhari_hadith_ens.*', 'bukhari_hadith_ars.*', 'bukhari_books.*')
        ->get();
        $book = BukhariBook::findOrFail($id);
      
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
