<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use DB;


class registerDiv extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'relevancy:register
                        {id : ID used for the div you want to register}
                        {page : Page name where this DIV will take place}
                        ';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        //get arguments
        $divID  = $this->argument('id');
        $page   = $this->argument('page');
    }
}
