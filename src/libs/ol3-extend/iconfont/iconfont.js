;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-shanchu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M640.512 216.44288l0-76.8-258.048 0 0 76.8-171.008 0 0 73.728 601.088 0 0-73.728L640.512 216.44288zM239.104 340.34688l44.032 536.576 457.728 0 44.032-536.576L239.104 340.34688zM426.496 774.52288l-70.656 0 0-342.016 70.656 0L426.496 774.52288zM546.304 774.52288l-69.632 0 0-342.016 69.632 0L546.304 774.52288zM670.208 774.52288l-72.704 0 0-342.016 72.704 0L670.208 774.52288z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-baocun" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M719.93 109.22 145.554 109.22c-13.499 0-24.442 10.944-24.442 24.442l0 733.245c0 13.498 10.943 24.112 24.442 24.112l733.245 0c13.498 0 24.112-10.614 24.112-24.112L902.911 292.532 719.93 109.22zM634.252 316.405c0 6.749-5.472 12.22-12.221 12.22L230.946 328.625c-6.75 0-12.221-5.472-12.221-12.22l0-97.351c0-6.75 5.472-12.221 12.221-12.221l391.085 0c6.749 0 12.221 5.472 12.221 12.221L634.252 316.405 634.252 316.405zM805.298 781.186c0 6.751-5.471 12.221-12.221 12.221L230.946 793.407c-6.75 0-12.221-5.47-12.221-12.221L218.725 500.251c0-6.749 5.472-12.22 12.221-12.22l562.131 0c6.75 0 12.221 5.472 12.221 12.22L805.298 781.186zM756.043 536.968c0-6.75-5.47-12.22-12.22-12.22l-73.171 0c-6.75 0-12.221 5.47-12.221 12.22l0 73.172c0 6.749 5.471 12.221 12.221 12.221l73.171 0c6.75 0 12.22-5.472 12.22-12.221L756.043 536.968 756.043 536.968z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-quxiao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M510.948041 64.303538c-247.25636 0-447.696462 200.440102-447.696462 447.696462s200.440102 447.696462 447.696462 447.696462 447.696462-200.440102 447.696462-447.696462S758.204401 64.303538 510.948041 64.303538zM673.876808 738.040153l-161.754011-156.582221-156.582221 161.754011-73.52455-71.174016 156.582221-161.754011-161.754011-156.582221 71.174016-73.52455 161.754011 156.582221 156.582221-161.754011 73.52455 71.174016-156.582221 161.754011 161.754011 156.582221L673.876808 738.040153z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-ceju" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M869.885993 287.634999 646.077671 63.892169 77.737502 632.298853l223.808322 223.74283L869.885993 287.634999zM617.217367 148.69867 757.097184 288.539602l-28.412097 28.418236L588.80527 177.12407 617.217367 148.69867zM531.968797 233.960543l83.928504 83.901899-28.418236 28.4254-83.928504-83.901899L531.968797 233.960543zM446.714088 319.222415l83.928504 83.901899-28.412097 28.4254-83.928504-83.901899L446.714088 319.222415zM361.465518 404.483264l83.928504 83.901899-28.418236 28.4254-83.928504-83.908038L361.465518 404.483264zM276.216949 489.745137l83.928504 83.901899-28.418236 28.4254-83.928504-83.901899L276.216949 489.745137zM190.968379 575.007009 330.84922 714.846918l-28.418236 28.418236L162.550143 603.425246 190.968379 575.007009zM110.744243 988.06558 869.885993 988.06558l0-66.01246L110.744243 922.05312 110.744243 988.06558z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-cemian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M958.959681 857.894891l-82.0886-267.288602c-7.797593-25.393343-30.140461-41.929971-56.659441-41.929971L699.680497 548.676317l0 29.698392 69.355601 0c23.274076 0 42.884716 13.992689 49.727565 35.482119l42.401716 196.466604c10.29446 32.31908-14.722306 65.039295-49.733705 65.039295L205.136054 875.362728c-35.010375 0-60.028165-32.720216-49.733705-65.039295l42.401716-196.466604c0.083911-0.26299 0.185218-0.514723 0.272199-0.775666l199.574385 195.799408L908.372539 307.60482 707.253986 110.284779 199.992917 608.16827c0.014326-0.031722 0.025583-0.064468 0.039909-0.095167l-0.927115 0 0-59.397808-2.744507 0c-26.524097 0-48.867988 16.536628-56.664557 41.929971L57.609069 857.894891c-5.730515 18.656919-2.603291 37.053917 8.975419 52.754504s28.208459 24.110117 47.690162 24.110117l788.021497 0c19.48682 0 36.117592-8.40953 47.690162-24.110117C961.562972 894.948809 964.690196 876.55181 958.959681 857.894891zM681.31829 185.076182l125.702933 123.323746-25.535583 25.063839-125.702933-123.323746L681.31829 185.076182zM604.712565 260.268722l75.42176 73.996295-25.535583 25.063839-75.42176-73.996295L604.712565 260.268722zM528.10684 335.460238l75.41562 73.996295-25.535583 25.063839-75.42176-73.996295L528.10684 335.460238zM451.495998 410.652777l75.42176 73.991178-25.535583 25.063839-75.42176-73.991178L451.495998 410.652777zM374.890272 485.844294l75.41562 73.996295-25.535583 25.057699-75.42176-73.991178L374.890272 485.844294zM298.278407 561.036833l125.702933 123.323746-25.535583 25.063839-125.702933-123.323746L298.278407 561.036833z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wenzibiaozhu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M849.933 351.337h-28.064c-15.511 0-28.062-12.607-28.062-28.063l-56.126-84.191h-168.382v561.273l140.319 56.128c15.511 0 28.063 12.496 28.063 28.063v0c0 15.458-12.551 28.064-28.063 28.064h-392.891c-15.511 0-28.063-12.607-28.063-28.064v0c0-15.566 12.551-28.063 28.063-28.063l140.319-56.128v-561.271h-168.382l-56.127 84.191c0 15.458-12.551 28.063-28.063 28.063h-28.063c-15.513 0-28.064-12.607-28.064-28.063v-168.382c0-15.513 12.551-28.064 28.064-28.064h673.525c15.511 0 28.063 12.551 28.063 28.064v168.381c0.001 15.457-12.551 28.063-28.062 28.063z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-ditudianxuan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M328.466963 472.804303c5.572926 8.353248 28.782533 43.635823 145.766898 210.746842l0.934279 0.927115c6.495948 8.353248 17.640776 13.926174 27.855418 13.926174 11.137665 0 22.283516-5.572926 27.852348-14.853289 50.138934-72.418356 144.846946-208.893634 148.558477-213.531258l0.930185-0.930185c19.495006-32.494065 30.639834-70.560032 30.639834-108.62293 0-114.192785-92.846618-207.962425-207.980845-207.962425s-207.983915 92.839455-207.983915 207.962425C295.039643 400.385946 306.180378 438.452937 328.466963 472.804303L328.466963 472.804303zM502.093373 205.422579c85.424578 0 155.057495 69.63394 155.057495 155.043169 0 27.855418-7.430226 54.776557-22.283516 80.771605-5.572926 8.357342-81.705883 117.907387-131.843794 190.32165-39.000246-55.703673-123.490545-177.322591-131.847887-188.464349-15.783475-24.140817-25.067932-52.919257-25.067932-81.70179C347.035878 275.983635 416.675958 205.422579 502.093373 205.422579zM502.093373 476.515834c63.137992 0 115.133204-51.989071 115.133204-115.122971 0-63.130829-51.996235-115.118877-115.133204-115.118877s-115.133204 51.989071-115.133204 115.118877C386.959146 424.526763 438.028265 476.515834 502.093373 476.515834zM502.093373 298.263058c34.355459 0 62.206784 27.852348 62.206784 62.203714 0 35.278481-27.852348 62.203714-62.206784 62.203714s-62.206784-27.852348-62.206784-62.203714S467.737914 298.263058 502.093373 298.263058zM943.129134 746.681974 819.278385 477.121632l-92.573395 0.934279-61.196781 72.731488 117.705795-1.532913 99.8051 204.222241 1.864464 1.972934c6.535857 8.861832 6.535857 20.682042 1.871627 30.528294-4.670369 9.846252-13.997805 15.757892-25.196869 15.757892L163.840532 801.735847c-11.1919 0-20.526499-5.91164-25.193799-15.757892-4.663206-10.831696-3.733021-21.666462 2.802836-31.512714l0.930185-0.988514 100.522438-203.616444 95.77532 0-25.998117-72.738651L206.116381 477.121632 81.341586 746.681974c-17.637706 25.063839-19.495006 56.630788-5.568832 82.624812 14.856359 27.852348 41.781592 44.566008 73.352635 44.566008l729.932498 0c30.643927 0 58.499345-16.71366 72.425519-44.566008C963.558419 802.385647 960.76684 770.818697 943.129134 746.681974z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-huizhijuxing" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M915.59555 761.96096l0-504.17069c29.34944-9.8616 50.55746-37.61059 50.55746-70.23973 0-40.8555-33.23801-74.09453-74.09351-74.09453-32.62914 0-60.37813 21.20904-70.23973 50.55848l-619.28854 0c-9.8616-29.34944-37.6106-50.55848-70.23974-50.55848-40.855499 0-74.093508 33.238-74.093508 74.09453 0 32.62914 21.209044 60.37813 50.557468 70.23973l0 504.17069c-29.348424 9.8616-50.557468 37.61162-50.557468 70.23973 0 40.85653 33.238009 74.09454 74.093508 74.09454 32.62812 0 60.37814-21.20905 70.23872-50.55747l619.29058 0c9.8616 29.34945 37.61162 50.55747 70.23974 50.55747 40.8555 0 74.09351-33.23801 74.09351-74.09453-0.001-32.62812-21.20905-60.37916-50.55849-70.23974zm-93.77476 46.70369l-619.28956 0c-7.37395-21.94889-24.75378-39.32975-46.7037-46.70471l0-504.16967c21.9489-7.37496 39.32873-24.7548 46.7037-46.70369l619.28956 0c7.37497 21.94889 24.7548 39.32873 46.7037 46.70369l0 504.17069c-21.94992 7.37497-39.32976 24.7548-46.7037 46.70369z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-huizhiyuanxing" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 106.88C288.328858 106.88 107.04 288.328878 107.04 512 107.04 735.671194 288.328858 917.12 512 917.12 708.889446 917.12 872.977306 776.602214 909.44 590.4 944.807629 578.334618 970.24 544.892416 970.24 505.44 970.24 464.784701 943.295181 430.430787 906.24 419.36 864.319539 240.352517 703.764224 106.88 512 106.88zM512 168.8C681.533901 168.8 809.276672 270.416609 844.96 422.88 812.968858 436.623923 790.56 468.413824 790.56 505.44 790.56 543.428557 814.194842 575.990426 847.52 589.12 815.908864 748.27945 685.995162 855.2 512 855.2 311.204301 855.2 168.8 712.79575 168.8 512 168.8 311.204326 311.204296 168.8 512 168.8zM446.4 447.2 446.4 576 575.2 576 575.2 447.2 446.4 447.2z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-huizhiduobianxing" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M915.41954 712.88535l0-299.37069c29.34944-9.8616 50.55746-37.61059 50.55746-70.23973 0-40.8555-33.23801-74.09453-74.09351-74.09453-32.62914 0-60.37813 21.20904-70.23973 50.55848l-619.28854-204.8c-9.8616-29.349435-37.6106-50.558475-70.23974-50.558475-40.855501 0-74.09351 33.238-74.09351 74.094525 0 32.62914 21.209044 60.37813 50.55747 70.23973l102.4 606.57069c-29.34842 9.8616-50.55747 37.61162-50.55747 70.23973 0 40.85653 33.23801 74.09451 74.09351 74.09451 32.62812 0 60.37814-21.20902 70.23872-50.55744l516.89058-102.4c9.8616 29.34946 37.61162 50.55747 70.23974 50.55747 40.8555 0 74.09351-33.23801 74.09351-74.09453-0.001-32.62811-21.20905-60.37915-50.55849-70.23974zm-93.77476 46.7037l-516.88956 102.4c-7.37395-21.94889-24.75378-39.32975-46.7037-46.70471l-102.4-606.56967c21.9489-7.37496 39.32873-24.7548 46.7037-46.70369l619.28956 204.8c7.37497 21.94889 24.7548 39.32873 46.7037 46.70369l0 299.37069c-21.94992 7.37497-39.32976 24.7548-46.7037 46.70369z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wodexianlu" viewBox="0 0 1202 1024">' +
    '' +
    '<path d="M958.901353 157.931962c0-51.534723-41.398876-93.310176-92.466972-93.310176-51.067073 0-92.464925 41.775452-92.464924 93.310176 0 28.551266 12.712533 54.103222 32.730448 71.219042a79.576383 79.576383 0 0 0 6.191003 6.422269l-147.262972 352.958774a90.675162 90.675162 0 0 0-4.771677 0.961908c-0.054235-0.001023-0.106424-0.008186-0.159635-0.008186-16.496719 0-31.68463 5.436826-44.171012 14.463409l-128.072911-90.478687c5.214768-11.682064 8.117888-24.641213 8.117888-38.285978 0-51.532677-41.397852-93.309152-92.465948-93.309152s-92.465948 41.776476-92.465948 93.309152c0 28.240181 12.432147 53.549613 32.074509 70.660316l-127.186727 224.635154c-4.423753-0.788969-8.900717-1.3743-13.535271-1.374301-17.448394 0-33.537837 5.957689-46.40489 15.944134-28.813233 15.803941-48.372707 46.615691-48.372707 82.037435 0 51.532677 41.397852 93.310176 92.465948 93.310176 51.067073 0 92.465948-41.776476 92.465948-93.310176 0-28.453029-12.623505-53.925167-32.521694-71.040986l129.451304-228.618885a92.312452 92.312452 0 0 0 14.028505 1.067309c18.995633 0 36.650735-5.782703 51.337225-15.695471l132.039245 93.27743c-1.798972 6.53688-3.063779 13.280468-3.063778 20.399609a77.158311 77.158311 0 0 0 5.945409 29.78435c7.437389 44.011376 45.408189 77.516468 91.140766 77.516468 51.067073 0 92.464925-41.777499 92.464925-93.311199 0-38.378076-22.962991-71.339792-55.779397-85.670171l141.590785-339.338569c1.461281 0.091074 2.848884 0.442068 4.338818 0.442068 17.430998 0 33.505092-5.942339 46.366004-15.908318 28.838815-15.796778 48.417733-46.620807 48.417733-82.058924z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-exportimagedaochutupian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M378.110105 475.80873m-55.697533 0a55.697533 55.697533 0 1 0 111.395066 0 55.697533 55.697533 0 1 0-111.395066 0Z" fill="" ></path>' +
    '' +
    '<path d="M278.305005 840.640925V376.00363h630.966509v187.14326c25.393343 10.914584 48.535413 26.060539 68.546166 44.549636v-265.967514c0-18.928095-15.3455-34.273595-34.273595-34.273595h-111.110587L748.094648 75.737962c-6.473435-17.787108-26.140357-26.959002-43.930535-20.485567l-657.325853 239.248989c-17.787108 6.474458-26.959002 26.14138-20.485567 43.929512l182.360328 501.029134c0.316202 0.868787 0.667196 1.713015 1.044795 2.537799v32.915668c0 18.929118 15.343453 34.274618 34.274618 34.274617H606.803691a239.996003 239.996003 0 0 1-27.864628-68.547189H278.305005z m-68.548212-498.91089v300.178687L102.488721 347.192444l592.914867-215.804021 64.083528 176.068018H244.032434c-18.931165 0-34.275641 15.3455-34.275641 34.273594z" fill="" ></path>' +
    '' +
    '<path d="M813.992497 599.364767c-102.576213 0-185.730075 83.153862-185.730075 185.728028 0 102.576213 83.153862 185.730075 185.730075 185.730075 102.57519 0 185.729052-83.153862 185.729052-185.730075 0-102.574167-83.153862-185.728028-185.729052-185.728028z m108.710934 196.179054l-90.564645 91.613534v-0.083911a12.914124 12.914124 0 0 1-9.127891 3.76372c-7.154957 0-12.955056-5.798053-12.955057-12.953009v-37.290302h-93.78192c-1.017166 0.257873-2.082428 0.393973-3.179412 0.393973-7.154957 0-12.955056-5.8001-12.955057-12.95301v-85.248569c0-7.154957 5.8001-12.954033 12.955057-12.954033h96.962355v-37.527708c0-7.15291 5.8001-12.95301 12.955057-12.95301 3.889587 0 7.377014 1.717108 9.751085 4.432962l90.49506 91.541903a12.924357 12.924357 0 0 1 4.586458 9.887184c0 4.218068-2.016937 7.965415-5.14109 10.330276z" fill="" ></path>' +
    '' +
    '<path d="M794.003234 544.438806l-40.959877-40.958853-180.935886 180.397626-112.655779-68.213591-137.668453 112.587218v68.280106h251.000638c-0.177032-3.791349-0.277316-7.603165-0.277316-11.438517 0.001023-126.635165 97.480148-230.490511 221.496673-240.653989z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xuanze-yuandian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.11 156.07A356.08 356.08 0 1 1 372 184.12a355.16 355.16 0 0 1 139.12-28.06m0-90C264 66.07 63.63 266.41 63.63 513.55S264 961 511.11 961s447.48-200.32 447.48-447.45S758.25 66.07 511.11 66.07z"  ></path>' +
    '' +
    '<path d="M511.11 513.55m-191.35 0a191.35 191.35 0 1 0 382.7 0 191.35 191.35 0 1 0-382.7 0Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)