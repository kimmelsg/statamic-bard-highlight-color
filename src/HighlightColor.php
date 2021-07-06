<?php

namespace Kimmelsg\BardHighlightColor;

use ProseMirrorToHtml\Marks\Mark;

class HighlightColor extends Mark
{
    protected $markType = 'highlightColor';
    protected $tagName = 'span';

    public function matching(): bool {
        return $this->mark->type === $this->markType;
    }

    public function tag(): ?array {
        return [
            ['tag' => 'span',
                'attrs' => [
                    'style' => "background:{$this->mark->attrs->color}!important;",
                ],
            ],
        ];
    }
}
