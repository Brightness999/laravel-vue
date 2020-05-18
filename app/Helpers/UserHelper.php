<?php

namespace App\Helpers;

use App\User;
use Laravolt\Avatar\Avatar;

/**
 * Class ObjectiveHelper
 *
 * @package App\Helpers
 */
class UserHelper
{
    protected $errorMessArr = [
        'campaigns_name_unique'  => 'Company name exists.',
        'users_email_unique'     => 'User with this email exists.'
    ];
	/**
	 * @param User $user
	 */
    public function createUserAvatar(User $user) : void
    {
	    $avatarPath    = '/images/avatars/user-'.uniqid().$user->id.'.png';
	    $avatarPackage = new Avatar();
	    $backgrounds   = config('laravolt.avatar.backgrounds');
	    $avatarPackage->applyTheme(config('laravolt.avatar'));

        $avatarPackage->create($user->full_name)->setBackground($backgrounds[array_rand($backgrounds)])->save(public_path().$avatarPath, 100);
        $user->avatar = $avatarPath;
        $user->save();
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  $exception
     * @return \Illuminate\Http\Response
     */
    public function getErrorMessage($exception)
    {
        $messageResp = 'Something went wrong.';
        
        foreach ($this->errorMessArr as $err => $message) {
            strpos($exception->getMessage(), $err);
            
            if (strpos($exception->getMessage(), $err) !== false) {
	            $messageResp = $message;
	            break;
            }
        }

        return response()->json([
            'error'  => false,
            'data'   => $messageResp
        ]);

    }


}
