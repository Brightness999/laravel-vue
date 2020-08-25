<?php

namespace App\Helpers;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;

/**
 * Class ImageHelper
 *
 * @package App\Helpers
 */
class ImageHelper
{
  /**
     * Upload images to a location
     *
     * @param  $file, $location
     * @return filename string
     */
    public static function uploadFile($file, $location): string
    {
        $unique = '-fl-' . Str::random(5) . uniqid();
        $filename_info = $file->getClientOriginalName();
        $path_parts = pathinfo($filename_info);
        $filename = substr(Str::slug($path_parts['filename'], '-'),0,6);
        $filename = $filename . $unique . '.' . $path_parts['extension'];

        //check if directory for upload exist
        $path = public_path($location);

        if (!File::exists($path)) {
            File::makeDirectory($path, $mode = 0777, true, true);
        }
        
        $file->move($path,$filename);

        return $location.'/'.$filename;
    }


}