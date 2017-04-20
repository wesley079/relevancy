<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Relevancy;
use DB;

class DataController extends Controller
{
    public function getRelevancy()
    {
        //get items
        $itemArray = explode(",", $_GET["item_array"]);
        $handicap = explode(",", $_GET["handicap"]);

        $handicapArray = [];

        //check for new items
        foreach ($itemArray as $index => $item){
            $handicapArray[$item] = $handicap[$index];
            $made = DB::table('relevancies')
                ->select('*')
                ->where([
                    ['div_id', '=', $item],
                    ['page', '=', $_GET["page_name"]],
                    ['ip_address', '=', $_SERVER['REMOTE_ADDR']]
                ])->first();

            if($made === null){
                $this->createItem($item, $_GET["page_name"]);
            }
        }

        $array = [];

        $dataArray = DB::table('relevancies')
            ->select('score', 'div_id')
            ->where([
                ['page', '=', $_GET['page_name']],
            ])->get();

        foreach($dataArray as $data){
            $handicapNumber = $handicapArray[$data->div_id];
            $array[$data->div_id]["score"] = $handicapNumber * $data->score;
            $array[$data->div_id]["name"]  = $data->div_id;
        }
        sort($array);
        $array = array_reverse($array);
        return $array;
    }

    public function postRelevancy()
    {
        //get current div
        $data = Relevancy::where('div_id', '=', $_GET["div_id"]);
        if ($data === null) {
            //non existing, create item
            $this->createItem($_GET["div_id"], $_GET["page"]);
        }
        else if($data){
            //get current div
            $currentDiv = DB::table('relevancies')
                ->select('score')
                ->where([
                    ['div_id', '=', $_GET["div_id"]],
                    ['page', '=', $_GET['page_name']]
                ])->first();

            if($currentDiv !== null) {
                //new score
                $score = intval($currentDiv->score + 1);

                //relevancy update
                DB::table('relevancies')
                    ->where(
                        [
                            ['div_id', '=', $_GET["div_id"]]
                        ]
                    )
                    ->update([
                        'score' => $score,
                        'updated_at' => date("Y-m-d H:i:s")
                    ]);
                return 'done';
            }
            else{
                //non existing, create item
                $this->createItem($_GET["div_id"], $_GET["page_name"]);
            }
        return 'failed';
        }

        return 'failed';
    }

    /***
     * Create relevancy item
     * @param $divName
     * @return string
     */
    public function createItem($divName, $page){
        DB::table('relevancies')->insert(
            [
                'div_id'            => $divName,
                'ip_address'        => $_SERVER['REMOTE_ADDR'],
                'page'              => $page,
                'score'             => 0,
                'created_at'        => date("Y-m-d H:i:s"),
                'updated_at'        => date("Y-m-d H:i:s")

            ]
        );
        return 'done';
    }
    }
