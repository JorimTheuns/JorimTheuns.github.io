$(function() {
            $('h1, h2, h3, p, blockquote, a').wrapInner("<span></span>");
        });


        $(function() {
            $('div').not(".desc, .grid-container, .hover-over, .hover-over-content, .aspect-ratio, .filler, .main-grid, .variant-four").hover(
                function() {
                    $(this).addClass("skew")
                },
                function() {
                    $(this).removeClass("skew")
                })
        });