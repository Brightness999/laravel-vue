<?php

namespace App\Helpers;

/**
 * Class ObjectiveHelper
 * 
 * @package App\Helpers
 */
class ObjectiveHelper
{
    /**
     * Return color for average progress.
     *
     * @param int $averageProgress Average progress.
	 *           
     * @return string
     */
    public function getBadgeClassForAverageProgress(int $averageProgress): string
    {
        if ($averageProgress < 33)  {
        	return 'danger';
		}
        
        if ($averageProgress >= 33 && $averageProgress <= 66) {
        	return 'warning';
		}
        
        return 'success';
    }
}
