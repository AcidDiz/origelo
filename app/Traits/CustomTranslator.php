<?php

namespace App\Traits;


trait CustomTranslator
{

    public function translate($text)
    {
        $locale = app()->getLocale();
        $column = $text . '_' . $locale;
        return $this->{$column};
    }
}
