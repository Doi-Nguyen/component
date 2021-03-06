function checkMobileDevice(){
    var isMobile = false;
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;
    return isMobile;
};


(function ($) {
    /**
     *
     * @desc Component Tab
     * @version 2.0.0
     * @author Netbase Online Design Team
     */
    $.fn.nbVTab = function () {
        return this.each(function () {
            var $tab = $(this).find('.v-tab');
            var $tabContent = $('.v-tab-contents .v-tab-content');
            $tab.on('click', function () {
                var tabId = $(this).attr('data-tab');
                $tab.removeClass('active');
                $(this).addClass('active');
                $tabContent.removeClass('active');
                $('.v-tab-contents #' + tabId).addClass('active');
            });
        });
    };

    $.fn.nbdTab = function () {
        return this.each(function () {
            var $tab = $(this).find('.nbd-nav-tab');
            var $tabContent = $(this).find('.nbd-tab-contents .nbd-tab-content');
            $tab.on('click', function () {
                var tabId = $(this).attr('data-tab');
                $tab.removeClass('active');
                $(this).addClass('active');
                $tabContent.removeClass('active');
                $('.nbd-tab-contents #' + tabId).addClass('active');
            });
        });
    };

    /**
     *
     * @desc Component Dropdown
     * @version 2.0.0
     * @author Netbase Online Design Team
     */
    $.fn.nbDropdown = function () {
        return this.each(function () {
            var sefl = this;
            var $btn = $(this).find('.v-btn-dropdown');

            $(this).nbClickOutSite({
                'clickE' : $(this),
                'activeE': $(this),
                'removeClass' : 'active'
            });

            $btn.on('click', function () {
                if ($(sefl).hasClass('active')) {
                    $(sefl).removeClass('active');
                }else {
                    $(sefl).addClass('active');
                }
            });
        });
    };

    /**
     *
     * @param options
     * @desc Ele click out
     * @version 2.0.0
     * @author Netbase Online Design Team
     */

    $.fn.nbClickOutSite = function (options) {
        var defaults = {
            'clickE' : null,
            'activeE' : null,
            'removeClass' : '',
        };
        var opts = $.extend({}, $.fn.nbClickOutSite.defaults, options);
        return this.each(function () {
            var sefl = this;
            var $win = $(document);
            if (opts.activeE == null) {
                opts.activeE = $(this);
            }
            $win.on("click", function(event){
                if ($(sefl).has(event.target).length == 0 && !$(sefl).is(event.target)
                    && opts.clickE.has(event.target).length == 0 && !opts.clickE.is(event.target)){
                    opts.activeE.removeClass(opts.removeClass);
                }
            });
        });
    };

    /**
     * @desc Library perfect scroll
     * @version 2.0.0
     * @author Netbase Online Design Team
     */

    /**
     *
     * @param options
     * @desc
     * @version 2.0.0
     * @author Netbase Online Design Team
     *
     */


    /**
     *  @author Netbase Online Design Team
     */
    $.fn.nbShowPopup = function () {
        return this.each(function () {
            var sefl = this;
            var $close = $(this).find('.overlay-popup, .close-popup');
            if (!$(this).hasClass('nb-show')) {
                $(this).addClass('nb-show');
            }
            $close.on('click', function () {
                $(sefl).removeClass('nb-show');
            });
        });
    };

    /**
     *
     * @param text
     * @version 2.0.0
     * @author Netbase Online Design Team
     */
    $.fn.nbWarning = function (text) {
        return this.each(function () {
            var $itemWarning = $(this).find('.item');
            $(this).addClass('nbd-show');
            if ($itemWarning.length < 3) {
                var htmlWaring = '<div class="item animate300 animated nbScaleOut main-warning nbd-show">' +
                    '<i class="nbd-icon-vista nbd-icon-vista-warning warning"></i>' +
                    '<span class="title-warning">'+ text +'</span>' +
                    '<i class="nbd-icon-vista nbd-icon-vista-clear close-warning"></i>' +
                    '</div>';
                var $warning = $(htmlWaring);
                var $close = $warning.find('.close-warning');
                $(this).append($warning);
                $close.on('click', function () {
                    $warning.removeClass('nbScaleOut').addClass('nbScaleIn');
                    $warning.bind('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
                        $warning.remove();
                    });
                });

                setTimeout(function () {
                    $warning.removeClass('nbScaleOut').addClass('nbScaleIn');
                    $warning.bind('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
                        $warning.remove();
                    });
                }, 10000);

            }

        });
    };


    /**
     *
     * @param text
     * @version 2.0.0
     * @author Netbase Online Design Team
     */
    $.fn.nbToasts = function (text) {
        return this.each(function () {

            if ($(this).find('.toast').length > 0) {
                return;
            }

            var htmlToast = '<div class="animate300 animated nbSlideInUp toast">' +
                                '<span>'+ text +'</span>' +
                                '<i class="nbd-icon-vista nbd-icon-vista-clear nbd-close-toast"></i>' +
                            '</div>';
            var $toast = $(htmlToast);

            $(this).addClass('nbd-show').append($toast);
            $toast.find('.nbd-close-toast').on('click', function () {
                $toast.removeClass('nbSlideInUp').addClass('nbSlideInDown');
                $toast.bind('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
                    $toast.remove();
                });
            });

            setTimeout(function () {
                $toast.removeClass('nbSlideInUp').addClass('nbSlideInDown');
                $toast.bind('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
                    $toast.remove();
                });
            }, 3000);
        });
    };

    $.fn.nbRipple = function () {
        return this.each(function () {
            $(this).on('mousedown', function (e) {
                var $self = $(this);

                if($self.is(".btn-disabled")) {
                    return;
                }
                if($self.closest("[data-ripple]")) {
                    e.stopPropagation();
                }

                var initPos = $self.css("position"),
                    offs = $self.offset(),
                    x = e.pageX - offs.left,
                    y = e.pageY - offs.top,
                    dia = Math.min(this.offsetHeight, this.offsetWidth, 100), // start diameter
                    $ripple = $('<div/>', {class : "nb-ripple",appendTo : $self });

                if(!initPos || initPos==="static") {
                    $self.css({position:"relative"});
                }

                $('<div/>', {
                    class : "nb-rippleWave",
                    css : {
                        background: $self.data("ripple"),
                        width: dia,
                        height: dia,
                        left: x - (dia/2),
                        top: y - (dia/2),
                    },
                    appendTo : $ripple,
                    one : {
                        animationend : function(){
                            $ripple.remove();
                        }
                    }
                });
            });
        });
    };

    $(document).ready(function () {
        $('[data-ripple]').nbRipple();

    });
})(jQuery);