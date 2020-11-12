// SVG Based progress bar, example usage:

// $('.progress').progressBar({padding: 0, innerPadding: 5, progress: 0.5});
// $(window).resize(function() {
//   $('.progress').progressBar('refresh');
// });
// $('.progress').progressBar('set', 0.75);
// $('.progress').css({progressBar: 0.25});
// $('.progress').animate({progressBar: 0.75}, 1000);

// Customize the way the progress bar looks with SVG embedded below

var ProgressBar = {
    init: function(el, options) {
        this.options = $.extend({}, ProgressBar.defaults, options);
        this.$el = $(el);

        if(this.$el.attr('data-progress')) {
            this.options.progress = parseFloat(this.$el.attr('data-progress'));
        }

        this.$svg = this.$el.find('svg');
        if(!this.$svg.length) {
            this._createSvg();
        }
        this.$container = this.$svg.find('#container');
        this.$bar = this.$svg.find('#bar');

        this.options.supportSVGFilter = this.supportSVGFilter();
        if(!this.options.supportSVGFilter) {
            this.$container.attr('filter', null);
            this.$container.attr('stroke-width', '1');
        }

        this._draw();
    },
    set: function(progress) {
        this.options.progress = progress;
        this._draw();
    },
    refresh: function() {
        this._draw();
    },
    _draw: function() {
        var containerOptions = {
            pill: this.$container,
            paddingY: this.options.padding,
            paddingX: this.options.padding };

        var barOptions = {
            pill: this.$bar,
            paddingY: this.options.padding + this.options.innerPadding,
            paddingX: this.options.padding,
            width: this.options.progress };

        this._drawPill(containerOptions);
        this._drawPill(barOptions);
    },
    _drawPill: function(options) {
        var width = this.$svg.width();
        var height = this.$svg.height();
        var template = "M{LTP} {RTP} A1,1 0 1 1 {RBP} L{LBP} A1,1 0 1 1 {LTP} z";
        var topY = options.paddingY;
        var bottomY = height - options.paddingY;
        var leftX = options.paddingX + height/2;
        var barWidth = typeof options.width == "undefined" ?
            width :
            width * options.width;
        barWidth = Math.max(barWidth, height + options.paddingX*2);

        var rightX = barWidth - options.paddingX - height/2;
        var LTP = leftX + "," + topY;
        var RTP = rightX + "," + topY;
        var LBP = leftX + "," + bottomY;
        var RBP = rightX + "," + bottomY;
        var result = template.
        replace(/{LTP}/g, LTP).
        replace(/{RTP}/g, RTP).
        replace(/{LBP}/g, LBP).
        replace(/{RBP}/g, RBP);
        // console.log(result);
        options.pill.attr('d', result);
    }
}
$.fn.progressBar = function(options) {
    var originalArguments = arguments;
    this.each(function() {
        var progressBar = $.data(this, 'ProgressBar');
        if(!progressBar) {
            progressBar = Object.create(ProgressBar);
            progressBar.init(this, options);
            $.data(this, 'ProgressBar', progressBar);
            return;
        }
        if(!progressBar[options])
            return;

        progressBar[options](originalArguments[1]);
    });
}
$.cssHooks.progressBar = {
    get: function(el) {
        var progressBar = $.data(el, 'ProgressBar');
        if(!progressBar) return 0;
        return progressBar.options.progress;
    },
    set: function(el, val) {
        val = parseFloat(val);
        var progressBar = $.data(el, 'ProgressBar');
        if(!progressBar) return;
        progressBar.set(val);
    }
}

ProgressBar.supportSVGFilter = function() {
    return typeof SVGFEColorMatrixElement !== "undefined" && SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE==2;
}

ProgressBar.defaults = {
    padding: 1,
    innerPadding: 4,
    progress: 0
}


$('.progress').progressBar({padding: 0, innerPadding: 5, progress: 0.5});
$(window).resize(function() {
    $('.progress').progressBar('refresh');
});
$('.progress').progressBar('set', 0.75);
$('.progress').css({progressBar: 0.25});
$('.progress').animate({progressBar: 0.75}, 1000);
