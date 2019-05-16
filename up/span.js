$(function() {
            $('h1, h2, p, blockquote, a').wrapInner("<span></span>");
        });


        $(function() {
            $('div').not(".grid-container, .hover-over, .hover-over-content, .aspect-ratio, .filler, .main-grid, .variant-four").hover(
                function() {
                    $(this).addClass("skew")
                },
                function() {
                    $(this).removeClass("skew")
                })
        });