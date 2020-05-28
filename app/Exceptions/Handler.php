<?php

namespace App\Exceptions;

use Throwable;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @param  \Throwable  $exception
     * @return void
     */
    public function report(Throwable $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Throwable  $exception
     * @return \Illuminate\Http\Response
     */
    public function render($request, Throwable $exception)
    {
    	if ($exception instanceof UnauthorizedHttpException) {
            $preException = $exception->getPrevious();
            
            if ($preException instanceof \Tymon\JWTAuth\Exceptions\TokenExpiredException) {
            	return response()->json(['token is expired'], 401);
            } else if ($preException instanceof \Tymon\JWTAuth\Exceptions\TokenInvalidException) {
            	return response()->json(['token is invalid'], 401);
            } else if ($preException instanceof \Tymon\JWTAuth\Exceptions\TokenBlacklistedException) {
            	return response()->json(['token is in blacklist'], 401);
            }
            if ($exception->getMessage() === 'Token not provided') {
                return response()->json(['token is not provided'], 401);
            }
    	}
    	
    	if ($this->isHttpException($exception)) {
            $exceptionCode = $exception->getStatusCode();
        } else {
    		$exceptionCode = $exception->getCode() !== 0 ? $exception->getCode() : 500;
	    }
    	
        return response()->json(
            [$exception->getMessage()], $exceptionCode
        );
    }
}
