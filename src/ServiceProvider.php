<?php

namespace Kimmelsg\BardHighlightColor;

use Statamic\Fieldtypes\Bard\Augmentor;
use Statamic\Providers\AddonServiceProvider;

class ServiceProvider extends AddonServiceProvider
{
    protected $scripts = [
        __DIR__.'/../dist/js/highlight.js',
    ];

    public function boot() {
        parent::boot();
        Augmentor::addMark(HighlightColor::class);
    }
}
