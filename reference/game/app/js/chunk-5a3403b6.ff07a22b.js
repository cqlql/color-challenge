(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-5a3403b6"],
  {
    "107e": function (e, t, a) {
      "use strict";
      a.r(t);
      var o = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "div",
            {
              class: e.pageClass,
              attrs: {
                id: "gamePage",
              },
            },
            [
              a("NavTag"),
              e.pageLoging
                ? a("div", {
                    staticClass: "loging-tip center",
                  })
                : e._e(),
              e.pageLoging
                ? e._e()
                : a(
                    "div",
                    {
                      staticClass: "container-fluid",
                    },
                    [
                      "play" == e.state || "stop" == e.state
                        ? a(
                            "div",
                            {
                              style: "height:" + e.pageHeight + "px",
                              attrs: {
                                id: "GameCtrl",
                              },
                            },
                            [
                              "stop" == e.state
                                ? a(
                                    "div",
                                    {
                                      attrs: {
                                        id: "intro",
                                      },
                                    },
                                    [
                                      a("img", {
                                        staticClass: "gameintro main",
                                        attrs: {
                                          src: "https://static.qtccolor.com/game/Pixels/images/color_main.png",
                                        },
                                        on: {
                                          click: e.start,
                                        },
                                      }),
                                      a(
                                        "div",
                                        {
                                          staticClass: "gameintro bottom",
                                        },
                                        [
                                          a(
                                            "button",
                                            {
                                              staticClass: "button",
                                              attrs: {
                                                type: "button",
                                              },
                                              on: {
                                                click: e.start,
                                              },
                                            },
                                            [a("span", [e._v("这就开始")])]
                                          ),
                                          a("br"),
                                          a(
                                            "button",
                                            {
                                              staticClass: "link",
                                              attrs: {
                                                type: "button",
                                              },
                                              on: {
                                                click: function (t) {
                                                  return e.$router.push(
                                                    "pixels?state=result"
                                                  );
                                                },
                                              },
                                            },
                                            [a("span", [e._v("查看上次成绩")])]
                                          ),
                                        ]
                                      ),
                                    ]
                                  )
                                : e._e(),
                              "play" == e.state
                                ? a(
                                    "div",
                                    {
                                      attrs: {
                                        id: "game",
                                      },
                                    },
                                    [
                                      a(
                                        "div",
                                        {
                                          staticClass: "gamemain board",
                                        },
                                        [
                                          a(
                                            "div",
                                            {
                                              attrs: {
                                                id: "time",
                                              },
                                            },
                                            [
                                              e.colorGameTimeleft > 5
                                                ? [
                                                    a(
                                                      "span",
                                                      {
                                                        staticClass: "left-sec",
                                                      },
                                                      [
                                                        e._v(
                                                          e._s(
                                                            Math.round(
                                                              e.colorGameTimeleft
                                                            )
                                                          )
                                                        ),
                                                      ]
                                                    ),
                                                    a("span", [e._v(" 秒")]),
                                                  ]
                                                : [
                                                    a(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "left-milisec",
                                                      },
                                                      [e._v(e._s(e.SecondLeft))]
                                                    ),
                                                    a("span", [e._v(" 秒")]),
                                                  ],
                                            ],
                                            2
                                          ),
                                          a(
                                            "div",
                                            {
                                              attrs: {
                                                id: "level",
                                              },
                                            },
                                            [
                                              a("span", [e._v("Lv.")]),
                                              a(
                                                "span",
                                                {
                                                  staticClass: "right_count",
                                                },
                                                [
                                                  e._v(
                                                    " " + e._s(e.colorGameLevel)
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                      a(
                                        "div",
                                        {
                                          attrs: {
                                            id: "palette",
                                          },
                                        },
                                        e._l(e.colors, function (t, o) {
                                          return a(
                                            "div",
                                            {
                                              key: o,
                                              staticClass: "block",
                                              style: e.blockStyle,
                                              on: {
                                                click: function (t) {
                                                  return e.onSelectColor(o);
                                                },
                                              },
                                            },
                                            [
                                              a("div", {
                                                style: e.getBlockColorCss(t),
                                              }),
                                            ]
                                          );
                                        }),
                                        0
                                      ),
                                      a(
                                        "div",
                                        {
                                          staticClass: "desc pre-wrap ",
                                          attrs: {
                                            id: "desc",
                                          },
                                        },
                                        [
                                          e._v(" 找出不一样的彩色方块吧~ "),
                                          a(
                                            "div",
                                            {
                                              attrs: {
                                                id: "scoreBroad",
                                              },
                                            },
                                            [
                                              e._v(" 你的得分 "),
                                              a("span", [
                                                e._v(e._s(e.showScore) + " "),
                                              ]),
                                              e._v("分 "),
                                            ]
                                          ),
                                        ]
                                      ),
                                      e._e(),
                                    ]
                                  )
                                : e._e(),
                            ]
                          )
                        : e._e(),
                      "result" == e.state
                        ? a(
                            "div",
                            {
                              attrs: {
                                id: "resultPage",
                              },
                            },
                            [
                              a("canvas", {
                                staticClass: "margintop1 img-responsive",
                                attrs: {
                                  id: "canvas",
                                  width: e.w,
                                  height: e.h,
                                },
                              }),
                              a(
                                "div",
                                {
                                  staticClass: "row",
                                  staticStyle: {
                                    width: "100%",
                                  },
                                },
                                [
                                  a("h3", [
                                    a(
                                      "span",
                                      {
                                        staticClass: "rank-percent col-xs-6 ",
                                      },
                                      [
                                        e._v(
                                          e._s(
                                            e.grades[
                                              e.grades.length - e.current_grade
                                            ].name
                                          )
                                        ),
                                      ]
                                    ),
                                  ]),
                                  a(
                                    "div",
                                    {
                                      staticClass: "rank-rank col-xs-6",
                                    },
                                    [
                                      e.login_headImg
                                        ? a("img", {
                                            staticClass: "head-img",
                                            attrs: {
                                              src: e.login_headImg,
                                            },
                                          })
                                        : e._e(),
                                      e.rank > 0
                                        ? a("span", [
                                            e._v(
                                              "本周第" + e._s(e.rank) + "名"
                                            ),
                                          ])
                                        : e._e(),
                                    ]
                                  ),
                                ]
                              ),
                              a(
                                "div",
                                {
                                  staticStyle: {
                                    "margin-top": "10px",
                                  },
                                  attrs: {
                                    id: "pingjia",
                                  },
                                },
                                [
                                  a(
                                    "div",
                                    {
                                      staticClass: "resultScore",
                                    },
                                    [
                                      e._v(
                                        e._s(e.callName) +
                                          "的测试结果为:" +
                                          e._s(e.colorGameLevel) +
                                          "级 ，得分" +
                                          e._s(e.colorGameScore) +
                                          "分"
                                      ),
                                    ]
                                  ),
                                  a(
                                    "h5",
                                    {
                                      staticClass: "gray",
                                    },
                                    [
                                      e.mine && e.topLevel > 0
                                        ? a("span", [
                                            e._v(
                                              "（历史最高级：" +
                                                e._s(e.topLevel) +
                                                "级）"
                                            ),
                                          ])
                                        : e._e(),
                                    ]
                                  ),
                                  e._v(
                                    e._s(e.callName) +
                                      e._s(e.gradeDesc[e.current_grade])
                                  ),
                                ]
                              ),
                              a(
                                "div",
                                {
                                  staticClass: " allgrades",
                                },
                                e._l(e.grades, function (t, o) {
                                  return a(
                                    "div",
                                    {
                                      key: o,
                                      staticClass: "row",
                                    },
                                    [
                                      a(
                                        "div",
                                        {
                                          class:
                                            "col-xs-8 col-sm-6 " +
                                            (e.grades.length - o ==
                                            e.current_grade
                                              ? "currentGrade"
                                              : ""),
                                        },
                                        [e._v(e._s(t.name))]
                                      ),
                                      a(
                                        "div",
                                        {
                                          class:
                                            "col-xs-4 col-sm-6 " +
                                            (e.grades.length - o ==
                                            e.current_grade
                                              ? "currentGrade"
                                              : ""),
                                        },
                                        [e._v(e._s(t.count) + "人")]
                                      ),
                                    ]
                                  );
                                }),
                                0
                              ),
                              a(
                                "div",
                                {
                                  staticClass: "margintop1 center",
                                },
                                [
                                  a(
                                    "button",
                                    {
                                      staticClass: "btn btn-danger ",
                                      attrs: {
                                        type: "button",
                                      },
                                      on: {
                                        click: function (t) {
                                          return e.$router.push(
                                            "/pixels?state=stop"
                                          );
                                        },
                                      },
                                    },
                                    [
                                      a("i", {
                                        staticClass:
                                          " glyphicon glyphicon-star",
                                      }),
                                      e._v(" " + e._s(e.buttonName)),
                                    ]
                                  ),
                                ]
                              ),
                              a(
                                "div",
                                {
                                  staticClass: "margintop2",
                                  attrs: {
                                    id: "heroBox",
                                  },
                                },
                                [
                                  a("h4", [
                                    e._v("本周排行榜 "),
                                    e.refreshIntval > 0
                                      ? a("span", [
                                          e._v(
                                            "数据将于" +
                                              e._s(e.refreshIntval) +
                                              "秒后刷新"
                                          ),
                                        ])
                                      : e._e(),
                                  ]),
                                  a(
                                    "div",
                                    {
                                      attrs: {
                                        id: "heroList",
                                      },
                                    },
                                    [
                                      a(
                                        "ul",
                                        e._l(e.weekHero, function (t, o) {
                                          return a(
                                            "li",
                                            {
                                              key: o,
                                            },
                                            [
                                              a(
                                                "div",
                                                {
                                                  staticClass: "num",
                                                },
                                                [
                                                  e._v(
                                                    "第" + e._s(o + 1) + "名 "
                                                  ),
                                                  a("img", {
                                                    staticClass: "head-img",
                                                    attrs: {
                                                      src: t.headimgurl,
                                                    },
                                                  }),
                                                ]
                                              ),
                                              a(
                                                "div",
                                                {
                                                  staticClass: "nickname",
                                                },
                                                [e._v(e._s(t.nickname) + " ")]
                                              ),
                                              a(
                                                "div",
                                                {
                                                  staticClass: "level",
                                                },
                                                [e._v("Lv." + e._s(t.glevel))]
                                              ),
                                              a(
                                                "div",
                                                {
                                                  staticClass: "score",
                                                },
                                                [e._v(e._s(t.score) + "分")]
                                              ),
                                            ]
                                          );
                                        }),
                                        0
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              e._m(0),
                              a("RewardTag"),
                              e._m(1),
                            ],
                            1
                          )
                        : e._e(),
                    ]
                  ),
            ],
            1
          );
        },
        r = [
          function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "div",
              {
                staticClass: "margin2",
              },
              [
                a("img", {
                  staticClass: "img-responsive",
                  attrs: {
                    src: "/game/img/qrcode3.png",
                  },
                }),
              ]
            );
          },
          function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "div",
              {
                staticClass: "margin2",
              },
              [
                a(
                  "a",
                  {
                    attrs: {
                      target: "_blank",
                      href: "https://m.qtccolor.com/Product/ColorMeter%20Pro.aspx?key=qtc&s=game",
                    },
                  },
                  [
                    a("img", {
                      staticClass: "img-responsive",
                      attrs: {
                        src: "/game/img/ad_2.png",
                      },
                    }),
                  ]
                ),
              ]
            );
          },
        ],
        n = (a("2092"), a("7e6f")),
        s = a("b596");
      const i = 700,
        l = 368,
        c = window.sessionStorage;
      location.protocol, location.host;
      var u = {
          mixins: [n["a"], s["a"]],
          data() {
            return {
              w: 0,
              h: 0,
              pageHeight: 700,
              path: "/game/handler/pixels.aspx",
              pagePath: "/pixels",
              state: "stop",
              intro: !0,
              colors: [],
              grid: 0,
              colorGameLastStage: 50,
              colorGameLevel: 1,
              colorGameScore: 0,
              colorGamePenaltySec: 3,
              colorGameCorrect: -1,
              colorGameStartTime: 0,
              colorLevelStartTime: 0,
              colorGameReward: 0,
              colorGameTimeleft: 0,
              colorGameTimeGiven: 15,
              wrongTimes: 0,
              setTimeoutIndex: 0,
              rank: 0,
              rebornTime: 1,
              gradeDesc: [
                "",
                "拥有着一般人的色感~",
                "拥有着比一般人更加突出的色感！",
                "拥有美术学院学生级的色感，你看待事物可以看到常人无法看到的角度，找到属于你自己的美丽。你知道各种存在于世界的色彩之美，也懂得如何通过自己的个性表达。你拥有超越常人的灵敏度和丰富和创造性，一定要继续加油表现自己的各种思想和丰富的想象力啊",
                "具有色彩专家级别的，就好像著名画家毕加索和梵高，可以轻松与各种颜色打交道的色彩感觉持有者。 你对于色彩的个性很有感觉，你也总是为平时看到的不够高明的颜色选择感到遗憾。另外，你微妙感性的个性也让你可以和周围的人形成一个平稳的关系。你对事物拥有详细的观察分析能力、领导能力、适应力和创新力。",
                "是世界前3%水准的非常优秀的色彩感觉持有者。你的色彩层次感非常的优秀，各种颜色对你都有特殊的意义，你的审美水平也超越了一般人。你可以运用在色彩世界里的优势，继续探索，创造出充满想象力的新东西",
                "是色彩领域的最强王者，举世无双！",
              ],
              current_grade: 0,
              grades: [
                {
                  name: "最强王者",
                  count: 0,
                },
                {
                  name: "堪比毕加索",
                  count: 0,
                },
                {
                  name: "美术学院学生级的色感",
                  count: 0,
                },
                {
                  name: "突出的色感",
                  count: 0,
                },
                {
                  name: "一般",
                  count: 0,
                },
                {
                  name: "初级",
                  count: 0,
                },
              ],
              weekHero: [],
              topLevel: 0,
              ticket: "",
              refreshSeconds: 10,
              refreshIntval: 10,
              refreshSeconds_Handle: 0,
              allScoreLog: [],
              writeScoreLogText_handle: 0,
            };
          },
          computed: {
            blockStyle: function () {
              return {
                width: (100 / this.grid).toString() + "%",
                height: (100 / this.grid).toString() + "%",
              };
            },
            pageClass: function () {
              return "result" == this.state ? "light" : "black";
            },
            callName() {
              return this.mine ? "你" : "你的好友";
            },
            buttonName() {
              return this.mine ? "重新测试" : "我也要测试";
            },
            showScore() {
              let e = this.colorGameLevel - 1,
                t = 1e3 * e,
                a = Math.round((this.colorGameReward / (15 * e)) * 1e3);
              return t + (isNaN(a) ? 0 : a);
            },
            SecondLeft() {
              var e = Math.round(10 * this.colorGameTimeleft) / 10;
              return 1 == (e + "").length && (e += ".0"), e;
            },
          },
          watch: {
            colorGameTimeleft: function (e) {
              (e = Math.max(0, this.colorGameTimeleft)),
                "play" == this.state && e <= 0 && this.gameOver();
            },
            state: function (e) {
              ("stop" != e && "play" != e) || this.testLogin(),
                "result" == e
                  ? ((this.refreshIntval = this.refreshSeconds),
                    (this.refreshSeconds_Handle = setInterval(() => {
                      this.refreshIntval <= 0 &&
                        (clearInterval(this.refreshSeconds_Handle),
                        (this.refreshSeconds_Handle = 0),
                        (this.refreshIntval = 0),
                        this.getAllRank()),
                        this.refreshIntval--;
                    }, 1e3)),
                    (document.body.className = ""))
                  : (clearInterval(this.refreshSeconds_Handle),
                    (document.body.className = "black"));
            },
            colorGameLevel(e, t) {
              e > 1 && this.writeScoreLog(100);
            },
            wrongTimes(e, t) {
              this.writeScoreLog(-1);
            },
            colorGameReward(e, t) {
              let a = Math.round(0.1 * t),
                o = Math.round(0.1 * e);
              this.writeScoreLog(o - a);
            },
            "$route.query.ticket"(e) {
              this.routerHanler();
            },
            "$route.query.state"(e) {
              this.routerHanler();
            },
          },
          methods: {
            init: function () {
              var e = this;
              (e.grid = 0),
                (e.colorGameLevel = 0),
                (e.colorGameTimeleft = this.colorGameTimeGiven),
                (e.colorGameStartTime = Date.now()),
                (e.wrongTimes = 0),
                (e.colorGameReward = 0),
                clearTimeout(e.setTimeoutIndex),
                clearInterval(e.writeScoreLogText_handle),
                (e.ticket = ""),
                (e.mine = !1);
              let t = {
                title: "色块游戏",
                desc: "15秒内找出色块里不一样的色块，挑战分辨颜色能力！",
                link: window.location.href,
              };
              e.$wxShare.updateWxShareConfig(t);
            },
            start: function () {
              var e = this;
              e.$router.push("pixels?state=play"),
                e.init(),
                e.renderLevel(1),
                e.startTime();
            },
            pause: function () {
              clearTimeout(this.setTimeoutIndex), (this.state = "pause");
            },
            resume: function () {
              "pause" == this.state &&
                (this.startTime(), (this.state = "play"));
            },
            startTime: function () {
              var e = this;
              e.setTimeoutIndex = setInterval(function () {
                var t =
                  e.colorGameTimeGiven -
                  (Date.now() - e.colorLevelStartTime) / 1e3;
                t < e.colorGameTimeleft && (e.colorGameTimeleft = t),
                  (e.colorGameTimeleft -= 0.1),
                  Math.round(e.colorGameTimeleft) <= 0 &&
                    ((e.colorGameTimeleft = 0),
                    clearInterval(e.setTimeoutIndex));
              }, 100);
            },
            gameOver: function (e) {
              var t = this;
              t.showCorrect(),
                setTimeout(() => {
                  t.showGameOver(t.colorGameLevel - 1);
                }, 2e3);
            },
            onSelectColor: function (e) {
              var t = this;
              t.colorGameTimeleft <= 0 ||
                "play" != t.state ||
                (e == t.colorGameCorrect
                  ? 50 == t.colorGameLevel
                    ? t.showGameOver(t.colorGameLevel)
                    : t.renderLevel(++t.colorGameLevel)
                  : (t.wrongTimes++,
                    (t.colorGameTimeleft -= t.colorGamePenaltySec),
                    (t.colorGameTimeleft = Math.max(0, t.colorGameTimeleft))));
            },
            renderLevel: function (e) {
              var t = this;
              if (e > t.colorGameLastStage) t.gameOver(!1);
              else {
                (t.colorGameLevel = e),
                  e > 1 && (t.colorGameReward += this.colorGameTimeleft),
                  (t.colorGameTimeleft = this.colorGameTimeGiven),
                  (t.colorLevelStartTime = Date.now());
                var a = (t.grid = t.colorGameLevelGrid(e)),
                  o = t.colorGameLevelColorDiff(e),
                  r = function (e) {
                    return Math.floor(Math.random() * (255 - e));
                  },
                  n = r(o),
                  s = r(o),
                  i = r(o);
                t.colors.length = 0;
                var l = 0;
                do {
                  l = Math.floor(Math.random() * a * a);
                } while (t.colorGameCorrect == l);
                t.colorGameCorrect = l;
                for (var c = 0; c < a * a; c++)
                  c == l
                    ? t.colors.push({
                        r: n,
                        g: s,
                        b: i,
                      })
                    : t.colors.push({
                        r: n + o,
                        g: s + o,
                        b: i + o,
                      });
              }
            },
            colorGameLevelColorDiff: function (e) {
              if (e <= 50) {
                var t = [
                  126, 120, 96, 86, 70, 58, 48, 40, 34, 30, 27, 27, 27, 25, 25,
                  25, 23, 23, 23, 23, 21, 21, 21, 21, 18, 18, 18, 18, 18, 18,
                  15, 15, 15, 15, 15, 12, 12, 12, 12, 12, 10, 10, 10, 10, 7, 7,
                  7, 3, 3, 2, 1,
                ];
                return t[e - 1];
              }
              return 1;
            },
            colorGameLevelGrid: function (e) {
              return e < 2
                ? 2
                : e < 4
                ? 3
                : e < 8
                ? 4
                : e < 13
                ? 5
                : e < 22
                ? 6
                : e < 32
                ? 7
                : e < 36
                ? 8
                : e < 40
                ? 9
                : e < 44
                ? 10
                : e < 48
                ? 11
                : 12;
            },
            getBlockColorCss: function (e) {
              return e
                ? {
                    "border-radius": "10px",
                    "background-color":
                      "rgb(" + e.r + ", " + e.g + ", " + e.b + ")",
                  }
                : void 0;
            },
            showCorrect: function () {
              var e = "zoom",
                t = "block",
                a = document.getElementsByClassName(t);
              if (a.length > 0) {
                var o = a[this.colorGameCorrect];
                o.className.indexOf(e) > -1
                  ? (o.className = t)
                  : (o.className = e + " " + t);
              }
            },
            showGameOver: function (e) {
              var t = this,
                a = Math.round(t.colorGameReward),
                o = t.wrongTimes;
              t.$router.replace("pixels?state=result"),
                (t.current_grade = t.level2grade(t.colorGameLevel)),
                t.renderPic(t.current_grade, t.colorGameLevel),
                $.get(
                  t.path,
                  {
                    action: "postRank",
                    glevel: e,
                    wrong: o,
                    times: a,
                  },
                  function (a) {
                    if (a) {
                      if (
                        ((t.rank = a.rank),
                        (t.colorGameScore = a.score),
                        (t.login_nickName = a.nickname),
                        (t.login_headImg = a.headimgurl),
                        (t.mine = !0),
                        (t.topLevel = a.toplevel),
                        a.ticket)
                      ) {
                        t.$router.replace(
                          "pixels?state=result&ticket=" +
                            encodeURIComponent(a.ticket)
                        );
                        let o = {
                          title:
                            "我通过了" + e + "关颜色分辨力测试，你也来试试",
                          desc: "15秒内找出色块里不一样的色块，挑战分辨颜色能力！",
                          link: location.href,
                        };
                        t.$wxShare.updateWxShareConfig(o);
                      }
                      t.getAllRank();
                    }
                  }
                );
            },
            getAllRank: function () {
              var e = this;
              $.get(
                e.path,
                {
                  action: "getAllRank",
                },
                function (t) {
                  (e.grades = t.gradeCount), (e.weekHero = t.weekHero);
                }
              );
            },
            getRankByTicket(e, t) {
              var a = this;
              $.get(
                a.path,
                {
                  action: "getRankByTicket",
                  ticket: e,
                },
                function (e) {
                  "level" in e &&
                    ((a.colorGameLevel = e.level),
                    (a.login_nickName = e.nickname),
                    (a.login_headImg = e.headimgurl),
                    (a.ticket = e.ticket),
                    (a.rank = e.rank),
                    (a.topLevel = e.topLevel),
                    (a.mine = e.mine),
                    (a.colorGameScore = e.score),
                    (a.current_grade = a.level2grade(a.colorGameLevel)),
                    a.renderPic(a.current_grade, a.colorGameLevel),
                    t && t());
                }
              );
            },
            getRank: function (e) {
              var t = this;
              t.testLogin(),
                $.get(
                  t.path,
                  {
                    action: "getRank",
                  },
                  function (a) {
                    if ("" == a || !("level" in a))
                      return void alert("没有查询你的成绩，请点击开始进行测试");
                    (t.colorGameLevel = a.level),
                      (t.login_nickName = a.nickname),
                      (t.login_headImg = a.headimgurl),
                      (t.rank = a.rank),
                      (t.topLevel = a.topLevel),
                      (t.mine = a.mine),
                      (t.colorGameScore = a.score),
                      (t.current_grade = t.level2grade(t.colorGameLevel)),
                      t.renderPic(t.current_grade, t.colorGameLevel),
                      t.$router.replace(
                        "pixels?state=result&ticket=" +
                          encodeURIComponent(a.ticket)
                      );
                    let o = {
                      title:
                        "我通过了" +
                        t.colorGameLevel +
                        "关颜色分辨力测试，你也来试试",
                      desc: "15秒内找出色块里不一样的色块，挑战分辨颜色能力！",
                      link: location.href,
                    };
                    t.$wxShare.updateWxShareConfig(o), e && e();
                  }
                );
            },
            qiangzhiLogin() {
              c.setItem("logingpage", "/pixels"),
                (location.href =
                  this.path +
                  "?action=login&from=" +
                  encodeURIComponent("/Game/app/"));
            },
            level2grade: function (e) {
              var t = 1;
              return (
                e <= 9 && (t = 1),
                e >= 10 && e <= 19 && (t = 2),
                e >= 20 && e <= 29 && (t = 3),
                e >= 30 && e <= 39 && (t = 4),
                e >= 40 && e <= 49 && (t = 5),
                50 == e && (t = 6),
                t
              );
            },
            renderPic: function (e, t) {
              var a = "/game/pixels/images/newbackgroud.png",
                o = null;
              new Promise(function (e, t) {
                var a = setInterval(function () {
                  (o = document.getElementById("canvas")),
                    null != o && (clearInterval(a), e());
                }, 50);
              }).then(function () {
                var e = o.getContext("2d"),
                  r = new Image();
                (r.src = a),
                  (r.onload = function () {
                    e.drawImage(r, 0, 0, i, l),
                      (e.font = "bold 70px consolas"),
                      (e.textAlign = "left"),
                      (e.textBaseline = "top"),
                      (e.fillStyle = "white"),
                      e.fillText("LV." + t, i / 2 - 90, l / 2 - 25),
                      (r = null);
                  });
              });
            },
            routerHanler() {
              const e = this;
              let { state: t, ticket: a } = e.$route.query;
              (e.state = t || "stop"),
                "result" != t || a
                  ? "result" == t &&
                    a &&
                    e.getRankByTicket(a, () => {
                      e.getAllRank();
                    })
                  : e.getRank(function () {
                      e.getAllRank();
                    });
            },
            writeScoreLog(e) {
              0 != e &&
                (this.allScoreLog.push((e > 0 ? "+" : "") + e + "分"),
                setTimeout(() => {
                  this.allScoreLog.splice(0, 1);
                }, 1e3));
            },
          },
          mounted() {
            const e = this;
            (e.w = i),
              (e.h = l),
              (e.pageHeight = window.innerHeight - 80),
              "play" == e.$route.query.state &&
                e.$router.replace("pixels?state=stop"),
              e.routerHanler(),
              e.init(),
              (document.title = "颜色分辨能力测试");
          },
        },
        m = u,
        d = (a("69a5"), a("2877")),
        g = Object(d["a"])(m, o, r, !1, null, null, null);
      t["default"] = g.exports;
    },
    2092: function (e, t, a) {},
    "24e0": function (e, t, a) {},
    "2cbc": function (e, t, a) {},
    "34fc": function (e, t, a) {
      "use strict";
      a("2cbc");
    },
    "3d01": function (e, t, a) {
      "use strict";
      var o = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "div",
            {
              attrs: {
                id: "game-nav",
              },
            },
            [
              a(
                "ul",
                {
                  staticClass: "nav game-nav",
                },
                [
                  e._m(0),
                  e._m(1),
                  a(
                    "li",
                    {
                      staticClass: "dropdown",
                      on: {
                        click: e.dropdown,
                      },
                    },
                    [
                      e._m(2),
                      a(
                        "ul",
                        {
                          staticClass: "dropdown-menu",
                          style: e.secondMenuStyle,
                        },
                        [
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                {
                                  attrs: {
                                    to: "/",
                                  },
                                },
                                [e._v("全部游戏")]
                              ),
                            ],
                            1
                          ),
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                {
                                  attrs: {
                                    to: "/pixels",
                                  },
                                },
                                [e._v("颜色分辨力测试")]
                              ),
                            ],
                            1
                          ),
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                {
                                  attrs: {
                                    to: "/rgb",
                                  },
                                },
                                [e._v("RGB敏感度挑战")]
                              ),
                            ],
                            1
                          ),
                          a(
                            "li",
                            [
                              a(
                                "router-link",
                                {
                                  attrs: {
                                    to: "/huetest",
                                  },
                                },
                                [e._v("在线版色棋")]
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
                    ]
                  ),
                ]
              ),
            ]
          );
        },
        r = [
          function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a("li", [
              a(
                "a",
                {
                  attrs: {
                    href: "https://m.qtccolor.com/",
                  },
                },
                [e._v("色彩商店")]
              ),
            ]);
          },
          function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a("li", [
              a(
                "a",
                {
                  attrs: {
                    href: "https://www.qtccolor.com/secaiku/index?key=weixin&s=game",
                  },
                },
                [e._v("色彩查询")]
              ),
            ]);
          },
          function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a("a", [
              e._v("色彩游戏"),
              a("span", {
                staticClass: "caret",
              }),
            ]);
          },
        ],
        n = {
          data() {
            return {
              secondMenuStyle: {
                display: "none",
              },
            };
          },
          methods: {
            dropdown() {
              console.log("aa"),
                "none" == this.secondMenuStyle.display
                  ? (this.secondMenuStyle.display = "block")
                  : (this.secondMenuStyle.display = "none");
            },
          },
        },
        s = n,
        i = (a("45cf"), a("2877")),
        l = Object(i["a"])(s, o, r, !1, null, null, null);
      t["a"] = l.exports;
    },
    "45cf": function (e, t, a) {
      "use strict";
      a("a55b");
    },
    "69a5": function (e, t, a) {
      "use strict";
      a("75bb");
    },
    "69d6": function (e, t, a) {
      "use strict";
      a("24e0");
    },
    "75bb": function (e, t, a) {},
    "7e6f": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return f;
      });
      var o = a("3d01"),
        r = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "section",
            {
              attrs: {
                id: "rewardPage",
              },
            },
            [
              a(
                "el-drawer",
                {
                  attrs: {
                    "append-to-body": !0,
                    visible: e.isShowReward,
                    "show-close": !0,
                    "custom-class": "my-drawer",
                    title: "打赏",
                    direction: "btt",
                    size: "340",
                  },
                  on: {
                    "update:visible": function (t) {
                      e.isShowReward = t;
                    },
                    opened: e.init,
                    closed: e.closed,
                  },
                },
                [
                  a("div", [
                    a(
                      "div",
                      {
                        staticClass: "reward-amounts margintop1",
                      },
                      e._l(e.quick_amount, function (t, o) {
                        return a(
                          "div",
                          {
                            key: o,
                            staticClass: "reward-amounts-item",
                          },
                          [
                            a(
                              "div",
                              {
                                class: [
                                  "cbutton",
                                  e.selectedIndex == o ? "select" : "",
                                ],
                                on: {
                                  click: function (t) {
                                    return e.select(o);
                                  },
                                },
                              },
                              [e._v(e._s(t) + "元")]
                            ),
                            a("span", [e._v(e._s(e.quick_tip[o]))]),
                          ]
                        );
                      }),
                      0
                    ),
                    a(
                      "div",
                      {
                        staticClass: " margintop2 center ",
                      },
                      [
                        a(
                          "div",
                          {
                            staticClass: "double ctrl-button",
                          },
                          [
                            a("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: e.amount,
                                  expression: "amount",
                                },
                              ],
                              staticClass: "reward-input ctrl-button   hideoff",
                              attrs: {
                                id: "inputAmount",
                                type: "number",
                                round: "",
                                placeholder: "请输入金额",
                              },
                              domProps: {
                                value: e.amount,
                              },
                              on: {
                                input: function (t) {
                                  t.target.composing ||
                                    (e.amount = t.target.value);
                                },
                              },
                            }),
                            e.inputAmount
                              ? e._e()
                              : a(
                                  "el-button",
                                  {
                                    staticClass: "ctrl-button  ",
                                    attrs: {
                                      type: "default",
                                      round: "",
                                    },
                                    on: {
                                      click: e.otherAmount,
                                    },
                                  },
                                  [e._v("自定义金额")]
                                ),
                          ],
                          1
                        ),
                        a(
                          "el-button",
                          {
                            staticClass: "ctrl-button",
                            attrs: {
                              type: "primary",
                              round: "",
                            },
                            on: {
                              click: function (t) {
                                return e.makeorder(e.amount);
                              },
                            },
                          },
                          [e._v("立即打赏")]
                        ),
                        a(
                          "div",
                          {
                            staticClass: "ft_Primary",
                          },
                          [e._v("感谢你的打赏，你的支持是我们的动力")]
                        ),
                      ],
                      1
                    ),
                  ]),
                ]
              ),
              a(
                "div",
                {
                  staticClass: "center pointer flexcenter ",
                },
                [
                  a(
                    "div",
                    {
                      staticClass: "gameicon",
                      on: {
                        click: e.openReward,
                      },
                    },
                    [
                      a("i", {
                        staticClass: "iconfont icondashang",
                      }),
                      a("span", [e._v("打赏")]),
                    ]
                  ),
                ]
              ),
              a("br"),
              a(
                "el-dialog",
                {
                  attrs: {
                    title: "支付结果",
                    visible: e.PayResultOption.show,
                    "custom-class": "PayResultOptionWindow",
                    "append-to-body": "",
                    fullscreen: "",
                  },
                  on: {
                    "update:visible": function (t) {
                      return e.$set(e.PayResultOption, "show", t);
                    },
                  },
                },
                [
                  a("PayResult", {
                    attrs: {
                      option: e.PayResultOption,
                    },
                  }),
                ],
                1
              ),
            ],
            1
          );
        },
        n = [],
        s = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "section",
            {
              attrs: {
                id: "PayResultPage",
              },
            },
            [
              a(
                "div",
                {
                  staticClass: "head",
                },
                [
                  a("i", {
                    staticClass: "iconfont iconzhifuchenggong",
                  }),
                  a(
                    "span",
                    {
                      staticClass: "text",
                    },
                    [
                      a(
                        "span",
                        {
                          staticClass: "state",
                        },
                        [e._v(e._s(e.option.order.state))]
                      ),
                      a("span", [e._v(e._s(e.option.title))]),
                    ]
                  ),
                ]
              ),
              e._m(0),
              e.option.showClose
                ? a(
                    "div",
                    {
                      staticClass: "center margintop3",
                      on: {
                        click: e.close,
                      },
                    },
                    [a("el-button", [e._v("关闭")])],
                    1
                  )
                : e._e(),
            ]
          );
        },
        i = [
          function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "div",
              {
                staticClass: "qrcode",
              },
              [
                a("img", {
                  attrs: {
                    src: "//static.qtccolor.com/template/2017/images2/qrcode_xiadanhou.jpg",
                  },
                }),
                a(
                  "p",
                  {
                    staticClass: "center",
                  },
                  [
                    e._v(" 关注公众号，实时查询色彩"),
                    a("br"),
                    e._v(" 随时随地获取分享更多资讯 "),
                  ]
                ),
              ]
            );
          },
        ],
        l = {
          props: {
            option: {
              type: Object,
              require: !0,
              default() {
                return {
                  show: !0,
                  title: "感谢您给我们的鼓励！",
                  showClose: !0,
                  order: {
                    orderid: "",
                    state: "支付成功！",
                  },
                };
              },
            },
          },
          methods: {
            close() {
              this.option.show = !1;
            },
          },
        },
        c = l,
        u = (a("69d6"), a("2877")),
        m = Object(u["a"])(c, s, i, !1, null, null, null),
        d = m.exports,
        g = {
          props: {},
          components: {
            PayResult: d,
          },
          data() {
            return {
              quick_amount: [3, 5, 10],
              quick_tip: ["继续加油哦~", "努力向前冲~", "你们是最棒哒~"],
              myOrders: {},
              selectedIndex: 0,
              amount: 10,
              inputAmount: !1,
              title: "请选择金额",
              checkTimer: 0,
              isShowReward: !1,
              showNumberKeyboard: !1,
              PayResultOption: {
                show: !1,
                title: "",
                showClose: !0,
                order: {
                  orderid: "",
                  state: "支付成功！",
                },
              },
            };
          },
          watch: {
            inputAmount(e) {
              this.title = e ? "请输入金额" : "请选择金额";
            },
            amount(e) {
              (this.amount = Math.max(1, parseInt(e))),
                (this.amount = Math.min(1e4, this.amount));
            },
          },
          beforeDestroy() {
            clearInterval(this.checkTimer);
          },
          methods: {
            otherAmount() {
              this.inputAmount = !0;
              let e = document.getElementById("inputAmount");
              (e.className = e.className.replace("hideoff", "")), e.focus();
            },
            select(e) {
              (this.selectedIndex = e), (this.amount = this.quick_amount[e]);
            },
            makeorder(e) {
              const t = this;
              0 != e &&
                (e ||
                  (t.$alert("请输入金额"),
                  this.inputAmount &&
                    document.getElementById("inputAmount").focus()),
                t.myOrders[e]
                  ? t.pay(t.myOrders[e])
                  : $.get(
                      "/webapi/reward/Order",
                      {
                        amount: e,
                      },
                      (a) => {
                        if (a.success) {
                          var o = a.data;
                          (t.myOrders[e] = o.OrderId), t.pay(o.OrderId);
                        }
                      }
                    ));
            },
            pay(e) {
              const t = this;
              t.$isPc ? t.$global.url.qtc : t.$global.url.mobile;
              let a = t.$isMobile ? 1 : 0,
                o = t.$global.rewardPayType;
              clearInterval(t.checkTimer),
                window.open(
                  `/webapi/reward/pay?orderId=${e}&isMobile=${a}&paytypeid=${o}`
                ),
                (t.checkTimer = setInterval(() => {
                  t.$request
                    .get("/reward/checkOrderPayState", {
                      orderId: e,
                    })
                    .then((e) => {
                      e.data.success &&
                        (clearInterval(t.checkTimer),
                        (t.myOrders = {}),
                        (t.PayResultOption.show = !0),
                        (t.PayResultOption.title = "感谢您的支持与鼓励"),
                        t.$emit("closed"));
                    });
                }, 3e3));
            },
            init() {
              this.inputAmount = !1;
            },
            closed() {
              clearInterval(this.checkTimer);
            },
            openReward() {
              this.isShowReward = !0;
            },
            otherAmount() {
              this.inputAmount = !0;
            },
          },
          created() {},
        },
        h = g,
        p = (a("34fc"), Object(u["a"])(h, r, n, !1, null, null, null)),
        v = p.exports;
      const f = {
        components: {
          NavTag: o["a"],
          RewardTag: v,
        },
        data() {
          return {};
        },
      };
    },
    a55b: function (e, t, a) {},
    a78e: function (e, t, a) {
      var o, r;
      /*!
       * JavaScript Cookie v2.2.1
       * https://github.com/js-cookie/js-cookie
       *
       * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
       * Released under the MIT license
       */
      (function (n) {
        var s;
        if (
          ((o = n),
          (r = "function" === typeof o ? o.call(t, a, t, e) : o),
          void 0 === r || (e.exports = r),
          (s = !0),
          (e.exports = n()),
          (s = !0),
          !s)
        ) {
          var i = window.Cookies,
            l = (window.Cookies = n());
          l.noConflict = function () {
            return (window.Cookies = i), l;
          };
        }
      })(function () {
        function e() {
          for (var e = 0, t = {}; e < arguments.length; e++) {
            var a = arguments[e];
            for (var o in a) t[o] = a[o];
          }
          return t;
        }
        function t(e) {
          return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
        }
        function a(o) {
          function r() {}
          function n(t, a, n) {
            if ("undefined" !== typeof document) {
              (n = e(
                {
                  path: "/",
                },
                r.defaults,
                n
              )),
                "number" === typeof n.expires &&
                  (n.expires = new Date(1 * new Date() + 864e5 * n.expires)),
                (n.expires = n.expires ? n.expires.toUTCString() : "");
              try {
                var s = JSON.stringify(a);
                /^[\{\[]/.test(s) && (a = s);
              } catch (c) {}
              (a = o.write
                ? o.write(a, t)
                : encodeURIComponent(String(a)).replace(
                    /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                    decodeURIComponent
                  )),
                (t = encodeURIComponent(String(t))
                  .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                  .replace(/[\(\)]/g, escape));
              var i = "";
              for (var l in n)
                n[l] &&
                  ((i += "; " + l),
                  !0 !== n[l] && (i += "=" + n[l].split(";")[0]));
              return (document.cookie = t + "=" + a + i);
            }
          }
          function s(e, a) {
            if ("undefined" !== typeof document) {
              for (
                var r = {},
                  n = document.cookie ? document.cookie.split("; ") : [],
                  s = 0;
                s < n.length;
                s++
              ) {
                var i = n[s].split("="),
                  l = i.slice(1).join("=");
                a || '"' !== l.charAt(0) || (l = l.slice(1, -1));
                try {
                  var c = t(i[0]);
                  if (((l = (o.read || o)(l, c) || t(l)), a))
                    try {
                      l = JSON.parse(l);
                    } catch (u) {}
                  if (((r[c] = l), e === c)) break;
                } catch (u) {}
              }
              return e ? r[e] : r;
            }
          }
          return (
            (r.set = n),
            (r.get = function (e) {
              return s(e, !1);
            }),
            (r.getJSON = function (e) {
              return s(e, !0);
            }),
            (r.remove = function (t, a) {
              n(
                t,
                "",
                e(a, {
                  expires: -1,
                })
              );
            }),
            (r.defaults = {}),
            (r.withConverter = a),
            r
          );
        }
        return a(function () {});
      });
    },
    b596: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return s;
      });
      var o = a("a78e"),
        r = a.n(o);
      const n = window.sessionStorage,
        s = {
          data() {
            return {
              pageLoging: !1,
              login_nickName: "",
              login_headImg: "",
              mine: !1,
            };
          },
          methods: {
            testLogin(e) {
              let t = this,
                a = r.a.get("openid");
              -1 != location.host.indexOf("localhost") ||
                a ||
                ((t.pageLoging = !0),
                t.$message.success("正在登录..."),
                $.get(
                  t.path,
                  {
                    action: "testLogin",
                  },
                  function (a) {
                    "0" == a || 0 == a
                      ? (n.setItem("logingpage", t.pagePath),
                        setTimeout(() => {
                          location.href =
                            t.path +
                            "?action=login&from=" +
                            encodeURIComponent("/Game/app/");
                        }, 50))
                      : ((t.pageLoging = !1),
                        n.setItem("logined", "1"),
                        (t.login_nickName = a.nickname),
                        (t.login_headImg = a.headimgurl)),
                      e && e();
                  }
                ));
            },
          },
        };
    },
  },
]);
