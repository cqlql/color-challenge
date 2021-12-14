const _lang = {
  zh: {
    title: '看你有多色',
    help_txt: '找出所有色块里颜色不同的一个',
    score: '得分：',
    btn_pause: '暂停',
    btn_normal: '普通场',
    btn_double: '双飞场',
    btn_normal_mode: '普通模式',
    btn_double_mode: '双飞模式',
    btn_reTry: '重来',
    btn_more_game: '更多游戏',
    game_pause: '游戏暂停',
    btn_resume: '继续',
    loading: '加载中...',
    lv_txt: ['瞎子', '色盲', '色郎', '色狼', '色鬼', '色魔', '超级色魔', '变态色魔', '孤独求色'],
    lv_txt2: [
      '色不起来',
      '有色心没色胆',
      '好色之徒',
      '色胆包天',
      '色不知耻',
      '英雄本色',
      '色射具全',
      '裸色舔香',
      '衣冠禽色',
    ],
    tips: '再得<em id="_score"></em>分，就可再打败<em id="_num"></em>万人',
    share_txt_d: '[双飞]',
    share_txt1: '我闯过',
    share_txt2: '关,击败',
    share_txt3: '%的人,我是[',
    share_txt4: '],不服来战！',
    coyright: '',
    desc: '找出所有色块中颜色不同的一块。分享朋友圈，找到身边的色魔',
  },
  en: {
    title: 'How strong is your eyesight',
    help_txt: 'Find the box with the different colour',
    score: 'Score：',
    btn_pause: 'Pause',
    btn_start: 'Start',
    btn_reTry: 'Again',
    btn_more_game: 'More games',
    game_pause: 'Pause',
    btn_resume: 'Continues',
    loading: 'loading...',
    lv_txt: [
      'Blind',
      'Very weak',
      'Weak',
      'Just so so',
      'Not bad',
      'Nice one',
      'Great',
      'Amazing',
      'Insane',
    ],
    share_txt1: 'I passed ',
    share_txt2: 'stages and defeated ',
    share_txt3: '% people. I am ',
    share_txt4: ', come to challenge me if you dare！',
    desc: 'Find the box with the different colour, share it to your friends!',
  },
}
const _config = {
  lang: 'zh',
  color: {
    allTime: 60,
    addTime: 0,
    lvMap: [2, 3, 4, 5, 5, 6, 6, 7, 7, 7, 8, 8, 8, 8, 8, 8, 9],
  },
  color2: {
    allTime: 60,
    addTime: 0,
    lvMap: [4, 4, 6, 6, 6, 6, 6, 6, 8],
  },
  pic: {
    isOpen: !1,
    allTime: 5,
    addTime: 0,
    lvMap: [
      2,
      3,
      3,
      4,
      4,
      4,
      4,
      5,
      5,
      5,
      5,
      5,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      8,
    ],
  },
}
const _timer = parseInt(Date.now() + 1e11 * Math.random())
const shareData = {
  imgUrl: 'http://1.txst2008.sinaapp.com/knyds2/assets/img/find.logo.png?ver=1.1.62',
  // 分享时图标地址
  timeLineLink: 'http://1.txst2008.sinaapp.com/knyds2/',
  // 分享时的url
  tTitle: '看你有多色?',
  // 分享的标题
  tContent: '找出所有色块中颜色不同的一块。分享朋友圈，找到身边的色魔', // 分享时的内容
}
!(function() {
  const a = _lang[_config.lang]
  const b = $('#tpl').html()
  const c = _.template(b, a)
  $('body').html(c), $('title').html(a.title)
})(),
  (function() {
    const a = $('#box')
    const b = {
      lv: $('#room .lv em'),
      time: $('#room .time'),
      start: $('#dialog .btn-restart'),
      back: $('#dialog .btn-back'),
      share: $('#dialog .btn-share'),
      pause: $('#room .btn-pause'),
      resume: $('#dialog .btn-resume'),
      mode: $('#mode'),
      dialog: $('#dialog'),
      d_content: $('#dialog .content'),
      d_pause: $('#dialog .pause'),
      d_gameover: $('#dialog .gameover'),
    }
    var c = {
      target: 1,
      finded: 0,
      score: 0,
      init: function(a, c, d) {
        ;(this.type = a),
          (this.target = a == 'color2' ? 2 : 1),
          (this.api = API[a]),
          (this.config = _config[a]),
          (this.lang = _lang[_config.lang]),
          b.mode
            .data('type', a == 'color' ? 'color2' : 'color')
            .html(a == 'color' ? this.lang.btn_double : this.lang.btn_normal),
          this.reset(),
          (this.parent = d),
          (this.el = c),
          this.renderUI(),
          this.inited || this.initEvent(),
          (this.inited = !0),
          this.start()
      },
      renderUI: function() {
        const b = window.orientation == 90 || window.orientation == -90
        let c = b ? window.innerHeight : window.innerWidth
        ;(c -= 20), (c = Math.min(c, 500)), a.width(c).height(c), this.el.show()
      },
      initEvent: function() {
        const d = 'ontouchstart' in document.documentElement ? 'touchend' : 'click'
        const e = this
        $(window).resize(function() {
          c.renderUI()
        }),
          a.on(d, 'span', function() {
            const a = $(this).data('type')
            a == 'a' &&
              ($(this)
                .css('background-color', '#f00')
                .data('type', '')
                .html('<em></em>'),
              ++e.finded == e.target && e.nextLv.call(e))
          }),
          b.pause.on(d, _.bind(this.pause, this)),
          b.resume.on(d, _.bind(this.resume, this)),
          b.start.on(d, function() {
            ;(e.score = 0), b.time.html(0), e.reset(), e.start()
          }),
          b.back.on(d, _.bind(this.back, this)),
          b.share.on(d, _.bind(this.share, this))
      },
      start: function() {
        this.time > 5 && b.time.removeClass('danger'),
          (this.finded = 0),
          b.dialog.hide(),
          (this._pause = !1),
          (this.lv = typeof this.lv !== 'undefined' ? this.lv + 1 : 0),
          (this.lvMap = this.config.lvMap[this.lv] || _.last(this.config.lvMap)),
          this.renderMap(),
          this.renderInfo(),
          this.timer || (this.timer = setInterval(_.bind(this.tick, this), 1e3))
      },
      share: function() {},
      resume: function() {
        b.dialog.hide(), (this._pause = !1)
      },
      pause: function() {
        ;(this._pause = !0), b.d_content.hide(), b.d_pause.show(), b.dialog.show()
      },
      tick: function() {
        return this._pause
          ? void 0
          : (this.time--,
            this.time < 6 && b.time.addClass('danger'),
            this.time < 0 ? void this.gameOver() : void b.time.text(parseInt(this.time)))
      },
      renderMap: function() {
        if (!this._pause) {
          const b = this.lvMap * this.lvMap
          let c = ''
          const d = 'lv' + this.lvMap
          _(b).times(function() {
            c += '<span></span>'
          }),
            a.attr('class', d).html(c),
            this.api.render(this.lvMap, this.lv)
        }
      },
      renderInfo: function() {
        ;(this.score += this.type == 'color2' ? this.lvMap / 2 : 1), b.lv.text(this.score)
      },
      gameOver: function() {
        try {
          WeixinJSBridge.call('showOptionMenu')
        } catch (c) {}
        const d = this.api.getGameOverText(this.score)
        if (
          ((this.lastScore = this.score),
          (this.lastGameTxt = d.txt),
          (this.lastGamePercent = d.percent),
          b.d_content.hide(),
          b.d_gameover
            .show()
            .find('h3')
            .text(this.lastGameTxt),
          a.find('span').fadeOut(1500, function() {
            b.dialog.show()
          }),
          this.type == 'color2')
        ) {
          const e = [2, 3, 4][parseInt(2 * Math.random())]
          $('#_score').html(e)
          let f
          ;(f =
            this.socre < 70
              ? (20 + 10 * Math.random()).toFixed(1)
              : this.socre < 80
              ? (30 + 20 * Math.random()).toFixed(1)
              : this.socre < 90
              ? (70 + 10 * Math.random()).toFixed(1)
              : this.socre < 100
              ? (100 + 100 * Math.random()).toFixed(1)
              : this.socre < 110
              ? (60 + 10 * Math.random()).toFixed(1)
              : this.socre < 120
              ? (30 + 20 * Math.random()).toFixed(1)
              : this.socre < 130
              ? (10 + 10 * Math.random()).toFixed(1)
              : (5 + 10 * Math.random()).toFixed(1)),
            $('#_num').html(f),
            $('#tips').show()
        } else {
          $('#tips').hide()
        }
        this._pause = !0
        const g = this.type == 'color2' ? 'd_' : ''
        _hmt.push(['_trackEvent', 'score', g + 'score_' + (this.lv + 1)]),
          (this.score = 0),
          this.reset()
      },
      reset: function() {
        ;(this.time = this.config.allTime), (this.lv = -1)
      },
      nextLv: function() {
        ;(this.time += this.config.addTime),
          b.time.text(parseInt(this.time)),
          this._pause || this.start()
      },
      back: function() {
        ;(this._pause = !0), this.el.hide(), b.dialog.hide(), this.parent.render()
      },
    }
    window.Game = c
  })(),
  (function(a) {
    const b = {
      index: $('#index'),
      room: $('#room'),
      loading: $('#loading'),
      dialog: $('#dialog'),
      play: $('.btn-play'),
      btn_boyaa: $('.btn-boyaa'),
      banner: $('.banner'),
      boyaa_logo: $('.boyaa-logo'),
    }
    const c = window.navigator.userAgent.toLowerCase()
    const d = /android/i.test(c)
    const e = /iphone|ipad|ipod/i.test(c)
    var f = {
      init: function() {
        this.initEvent(), this.loading()
      },
      loading: function() {
        function a() {
          d++, d == c && f.render()
        }
        if (_config.pic.isOpen) {
          for (
            var b = [
                'assets/img/1.png',
                'assets/img/2.png',
                'assets/img/3.png',
                'assets/img/4.png',
                'assets/img/5.png',
                'assets/img/6.png',
                'assets/img/7.png',
                'assets/img/8.png',
                'assets/img/9.png',
                'assets/img/10.png',
                'assets/img/11.png',
                'assets/img/12.png',
                'assets/img/13.png',
                'assets/img/14.png',
                'assets/img/15.png',
                'assets/img/16.png',
                'assets/img/17.png',
                'assets/img/18.png',
              ],
              c = b.length,
              d = 0,
              e = 0;
            c > e;
            e++
          ) {
            const g = new Image()
            ;(g.onload = a), (g.src = b[e])
          }
        } else {
          f.render()
        }
        const h = _lang[_config.lang]
        document.addEventListener(
          'WeixinJSBridgeReady',
          function() {
            WeixinJSBridge &&
              (WeixinJSBridge.on('menu:share:appmessage', function() {
                const a = Game.type == 'color2' ? h.share_txt_d : ''
                const b =
                  Game.lastScore > 0
                    ? a +
                      h.share_txt1 +
                      Game.lastScore +
                      h.share_txt2 +
                      Game.lastGamePercent +
                      h.share_txt3 +
                      Game.lastGameTxt +
                      h.share_txt4
                    : shareData.tTitle
                WeixinJSBridge.invoke(
                  'sendAppMessage',
                  {
                    img_url: shareData.imgUrl,
                    link: shareData.timeLineLink,
                    desc: shareData.tContent,
                    title: b,
                  },
                  function() {
                    const a = Game.type == 'color2' ? 'd_' : ''
                    _hmt.push(['_trackEvent', 'share', a + 'appmessage'])
                  },
                )
              }),
              WeixinJSBridge.on('menu:share:timeline', function() {
                const a = Game.type == 'color2' ? h.share_txt_d : ''
                const b =
                  Game.lastScore > 0
                    ? a +
                      h.share_txt1 +
                      Game.lastScore +
                      h.share_txt2 +
                      Game.lastGamePercent +
                      h.share_txt3 +
                      Game.lastGameTxt +
                      h.share_txt4
                    : shareData.tTitle
                WeixinJSBridge.invoke(
                  'shareTimeline',
                  {
                    img_url: shareData.imgUrl,
                    img_width: '640',
                    img_height: '640',
                    link: shareData.timeLineLink,
                    desc: shareData.tContent,
                    title: b,
                  },
                  function() {
                    const a = Game.type == 'color2' ? 'd_' : ''
                    _hmt.push(['_trackEvent', 'share', a + 'timeline'])
                  },
                )
              }))
          },
          !1,
        )
      },
      render: function() {
        setTimeout(function() {
          b.loading.hide(), b.index.show()
        }, 1e3)
      },
      initEvent: function() {
        const a = 'ontouchstart' in document.documentElement ? 'touchstart' : 'click'
        const c = this
        b.play.on(a, function() {
          const a = $(this).data('type') || 'color'
          b.index.hide(), Game.init(a, b.room, c)
        }),
          b.btn_boyaa.on(a, function() {
            const a = Game.type == 'color2' ? 'd_' : ''
            _hmt.push(['_trackEvent', 'button', a + 'more_game'])
          }),
          b.boyaa_logo.on(a, function() {
            const a = Game.type == 'color2' ? 'd_' : ''
            _hmt.push(['_trackEvent', 'button', a + 'boyaa_logo'])
          }),
          b.banner.on(a, function() {
            const a = Game.type == 'color2' ? 'd_' : ''
            const b = $(this).data('t') || ''
            const c = d ? 'android' : e ? 'ios' : 'other_os'
            _hmt.push(['_trackEvent', 'banner', a + c + '_' + b])
          })
      },
    }
    f.init(), (a.API = {})
  })(window),
  (function() {
    const a = $('#box')
    const b = 'span'
    const c = $('#help p')
    const d = $('#help_color')
    const e = {
      lvT: _lang[_config.lang].lv_txt,
      render: function(e, f) {
        ;(this.lv = f), c.hide(), d.show()
        const g = _config.color.lvMap[f] || _.last(_config.color.lvMap)
        ;(this.d = 15 * Math.max(9 - g, 1)),
          (this.d = f > 20 ? 10 : this.d),
          (this.d = f > 40 ? 8 : this.d),
          (this.d = f > 50 ? 5 : this.d)
        const h = Math.floor(Math.random() * e * e)
        const i = this.getColor(255 - this.d)
        const j = this.getLvColor(i[0])
        a
          .find(b)
          .css('background-color', i[1])
          .data('type', 'b'),
          a
            .find(b)
            .eq(h)
            .css('background-color', j[1])
            .data('type', 'a')
      },
      getColor: function(a) {
        const b = [
          Math.round(Math.random() * a),
          Math.round(Math.random() * a),
          Math.round(Math.random() * a),
        ]
        const c = 'rgb(' + b.join(',') + ')'
        return [b, c]
      },
      getLvColor: function(a) {
        const b = this.d
        const c = _.map(a, function(a) {
          return a + b + 10
        })
        const d = 'rgb(' + c.join(',') + ')'
        return [c, d]
      },
      getGameOverText: function(a) {
        const b = a < 20 ? 0 : Math.ceil((a - 20) / 10)
        const c = this.lvT[b] || _.last(this.lvT)
        const d = c + 'lv' + a
        let e = a
        return (
          (e =
            e < 20
              ? 2 * a
              : a < 30
              ? 3 * (a - 20) + 40
              : a < 40
              ? 1.5 * (a - 30) + 70
              : a < 50
              ? 1.35 * (a - 40) + 85
              : a < 60
              ? 0.05 * (a - 50) + 98.5
              : a < 70
              ? 0.02 * (a - 60) + 99
              : a < 80
              ? 0.02 * (a - 70) + 99.2
              : a < 90
              ? 0.02 * (a - 80) + 99.4
              : a < 100
              ? 0.02 * (a - 90) + 99.6
              : a < 110
              ? 0.02 * (a - 100) + 99.8
              : 100),
          (e = ('' + e).length > 5 ? e.toFixed(2) : e),
          {
            txt: d,
            percent: e,
          }
        )
      },
    }
    API.color = e
  })(),
  (function() {
    const a = $('#box')
    const b = 'span'
    const c = $('#help p')
    const d = $('#help_color')
    const e = {
      lvT: _lang[_config.lang].lv_txt2,
      render: function(e, f) {
        ;(this.lv = f), c.hide(), d.show()
        const g = _config.color.lvMap[f] || _.last(_config.color.lvMap)
        ;(this.d = 15 * Math.max(9 - g, 1)),
          (this.d = f > 20 ? 10 : this.d),
          (this.d = f > 30 ? 8 : this.d),
          (this.d = f > 40 ? 5 : this.d),
          this.getGameOverText(20),
          this.getGameOverText(30),
          this.getGameOverText(40),
          this.getGameOverText(50),
          this.getGameOverText(60),
          this.getGameOverText(70),
          this.getGameOverText(80),
          this.getGameOverText(90),
          this.getGameOverText(100),
          this.getGameOverText(110),
          this.getGameOverText(120),
          this.getGameOverText(130)
        const h = this.getColor(255 - this.d)
        const i = this.getLvColor(h[0])
        const j = this.getColor(155 - this.d)
        const k = this.getLvColor(j[0])
        const l = []
        const m = []
        a.find(b).each(function(a, b) {
          e / 2 > a % e
            ? ($(b).css('background-color', h[1]), l.push($(b)))
            : ($(b).css('background-color', j[1]), m.push($(b)))
        })
        const n = Math.floor(Math.random() * l.length)
        const o = Math.floor(Math.random() * m.length)
        l[n].css('background-color', i[1]).data('type', 'a'),
          m[o].css('background-color', k[1]).data('type', 'a')
      },
      getColor: function(a) {
        const b = [
          Math.round(Math.random() * a),
          Math.round(Math.random() * a),
          Math.round(Math.random() * a),
        ]
        const c = 'rgb(' + b.join(',') + ')'
        return [b, c]
      },
      getLvColor: function(a) {
        const b = this.d
        const c = _.map(a, function(a) {
          return a + b
        })
        const d = 'rgb(' + c.join(',') + ')'
        return [c, d]
      },
      getGameOverText: function(a) {
        const b = a < 40 ? 0 : Math.ceil((a - 40) / 10)
        const c = this.lvT[b] || _.last(this.lvT)
        const d = c + 'lv' + a
        let e = a
        return (
          (e =
            e < 30
              ? 35
              : e < 70
              ? 1.14 * (a - 35) + 35
              : a < 80
              ? 0.5 * (a - 70) + 75
              : a < 90
              ? a - 80 + 80
              : a < 100
              ? a - 90 + 85
              : a < 110
              ? 0.02 * (a - 110) + 95
              : a < 120
              ? 0.02 * (a - 110) + 97
              : a < 130
              ? 0.01 * (a - 120) + 99
              : 100),
          (e = ('' + e).length > 5 ? e.toFixed(2) : e),
          {
            txt: d,
            percent: e,
          }
        )
      },
    }
    API.color2 = e
  })()
