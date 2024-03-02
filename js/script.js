
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    var css = document.createElement("style");
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #4E6C50}";
    document.body.appendChild(css);
};

const colorSets = {
    1: {
        'Rembrandt': ['rgb(48, 36, 24)','rgb(200, 188, 181)','rgb(35, 28, 22)','rgb(64, 48, 25)','rgb(45, 39, 25)','rgb(45, 38, 29)','rgb(41, 37, 39)','rgb(28, 25, 22)','rgb(53, 46, 36)','rgb(38, 31, 24)','rgb(19, 18, 14)','rgb(49, 22, 9)','rgb(39, 37, 31)','rgb(198, 192, 182)','rgb(46, 22, 10)','rgb(19, 15, 14)','rgb(35, 32, 20)','rgb(29, 23, 16)','rgb(15, 11, 15)','rgb(47, 31, 23)'],
        'Michelangelo': ['rgb(158, 141, 129)','rgb(145, 135, 126)','rgb(157, 139, 104)','rgb(211, 202, 189)','rgb(127, 148, 182)','rgb(193, 183, 181)','rgb(157, 141, 133)','rgb(206, 193, 186)','rgb(206, 199, 193)','rgb(83, 78, 58)','rgb(169, 146, 121)','rgb(131, 115, 94)','rgb(154, 137, 94)','rgb(213, 200, 186)','rgb(157, 132, 96)','rgb(193, 178, 134)','rgb(205, 199, 192)','rgb(178, 162, 138)','rgb(178, 161, 119)','rgb(205, 197, 189)'],
        'Warhol': ['rgb(27, 22, 12)','rgb(182, 131, 102)','rgb(122, 120, 144)','rgb(236, 173, 77)','rgb(182, 178, 83)','rgb(225, 219, 219)','rgb(219, 161, 126)','rgb(197, 45, 8)','rgb(26, 34, 44)','rgb(233, 227, 217)','rgb(28, 20, 11)','rgb(100, 91, 86)','rgb(239, 154, 122)','rgb(102, 110, 117)','rgb(31, 27, 31)','rgb(213, 207, 199)','rgb(212, 56, 27)','rgb(8, 8, 17)','rgb(30, 17, 15)','rgb(159, 46, 51)'],
        'Miro': ['rgb(168, 167, 162)','rgb(249, 69, 5)','rgb(170, 107, 46)','rgb(178, 111, 30)','rgb(41, 34, 177)','rgb(123, 85, 45)','rgb(190, 181, 147)','rgb(188, 183, 141)','rgb(140, 117, 108)','rgb(45, 30, 51)','rgb(251, 168, 5)','rgb(119, 84, 32)','rgb(201, 149, 64)','rgb(65, 47, 34)','rgb(183, 124, 38)','rgb(145, 65, 12)','rgb(210, 182, 146)','rgb(198, 195, 181)','rgb(72, 44, 28)','rgb(231, 222, 187)']
    },
    2: {
        'Rembrandt': ['rgb(48, 36, 24)','rgb(200, 188, 181)','rgb(35, 28, 22)','rgb(64, 48, 25)','rgb(45, 39, 25)','rgb(45, 38, 29)','rgb(41, 37, 39)','rgb(28, 25, 22)','rgb(53, 46, 36)','rgb(38, 31, 24)','rgb(19, 18, 14)','rgb(49, 22, 9)','rgb(39, 37, 31)','rgb(198, 192, 182)','rgb(46, 22, 10)','rgb(19, 15, 14)','rgb(35, 32, 20)','rgb(29, 23, 16)','rgb(15, 11, 15)','rgb(47, 31, 23)'],
        'Klimt': ['rgb(212, 200, 200)','rgb(246, 240, 213)','rgb(141, 128, 84)','rgb(183, 183, 183)','rgb(110, 137, 113)','rgb(235, 213, 170)','rgb(83, 78, 77)','rgb(135, 153, 142)','rgb(154, 138, 102)','rgb(134, 147, 136)','rgb(104, 89, 71)','rgb(216, 199, 170)','rgb(124, 146, 99)','rgb(214, 196, 173)','rgb(108, 90, 53)','rgb(219, 171, 124)','rgb(118, 132, 127)','rgb(182, 182, 182)','rgb(171, 152, 107)','rgb(215, 215, 215)'],
        'Michelangelo': ['rgb(158, 141, 129)','rgb(145, 135, 126)','rgb(157, 139, 104)','rgb(211, 202, 189)','rgb(127, 148, 182)','rgb(193, 183, 181)','rgb(157, 141, 133)','rgb(206, 193, 186)','rgb(206, 199, 193)','rgb(83, 78, 58)','rgb(169, 146, 121)','rgb(131, 115, 94)','rgb(154, 137, 94)','rgb(213, 200, 186)','rgb(157, 132, 96)','rgb(193, 178, 134)','rgb(205, 199, 192)','rgb(178, 162, 138)','rgb(178, 161, 119)','rgb(205, 197, 189)'],
        'Rivera': ['rgb(65, 44, 18)','rgb(177, 110, 33)','rgb(193, 169, 146)','rgb(52, 42, 18)','rgb(192, 81, 33)','rgb(110, 76, 38)','rgb(223, 214, 217)','rgb(112, 98, 107)','rgb(64, 49, 21)','rgb(27, 47, 87)','rgb(203, 141, 69)','rgb(141, 62, 38)','rgb(131, 83, 40)','rgb(124, 83, 56)','rgb(79, 41, 43)','rgb(236, 218, 182)','rgb(194, 126, 56)','rgb(70, 62, 64)','rgb(118, 88, 52)','rgb(206, 109, 30)']
    },
    3: {
        'Bondone': ['rgb(143, 109, 63)','rgb(103, 82, 61)','rgb(155, 132, 112)','rgb(139, 124, 110)','rgb(211, 150, 93)','rgb(125, 90, 66)','rgb(163, 144, 122)','rgb(193, 141, 89)','rgb(66, 61, 57)','rgb(76, 58, 58)','rgb(120, 92, 76)','rgb(126, 115, 105)','rgb(193, 163, 139)','rgb(75, 71, 63)','rgb(187, 129, 91)','rgb(156, 122, 84)','rgb(113, 100, 95)','rgb(184, 118, 65)','rgb(114, 96, 71)','rgb(83, 71, 70)'],
        'Titian': ['rgb(74, 60, 54)','rgb(31, 24, 10)','rgb(73, 66, 44)','rgb(53, 45, 39)','rgb(45, 30, 26)','rgb(42, 29, 18)','rgb(199, 155, 93)','rgb(208, 176, 149)','rgb(55, 43, 40)','rgb(33, 32, 31)','rgb(47, 34, 24)','rgb(46, 35, 15)','rgb(53, 42, 30)','rgb(52, 49, 37)','rgb(45, 30, 24)','rgb(43, 32, 20)','rgb(207, 161, 97)','rgb(46, 45, 34)','rgb(217, 177, 155)','rgb(54, 45, 39)'],
        'Mondrian': ['rgb(51, 93, 166)','rgb(112, 97, 70)','rgb(27, 28, 46)','rgb(58, 26, 15)','rgb(242, 234, 233)','rgb(184, 102, 57)','rgb(230, 235, 228)','rgb(83, 66, 72)','rgb(213, 233, 235)','rgb(238, 235, 237)','rgb(182, 163, 87)','rgb(75, 84, 153)','rgb(187, 191, 186)','rgb(134, 135, 150)','rgb(229, 231, 228)','rgb(205, 199, 199)','rgb(65, 47, 36)','rgb(59, 47, 38)','rgb(69, 46, 49)','rgb(75, 64, 51)'],
        'Dali': ['rgb(199, 167, 135)','rgb(195, 198, 191)','rgb(244, 218, 156)','rgb(191, 186, 197)','rgb(101, 75, 74)','rgb(79, 62, 65)','rgb(241, 236, 230)','rgb(95, 57, 53)','rgb(147, 108, 100)','rgb(64, 54, 53)','rgb(89, 72, 74)','rgb(218, 196, 181)','rgb(75, 61, 62)','rgb(190, 183, 189)','rgb(189, 161, 115)','rgb(210, 215, 237)','rgb(179, 148, 117)','rgb(180, 140, 144)','rgb(91, 69, 63)','rgb(91, 77, 75)']
    },
    4: {
        'Sisley': ['rgb(183, 188, 185)','rgb(168, 166, 170)','rgb(185, 184, 197)','rgb(58, 52, 39)','rgb(168, 168, 159)','rgb(202, 196, 184)','rgb(186, 173, 146)','rgb(103, 104, 79)','rgb(137, 133, 114)','rgb(178, 186, 182)','rgb(172, 165, 159)','rgb(147, 147, 142)','rgb(82, 97, 127)','rgb(65, 71, 62)','rgb(215, 215, 215)','rgb(153, 174, 178)','rgb(103, 105, 89)','rgb(120, 101, 54)','rgb(211, 206, 204)','rgb(222, 212, 198)'],
        'Monet': ['rgb(177, 170, 136)','rgb(100, 97, 92)','rgb(70, 72, 53)','rgb(135, 137, 108)','rgb(146, 155, 146)','rgb(118, 150, 158)','rgb(186, 188, 176)','rgb(125, 96, 83)','rgb(88, 114, 106)','rgb(174, 176, 173)','rgb(142, 139, 80)','rgb(143, 155, 180)','rgb(194, 194, 181)','rgb(181, 154, 97)','rgb(156, 157, 159)','rgb(198, 203, 199)','rgb(167, 157, 138)','rgb(108, 107, 100)','rgb(97, 107, 110)','rgb(136, 155, 185)'],
        'Bosch': ['rgb(76, 60, 26)','rgb(76, 44, 23)','rgb(135, 86, 23)','rgb(160, 133, 71)','rgb(218, 177, 102)','rgb(216, 201, 175)','rgb(190, 164, 90)','rgb(86, 64, 47)','rgb(185, 159, 60)','rgb(172, 135, 93)','rgb(69, 49, 33)','rgb(69, 44, 19)','rgb(198, 145, 125)','rgb(68, 56, 19)','rgb(155, 81, 19)','rgb(222, 196, 132)','rgb(74, 42, 13)','rgb(63, 49, 28)','rgb(129, 119, 56)','rgb(121, 77, 25)'],
        'Kahlo': ['rgb(29, 6, 6)','rgb(232, 219, 179)','rgb(229, 188, 143)','rgb(222, 211, 183)','rgb(141, 94, 75)','rgb(244, 239, 178)','rgb(173, 127, 29)','rgb(179, 66, 15)','rgb(40, 15, 6)','rgb(227, 200, 155)','rgb(226, 163, 59)','rgb(234, 225, 144)','rgb(230, 147, 67)','rgb(147, 57, 18)','rgb(46, 24, 11)','rgb(221, 150, 69)','rgb(104, 50, 14)','rgb(56, 30, 15)','rgb(237, 237, 230)','rgb(38, 28, 12)']
    },
    5: {
        'Rembrandt': ['rgb(48, 36, 24)','rgb(200, 188, 181)','rgb(35, 28, 22)','rgb(64, 48, 25)','rgb(45, 39, 25)','rgb(45, 38, 29)','rgb(41, 37, 39)','rgb(28, 25, 22)','rgb(53, 46, 36)','rgb(38, 31, 24)','rgb(19, 18, 14)','rgb(49, 22, 9)','rgb(39, 37, 31)','rgb(198, 192, 182)','rgb(46, 22, 10)','rgb(19, 15, 14)','rgb(35, 32, 20)','rgb(29, 23, 16)','rgb(15, 11, 15)','rgb(47, 31, 23)'],
        'Delacrois': ['rgb(70, 36, 19)','rgb(104, 72, 39)','rgb(86, 73, 42)','rgb(132, 94, 41)','rgb(51, 40, 21)','rgb(63, 48, 37)','rgb(49, 40, 36)','rgb(89, 49, 10)','rgb(32, 33, 20)','rgb(98, 78, 53)','rgb(118, 109, 89)','rgb(77, 84, 60)','rgb(52, 43, 36)','rgb(51, 41, 30)','rgb(200, 194, 171)','rgb(37, 32, 34)','rgb(72, 57, 40)','rgb(22, 22, 18)','rgb(51, 38, 22)','rgb(60, 42, 23)'],
        'Vinci': ['rgb(234, 210, 196)','rgb(230, 216, 179)','rgb(219, 211, 190)','rgb(110, 81, 50)','rgb(163, 134, 87)','rgb(172, 148, 106)','rgb(27, 22, 18)','rgb(211, 211, 211)','rgb(132, 116, 75)','rgb(148, 118, 80)','rgb(156, 161, 172)','rgb(222, 211, 193)','rgb(238, 220, 193)','rgb(174, 127, 76)','rgb(59, 40, 51)','rgb(196, 168, 119)','rgb(222, 136, 88)','rgb(186, 177, 144)','rgb(210, 183, 138)','rgb(221, 199, 185)'],
        'Michelangelo': ['rgb(158, 141, 129)','rgb(145, 135, 126)','rgb(157, 139, 104)','rgb(211, 202, 189)','rgb(127, 148, 182)','rgb(193, 183, 181)','rgb(157, 141, 133)','rgb(206, 193, 186)','rgb(206, 199, 193)','rgb(83, 78, 58)','rgb(169, 146, 121)','rgb(131, 115, 94)','rgb(154, 137, 94)','rgb(213, 200, 186)','rgb(157, 132, 96)','rgb(193, 178, 134)','rgb(205, 199, 192)','rgb(178, 162, 138)','rgb(178, 161, 119)','rgb(205, 197, 189)']
    }
};

function changeColors(paragraphNum) {
    var colorGrid = document.getElementById("colorgrids");
    var namesInParagraph = Object.keys(colorSets[paragraphNum]);

    colorGrid.innerHTML = "";

    namesInParagraph.forEach((name) => {
        var colors = colorSets[paragraphNum][name];
        var nameContainer = document.createElement("p");
        nameContainer.innerHTML = `${name}`;
        nameContainer.className = "colorgridtext"
        colorGrid.appendChild(nameContainer);

        var gridContainer = document.createElement("div");
        gridContainer.className = "colorgrid"

        colors.forEach((color, index) => {
            var box = document.createElement("div");
            box.className = "box";
            box.style.backgroundColor = color;
            gridContainer.appendChild(box);
        });

        colorGrid.appendChild(gridContainer);
    });
}
